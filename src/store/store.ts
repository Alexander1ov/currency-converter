import { configureStore } from "@reduxjs/toolkit";

import currencySlice from "./currency/currencySlice";
import ConverterSlice from "./converter/converterSlice";

const store = configureStore({
  reducer: {
    currency: currencySlice,
    converter: ConverterSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
