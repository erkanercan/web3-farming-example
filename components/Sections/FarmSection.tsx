import { useWeb3React } from "@web3-react/core";
import { useCallback, useState } from "react";

import { useRewardedStonesAndLockedAmount } from "../../hooks/useRewardedStonesAndLockedAmount";
import farmSectionStyles from "../../styles/FarmSection.module.css";
import { farmTokens, unfarmTokens } from "../../utils/transactions";
import Card from "../Card";
import FarmButtons from "../FarmButtons";
import InputGroup from "../InputGroup";

const FarmSection = () => {
  const [extAmount, setEXTAmount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const { rewardedStones, lockedAmount, extBalance } =
    useRewardedStonesAndLockedAmount();
  const { account } = useWeb3React();

  const handleFarmButtonClick = useCallback(async () => {
    setLoading(true);
    setErrMessage("");
    if (account)
      await farmTokens(extAmount, account)
        .catch((reason: any) => setErrMessage(reason.message))
        .finally(() => setLoading(false));
  }, [account, extAmount]);

  const handleUnfarmButtonClick = useCallback(async () => {
    setLoading(true);
    setErrMessage("");
    if (account)
      unfarmTokens(extAmount)
        .catch((reason: any) => setErrMessage(reason.message))
        .finally(() => setLoading(false));
  }, [account, extAmount]);

  const handleEXTAmountChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setEXTAmount(Number(event.target.value));
    },
    []
  );

  const decideFarmButtonDisabled = useCallback(() => {
    if (extAmount <= 0 || extAmount > extBalance) {
      // Disabled
      return true;
    }
    // Enabled
    return false;
  }, [extAmount, extBalance]);

  const decideUnfarmButtonDisabled = useCallback(() => {
    if (extAmount <= 0 || extAmount > lockedAmount) {
      // Disabled
      return true;
    }
    // Enabled
    return false;
  }, [extAmount, lockedAmount]);

  return (
    <Card className={farmSectionStyles.container}>
      <InputGroup
        name="amount"
        label="EXT Amount"
        placeholder="Enter EXT Amount"
        type="number"
        suffix="EXT"
        value={extAmount}
        onChange={handleEXTAmountChange}
        disabled={!account}
        errMessage={errMessage}
      />
      <FarmButtons
        isFarmButtonDisabled={decideFarmButtonDisabled() || loading}
        isUnfarmButtonDisabled={decideUnfarmButtonDisabled() || loading}
        onFarmButtonClick={handleFarmButtonClick}
        onUnfarmButtonClick={handleUnfarmButtonClick}
        loading={loading}
      />
      <div className={farmSectionStyles.disabledGroup}>
        <InputGroup
          name="earned"
          label="Earned Stones"
          placeholder="-"
          type="number"
          disabled
          value={rewardedStones}
        />
        <InputGroup
          name="balance"
          label="EXT Balance"
          placeholder="-"
          type="number"
          disabled
          value={extBalance}
        />
        <InputGroup
          name="locked"
          label="Locked EXT"
          placeholder="-"
          type="number"
          disabled
          value={lockedAmount}
        />
      </div>
    </Card>
  );
};

export default FarmSection;
