import { useWeb3React } from "@web3-react/core";
import type { FC } from "react";
import { useCallback, useEffect, useState } from "react";

import styles from "../styles/Home.module.css";
import { connectors, checkIfChainIsSupported } from "../utils/connectors";

import Modal from "./Modal";
import FarmSection from "./Sections/FarmSection";
import StoneSupply from "./Sections/StoneSupply";
import TopStone from "./Sections/TopStone";

interface FarmPageProps {
  isModalOpen: boolean;
}
const FarmPage: FC<FarmPageProps> = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { account, activate, chainId } = useWeb3React();

  useEffect(() => {
    if (!account) {
      activate(connectors.injected);
    }
  }, []);

  useEffect(() => {
    const supported = checkIfChainIsSupported(chainId);
    if (!supported && account) {
      setIsModalOpen(true);
    }
  }, [account, chainId]);

  const handleModalClose = useCallback(() => {
    const supported = checkIfChainIsSupported(chainId);
    if (supported) {
      setIsModalOpen(false);
    }
  }, [chainId]);

  return (
    <>
      <Modal show={isModalOpen} onClose={handleModalClose} />
      <div className={styles.farmPageContainer}>
        <StoneSupply />
        <FarmSection />
        <TopStone />
      </div>
    </>
  );
};
export default FarmPage;
