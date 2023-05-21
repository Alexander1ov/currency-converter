import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ConverterState } from "./ConverterTypes";

const initialState: ConverterState = {
  startingCurrency: { name: "", quantity: "1", price: "0" },
  endingCurrency: { name: "", quantity: "", price: "0" },
};

const converterSlice = createSlice({
  name: "converter",
  initialState,
  reducers: {
    changeQuantity(state, action: PayloadAction<Array<string>>) {
      if (action.payload[1] === "0") {
        state.startingCurrency.quantity = action.payload[0];
      } else if (action.payload[1] === "1") {
        state.endingCurrency.quantity = action.payload[0];
      }
    },
    changeParameters(state, action: PayloadAction<Array<string>>) {
      console.log(action.payload);

      if (action.payload[3] === "0") {
        state.startingCurrency.name = action.payload[2];
        state.startingCurrency.price = action.payload[0];
      } else if (action.payload[3] === "1") {
        state.endingCurrency.name = action.payload[2];
        state.endingCurrency.price = action.payload[0];
      }
    },
  },
});

export const { changeQuantity, changeParameters } = converterSlice.actions;
export default converterSlice.reducer;
