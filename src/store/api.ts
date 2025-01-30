import { BaseQueryFn, createApi } from '@reduxjs/toolkit/query/react';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { BALANCES, DEBT, BOAT_PRICE, BOAT_BALANCE, IS_DEV } from '../constants';

type BaseQuery = BaseQueryFn<{
  params?: AxiosRequestConfig['params'];
  method: AxiosRequestConfig['method'];
  data?: AxiosRequestConfig['data'];
  url: string;
}>;

const axiosBaseQuery =
  ({ baseUrl }: { baseUrl: string } = { baseUrl: '' }): BaseQuery =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({
        url: baseUrl + url,
        method,
        data,
        params,
      });

      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError;

      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const CACHE_TIME = 15;

export const api = createApi({
  reducerPath: 'baseApi',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://iss.moex.com/iss/',
  }),
  endpoints: (build) => {
    return {
      getStocks: build.query<number, void>({
        async queryFn(_arg, _api, _extraOptions, baseQuery) {
          const balances = (
            await Promise.all(
              BALANCES.map(async ({ ticker, quantity }) => {
                if (ticker === 'RUB') {
                  return quantity;
                } else {
                  const stockResponse = (
                    await baseQuery({
                      url: `engines/stock/markets/shares/boards/TQBR/securities/${ticker}.json?iss.meta=off&iss.only=marketdata,securities&marketdata.columns=LAST&securities.columns=PREVPRICE`,
                      method: 'GET',
                    })
                  ).data as { marketdata: { data: [[number]] }; securities: { data: [[number]] } };

                  const { marketdata, securities } = stockResponse;
                  const price = marketdata.data[0][0] || securities.data[0][0];
                  return price * quantity;
                }
              }),
            )
          ).reduce((accum, value) => accum + value, 0);

          return { data: balances };
        },
        keepUnusedDataFor: CACHE_TIME,
      }),

      getDebt: build.query<void, void>({
        async queryFn(_arg, _api, _extraOptions, baseQuery) {
          if (!IS_DEV) return { data: undefined };
          const stocks = (
            await Promise.all(
              DEBT.map(async ({ ticker, quantity }) => {
                const stockResponse = (
                  await baseQuery({
                    url: `engines/stock/markets/shares/boards/TQBR/securities/${ticker}.json?iss.meta=off&iss.only=marketdata,securities&marketdata.columns=LAST&securities.columns=PREVPRICE`,
                    method: 'GET',
                  })
                ).data as { marketdata: { data: [[number]] }; securities: { data: [[number]] } };

                const { marketdata, securities } = stockResponse;
                const price = marketdata.data[0][0] || securities.data[0][0];

                return { ticker, quantity, value: price * quantity };
              }),
            )
          ).sort((a, b) => a.value + b.value);

          const amount = stocks.reduce((accum, { value }) => accum + value, 0);

          console.log('');
          console.log('Долг из активов:');

          stocks.forEach(({ ticker, quantity, value }, index) => {
            if (ticker === 'RUB') {
              console.log(`${index + 1}. ${ticker} - ${value.toLocaleString('ru-RU')} ₽`);
            } else {
              console.log(`${index + 1}. ${ticker} - ${quantity} шт (${value.toLocaleString('ru-RU')} ₽)`);
            }
          });

          console.log(`Итого: ${amount.toLocaleString('ru-RU')} ₽`);

          return { data: undefined };
        },
        keepUnusedDataFor: CACHE_TIME,
      }),

      getCurrency: build.query<void, void>({
        async queryFn(_arg, _api, _extraOptions, baseQuery) {
          if (!IS_DEV) return { data: undefined };
          const currency = (
            await baseQuery({
              url: 'statistics/engines/currency/markets/selt/rates.json?iss.meta=off&iss.only=cbrf&cbrf.columns=CBRF_EUR_LAST',
              method: 'GET',
            })
          ).data as { cbrf: { data: [[number]] } };

          const eur = currency.cbrf.data[0][0];
          const boatPrice = BOAT_PRICE * eur;
          const remains = boatPrice - BOAT_BALANCE;

          console.log('');
          console.log(`Стоимость Viko S26 (8.50 м): ${boatPrice.toLocaleString('ru-RU')} RUB`);
          console.log(`Накоплено: ${BOAT_BALANCE.toLocaleString('ru-RU')} RUB`);
          console.log(`Осталось накопить: ${remains.toLocaleString('ru-RU')} RUB`);

          return { data: undefined };
        },
        keepUnusedDataFor: CACHE_TIME,
      }),
    };
  },
});

export const { useGetStocksQuery, useGetDebtQuery, useGetCurrencyQuery } = api;
