import styles from "../styles/FarmButtons.module.css";

const FarmButtons = () => {
  return (
    <div className={styles.container}>
      <button type="button" className={styles.farmButton}>
        Farm
      </button>
      <button type="button" className={styles.unFarmButton}>
        Unfarm
      </button>
    </div>
  );
};

export default FarmButtons;
