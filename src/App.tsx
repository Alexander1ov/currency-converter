import React, { useEffect } from "react";
import { useAppDispatch } from "./hooks/hooks";
import { fetchCurrency } from "./store/currency/CurrencySlice";

import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import Main from "./component/Main/Main";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCurrency());
  }, [dispatch]);
  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
