import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  startYear: 2023,
  deposit: 125000,
  period: 10,
  dividendsYield: 25,
  inflation: 20,
};

const storeSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {},
});

export const store = configureStore({ reducer: storeSlice.reducer });
export type RootState = typeof initialState;
