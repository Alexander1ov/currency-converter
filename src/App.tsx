import React, { useEffect } from "react";
import { useAppDispatch } from "./hooks/hooks";
import { fetchCurrency } from "./store/currency/currencySlice";

import Header from "./component/Header/Header";
import Main from "./component/Main/Main";
import Footer from "./component/Footer/Footer";

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
