import React from "react";
import styles from "@/styles/layout/Header.module.scss";
import Link from "next/link";
import { RiMovie2Line } from "react-icons/ri";
import Navlinks from "../navlinks/NavLinks";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <Link href="/">
          <RiMovie2Line />
          <h6>
            Movieverse<span>Plex</span>
          </h6>
        </Link>
        <div className={styles.navContainer}>
          <Navlinks />
        </div>
      </nav>
    </header>
  );
};

export default Header;
