import React, { FC } from "react";

import styles from "./MyButton.module.scss";

interface MyButtonProps {
  image:string;
  swapValues: () => void;
}

const MyButton: FC<MyButtonProps> = ({image, swapValues }) => {
  return (
    <div className={styles.button}>
      <button onClick={swapValues}>
        <img src={image} alt="arrow" />
      </button>
    </div>
  );
};

export default MyButton;
