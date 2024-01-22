"use client";

import Link from "next/link";
import styles from "@/styles/components/NavLink.module.scss";
import { usePathname } from "next/navigation";

const NavLink = ({ item }) => {
  const pathName = usePathname();
  const isActive = pathName === item.path;

    return (
    <Link
      href={item.path}
      className={`${styles.link} ${isActive && styles.active} `}
    >
      {item.name}
    </Link>
  );
};

export default NavLink;

