export interface IData {
  eq: number;
  date: string;
  invested: number;
  realInvested: number | null;
  taken: number | null;
  dividends: number;
  prevDividends: number;
  capital: number;
  realCapital: number | null;
}
