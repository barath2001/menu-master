import { Cart } from "../components/Cart";
import { MenuList } from "../components/MenuList";
import styles from "./Menu.module.css";

export function Menu() {
  return (
    <div className={styles.container}>
      <MenuList />
      <Cart />
    </div>
  );
}
