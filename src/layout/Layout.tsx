import React, { FC } from "react";
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";
import { Outlet } from "react-router-dom";

import styles from "./layout.module.scss";

const Layout: FC = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
