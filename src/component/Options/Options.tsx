import React, { FC } from "react";
import { useAppDispatch } from "../../hooks/hooks";

import {
  changeSearch,
  toggleCurrency,
} from "../../store/currency/currencySlice";
import { Currency } from "../../store/currency/currencyTypes";
import MyInput from "../UI/MyInput/MyInput";
import MySelect from "../UI/MySelect/MySelect";

import styles from "./Options.module.scss";

interface BaseCurrency {
  data: Currency[];
  searchValue: string;
}

const Options: FC<BaseCurrency> = ({ data, searchValue }) => {
  const dispatch = useAppDispatch();

  const handleBaseCurrency = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(toggleCurrency(e.target.value));
  };
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeSearch(e.target.value));
  };

  return (
    <div className={styles.options}>
      <div className={styles.baseCurrency}>
        <p>Основная валюта</p>
        <MySelect
          data={data}
          handleCurrency={(e) => {
            handleBaseCurrency(e);
          }}
        />
      </div>
      <MyInput
        className={styles.input}
        type="text"
        placeholder="Поиск валюты по коду"
        value={searchValue}
        onChange={(e) => {
          handleSearch(e);
        }}
      />
    </div>
  );
};

export default Options;
