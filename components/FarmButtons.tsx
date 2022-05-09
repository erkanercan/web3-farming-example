import type { FC } from "react";

import styles from "../styles/FarmButtons.module.css";

interface FarmButtonsProps {
  isFarmButtonDisabled: boolean;
  isUnfarmButtonDisabled: boolean;
  onFarmButtonClick: () => void;
  onUnfarmButtonClick: () => void;
}

const FarmButtons: FC<FarmButtonsProps> = ({
  isFarmButtonDisabled,
  isUnfarmButtonDisabled,
  onFarmButtonClick,
  onUnfarmButtonClick,
}) => {
  return (
    <div className={styles.container}>
      <button
        onClick={onFarmButtonClick}
        disabled={isFarmButtonDisabled}
        type="button"
      >
        Farm
      </button>
      <button
        onClick={onUnfarmButtonClick}
        disabled={isUnfarmButtonDisabled}
        type="button"
      >
        Unfarm
      </button>
    </div>
  );
};

export default FarmButtons;
