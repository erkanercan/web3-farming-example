import Image from "next/image";
import React from "react";
import styles from "../styles/SearchIcon.module.css";

const SearchIcon = React.memo(() => {
  return (
    <div className={styles.container}>
      <Image src="/search.svg" height={24} width={24} />
    </div>
  );
});

export default SearchIcon;
