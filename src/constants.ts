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
  { ticker: 'TATNP', quantity: 1445 },
  { ticker: 'LKOH', quantity: 84 },
  { ticker: 'SIBN', quantity: 553 },
  { ticker: 'CHMF', quantity: 234 },
  { ticker: 'SVCB', quantity: 5000 },
  { ticker: 'RUB', quantity: 508.85 },
] as const;

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

  9: { invested: 0, capitalOnLastDay: 0 }, // 31 Января 2024
};
