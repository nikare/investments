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

export const REAL_RESULTS: {
  [key: number]: { invested: number; capital: number } | undefined;
} = {
  1: { invested: 134000, capital: 155533.01 }, // 31 Мая 2023
  2: { invested: 116000, capital: 278420.3 }, // 30 Июня 2023
  3: { invested: 150000, capital: 472023.98 }, // 31 Июля 2023
  4: { invested: 150000, capital: 702138.33 }, // 31 Августа 2023
  5: { invested: 250000, capital: 989675.62 }, // 30 Сентября 2023
  6: { invested: 250600, capital: 1282725.85 }, // 31 Октября 2023
  7: { invested: 249400, capital: 1627805.28 }, // 30 Ноября 2023
};
