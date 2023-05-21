import {
  createSlice,
  PayloadAction,
  createAsyncThunk,
  AnyAction,
} from "@reduxjs/toolkit";
import axios from "axios";

import { Currency, CurrencyState } from "./CurrencyTypes";

export const fetchCurrency = createAsyncThunk<
  Currency[],
  undefined,
  { rejectValue: string }
>("currency/fetchCurrency", async function (_, { rejectWithValue }) {
  try {
    const response = await axios.get(
      "https://www.cbr-xml-daily.ru/daily_json.js"
    );
    return response.data.Valute;
  } catch (e) {
    return rejectWithValue("Failed to load list of currencies");
  }
});

const initialState: CurrencyState = {
  list: [],
  ratioBaseCurrency: 1,
  pastPrice: 1,
  searchValue: "",
  loading: false,
  error: null,
};

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    toggleCurrency(state, action: PayloadAction<string>) {
      const arr = action.payload.split(",");
      state.ratioBaseCurrency = Number(arr[0]);
      state.pastPrice = Number(arr[1]);
    },
    changeSearch(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrency.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCurrency.fulfilled, (state, action) => {
        state.list = action.payload;
        state.loading = false;
      })

      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const { toggleCurrency, changeSearch } = currencySlice.actions;
export default currencySlice.reducer;

function isError(action: AnyAction) {
  return action.type.endsWith("rejected");
}
