export const START_YEAR = 2023;
export const DEPOSIT = 125000;
export const PERIOD = 10;
export const DIVIDENDS_YIELD = 35;
export const INFLATION = 17.737;

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

export const BALANCES = [
  { ticker: 'TATNP', quantity: 2333 },
  { ticker: 'LKOH', quantity: 84 },
  { ticker: 'SIBN', quantity: 750 },
  { ticker: 'CHMF', quantity: 337 },
  { ticker: 'PLZL', quantity: 32 },
  { ticker: 'SBERP', quantity: 1290 },
  { ticker: 'SNGSP', quantity: 5800 },
  { ticker: 'NVTK', quantity: 186 },
  { ticker: 'SVCB', quantity: 5000 },
  { ticker: 'RUB', quantity: 336.4 },
] as const;

export const DEBT = [
  { ticker: 'TATNP', quantity: 108 },
  { ticker: 'LKOH', quantity: 23 },
  { ticker: 'CHMF', quantity: 336 },
  { ticker: 'SIBN', quantity: 204 },
  { ticker: 'SBERP', quantity: 700 },
  { ticker: 'PLZL', quantity: 21 },
  { ticker: 'NVTK', quantity: 185 },
  { ticker: 'RUB', quantity: 384.08 },
];

export const REAL_RESULTS: {
  [key: number]: { invested: number; capitalOnLastDay: number } | undefined;
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
  17: { invested: 250000, capitalOnLastDay: 0 }, // 30 сентября 2024
};
