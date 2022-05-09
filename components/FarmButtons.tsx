import type { FC } from "react";

import styles from "../styles/FarmButtons.module.css";

interface FarmButtonsProps {
  isFarmButtonDisabled: boolean;
  isUnfarmButtonDisabled: boolean;
  onFarmButtonClick: () => void;
  onUnfarmButtonClick: () => void;
  loading: boolean;
}

const FarmButtons: FC<FarmButtonsProps> = ({
  isFarmButtonDisabled,
  isUnfarmButtonDisabled,
  onFarmButtonClick,
  onUnfarmButtonClick,
  loading = true,
}) => {
  return (
    <div className={styles.container}>
      <button
        onClick={onFarmButtonClick}
        disabled={isFarmButtonDisabled}
        type="button"
      >
        {loading ? <div className={styles.loadingSpinner} /> : "Farm"}
      </button>
      <button
        onClick={onUnfarmButtonClick}
        disabled={isUnfarmButtonDisabled}
        type="button"
      >
        {loading ? <div className={styles.loadingSpinner} /> : "Unfarm"}
      </button>
    </div>
  );
};

export default FarmButtons;
