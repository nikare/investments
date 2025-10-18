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
  { ticker: 'LKOH', quantity: 183 },
  { ticker: 'SBERP', quantity: 2714 },
  { ticker: 'PLZL', quantity: 338 },
  { ticker: 'NVTK', quantity: 607 },
  { ticker: 'SNGSP', quantity: 13200 },
  { ticker: 'PHOR', quantity: 56 },
  { ticker: 'SIBN', quantity: 762 },
  { ticker: 'BSPB', quantity: 1060 },
  { ticker: 'CHMF', quantity: 385 },
  { ticker: 'FLOT', quantity: 4180 },
  { ticker: 'TRNFP', quantity: 126 },
  { ticker: 'HEAD', quantity: 47 },
  { ticker: 'RENI', quantity: 1360 },
  { ticker: 'MOEX', quantity: 670 },
  { ticker: 'SVCB', quantity: 5000 },
  { ticker: 'RUB', quantity: 48284.22 },
  { ticker: 'X5', quantity: 12 },
];

export const DEBT: { ticker: string; quantity: number }[] = [
  { ticker: 'SBERP', quantity: 727 },
  { ticker: 'SIBN', quantity: 551 },
  { ticker: 'CHMF', quantity: 336 },
  { ticker: 'PLZL', quantity: 210 },
  { ticker: 'RUB', quantity: 12944.5 },
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
  30: { invested: 225000, capitalOnLastDay: 0 }, // 31 октября 2025
  // 31: { invested: 0, capitalOnLastDay: 0 }, // 30 ноября 2025
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
  const timeLeft = (TOTAL_INVESTMENTS - invested) / 250000;
  const years = Math.floor(timeLeft / 12);
  const months = Math.ceil(timeLeft % 12);

  const yearsText = years ? `${years} ${normalText(years, 'years')} ` : '';
  const monthsText = months ? `${years ? `и ` : ''}${months} ${normalText(months, 'months')}` : '';

  console.log(`План инвестиций: ${TOTAL_INVESTMENTS.toLocaleString('ru-RU')} RUB`);
  console.log('');

  console.log(`Всего инвестировано: ${invested.toLocaleString('ru-RU')} RUB`);
  console.log(`Осталось инвестировать: ${(TOTAL_INVESTMENTS - invested).toLocaleString('ru-RU')} RUB`);
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
//   { ticker: 'AFKS', value: -2.48 },
//   { ticker: 'AFLT', value: 2.04 },
//   { ticker: 'ALRS', value: 1.5 },
//   { ticker: 'BSPB', value: 23.48 },
//   { ticker: 'CBOM', value: 5.3 },
//   { ticker: 'CHMF', value: 14.64 },
//   { ticker: 'ENPG', value: -8.48 },
//   { ticker: 'FLOT', value: 7.72 },
//   { ticker: 'GAZP', value: 1.47 },
//   { ticker: 'GMKN', value: 12.46 },
//   { ticker: 'HEAD', value: 19.29 },
//   { ticker: 'IRAO', value: 7.09 },
//   { ticker: 'LKOH', value: 15.7 },
//   { ticker: 'MAGN', value: 8.5 },
//   { ticker: 'MDMG', value: 34.03 },
//   { ticker: 'MOEX', value: 13.06 },
//   { ticker: 'MSNG', value: 6.09 },
//   { ticker: 'MTSS', value: 8.74 },
//   { ticker: 'NLMK', value: 8.27 },
//   { ticker: 'NVTK', value: 14.99 },
//   { ticker: 'PHOR', value: 24.04 },
//   { ticker: 'PIKK', value: 13.2 },
//   { ticker: 'PLZL', value: 25.79 },
//   { ticker: 'POSI', value: -15.96 },
//   { ticker: 'RENI', value: 21.04 },
//   { ticker: 'ROSN', value: 9.07 },
//   { ticker: 'RTKM', value: 0.31 },
//   { ticker: 'RUAL', value: -0.98 },
//   // { ticker: 'SBER', value: 14.79 },
//   { ticker: 'SBERP', value: 18.6 },
//   // { ticker: 'SNGS', value: -0.03 },
//   { ticker: 'SNGSP', value: 16.29 },
//   { ticker: 'SVCB', value: -18.61 },
//   { ticker: 'T', value: 7.57 },
//   // { ticker: 'TATN', value: 19.07 },
//   { ticker: 'TATNP', value: 25.18 },
//   { ticker: 'TRNFP', value: 14.95 },
//   { ticker: 'UGLD', value: -30.19 },
//   { ticker: 'UPRO', value: 3.16 },
//   { ticker: 'VKCO', value: -26.45 },
//   { ticker: 'VTBR', value: -8.8 },
//   { ticker: 'X5', value: 12.86 },
//   { ticker: 'YDEX', value: 12.24 },
// ]
//   .filter(({ value }) => value > 12)
//   // .sort((a, b) => b.value - a.value)
//   .slice(0, 20);

// console.log(IMOEX_STOCKS);
