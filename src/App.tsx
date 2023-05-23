import { useEffect, useState } from 'react';
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
          (eq % MONTHS.length === data.eq % MONTHS.length
            ? (data.dividends / 100) * dividendsYield
            : 0)
        );
      }, 0);

      capital =
        (inflation / MONTHS.length / 100) * capital + capital + deposit + dividend + prevDividends;

      const data: IData = {
        eq: eq,
        date: `${MONTHS[monthEq]} ${realYear}`,
        invested: deposit * eq,
        taken: REAL_RESULTS[eq]?.taken || null,
        realInvested: REAL_RESULTS[eq]?.invested || null,
        dividends: dividend,
        prevDividends: prevDividends,
        capital: capital,
        realCapital: REAL_RESULTS[eq]?.capital || null,
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
            <th>Обязательные вложения</th>
            <th>Фактически вложено</th>
            <th>Снято со счёта</th>
            <th>Прогнозируемый портфель</th>
            <th>Фактический портфель</th>
            <th>По плану?</th>
            <th>Следующее пополнение</th>
          </tr>
        </thead>
        <tbody>
          {dataArray.map(({ eq, date, invested, realInvested, capital, realCapital, taken }) => {
            const capitalDifference = realCapital && realCapital - capital;
            const isAllRight = capitalDifference && capitalDifference >= 0;
            const invest = isAllRight ? deposit : deposit * 2;
            const className = realCapital ? (isAllRight ? 'success' : 'noSuccess') : undefined;
            return (
              <tr key={eq}>
                <td>{eq}</td>
                <td>{date}</td>
                <td>{invested.toLocaleString('ru-RU')} ₽</td>
                <td>{realInvested ? `${realInvested.toLocaleString('ru-RU')} ₽` : '-'}</td>
                <td>{taken ? `${taken.toLocaleString('ru-RU')} ₽` : '-'}</td>
                <td>{Math.round(capital).toLocaleString('ru-RU')} ₽</td>
                <td>{realCapital ? `${realCapital.toLocaleString('ru-RU')} ₽` : '-'}</td>
                <td className={['td-center', className].join(' ')}>{!isAllRight && '-'}</td>
                <td>{realCapital ? `${invest.toLocaleString('ru-RU')} ₽` : '-'}</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={10}>
              <span>Прогноз - </span>
              <span>размер портфеля: {Math.round(totalCapital).toLocaleString('ru-RU')} ₽</span>
              <span> | </span>
              <span>пассивный доход: </span>
              <span>{Math.round(passiveIncome).toLocaleString('ru-RU')} ₽ в год</span>
              <span> / </span>
              <span>{Math.round(passiveIncomeInMonth).toLocaleString('ru-RU')} ₽ в месяц</span>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};
