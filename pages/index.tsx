import type { NextPage } from "next";
import { useCallback, useState } from "react";

import FarmPage from "../components/FarmPage";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleLogin = useCallback(() => {
    setIsModalOpen(true);
  }, []);
  return (
    <div className={styles.container}>
      <Header handleLogin={handleLogin} />
      <main className={styles.main}>
        <FarmPage isModalOpen={isModalOpen} />
      </main>
    </div>
  );
};

export default Home;
