import { BaseQueryFn, createApi } from '@reduxjs/toolkit/query/react';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { BALANCES } from '../constants';

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
          const balances = await Promise.all(
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
          );

          return { data: balances.reduce((accum, value) => accum + value, 0) };
        },
        keepUnusedDataFor: CACHE_TIME,
      }),
    };
  },
});

export const { useGetStocksQuery } = api;
