import { FC } from "react";
import styles from "../styles/InputGroup.module.css";

interface InputGroupProps {
  name: string;
  label: string;
  type: string;
  value: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: string;
  info?: string;
  className?: string;
  disabled?: boolean;
  suffix?: string;
}

const InputGroup: FC<InputGroupProps> = ({
  name,
  label,
  placeholder,
  value,
  type,
  onChange,
  disabled,
  suffix,
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
          value=""
          onChange={onChange}
        />
        {suffix && <div className={styles.suffix}>{suffix}</div>}
      </div>
    </div>
  );
};

export default InputGroup;