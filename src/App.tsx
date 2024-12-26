import { useEffect, useState, Fragment } from 'react';

import { DEPOSIT, DIVIDENDS_YIELD, INFLATION, MONTHS, PERIOD, REAL_RESULTS, START_YEAR } from './constants';
import { IData } from './interfaces';
import { useGetStocksQuery, CACHE_TIME, useGetDebtQuery } from 'store';

export const App = () => {
  const [dataArray, setDataArray] = useState<IData[]>([]);
  const { data: currentCapital, refetch: refetchCurrentCapital } = useGetStocksQuery();
  const { data: debt, refetch: refetchDebt } = useGetDebtQuery();

  useEffect(() => {
    const intervalId = setInterval(() => {
      refetchCurrentCapital();
      refetchDebt();
    }, CACHE_TIME * 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [refetchCurrentCapital, refetchDebt]);

  useEffect(() => {
    if (!debt) return;
    console.log(debt.toLocaleString('ru-RU') + ' ₽');
  }, [debt]);

  useEffect(() => {
    const newDataArray: IData[] = [];
    let realYear = START_YEAR;
    let yearEq = START_YEAR;
    let capital = 0;

    for (let i = 0; i < PERIOD * MONTHS.length; i++) {
      const monthEq = i % MONTHS.length;
      const eq = i + 1;

      if (monthEq === 8 && i !== 0) {
        realYear += 1;
      }

      if (monthEq === 0 && i !== 0) {
        yearEq += 1;
      }

      const dividend = (DEPOSIT / 100) * DIVIDENDS_YIELD * (yearEq - START_YEAR);
      const prevDividends = newDataArray.reduce((accum, data) => {
        return (
          accum +
          (eq % MONTHS.length === data.eq % MONTHS.length ? (data.dividends / 100) * DIVIDENDS_YIELD : 0)
        );
      }, 0);

      const capitalGrowth = (INFLATION / MONTHS.length / 100) * (capital + DEPOSIT);
      capital = Math.round((capitalGrowth + capital + DEPOSIT + dividend + prevDividends) / 1000) * 1000;

      const realInvested = REAL_RESULTS[eq]?.invested;
      const realCapital =
        REAL_RESULTS[eq]?.capitalOnLastDay === 0 ? currentCapital : REAL_RESULTS[eq]?.capitalOnLastDay;

      const totalInvested =
        typeof realInvested === 'number' &&
        realInvested + newDataArray.reduce((accum, { invested }) => accum + Number(invested), 0);

      const income = realCapital && totalInvested && realCapital - totalInvested;
      const incomeInPercent = income && Math.round((income / (totalInvested * 0.01)) * 100) / 100;

      const incomeLastMonth =
        typeof realCapital === 'number' &&
        typeof realInvested === 'number' &&
        realCapital - (REAL_RESULTS[eq - 1]?.capitalOnLastDay || 0) - realInvested;
      const incomeLastMonthInPercent =
        incomeLastMonth &&
        Math.round(
          (incomeLastMonth / (((REAL_RESULTS[eq - 1]?.capitalOnLastDay || 0) + realInvested) * 0.01)) * 100,
        ) / 100;

      const data: IData = {
        eq: eq,
        month: MONTHS[monthEq],
        year: realYear,
        invested: validate(realInvested),
        totalInvested: validate(totalInvested),
        dividends: dividend,
        prevDividends: prevDividends,
        capital: capital,
        realCapital: validate(realCapital),
        income: validate(income),
        incomeInPercent: validate(incomeInPercent),
        incomeLastMonth: validate(incomeLastMonth),
        incomeLastMonthInPercent: validate(incomeLastMonthInPercent),
      };
      newDataArray.push(data);
    }

    setDataArray(newDataArray);
  }, [currentCapital]);

  if (!dataArray.length || !currentCapital) {
    return null;
  }

  const totalCapital = Math.round(dataArray[dataArray.length - 1].capital);
  const passiveIncome = Math.round((totalCapital / 100) * 10);
  const passiveIncomeInMonth = Math.round(passiveIncome / 12);

  return (
    <div className="app">
      <h1 className="title">Инвест план</h1>
      <table className="table pure-table">
        <caption>Минимальное пополнение портфеля - 125 000 ₽ в месяц</caption>
        <thead>
          <tr>
            <th>#</th>
            <th>Месяц и год</th>
            <th>Пополнение</th>
            <th>Вложено</th>
            <th>Прибыль за месяц</th>
            <th>Суммарная прибыль</th>
            <th>Фактический портфель</th>
            <th>Ожидаемый портфель</th>
            <th>По плану?</th>
          </tr>
        </thead>
        <tbody>
          {dataArray.map(
            ({
              eq,
              month,
              year,
              invested,
              totalInvested,
              capital,
              realCapital,
              income,
              incomeInPercent,
              incomeLastMonth,
              incomeLastMonthInPercent,
            }) => {
              const capitalDifference = realCapital && realCapital - capital;
              const isAllRight = capitalDifference && capitalDifference >= 0;
              const className = realCapital ? (isAllRight ? 'positive' : 'negative') : undefined;

              return (
                <tr key={eq}>
                  <td>{eq}</td>
                  <td>
                    {month}&nbsp;{year}
                  </td>
                  <td>
                    {isNumber(invested) ? (
                      <Fragment>{invested?.toLocaleString('ru-RU')}&nbsp;₽</Fragment>
                    ) : (
                      '-'
                    )}
                  </td>
                  <td>
                    {isNumber(totalInvested) ? (
                      <Fragment>{totalInvested?.toLocaleString('ru-RU')}&nbsp;₽</Fragment>
                    ) : (
                      '-'
                    )}
                  </td>
                  <td>
                    {isNumber(incomeLastMonth) ? (
                      <Fragment>{incomeLastMonth?.toLocaleString('ru-RU')}&nbsp;₽</Fragment>
                    ) : (
                      '-'
                    )}
                    {isNumber(incomeLastMonthInPercent) && (
                      <span
                        className={Number(incomeLastMonthInPercent) > 0 ? 'positive-text' : 'negative-text'}>
                        {Number(incomeLastMonthInPercent) > 0 ? '▴' : '▾'}
                        {Number(incomeLastMonthInPercent) < 0
                          ? Number(incomeLastMonthInPercent) * -1
                          : incomeLastMonthInPercent}
                        %
                      </span>
                    )}
                  </td>
                  <td>
                    {isNumber(income) ? <Fragment>{income?.toLocaleString('ru-RU')}&nbsp;₽</Fragment> : '-'}
                    {isNumber(incomeInPercent) && (
                      <span className={Number(incomeInPercent) > 0 ? 'positive-text' : 'negative-text'}>
                        {Number(incomeInPercent) > 0 ? '▴' : '▾'}
                        {Number(incomeInPercent) < 0 ? Number(incomeInPercent) * -1 : incomeInPercent}%
                      </span>
                    )}
                  </td>
                  <td>
                    {isNumber(realCapital) ? (
                      <Fragment>{realCapital?.toLocaleString('ru-RU')}&nbsp;₽</Fragment>
                    ) : (
                      '-'
                    )}
                  </td>
                  <td>{capital.toLocaleString('ru-RU')}&nbsp;₽</td>
                  <td className={['td-center', className].join(' ')}>
                    {typeof isAllRight !== 'boolean' && '-'}
                  </td>
                </tr>
              );
            },
          )}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={12}>
              <span>Цель - </span>
              <span>размер портфеля: {totalCapital.toLocaleString('ru-RU')}&nbsp;₽</span>
              <span> | </span>
              <span>пассивный доход: </span>
              <span>{passiveIncome.toLocaleString('ru-RU')}&nbsp;₽ в год</span>
              <span> / </span>
              <span>{passiveIncomeInMonth.toLocaleString('ru-RU')}&nbsp;₽ в месяц</span>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

function isNumber(value: number | null) {
  return typeof value === 'number';
}

function validate(value: number | undefined | false) {
  return typeof value === 'number' ? value : null;
}
