import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../images/logo.png";

export function Navbar() {
  const navLinkClassName = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? styles["nav-link-active"] + " " + styles["nav-link"]
      : styles["nav-link"];

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link to={"/"} className={styles.logo}>
          <img src={logo} className={styles["logo-img"]} alt="logo" />
          <h2 className={styles["logo-text"]}>Menu Master</h2>
        </Link>
        <ul className={styles["nav-link-list"]}>
          <li>
            <NavLink to={"/"} className={navLinkClassName}>
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to={"/queue"} className={navLinkClassName}>
              Queue
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
