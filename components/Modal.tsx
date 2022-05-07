import Image from "next/image";
import type { FC } from "react";
import { useEffect, useState } from "react";

import styles from "../styles/Modal.module.css";

interface ModalProps {
  show: boolean;
}

const Modal: FC<ModalProps> = ({ show }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    setIsModalOpen(show);
  }, [show]);
  if (!isModalOpen) {
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div role="button" onClick={() => setIsModalOpen(false)} aria-hidden>
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
        <div className={styles.body}>
          <span className={styles.title}>Connect wallet</span>
          <div className={styles.providerLogosContainer}>
            <div>
              <figure className={styles.providerLogo}>
                <Image
                  alt="metamask-icon"
                  src="/metamask.svg"
                  width={136}
                  height={136}
                />
              </figure>
              <span className={styles.providerTitle}>Metamask</span>
            </div>
            <div>
              <figure className={styles.providerLogo}>
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
          <button type="button" className={styles.connectButton}>
            Connect
          </button>
          <div className={styles.footerTextContainer}>
            <span>Want to leave it for later?</span>{" "}
            <span className={styles.skipText}>Skip</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
