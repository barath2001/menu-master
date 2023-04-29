import { MenuList } from "../components/MenuList";
import styles from "./Menu.module.css";

export function Menu() {
  return (
    <div className={styles.container}>
      <MenuList />
    </div>
  );
}
