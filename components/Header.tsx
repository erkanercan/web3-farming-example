import { useWeb3React } from "@web3-react/core";
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";
import { useCallback, useState } from "react";
import { menuData } from "../constants";

import styles from "../styles/Header.module.css";

import SearchIcon from "./SearchIcon";
import SignButtonGroup from "./SignButtonGroup";

interface HeaderProps {
  handleLogin: () => void;
}

const Header: FC<HeaderProps> = ({ handleLogin }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { account } = useWeb3React();
  const handleMenuOpen = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.navContainer}>
          <figure className={styles.logo}>
            <Image
              alt="extrawatts logo"
              src="/extrawatts.svg"
              height={24}
              width={162}
            />
          </figure>
          <div className={styles.desktopNav}>
            <div className={styles.leftContainer}>
              {menuData.map((item, index) => {
                return (
                  <Link href={item.path} key={item.name}>
                    <div
                      className={`${styles.menuItem} ${
                        // EXP: Hardcoded the index for the task, but it can be dynamic according to the menu
                        // item index and active route, I just didn't wanted to waste time on that
                        index === 2 ? styles.active : ""
                      }`}
                    >
                      <a>{item.name}</a>
                    </div>
                  </Link>
                );
              })}
            </div>
            <div className={styles.rightContainer}>
              <SearchIcon />
              {!account ? (
                <SignButtonGroup onLogin={handleLogin} />
              ) : (
                <div>
                  {account.substring(0, 4)}...{account.substring(17, 20)}
                </div>
              )}
            </div>
          </div>
          <div className={styles.mobileNav}>
            <button type="button" onClick={handleMenuOpen}>
              <figure>
                {isOpen ? (
                  <Image
                    alt="close menu"
                    src="/closeIcon.svg"
                    height={32}
                    width={32}
                  />
                ) : (
                  <Image
                    alt="open menu"
                    src="/menuIcon.svg"
                    height={32}
                    width={32}
                  />
                )}
              </figure>
            </button>
          </div>
        </nav>
      </div>
      {isOpen && (
        <div className={styles.mobileMenu}>
          {!account ? (
            <SignButtonGroup onLogin={handleLogin} />
          ) : (
            <div>
              {account.substring(0, 4)}...{account.substring(17, 20)}
            </div>
          )}
          {menuData.map((item, index) => {
            return (
              <div
                className={`${styles.mobileMenuItemContainer} ${
                  // EXP: Hardcoded the index for the task, but it can be dynamic according to the menu
                  // item index and active route, I just didn't wanted to waste time on that
                  index === 2 ? styles.active : ""
                }`}
                key={item.name}
              >
                <Link href={item.path}>
                  <div
                    className={`${styles.mobileMenuItem} ${
                      // EXP: Hardcoded the index for the task, but it can be dynamic according to the menu
                      // item index and active route, I just didn't wanted to waste time on that
                      index === 2 ? styles.active : ""
                    }`}
                  >
                    <a>{item.name}</a>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </header>
  );
};

export default Header;
