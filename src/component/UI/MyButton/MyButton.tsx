import React, { FC } from "react";

import ARROW from "../../../img/main/arrow.png";
import styles from "./MyButton.module.scss";

const MyButton: FC = () => {
  return (
    <div className={styles.button}>
      <button>
        <img src={ARROW} alt="arrow" />
      </button>
    </div>
  );
};

export default MyButton;
