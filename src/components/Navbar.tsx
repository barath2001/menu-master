import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

export function Navbar() {
  return (
    <nav className={styles.nav}>
      <h2>Menu Master</h2>
      <ul className={styles["nav-links"]}>
        <li>
          <NavLink
            to={"/"}
            style={({ isActive }) => (isActive ? { fontWeight: "bold" } : {})}
          >
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/queue"}
            style={({ isActive }) => (isActive ? { fontWeight: "bold" } : {})}
          >
            Queue
          </NavLink>
        </li>
      </ul>
      <div>{`Cart ( ${"0"} )`}</div>
    </nav>
  );
}
