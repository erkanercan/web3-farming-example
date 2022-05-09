import type { FC } from "react";

import styles from "../styles/InputGroup.module.css";

interface InputGroupProps {
  name: string;
  label: string;
  type: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  value?: number;
  disabled?: boolean;
  suffix?: string;
  errMessage?: string;
}

const InputGroup: FC<InputGroupProps> = ({
  name,
  label,
  placeholder,
  type,
  onChange,
  disabled,
  suffix,
  value,
  errMessage,
}) => {
  return (
    <div className={styles.inputGroupContainer}>
      <div className={styles.inputGroupLabel}>
        <label htmlFor={name}>{label}</label>
      </div>

      <div className={styles.inputGroupWrapper}>
        <input
          disabled={disabled}
          className={styles.inputGroupInput}
          type={type}
          name={name}
          placeholder={placeholder}
          value={(value && value > 0 && value) || ""}
          onChange={onChange}
        />
        {suffix && <div className={styles.suffix}>{suffix}</div>}
      </div>
      {errMessage && <div className={styles.errMessage}>{errMessage}</div>}
    </div>
  );
};

export default InputGroup;
