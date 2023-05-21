import React, { FC } from "react";

import { Currency } from "../../../store/currency/CurrencyTypes";

import styles from "./MySelect.module.scss";

interface MySelectProps {
  data: Currency[];
  handleCurrency: (
    e: React.ChangeEvent<HTMLSelectElement>,
    start?: string
  ) => void;
}

const MySelect: FC<MySelectProps> = ({ data, handleCurrency }) => {
  return (
    <select
      className={styles.select}
      name="BaseCurrency"
      onChange={handleCurrency}
    >
      <option value={[String(1), String(1)]}>RUB</option>
      {data.map((elem, id) => {
        return (
          <option
            key={id + 1}
            value={[String(elem.Value), String(elem.Previous), String(elem.CharCode)]}
          >
            {elem.CharCode}
          </option>
        );
      })}
    </select>
  );
};

export default MySelect;
