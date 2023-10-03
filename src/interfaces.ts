export interface IData {
  eq: number;
  month: string;
  year: number;
  invested: number | null;
  totalInvested: number | null;
  dividends: number;
  prevDividends: number;
  capital: number;
  realCapital: number | null;
  income: number | null;
  incomeInPercent: number | null;
  incomeLastMonth: number | null;
  incomeLastMonthInPercent: number | null;
}
