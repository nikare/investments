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
  { ticker: 'LKOH', quantity: 103 },
  { ticker: 'SIBN', quantity: 762 },
  { ticker: 'CHMF', quantity: 337 },
  { ticker: 'PLZL', quantity: 32 },
  { ticker: 'SBERP', quantity: 1290 },
  { ticker: 'SNGSP', quantity: 5800 },
  { ticker: 'NVTK', quantity: 307 },
  { ticker: 'SVCB', quantity: 5000 },
  { ticker: 'RUB', quantity: 78367.92 },
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
  9: { invested: 0, capitalOnLastDay: 2575003.6 }, // 31 Января 2024
  10: { invested: 250000, capitalOnLastDay: 2868246.32 }, // 29 Февраля 2024
  11: { invested: 250000, capitalOnLastDay: 3155834.58 }, // 31 Марта 2024
  12: { invested: 250000, capitalOnLastDay: 3505084.86 }, // 30 Апреля 2024
  13: { invested: 250000, capitalOnLastDay: 3542805.21 }, // 31 мая 2024
  14: { invested: 250000, capitalOnLastDay: 3793450.86 }, // 30 июня 2024
  15: { invested: 250000, capitalOnLastDay: 3772457.9 }, // 31 июля 2024
  16: { invested: 250000, capitalOnLastDay: 3780900.68 }, // 31 августа 2024
  17: { invested: 250000, capitalOnLastDay: 4370723.42 }, // 30 сентября 2024
  18: { invested: 250000, capitalOnLastDay: 0 }, // 31 октября 2024
};

// const history = [
//   [0],
//   [0],
//   [5764.8, 1921.6, 9608, 11532, 119185, 130568],
//   [10808, 1458.9, 7294, 26453, 7936.8, 658.55, 69163.5, 53350.65, 6586, 108171, 12018, 5022.2, 12055],
//   [38929.5, 50370, 12593.5, 49350, 49346, 154960],
//   [31094.4, 648.7, 1299.6, 141555, 1379, 115163.2, 51023, 15858.5, 66881.5, 72716],
//   [41920.2, 6211.2, 31048, 322711, 121904, 136040, 248166],
//   [
//     7591.5, 22785, 13626, 109008, 21627, 14463.5, 31992, 9665.7, 3222.1, 19332.6, 17768, 6663.15, 14808,
//     740.4, 1227.8, 95440.65, 15537.9, 27132, 6782.5, 94955, 105268, 13158.5,
//   ],
//   [
//     21141.2, 23628.4, 30321.6, 59340, 36847.2, 23151, 15388.8, 3847.2, 83356, 6133.4, 3047.9, 88371.7, 3047.2,
//     12188.4, 12188.4, 131025.3, 30160,
//   ],
//   [5881, 13460, 8089.2, 5392.8, 8192.5, 8326, 5813.85, 1661.3, 830.7, 56684, 1344.6, 248751, 2937.6],
//   [32318, 2938, 8812.8, 5668.4, 2860.4, 1662.8, 76507.2, 3326.4, 43243.2, 1663.2, 24905.7, 99615.6],
//   [20880.6, 6424.8, 8031, 8031, 4641, 4641, 30936],
// ];

// const cancatedHistory = history.reduce((accum, arr) => accum.concat(arr), []);
// const accumulated = cancatedHistory.reduce((accum, value) => accum + value, 0);

// console.log(accumulated.toLocaleString('ru-RU'));
