import React from "react";

import styles from "../styles/Spinner.module.css";

const Spinner = () => {
  return (
    <div className={styles.spinner}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};

export default React.memo(Spinner);
