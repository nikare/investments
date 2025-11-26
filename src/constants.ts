export const IS_DEV = process.env.NODE_ENV === 'development';

export const START_YEAR = 2023;
export const DEPOSIT = 125000;
export const PERIOD = 10;
export const DIVIDENDS_YIELD = 25;
export const INFLATION = 19.765;

export const MONTHS = [
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
];

export const BALANCES: { ticker: string; quantity: number }[] = [
  { ticker: 'TATNP', quantity: 2530 },
  { ticker: 'LKOH', quantity: 191 },
  { ticker: 'SBERP', quantity: 2879 },
  { ticker: 'PLZL', quantity: 338 },
  { ticker: 'NVTK', quantity: 607 },
  { ticker: 'SNGSP', quantity: 13200 },
  { ticker: 'BSPB', quantity: 1220 },
  { ticker: 'PHOR', quantity: 56 },
  { ticker: 'SIBN', quantity: 762 },
  { ticker: 'CHMF', quantity: 385 },
  { ticker: 'FLOT', quantity: 4180 },
  { ticker: 'TRNFP', quantity: 165 },
  { ticker: 'RENI', quantity: 1840 },
  { ticker: 'HEAD', quantity: 64 },
  { ticker: 'MOEX', quantity: 670 },
  { ticker: 'X5', quantity: 30 },
  { ticker: 'SVCB', quantity: 5000 },
  { ticker: 'RUB', quantity: 132.79 },
];

export const DEBT: { ticker: string; quantity: number }[] = [
  { ticker: 'SBERP', quantity: 740 },
  { ticker: 'SIBN', quantity: 551 },
  { ticker: 'CHMF', quantity: 336 },
  { ticker: 'PLZL', quantity: 210 },
];

