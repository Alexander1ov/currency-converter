import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ConverterState } from "./converterTypes";
import { calcCurrency } from "../../constants/constants";

const initialState: ConverterState = {
  startingCurrency: { name: "RUB", quantity: "1", price: "1" },
  endingCurrency: { name: "RUB", quantity: "1", price: "1" },
};

const converterSlice = createSlice({
  name: "converter",
  initialState,
  reducers: {
    changeQuantity(state, action: PayloadAction<Array<string>>) {
      if (action.payload[1] === "0") {
        state.startingCurrency.quantity = action.payload[0];
        state.endingCurrency.quantity = calcCurrency(
          state.startingCurrency.price,
          action.payload[0],
          state.endingCurrency.price
        );
      } else if (action.payload[1] === "1") {
        state.endingCurrency.quantity = action.payload[0];
        state.startingCurrency.quantity = calcCurrency(
          state.endingCurrency.price,
          action.payload[0],
          state.startingCurrency.price
        );
      }
    },
    changeParameters(state, action: PayloadAction<Array<string>>) {
      if (action.payload[3] === "0") {
        state.startingCurrency.name = action.payload[2];
        state.startingCurrency.price = action.payload[0];
      } else if (action.payload[3] === "1") {
        state.endingCurrency.name = action.payload[2];
        state.endingCurrency.price = action.payload[0];
      }
      state.endingCurrency.quantity = calcCurrency(
        state.startingCurrency.price,
        state.startingCurrency.quantity,
        state.endingCurrency.price
      );
    },
    toggleValues(state) {
      [state.startingCurrency.name, state.endingCurrency.name] = [
        state.endingCurrency.name,
        state.startingCurrency.name,
      ];
      [state.startingCurrency.quantity, state.endingCurrency.quantity] = [
        state.endingCurrency.quantity,
        state.startingCurrency.quantity,
      ];
      [state.startingCurrency.price, state.endingCurrency.price] = [
        state.endingCurrency.price,
        state.startingCurrency.price,
      ];
    },
  },
});

export const { changeQuantity, changeParameters, toggleValues } =
  converterSlice.actions;
export default converterSlice.reducer;
