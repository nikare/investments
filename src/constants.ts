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
  [key: number]: { invested: number; capital: number; taken?: number } | undefined;
} = {
  1: { invested: 135000, capital: 155533.01 }, // 31 Мая 2023
};
