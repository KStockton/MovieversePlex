import NavLink from "@/components/navlinks/NavLink/NavLink";
import styles from "@/styles/components/NavLinks.module.scss";

const links = [
  { name: "Home", path: "/" },
  { name: "Movies", path: "/movies" },
];

const NavLinks = () => {
  return (
    <div className={styles.container}>
      <ul>
        {links.map((link) => (
          <li key={link.name}>
           <NavLink item={link} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavLinks;
