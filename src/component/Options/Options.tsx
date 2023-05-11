import React, { FC } from "react";
import { useAppDispatch } from "../../hooks/hooks";

import {
  changeSearch,
  toggleCurrency,
} from "../../store/currency/CurrencySlice";
import { Currency } from "../../store/currency/CurrencyTypes";

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
        <select name="BaseCurrency" onChange={handleBaseCurrency}>
          <option value={[String(1), String(1)]}>RUB</option>
          {data.map((elem, id) => {
            return (
              <option
                key={id + 1}
                value={[String(elem.Value), String(elem.Previous)]}
              >
                {elem.CharCode}
              </option>
            );
          })}
        </select>
      </div>
      <div className={styles.searchCurrency}>
        <input
          type="text"
          placeholder="Поиск валюты по коду"
          value={searchValue}
          onChange={handleSearch}
        />
      </div>
    </div>
  );
};

export default Options;
