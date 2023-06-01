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
      capital = capitalGrowth + capital + deposit + dividend + prevDividends;

      const data: IData = {
        eq: eq,
        month: MONTHS[monthEq],
        year: realYear,
        realInvested: REAL_RESULTS[eq]?.invested || null,
        dividends: dividend,
        prevDividends: prevDividends,
        capital: capital,
        realCapital: REAL_RESULTS[eq]?.capital || null,
        lastYearsCapital: newDataArray[eq - MONTHS.length]?.realCapital || null,
        lastMonthCapital: newDataArray[eq - 1]?.realCapital || null,
      };
      newDataArray.push(data);
    }

    setDataArray(newDataArray);
  }, [deposit, dividendsYield, inflation, period, startYear]);

  if (!dataArray.length) {
    return null;
  }

  const totalCapital = dataArray[dataArray.length - 1].capital;
  const passiveIncome = (totalCapital / 100) * 12;
  const passiveIncomeInMonth = passiveIncome / 12;

  return (
    <div className="app">
      <h1 className="title">Инвест план</h1>
      <table className="table pure-table">
        <caption>
          <span>На пенсию в 45 лет!</span>
          <a
            className="link"
            href="https://snowball-income.com/public/portfolios/UnvtRAvPaD"
            rel="noreferrer"
            target="_blank">
            (портфель)
          </a>
        </caption>
        <thead>
          <tr>
            <th>#</th>
            <th>Месяц и год</th>
            <th>Вложено</th>
            <th>Прибыль за месяц</th>
            <th>Прибыль за 12 месяцев</th>
            <th>Суммарная прибыль</th>
            <th>Годовых (%)</th>
            <th>Фактический портфель</th>
            <th>Ожидаемый портфель</th>
            <th>По плану?</th>
            <th>След. пополнение</th>
          </tr>
        </thead>
        <tbody>
          {dataArray.map(
            ({ eq, month, year, realInvested, capital, realCapital, lastMonthCapital, lastYearsCapital }) => {
              const capitalDifference = realCapital && realCapital - capital;
              const isAllRight = capitalDifference && capitalDifference >= 0;
              const correction = Math.max(deposit * eq - Number(realInvested), -deposit);
              const invest = isAllRight
                ? deposit + correction
                : Math.min(deposit * 2, deposit * 2 + correction);
              const className = realCapital ? (isAllRight ? 'positive' : 'negative') : undefined;

              const income = realInvested && realCapital && realCapital - realInvested;
              const incomeInPercent =
                realInvested && income && Math.round((income / (realInvested * 0.01)) * 100) / 100;
              const annualYield =
                incomeInPercent && Math.round((incomeInPercent / eq) * MONTHS.length * 100) / 100;

              const incomeLastMonth = lastMonthCapital && realCapital && realCapital - lastMonthCapital;
              const incomeInPercentLastMonth =
                lastMonthCapital &&
                incomeLastMonth &&
                Math.round((incomeLastMonth / (lastMonthCapital * 0.01)) * 100) / 100;

              const incomeTTM = lastYearsCapital && realCapital && realCapital - lastYearsCapital;
              const incomeInPercentTTM =
                lastYearsCapital &&
                incomeTTM &&
                Math.round((incomeTTM / (lastYearsCapital * 0.01)) * 100) / 100;

              return (
                <tr key={eq}>
                  <td>{eq}</td>
                  <td>
                    {month}&nbsp;{year}
                  </td>
                  <td>
                    {validate(realInvested) ? (
                      <Fragment>{realInvested?.toLocaleString('ru-RU')}&nbsp;₽</Fragment>
                    ) : (
                      '-'
                    )}
                  </td>
                  <td>
                    {incomeLastMonth ? (
                      validate(incomeLastMonth) ? (
                        <Fragment>{incomeLastMonth}&nbsp;₽</Fragment>
                      ) : (
                        '-'
                      )
                    ) : validate(income) ? (
                      <Fragment>{income?.toLocaleString('ru-RU')}&nbsp;₽</Fragment>
                    ) : (
                      '-'
                    )}
                    {incomeInPercentLastMonth ? (
                      <span
                        className={Number(incomeInPercentLastMonth) > 0 ? 'positive-text' : 'negative-text'}>
                        {Number(incomeInPercentLastMonth) > 0 ? '▴' : '▾'}
                        {Number(incomeInPercentLastMonth) < 0
                          ? Number(incomeInPercentLastMonth) * -1
                          : incomeInPercentLastMonth}
                        %
                      </span>
                    ) : (
                      validate(incomeInPercent) && (
                        <span className={Number(incomeInPercent) > 0 ? 'positive-text' : 'negative-text'}>
                          {Number(incomeInPercent) > 0 ? '▴' : '▾'}
                          {Number(incomeInPercent) < 0 ? Number(incomeInPercent) * -1 : incomeInPercent}%
                        </span>
                      )
                    )}
                  </td>
                  <td>
                    {incomeTTM ? (
                      validate(incomeTTM) ? (
                        <Fragment>{incomeTTM}&nbsp;₽</Fragment>
                      ) : (
                        '-'
                      )
                    ) : validate(income) ? (
                      <Fragment>{income?.toLocaleString('ru-RU')}&nbsp;₽</Fragment>
                    ) : (
                      '-'
                    )}
                    {incomeInPercentTTM ? (
                      <span className={Number(incomeInPercentTTM) > 0 ? 'positive-text' : 'negative-text'}>
                        {Number(incomeInPercentTTM) > 0 ? '▴' : '▾'}
                        {Number(incomeInPercentTTM) < 0
                          ? Number(incomeInPercentTTM) * -1
                          : incomeInPercentTTM}
                        %
                      </span>
                    ) : (
                      validate(incomeInPercent) && (
                        <span className={Number(incomeInPercent) > 0 ? 'positive-text' : 'negative-text'}>
                          {Number(incomeInPercent) > 0 ? '▴' : '▾'}
                          {Number(incomeInPercent) < 0 ? Number(incomeInPercent) * -1 : incomeInPercent}%
                        </span>
                      )
                    )}
                  </td>
                  <td>
                    {validate(income) ? <Fragment>{income?.toLocaleString('ru-RU')}&nbsp;₽</Fragment> : '-'}
                    {validate(incomeInPercent) && (
                      <span className={Number(incomeInPercent) > 0 ? 'positive-text' : 'negative-text'}>
                        {Number(incomeInPercent) > 0 ? '▴' : '▾'}
                        {Number(incomeInPercent) < 0 ? Number(incomeInPercent) * -1 : incomeInPercent}%
                      </span>
                    )}
                  </td>
                  <td>{validate(annualYield) ? <Fragment>{annualYield}%</Fragment> : '-'}</td>
                  <td>
                    {validate(realCapital) ? (
                      <Fragment>{realCapital?.toLocaleString('ru-RU')}&nbsp;₽</Fragment>
                    ) : (
                      '-'
                    )}
                  </td>
                  <td>{(Math.round(capital / 1000) * 1000).toLocaleString('ru-RU')}&nbsp;₽</td>
                  <td className={['td-center', className].join(' ')}>{!isAllRight && '-'}</td>
                  <td>
                    {validate(realCapital) ? (
                      <Fragment>{invest.toLocaleString('ru-RU')}&nbsp;₽</Fragment>
                    ) : (
                      '-'
                    )}
                  </td>
                </tr>
              );
            },
          )}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={12}>
              <span>Прогноз - </span>
              <span>размер портфеля: {Math.round(totalCapital).toLocaleString('ru-RU')}&nbsp;₽</span>
              <span> | </span>
              <span>пассивный доход: </span>
              <span>{Math.round(passiveIncome).toLocaleString('ru-RU')}&nbsp;₽ в год</span>
              <span> / </span>
              <span>{Math.round(passiveIncomeInMonth).toLocaleString('ru-RU')}&nbsp;₽ в месяц</span>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

function validate(value: number | null) {
  return typeof value === 'number';
}
