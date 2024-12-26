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

export const BALANCES: { ticker: string; quantity: number }[] = [
  { ticker: 'TATNP', quantity: 2333 },
  { ticker: 'LKOH', quantity: 121 },
  { ticker: 'PLZL', quantity: 32 },
  { ticker: 'SIBN', quantity: 762 },
  { ticker: 'CHMF', quantity: 337 },
  { ticker: 'SNGSP', quantity: 5800 },
  { ticker: 'SBERP', quantity: 1290 },
  { ticker: 'NVTK', quantity: 307 },
  { ticker: 'PHOR', quantity: 49 },
  { ticker: 'FLOT', quantity: 2980 },
  { ticker: 'SVCB', quantity: 5000 },
  { ticker: 'RUB', quantity: 90991.78 },
];

export const DEBT: { ticker: string; quantity: number }[] = [
  { ticker: 'TATNP', quantity: 96 },
  { ticker: 'SIBN', quantity: 204 },
  { ticker: 'NVTK', quantity: 215 },
  { ticker: 'LKOH', quantity: 32 },
  { ticker: 'SBERP', quantity: 990 },
  { ticker: 'PLZL', quantity: 21 },
  { ticker: 'CHMF', quantity: 336 },
  { ticker: 'RUB', quantity: 75476.97 },
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
  17: { invested: 250000, capitalOnLastDay: 4370723.42 }, // 30 сентября 2024
  18: { invested: 250000, capitalOnLastDay: 4282603.47 }, // 31 октября 2024
  19: { invested: 250000, capitalOnLastDay: 4584487.87 }, // 30 ноября 2024
  20: { invested: 250000, capitalOnLastDay: 0 }, // 31 декабря 2024
  // 21: { invested: 0, capitalOnLastDay: 0 }, // 31 Января 2025
  // 22: { invested: 0, capitalOnLastDay: 0 }, // 28 Февраля 2025
  // 23: { invested: 0, capitalOnLastDay: 0 }, // 31 Марта 2025
  // 24: { invested: 0, capitalOnLastDay: 0 }, // 30 Апреля 2025
  // 25: { invested: 0, capitalOnLastDay: 0 }, // 31 мая 2025
  // 26: { invested: 0, capitalOnLastDay: 0 }, // 30 июня 2025
  // 27: { invested: 0, capitalOnLastDay: 0 }, // 31 июля 2025
  // 28: { invested: 0, capitalOnLastDay: 0 }, // 31 августа 2025
  // 29: { invested: 0, capitalOnLastDay: 0 }, // 30 сентября 2025
  // 30: { invested: 0, capitalOnLastDay: 0 }, // 31 октября 2025
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
