import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  startYear: 2023,
  deposit: 125000,
  period: 10,
  dividendsYield: 35,
  inflation: 17.737,
};

const storeSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {},
});

export const store = configureStore({ reducer: storeSlice.reducer });
export type RootState = typeof initialState;

// let startSum = 2163337;

// for (let i = 0; i < 30; i++) {
//   startSum += startSum * 1.15;
// }

// console.log(startSum.toLocaleString('ru-RU'));

/** MOEXOG */
const MOEXOG = calcCapitalization('MOEXOG', {
  BANEP: '20 905 822 581.84',
  GAZP: '94 558 924 667.96',
  LKOH: '98 249 526 641.25',
  NVTK: '112 528 964 013.88',
  RNFT: '6 143 872 680',
  ROSN: '106 743 652 070.65',
  SNGS: '68 977 910 884.18',
  SNGSP: '50 351 088 771.06',
  TATN: '96 684 808 166.42',
  TATNP: '17 650 343 165.71',
  TRNFP: '27 085 300 550',
});

/** MOEXEU */
const MOEXEU = calcCapitalization('MOEXEU', {
  DVEC: '2 390 567 363.2',
  ELFV: '5 156 536 567.52',
  FEES: '25 234 428 886.71',
  HYDR: '11 873 979 125.1',
  IRAO: '21 110 360 885.84',
  LSNGP: '13 600 622 555.96',
  MRKC: '4 214 684 645.46',
  MRKP: '7 114 162 398.66',
  MRKU: '4 971 472 278.5',
  MRKV: '2 397 160 314.66',
  MRKZ: '1 443 254 396.88',
  MSNG: '19 047 893 168.24',
  MSRS: '6 478 043 179.34',
  OGKB: '8 526 145 972.09',
  TGKA: '6 908 459 885.6',
  TGKB: '3 414 111 171.55',
  UPRO: '16 745 736 352.11',
});

/** MOEXTL */
const MOEXTL = calcCapitalization('MOEXTL', {
  MGTSP: '6 533 273 367.04',
  MTSS: '11 972 304 317.38',
  RTKM: '11 159 591 982.09',
  RTKMP: '2 315 604 430.9',
  TTLK: '1 642 588 716.23',
});

/** MOEXMM */
const MOEXMM = calcCapitalization('MOEXMM', {
  ALRS: '86 140 638 008.48',
  AMEZ: '4 535 485 286.31',
  CHMF: '99 790 387 129.06',
  ENPG: '23 987 498 857.48',
  GMKN: '118 676 487 857.48',
  MAGN: '70 076 458 296',
  MTLR: '23 607 121 894.28',
  MTLRP: '16 377 756 191.28',
  NLMK: '99 276 610 585.15',
  PLZL: '114 011 437 917.85',
  POLY: '19 004 537 015.62',
  RASP: '11 751 701 554.02',
  RUAL: '80 411 006 249.07',
  SELG: '20 002 600 000',
  VSMO: '48 368 717 817.6',
});

/** MOEXFN */
const MOEXFN = calcCapitalization('MOEXFN', {
  BSPB: '19 661 531 585.92',
  CBOM: '25 674 685 771.29',
  MOEX: '22 217 678 230.08',
  QIWI: '19 809 986 807.34',
  RENI: '13 199 780 886',
  SBER: '21 099 872 922.79',
  SBERP: '4 066 224 120',
  SFIN: '5 214 601 217.61',
  SPBE: '3 456 465 616.23',
  TCSG: '25 524 383 396.53',
  VTBR: '29 380 801 054.46',
});

/** MOEXCN */
const MOEXCN = calcCapitalization('MOEXCN', {
  ABIO: '1 934 807 598.68',
  AGRO: '18 890 413 023.01',
  APTK: '7 806 849 456.06',
  AQUA: '7 878 668 842.74',
  BELU: '4 281 168 000',
  FIVE: '22 104 790 578.69',
  FIXP: '9 847 845 000',
  GEMC: '10 014 840 000',
  LENT: '7 638 321 133.63',
  MDMG: '5 531 604 736.32',
  MGNT: '20 574 828 026.51',
  MVID: '5 643 284 181.98',
  OKEY: '682 845 234.24',
  SVAV: '4 404 400 834.68',
  WUSH: '2 793 916 924.29',
});

