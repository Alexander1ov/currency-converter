import React, { FC } from "react";
import { useAppSelector } from "../../hooks/hooks";

import ListCurrencies from "../ListCurrencies/ListCurrencies";
import Options from "../Options/Options";

import styles from "./Home.module.scss";

const Home: FC = () => {
  const { list, ratioBaseCurrency, pastPrice, searchValue } = useAppSelector(
    (state) => state.currency
  );
  const data = Object.values(list);

  const sortedSearchCards = data.filter((cards) =>
    cards.CharCode.includes(searchValue.toUpperCase())
  );

  return (
    <section className={styles.section}>
      <h2>Курсы валют ЦБ РФ</h2>
      <Options data={data} searchValue={searchValue} />
      <div className={styles.wrapper}>
        <div className={styles["header-table"]}>
          <div>Код </div>
          <div>Числовой код</div>
          <div>Единиц</div>
          <div>Валюта</div>
          <div>Цена</div>
          <div>Изменение</div>
        </div>
        <div className={styles["body-table"]}>
          {sortedSearchCards.map((elem) => (
            <ListCurrencies
              key={elem.ID}
              className={styles.elem}
              CharCode={elem.CharCode}
              NumCode={elem.NumCode}
              Name={elem.Name}
              Nominal={elem.Nominal}
              Value={elem.Value}
              Previous={elem.Previous}
              baseCurrency={ratioBaseCurrency}
              pastPrice={pastPrice}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
