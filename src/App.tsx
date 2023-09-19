import { FC, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { ROUTES } from "./constants/routes";
import { useAppDispatch } from "./hooks/hooks";
import { fetchCurrency } from "./store/currency/currencySlice";
import Layout from "./layout/Layout";
import Converter from "./pages/Converter/Converter";
import Home from "./pages/Home/Home";

const App: FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCurrency());
  }, [dispatch]);
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path={ROUTES.CONVERTER} element={<Converter />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
