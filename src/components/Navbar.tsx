import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../images/logo.png";
import cartIcon from "../images/cart-icon.png";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export function Navbar() {
  const cartTotalQuantity = useSelector(
    (state: RootState) => state.cart.totalQuantity
  );

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
        <button className={styles["cart-btn"]}>
          <img src={cartIcon} className={styles["cart-icon"]} />
          <div className={styles["cart-number"]}>{cartTotalQuantity}</div>
        </button>
      </nav>
    </header>
  );
}
