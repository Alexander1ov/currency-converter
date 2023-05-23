import React, { FC } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAppDispatch } from "../../hooks/hooks";

import { fetchCurrency } from "../../store/currency/currencySlice";
import { ROUTES } from "../../constants/routes";
import MyButton from "../UI/MyButton/MyButton";

import LOGO from "../../img/header/logo.png";
import ARROW from "../../img/header/arrowHeader.png";
import styles from "./Header.module.scss";

const Header: FC = () => {
  const dispatch = useAppDispatch();
  const updatePrice = () => {
    dispatch(fetchCurrency());
  };
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <Link to={ROUTES.HOME}>
            <img src={LOGO} alt="" />
          </Link>
        </div>
        <nav className={styles.nav}>
          <div className={styles["nav-link"]}>
            <NavLink
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.active : ""}`
              }
              to={ROUTES.HOME}
            >
              Главная
            </NavLink>
          </div>

          <div className={styles["nav-link"]}>
            <NavLink
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.active : ""}`
              }
              to={ROUTES.CONVERTER}
            >
              Конвертер
            </NavLink>
          </div>
        </nav>
        <div className={styles.button}>
          <MyButton image={ARROW} swapValues={updatePrice} />
        </div>
      </div>
    </header>
  );
};

export default Header;
