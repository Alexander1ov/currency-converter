import React from "react";

import ConverterOptions from "../ConverterOptions/ConverterOptions";

import styles from "./Converter.module.scss";

const Converter = () => {
  return (
    <section className={styles.section}>
      <h2>Конвертер валют</h2>
      <div className={styles.converter}>
        <ConverterOptions />
      </div>
    </section>
  );
};

export default Converter;