export const REAL_RESULTS: {
  [key: number]: { invested: number; capitalOnLastDay: number };
} = {
  1: { invested: 134000, capitalOnLastDay: 155533.01 }, // 31 Мая 2023
  2: { invested: 116000, capitalOnLastDay: 278420.3 }, // 30 Июня 2023
  3: { invested: 150000, capitalOnLastDay: 472023.98 }, // 31 Июля 2023
  4: { invested: 150000, capitalOnLastDay: 702138.33 }, // 31 Августа 2023
  5: { invested: 250000, capitalOnLastDay: 989675.62 }, // 30 Сентября 2023
  6: { invested: 250600, capitalOnLastDay: 1282725.85 }, // 31 Октября 2023
  7: { invested: 249400, capitalOnLastDay: 1609609.78 }, // 30 Ноября 2023
  8: { invested: 700000, capitalOnLastDay: 2419696.98 }, // 31 Декабря 2023
  9: { invested: 0, capitalOnLastDay: 2575003.6 }, // 31 Января 2024
  10: { invested: 250000, capitalOnLastDay: 2868246.32 }, // 29 Февраля 2024
  11: { invested: 250000, capitalOnLastDay: 3155834.58 }, // 31 Марта 2024
  12: { invested: 250000, capitalOnLastDay: 3505084.86 }, // 30 Апреля 2024
  13: { invested: 250000, capitalOnLastDay: 3542805.21 }, // 31 мая 2024
  14: { invested: 250000, capitalOnLastDay: 3793450.86 }, // 30 июня 2024
  15: { invested: 250000, capitalOnLastDay: 3772457.9 }, // 31 июля 2024
  16: { invested: 250000, capitalOnLastDay: 3780900.68 }, // 31 августа 2024
  17: { invested: 250000, capitalOnLastDay: 4370723.42 }, // 30 сентября 2024
  18: { invested: 250000, capitalOnLastDay: 4282603.47 }, // 31 октября 2024
  19: { invested: 250000, capitalOnLastDay: 4584487.87 }, // 30 ноября 2024
  20: { invested: 500000, capitalOnLastDay: 5943664.15 }, // 31 декабря 2024
  21: { invested: 0, capitalOnLastDay: 5996210.19 }, // 31 Января 2025
  22: { invested: 250000, capitalOnLastDay: 6706475.13 }, // 28 Февраля 2025
  23: { invested: 250000, capitalOnLastDay: 6483764.19 }, // 31 Марта 2025
  24: { invested: 250000, capitalOnLastDay: 6653373.23 }, // 30 Апреля 2025
  25: { invested: 250000, capitalOnLastDay: 6789771.64 }, // 31 мая 2025
  26: { invested: 250000, capitalOnLastDay: 7126491.93 }, // 30 июня 2025
  27: { invested: 250000, capitalOnLastDay: 7140438.07 }, // 31 июля 2025
  28: { invested: 250000, capitalOnLastDay: 7952284.82 }, // 31 августа 2025
  29: { invested: 125000, capitalOnLastDay: 7623115.94 }, // 30 сентября 2025
  30: { invested: 225000, capitalOnLastDay: 7324736.24 }, // 31 октября 2025
  31: { invested: 225000, capitalOnLastDay: 0 }, // 30 ноября 2025
  // 32: { invested: 0, capitalOnLastDay: 0 }, // 31 декабря 2025
  // 33: { invested: 0, capitalOnLastDay: 0 }, // 31 Января 2026
  // 34: { invested: 0, capitalOnLastDay: 0 }, // 28 Февраля 2026
  // 35: { invested: 0, capitalOnLastDay: 0 }, // 31 Марта 2026
  // 36: { invested: 0, capitalOnLastDay: 0 }, // 30 Апреля 2026
  // 37: { invested: 0, capitalOnLastDay: 0 }, // 31 мая 2026
  // 38: { invested: 0, capitalOnLastDay: 0 }, // 30 июня 2026
  // 39: { invested: 0, capitalOnLastDay: 0 }, // 31 июля 2026
  // 40: { invested: 0, capitalOnLastDay: 0 }, // 31 августа 2026
  // 41: { invested: 0, capitalOnLastDay: 0 }, // 30 сентября 2026
  // 42: { invested: 0, capitalOnLastDay: 0 }, // 31 октября 2026
  // 43: { invested: 0, capitalOnLastDay: 0 }, // 30 ноября 2026
  // 44: { invested: 0, capitalOnLastDay: 0 }, // 31 декабря 2026
  // 45: { invested: 0, capitalOnLastDay: 0 }, // 31 Января 2027
  // 46: { invested: 0, capitalOnLastDay: 0 }, // 28 Февраля 2027
  // 47: { invested: 0, capitalOnLastDay: 0 }, // 31 Марта 2027
  // 48: { invested: 0, capitalOnLastDay: 0 }, // 30 Апреля 2027
  // 49: { invested: 0, capitalOnLastDay: 0 }, // 31 мая 2027
  // 50: { invested: 0, capitalOnLastDay: 0 }, // 30 июня 2027
  // 51: { invested: 0, capitalOnLastDay: 0 }, // 31 июля 2027
  // 52: { invested: 0, capitalOnLastDay: 0 }, // 31 августа 2027
  // 53: { invested: 0, capitalOnLastDay: 0 }, // 30 сентября 2027
  // 54: { invested: 0, capitalOnLastDay: 0 }, // 31 октября 2027
  // 55: { invested: 0, capitalOnLastDay: 0 }, // 30 ноября 2027
  // 56: { invested: 0, capitalOnLastDay: 0 }, // 31 декабря 2027
  // 57: { invested: 0, capitalOnLastDay: 0 }, // 31 Января 2028
  // 58: { invested: 0, capitalOnLastDay: 0 }, // 29 Февраля 2028
  // 59: { invested: 0, capitalOnLastDay: 0 }, // 31 Марта 2028
  // 60: { invested: 0, capitalOnLastDay: 0 }, // 30 Апреля 2028
};

