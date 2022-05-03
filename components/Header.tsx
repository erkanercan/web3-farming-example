import Image from "next/image";
import Link from "next/link";
import menuData from "../data/menuData";
import styles from "../styles/Header.module.css";
import SearchIcon from "./SearchIcon";
import SignButtonGroup from "./SignButtonGroup";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.navContainer}>
          <figure className={styles.logo}>
            <Image src="/extrawatts.svg" height={24} width={162} />
          </figure>
          <div className={styles.desktopNav}>
            <div className={styles.leftContainer}>
              {menuData.map((item, index) => {
                return (
                  <Link href={item.path}>
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
              <SignButtonGroup />
            </div>
          </div>
          <div className={styles.mobileNav}></div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
