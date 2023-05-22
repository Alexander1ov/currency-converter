import React, { FC } from "react";
import { useAppSelector } from "../../hooks/hooks";
import SELL from "../../img/main/sell.png";
import BUY from "../../img/main/buy.png";

import styles from "./ConverterResult.module.scss";

const ConverterResult: FC = () => {
  const { startingCurrency, endingCurrency } = useAppSelector(
    (state) => state.converter
  );
  return (
    <div className={styles.result}>
      <div className={styles.sell}>
        <img src={SELL} alt="sell" />
        <p>{`${startingCurrency.quantity} ${startingCurrency.name}`}</p>
      </div>
      {startingCurrency.quantity && startingCurrency.name && <div>=</div>}
      <div className={styles.buy}>
        <img src={BUY} alt="buy" />
        <p>{`${endingCurrency.quantity} ${endingCurrency.name}`}</p>
      </div>
    </div>
  );
};

export default ConverterResult;
