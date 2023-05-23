import React, { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

import {
  changeParameters,
  changeQuantity,
  toggleValues,
} from "../../store/converter/converterSlice";
import MyButton from "../UI/MyButton/MyButton";
import MyInput from "../UI/MyInput/MyInput";
import MySelect from "../UI/MySelect/MySelect";

import ARROW from "../../img/main/arrow.png";
import styles from "./ConverterOptions.module.scss";

const ConverterOptions: FC = () => {
  const { list } = useAppSelector((state) => state.currency);
  const { startingCurrency, endingCurrency } = useAppSelector(
    (state) => state.converter
  );
  const data = Object.values(list);
  const dispatch = useAppDispatch();

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

  const swapValues = () => {
    dispatch(toggleValues());
  };

  return (
    <div className={styles.options}>
      <div className={styles.baseCurrency}>
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
      </div>
      <MyButton swapValues={swapValues} image={ARROW} />
      <div className={styles.minorCurrency}>
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
    </div>
  );
};

export default ConverterOptions;
