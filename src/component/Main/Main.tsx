import React from "react";
import { Route, Routes } from "react-router-dom";

import { ROUTES } from "../../constants/routes";
import Home from "../Home/Home";
import Converter from "../Converter/Converter";

import styles from "./Main.module.scss";

const Main = () => {
  return (
    <main className={styles.main}>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />}></Route>
        <Route path={ROUTES.CONVERTER} element={<Converter />}></Route>
      </Routes>
    </main>
  );
};

export default Main;
