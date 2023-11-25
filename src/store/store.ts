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

let startSum = 100000;

for (let i = 0; i < 20; i++) {
  startSum += startSum * 1.03;
}

console.log(`${startSum.toLocaleString()} ₽`);
