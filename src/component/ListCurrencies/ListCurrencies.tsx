import React, { FC } from "react";

import styles from "./ListCurrencies.module.scss";

interface Position {
  className: string;
  CharCode: string;
  NumCode: string;
  Name: string;
  Nominal: number;
  Value: number;
  Previous: number;
  baseCurrency: number;
  pastPrice: number;
}

const ListCurrencies: FC<Position> = ({
  className,
  CharCode,
  NumCode,
  Name,
  Nominal,
  Value,
  Previous,
  baseCurrency,
  pastPrice,
}) => {
  const calcValue = (base: number, value: number) =>
    Math.floor((value / base) * 1000) / 1000;

  const calcDefPrevValue =
    Math.floor(
      (calcValue(baseCurrency, Value) - calcValue(pastPrice, Previous)) * 1000
    ) / 1000;

  return (
    <div
      className={`${className} ${
        calcValue(baseCurrency, Value) === 1 && styles.none
      }`}
    >
      <span>{CharCode}</span>
      <span>{NumCode}</span>
      <span>{Nominal}</span>
      <span>{Name}</span>
      <span>{calcValue(baseCurrency, Value)}</span>
      <span
        className={`${
          calcDefPrevValue > 0 ? styles.dynamicsUp : styles.dynamicsDown
        }`}
      >
        {calcDefPrevValue > 0 ? `+${calcDefPrevValue}` : `${calcDefPrevValue}`}
      </span>
    </div>
  );
};

export default ListCurrencies;