if (IS_DEV) {
  const TOTAL_INVESTMENTS = 15000000;
  const invested = Object.values(REAL_RESULTS).reduce((accum, { invested }) => accum + invested, 0);
  const investLeft = TOTAL_INVESTMENTS - invested;

  const timeLeft = (TOTAL_INVESTMENTS - invested) / 250000;
  const years = Math.floor(timeLeft / 12);
  const months = Math.ceil(timeLeft % 12);

  const yearsText = years ? `${years} ${normalText(years, 'years')} ` : '';
  const monthsText = months ? `${years ? `и ` : ''}${months} ${normalText(months, 'months')}` : '';

  const investedInPercent = Math.floor((invested / (TOTAL_INVESTMENTS / 100)) * 100) / 100;
  const investLeftInPercent = Math.ceil((investLeft / (TOTAL_INVESTMENTS / 100)) * 100) / 100;

  console.log(`План инвестиций: ${TOTAL_INVESTMENTS.toLocaleString('ru-RU')} RUB`);
  console.log('');

  console.log(`Всего инвестировано: ${invested.toLocaleString('ru-RU')} RUB (${investedInPercent}%)`);
  console.log(`Осталось инвестировать: ${investLeft.toLocaleString('ru-RU')} RUB (${investLeftInPercent}%)`);
  console.log(`До жизни на дивиденды: ${yearsText}${monthsText}`);
}

function normalText(value: number, type: 'years' | 'months' | 'days') {
  if (type === 'years') {
    return value % 10 === 1 ? 'год' : value % 10 > 4 ? 'лет' : 'года';
  }

  if (type === 'months') {
    return value % 12 === 1 ? 'месяц' : value % 12 > 4 ? 'месяцев' : 'месяца';
  }
}

// const IMOEX_STOCKS: { ticker: string; value: number }[] = [
//   { ticker: 'AFKS', value: -2.56 },
//   { ticker: 'AFLT', value: 1.86 },
//   { ticker: 'ALRS', value: 0.81 },
//   { ticker: 'BSPB', value: 23.62 },
//   { ticker: 'CBOM', value: 3.49 },
//   { ticker: 'CHMF', value: 14.03 },
//   { ticker: 'ENPG', value: -10.06 },
//   { ticker: 'FLOT', value: 5.8 },
//   { ticker: 'GAZP', value: 1.37 },
//   { ticker: 'GMKN', value: 12.57 },
//   { ticker: 'HEAD', value: 14.78 },
//   { ticker: 'IRAO', value: 6.34 },
//   { ticker: 'LKOH', value: 14.97 },
//   { ticker: 'MAGN', value: 7.71 },
//   { ticker: 'MDMG', value: 34.81 },
//   { ticker: 'MOEX', value: 13.41 },
//   { ticker: 'MSNG', value: 5.27 },
//   { ticker: 'MTSS', value: 8.81 },
//   { ticker: 'NLMK', value: 8.01 },
//   { ticker: 'NVTK', value: 14.83 },
//   { ticker: 'PHOR', value: 23.52 },
//   { ticker: 'PIKK', value: 10.64 },
//   { ticker: 'PLZL', value: 24.82 },
//   { ticker: 'POSI', value: -10.09 },
//   { ticker: 'RENI', value: 19.57 },
//   { ticker: 'ROSN', value: 8.57 },
//   { ticker: 'RTKM', value: 0.76 },
//   { ticker: 'RUAL', value: -1.26 },
//   // { ticker: 'SBER', value: 14.93 },
//   { ticker: 'SBERP', value: 18.64 },
//   // { ticker: 'SNGS', value: -0.52 },
//   { ticker: 'SNGSP', value: 16.06 },
//   { ticker: 'SVCB', value: -18.45 },
//   { ticker: 'T', value: 7.18 },
//   // { ticker: 'TATN', value: 18.71 },
//   { ticker: 'TATNP', value: 24.89 },
//   { ticker: 'TRNFP', value: 14.88 },
//   { ticker: 'UGLD', value: -34.07 },
//   { ticker: 'UPRO', value: 2.91 },
//   { ticker: 'VKCO', value: -24.9 },
//   { ticker: 'VTBR', value: -8.32 },
//   { ticker: 'X5', value: 12.07 },
//   { ticker: 'YDEX', value: 12.88 },
// ]
//   .filter(({ value }) => value > 12)
//   .sort((a, b) => b.value - a.value)
//   .slice(0, 20);

// console.log(IMOEX_STOCKS);
