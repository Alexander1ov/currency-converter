import { configureStore } from "@reduxjs/toolkit";

import currencySlice from "./currency/CurrencySlice";

const store = configureStore({
  reducer: {
    currency: currencySlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
