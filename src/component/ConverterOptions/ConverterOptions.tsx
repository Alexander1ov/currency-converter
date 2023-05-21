import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

import {
  changeParameters,
  changeQuantity,
} from "../../store/converter/ConverterSlice";
import MyButton from "../UI/MyButton/MyButton";
import MyInput from "../UI/MyInput/MyInput";
import MySelect from "../UI/MySelect/MySelect";

import styles from "./ConverterOptions.module.scss";

const ConverterOptions = () => {
  const { list } = useAppSelector((state) => state.currency);
  const { startingCurrency, endingCurrency } = useAppSelector(
    (state) => state.converter
  );
  const dispatch = useAppDispatch();
  const data = Object.values(list);

  const handleSearch = (
    e: React.ChangeEvent<HTMLInputElement>,
    start: string
  ) => {
    dispatch(changeQuantity([e.target.value, start]));
  };

  const handleBaseCurrency = (
    e: React.ChangeEvent<HTMLSelectElement>,
    start: string
  ) => {
    dispatch(changeParameters(e.target.value.split(",").concat(start)));
  };
  return (
    <div className={styles.options}>
      <MyInput
        className={styles.input}
        type="number"
        value={startingCurrency.quantity}
        onChange={(e) => {
          handleSearch(e, "0");
        }}
      />
      <MySelect
        data={data}
        handleCurrency={(e) => {
          handleBaseCurrency(e, "0");
        }}
      />
      <MyButton />
      <MyInput
        className={styles.input}
        type="number"
        value={endingCurrency.quantity}
        onChange={(e) => {
          handleSearch(e, "1");
        }}
      />
      <MySelect
        data={data}
        handleCurrency={(e) => {
          handleBaseCurrency(e, "1");
        }}
      />
    </div>
  );
};

export default ConverterOptions;
