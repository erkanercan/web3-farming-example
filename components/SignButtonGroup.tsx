import type { FC } from "react";
import React from "react";

import styles from "../styles/SignButtonGroup.module.css";

interface SignButtonGroupProps {
  onLogin?: () => void;
}

const SignButtonGroup: FC<SignButtonGroupProps> = ({ onLogin }) => {
  return (
    <div className={styles.signButton}>
      <button type="button" onClick={onLogin}>
        Log in
      </button>
      <button type="button">Sign up</button>
    </div>
  );
};
export default SignButtonGroup;
