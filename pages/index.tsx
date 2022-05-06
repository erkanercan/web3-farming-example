import type { NextPage } from "next";
import Image from "next/image";

import Card from "../components/Card";
import FarmButtons from "../components/FarmButtons";
import Header from "../components/Header";
import InputGroup from "../components/InputGroup";
import farmSectionStyles from "../styles/FarmSection.module.css";
import styles from "../styles/Home.module.css";
import stoneSupplyStyles from "../styles/StoneSupply.module.css";
import topStoneStyles from "../styles/TopStone.module.css";

const farmers = [
  {
    name: "John Doe",
    amount: "1,000",
  },
  {
    name: "Jane Doe",
    amount: "1,000",
  },
  {
    name: "Jack Doe",
    amount: "1,000",
  },
  {
    name: "Jill Doe",
    amount: "1,000",
  },
  {
    name: "John Doe",
    amount: "1,000",
  },
  {
    name: "Jane Doe",
    amount: "1,000",
  },
  {
    name: "Jack Doe",
    amount: "1,000",
  },
  {
    name: "Jill Doe",
    amount: "1,000",
  },
  {
    name: "John Doe",
    amount: "1,000",
  },
  {
    name: "Jane Doe",
    amount: "1,000",
  },
];

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <div className={styles.farmPageContainer}>
          <Card className={stoneSupplyStyles.container}>
            <h2 className={stoneSupplyStyles.title}>Stone Supply</h2>
            <p className={stoneSupplyStyles.secondaryTitle}>
              Lock your EXT to farm stones and redeem exclusive NFTs.
            </p>
            <div className={stoneSupplyStyles.stoneImg}>
              <Image src="/stone-supply.png" width={242} height={242} />
            </div>
            <p className={stoneSupplyStyles.stoneNote}>
              The farming rate is 1000 stones per EXT every 24 hours.This will
              lock your EXT in the Ethernity Farming Smart Contract. You may
              unfarm your EXT anytime you want.If your stones balance is not
              updating in real-time, try refreshing the page.
            </p>
          </Card>
          <Card className={farmSectionStyles.container}>
            <InputGroup
              name="amount"
              label="EXT Amount"
              placeholder="Enter EXT Amount"
              type="number"
              onChange={() => {}}
              suffix="EXT"
            />
            <FarmButtons />
            <div className={farmSectionStyles.disabledGroup}>
              <InputGroup
                name="earned"
                label="Earned Stones"
                placeholder="-"
                type="number"
                disabled
              />
              <InputGroup
                name="balance"
                label="EXT Balance"
                placeholder="-"
                type="number"
                disabled
              />
              <InputGroup
                name="locked"
                label="Locked EXT"
                placeholder="-"
                type="number"
                disabled
              />
            </div>
          </Card>
          <Card className={topStoneStyles.container}>
            <h2 className={topStoneStyles.title}>Top Stones Farmers</h2>
            <p className={topStoneStyles.subTitle}>
              Farmers that have not migrated their stones are not considered.
            </p>

            {farmers.map((farmer, index) => (
              <div
                className={topStoneStyles.farmerRow}
                key={`${farmer.amount}-${farmer.name}`}
              >
                <div className={topStoneStyles.farmerIndex}>{index + 1}.</div>
                <div className={topStoneStyles.farmerInfo}>
                  <img
                    alt="farmer"
                    className={topStoneStyles.farmerImg}
                    src="https://source.unsplash.com/user/c_v_r/32x32"
                  />
                  <div className={topStoneStyles.farmerAmountInfo}>
                    <div className={topStoneStyles.farmerName}>
                      @{farmer.name}
                    </div>
                    <div className={topStoneStyles.farmerAmount}>
                      {farmer.amount}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className={topStoneStyles.divider} />
            <div className={topStoneStyles.farmerRow}>
              <div className={topStoneStyles.farmerIndex}>999.</div>
              <div className={topStoneStyles.farmerInfo}>
                <img
                  alt="farmer"
                  className={topStoneStyles.farmerImg}
                  src="https://source.unsplash.com/user/c_v_r/32x32"
                  loading="lazy"
                />
                <div className={topStoneStyles.farmerAmountInfo}>
                  <div className={topStoneStyles.farmerName}>@Erkan</div>
                  <div className={topStoneStyles.farmerAmount}>0</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Home;
