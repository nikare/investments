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

let startSum = 2163337;

for (let i = 0; i < 30; i++) {
  startSum += startSum * 1.15;
}

console.log(startSum.toLocaleString('ru-RU'));
