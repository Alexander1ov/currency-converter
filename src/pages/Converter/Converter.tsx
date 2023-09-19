import React, { FC } from "react";

import ConverterOptions from "../../component/ConverterOptions/ConverterOptions";
import ConverterResult from "../../component/ConverterResult/ConverterResult";

import styles from "./Converter.module.scss";

const Converter: FC = () => {
  return (
    <section className={styles.section}>
      <h2>Конвертер валют</h2>
      <div className={styles.converter}>
        <div className={styles["converter-header"]}>
          <h3>У меня есть</h3>
          <h3>Хочу купить</h3>
        </div>
        <ConverterOptions />
        <ConverterResult />
      </div>
    </section>
  );
};

export default Converter;
