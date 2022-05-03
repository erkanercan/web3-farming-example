import styles from "../styles/FarmButtons.module.css";

const FarmButtons = () => {
  return (
    <div className={styles.container}>
      <button className={styles.farmButton}>Farm</button>
      <button className={styles.unFarmButton}>Unfarm</button>
    </div>
  );
};

export default FarmButtons;
