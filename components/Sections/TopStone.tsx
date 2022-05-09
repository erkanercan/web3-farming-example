import { farmers } from "../../constants";
import topStoneStyles from "../../styles/TopStone.module.css";
import Card from "../Card";

const TopStone = () => {
  return (
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
              <div className={topStoneStyles.farmerName}>@{farmer.name}</div>
              <div className={topStoneStyles.farmerAmount}>{farmer.amount}</div>
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
  );
};

export default TopStone;
