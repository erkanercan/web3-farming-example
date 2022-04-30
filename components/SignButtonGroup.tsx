import React from "react";
import styles from "../styles/SignButtonGroup.module.css";

const SignButtonGroup = () => {
  return (
    <div className={styles.signButton}>
      <button>Log in</button>
      <button>Sign up</button>
    </div>
  );
};
export default SignButtonGroup;
