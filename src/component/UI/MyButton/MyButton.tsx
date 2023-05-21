import React from "react";

import ARROW from "../../../img/main/arrow.png";
import styles from "./MyButton.module.scss";

const MyButton = () => {
  return (
    <div className={styles.button}>
      <button>
        <img src={ARROW} alt="" />
      </button>
    </div>
  );
};

export default MyButton;
