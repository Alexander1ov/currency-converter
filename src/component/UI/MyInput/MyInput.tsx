import React, { FC } from "react";

import styles from "./MyInput.module.scss";

interface MyInputProps {
  className?: string;
  type: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>, start?: boolean) => void;
}

const MyInput: FC<MyInputProps> = ({
  className,
  type,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className={styles.searchCurrency}>
      <input
        className={className}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default MyInput;
