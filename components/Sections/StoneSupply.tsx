import Image from "next/image";

import Card from "../Card";
import stoneSupplyStyles from "../../styles/StoneSupply.module.css";

const StoneSupply = () => {
  return (
    <Card className={stoneSupplyStyles.container}>
      <h2 className={stoneSupplyStyles.title}>Stone Supply</h2>
      <p className={stoneSupplyStyles.secondaryTitle}>
        Lock your EXT to farm stones and redeem exclusive NFTs.
      </p>
      <div className={stoneSupplyStyles.stoneImg}>
        <Image
          alt="stone-supply"
          src="/stone-supply.png"
          width={242}
          height={242}
        />
      </div>
      <p className={stoneSupplyStyles.stoneNote}>
        The farming rate is 1000 stones per EXT every 24 hours.This will lock
        your EXT in the Ethernity Farming Smart Contract. You may unfarm your
        EXT anytime you want.If your stones balance is not updating in
        real-time, try refreshing the page.
      </p>
    </Card>
  );
};

export default StoneSupply;
