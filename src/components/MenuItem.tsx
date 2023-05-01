import styles from "./MenuItem.module.css";
import { currencyFormatter } from "../utils/currencyFormatter";

type MenuItemProps = {
  name: string;
  description: string;
  price: number;
  image: string;
  onAddToCart: () => void;
};

export function MenuItem({
  name,
  description,
  price,
  image,
  onAddToCart,
}: MenuItemProps) {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h4>{name}</h4>
        <span>
          <p>{currencyFormatter.format(price)}</p>
        </span>
      </div>
      <div className={styles.actions}>
        <button className={styles["primary-btn"]} onClick={onAddToCart}>
          Add
        </button>
        <button className={styles["secondary-btn"]}>More info</button>
      </div>
    </div>
  );
}