/** MOEXCH */
const MOEXCH = calcCapitalization('MOEXCH', {
  AKRN: '35 838 227 100',
  KAZT: '48 559 953 512.61',
  KZOS: '27 207 815 031',
  KZOSP: '3 157 083 248.4',
  NKNC: '18 489 162 600',
  NKNCP: '11 628 076 542.08',
  PHOR: '51 178 400 000',
});

/** MOEXTN */
const MOEXTN = calcCapitalization('MOEXTN', {
  AFLT: '29 321 223 221.98',
  FESH: '27 385 239 000',
  FLOT: '29 672 223 801.53',
  GLTR: '14 265 562 743.24',
  NKHP: '11 907 076 356',
  NMTP: '27 352 789 831.08',
});

/** MOEXIT */
const MOEXIT = calcCapitalization('MOEXIT', {
  CIAN: '3 587 105 864.15',
  HHRU: '9 276 970 261.2',
  OZON: '48 874 877 460.72',
  POSI: '19 365 060 000',
  VKCO: '26 802 599 997.15',
  YNDX: '36 673 244 691.54',
});

/** MOEXRE */
const MOEXRE = calcCapitalization('MOEXRE', {
  ETLN: '12 615 781 868.61',
  LSRG: '9 695 143 231.5',
  PIKK: '28 703 440 077.02',
  SMLT: '18 103 684 668.74',
});

// Индексы по названиям
const INDEXES_NAMES: { [key: string]: string } = {
  MOEXOG: 'Индекс нефти и газа',
  MOEXEU: 'Индекс электроэнергетики',
  MOEXTL: 'Индекс телекоммуникаций',
  MOEXMM: 'Индекс металлов и добычи',
  MOEXFN: 'Индекс финансов',
  MOEXCN: 'Индекс потребительского сектора',
  MOEXCH: 'Индекс химии и нефтехимии',
  MOEXTN: 'Индекс транспорта',
  MOEXIT: 'Индекс информационных технологий',
  MOEXRE: 'Индекс строительных компаний',
};

/** Total capitalizaion */
const allSectors = [MOEXOG, MOEXEU, MOEXTL, MOEXMM, MOEXFN, MOEXCN, MOEXCH, MOEXTN, MOEXIT, MOEXRE];
const totalCapitalization = allSectors.reduce((accum, { capitalization }) => accum + capitalization, 0);
let totalPercent = 0;

allSectors.forEach(({ indexId, capitalization }, index) => {
  const percent = Math.round((capitalization / totalCapitalization) * 10000) / 100;
  totalPercent += percent;
  console.log(index + 1, `${indexId} - ${INDEXES_NAMES[indexId]}`, percent, '%');
});

console.log('Итого:', totalPercent, '%');

// utils
function calcCapitalization(indexId: string, stocks: { [key: string]: string }) {
  const capitalization = Object.values(stocks).reduce((accum, value, index) => {
    const total = accum + parseFloat(value.replace(/\s/g, ''));

    if (index === Object.keys(stocks).length - 1) {
      console.log(`${indexId}:`);
      Object.entries(stocks).forEach(([ticker, value], index) => {
        logStock(ticker, value, index, total);
      });
      console.log(`Капитализация: ${total.toLocaleString('ru-RU')} ₽`);
      console.log('');
    }

    return total;
  }, 0);

  return { indexId, capitalization };
}

function logStock(ticker: string, value: string, index: number, total: number) {
  console.log(
    index + 1,
    ticker,
    Math.round((parseFloat(value.replace(/\s/g, '')) / total) * 100 * 100) / 100,
    '%',
  );
}
