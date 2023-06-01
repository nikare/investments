export interface IData {
  eq: number;
  month: string;
  year: number;
  realInvested: number | null;
  dividends: number;
  prevDividends: number;
  capital: number;
  realCapital: number | null;
  lastYearsCapital: number | null;
  lastMonthCapital: number | null;
}
