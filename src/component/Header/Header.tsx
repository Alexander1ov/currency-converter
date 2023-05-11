import React from "react";
import { Link, NavLink } from "react-router-dom";

import { ROUTES } from "../../constants/routes";

import LOGO from "../../img/header/logo.png";
import styles from "./Header.module.scss";

const Header = () => {
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
      </div>
    </header>
  );
};

export default Header;
