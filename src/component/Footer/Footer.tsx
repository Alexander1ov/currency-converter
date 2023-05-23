import React, { FC } from "react";
import { Link } from "react-router-dom";

import { ROUTES } from "../../constants/routes";

import styles from "./Footer.module.scss";
import LOGO from "../../img/footer/logo2.png";

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <Link to={ROUTES.HOME}>
            <img src={LOGO} alt="logo2" />
          </Link>
        </div>
        <div>
          <Link
            to="https://www.cbr-xml-daily.ru/"
            target="_blank"
            rel="noreferrer"
          >
            Exchange rates API
          </Link>
        </div>
        <div className={styles.rights}>
          Developed by{" "}
          <Link
            to="https://vk.com/alexander_1ov"
            target="_blank"
            rel="noreferrer"
          >
            Alexander_1ov
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
