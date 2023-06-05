import { useEffect, useState, Fragment } from 'react';
import { useStore } from 'hooks';

import { MONTHS, REAL_RESULTS } from './constants';
import { IData } from './interfaces';

export const App = () => {
  const [dataArray, setDataArray] = useState<IData[]>([]);
  const { period, deposit, startYear, dividendsYield, inflation } = useStore();

  useEffect(() => {
    const newDataArray: IData[] = [];
    let realYear = startYear;
    let yearEq = startYear;
    let capital = 0;

    for (let i = 0; i < period * MONTHS.length; i++) {
      const monthEq = i % MONTHS.length;
      const eq = i + 1;

      if (monthEq === 8 && i !== 0) {
        realYear += 1;
      }

      if (monthEq === 0 && i !== 0) {
        yearEq += 1;
      }

      const dividend = (deposit / 100) * dividendsYield * (yearEq - startYear);
      const prevDividends = newDataArray.reduce((accum, data) => {
        return (
          accum +
          (eq % MONTHS.length === data.eq % MONTHS.length ? (data.dividends / 100) * dividendsYield : 0)
        );
      }, 0);

      const capitalGrowth = (inflation / MONTHS.length / 100) * (capital + deposit);
      capital = Math.round((capitalGrowth + capital + deposit + dividend + prevDividends) / 1000) * 1000;

      const realResult = REAL_RESULTS[eq];

      const totalInvested =
        realResult &&
        realResult.invested + newDataArray.reduce((accum, { invested }) => accum + Number(invested), 0);

      const income = totalInvested && realResult.capital - totalInvested;
      const incomeInPercent = income && Math.round((income / (totalInvested * 0.01)) * 100) / 100;
      const annualYield = incomeInPercent && Math.round((incomeInPercent / eq) * MONTHS.length * 100) / 100;

      const incomeLastMonth =
        realResult && realResult.capital - (REAL_RESULTS[eq - 1]?.capital || 0) - realResult.invested;
      const incomeLastMonthInPercent =
        incomeLastMonth && Math.round((incomeLastMonth / (realResult.invested * 0.01)) * 100) / 100;

      const hasPassedYear =
        (Number(newDataArray.length >= MONTHS.length - 1) || undefined) && incomeLastMonth;
      const incomeLastYear =
        hasPassedYear &&
        newDataArray
          .slice(MONTHS.length - 1)
          .reduce((accum, data) => accum + Number(data.incomeLastMonth), 0) + incomeLastMonth;
      const incomeLastYearInPercent =
        incomeLastYear && Math.round((incomeLastYear / (realResult.invested * 0.01)) * 100) / 100;

      const data: IData = {
        eq: eq,
        month: MONTHS[monthEq],
        year: realYear,
        invested: validate(realResult?.invested),
        totalInvested: validate(totalInvested),
        dividends: dividend,
        prevDividends: prevDividends,
        capital: capital,
        realCapital: validate(realResult?.capital),
        income: validate(income),
        incomeInPercent: validate(incomeInPercent),
        annualYield: validate(annualYield),
        incomeLastMonth: validate(incomeLastMonth),
        incomeLastMonthInPercent: validate(incomeLastMonthInPercent),
        incomeLastYear: income === incomeLastYear ? null : validate(incomeLastYear),
        incomeLastYearInPercent: income === incomeLastYear ? null : validate(incomeLastYearInPercent),
      };
      newDataArray.push(data);
    }

    setDataArray(newDataArray);
  }, [deposit, dividendsYield, inflation, period, startYear]);

  if (!dataArray.length) {
    return null;
  }

  const totalCapital = Math.round(dataArray[dataArray.length - 1].capital);
  const passiveIncome = Math.round((totalCapital / 100) * 10);
  const passiveIncomeInMonth = Math.round(passiveIncome / 12);

  return (
    <div className="app">
      <h1 className="title">Инвест план</h1>
      <table className="table pure-table">
        <caption>
          <span>Базовое пополнение </span>
          <a
            className="link"
            href="https://snowball-income.com/public/portfolios/UnvtRAvPaD"
            rel="noreferrer"
            target="_blank">
            портфеля
          </a>
          <span> - 125 000 ₽ в месяц</span>
        </caption>
        <thead>
          <tr>
            <th>#</th>
            <th>Месяц и год</th>
            <th>Пополнение</th>
            <th>Вложено</th>
            <th>Прибыль за месяц</th>
            <th>Прибыль за 12 месяцев</th>
            <th>Суммарная прибыль</th>
            <th>Годовых (%)</th>
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
              annualYield,
              incomeLastMonth,
              incomeLastMonthInPercent,
              incomeLastYear,
              incomeLastYearInPercent,
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
                    {isNumber(incomeLastYear) ? (
                      <Fragment>{incomeLastYear?.toLocaleString('ru-RU')}&nbsp;₽</Fragment>
                    ) : (
                      '-'
                    )}
                    {isNumber(incomeLastYearInPercent) && (
                      <span
                        className={Number(incomeLastYearInPercent) > 0 ? 'positive-text' : 'negative-text'}>
                        {Number(incomeLastYearInPercent) > 0 ? '▴' : '▾'}
                        {Number(incomeLastYearInPercent) < 0
                          ? Number(incomeLastYearInPercent) * -1
                          : incomeLastYearInPercent}
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
                  <td>{isNumber(annualYield) ? <Fragment>{annualYield}%</Fragment> : '-'}</td>
                  <td>
                    {isNumber(realCapital) ? (
                      <Fragment>{realCapital?.toLocaleString('ru-RU')}&nbsp;₽</Fragment>
                    ) : (
                      '-'
                    )}
                  </td>
                  <td>{capital.toLocaleString('ru-RU')}&nbsp;₽</td>
                  <td className={['td-center', className].join(' ')}>{!isAllRight && '-'}</td>
                </tr>
              );
            },
          )}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={12}>
              <span>Прогноз - </span>
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

function validate(value: number | undefined) {
  return typeof value === 'number' ? value : null;
}
