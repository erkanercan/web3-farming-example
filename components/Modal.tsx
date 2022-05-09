/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useWeb3React } from "@web3-react/core";
import Image from "next/image";
import type { FC } from "react";
import { useCallback, useState } from "react";

import styles from "../styles/Modal.module.css";
import { checkIfChainIsSupported, connectors } from "../utils/connectors";

import Spinner from "./Spinner";

interface ModalProps {
  show: boolean;
  onClose: () => void;
}

const Modal: FC<ModalProps> = ({ show, onClose }) => {
  const [selectedWallet, setSelectedWallet] = useState<number | null>(null);
  const { activate, chainId, account } = useWeb3React();

  const handleWalletSelect = (event: React.MouseEvent<HTMLElement>) => {
    setSelectedWallet(Number(event.currentTarget.id));
  };

  const handleConnect = useCallback(async () => {
    if (selectedWallet === null) return;
    if (selectedWallet === 1) {
      await activate(connectors.walletConnect);
    } else {
      await activate(connectors.injected);
    }
  }, [activate, selectedWallet]);

  // eslint-disable-next-line consistent-return
  const decideBody = useCallback(() => {
    if (!account) {
      return (
        <>
          <span className={styles.title}>Connect wallet</span>
          <div className={styles.providerLogosContainer}>
            <div onClick={handleWalletSelect} id="0">
              <figure
                className={`${styles.providerLogo} ${
                  selectedWallet === 0 && styles.providerLogoSelected
                }`}
              >
                <Image
                  alt="metamask-icon"
                  src="/metamask.svg"
                  width={136}
                  height={136}
                />
              </figure>
              <span className={styles.providerTitle}>Metamask</span>
            </div>
            <div onClick={handleWalletSelect} id="1">
              <figure
                className={`${styles.providerLogo} ${
                  selectedWallet === 1 && styles.providerLogoSelected
                }`}
              >
                <Image
                  alt="walletconnect-icon"
                  src="/walletc.svg"
                  width={136}
                  height={136}
                />
              </figure>
              <span className={styles.providerTitle}>Wallet Connect</span>
            </div>
          </div>
          <button
            type="button"
            className={styles.connectButton}
            onClick={handleConnect}
          >
            Connect
          </button>
          <div className={styles.footerTextContainer}>
            <span>Want to leave it for later?</span>{" "}
            <span className={styles.skipText}>Skip</span>
          </div>
        </>
      );
    }
    if (!checkIfChainIsSupported(chainId)) {
      return (
        <>
          <Spinner />
          <span className={styles.connectingText}>
            Please connect your wallet to Rinkeby
          </span>
        </>
      );
    }
    onClose();
  }, [account, chainId, handleConnect, onClose, selectedWallet]);

  if (!show) {
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <figure className={styles.logo}>
            <Image
              alt="extrawatts logo"
              src="/extrawatts.svg"
              height={24}
              width={162}
            />
          </figure>
          <div role="button" onClick={onClose} aria-hidden>
            <figure className={styles.closeIcon}>
              <Image
                alt="close-icon"
                src="/modalCloseIcon.svg"
                width={28}
                height={28}
              />
            </figure>
          </div>
        </div>
        <div className={styles.body}>{decideBody()}</div>
      </div>
    </div>
  );
};

export default Modal;
