import styles from "./MenuItem.module.css";
import { currencyFormatter } from "../utils/currencyFormatter";

type MenuItemProps = {
  name: string;
  description: string;
  price: number;
  image: string;
};

export function MenuItem({ name, description, price, image }: MenuItemProps) {
  return (
    <div className={styles.container}>
      <div className={styles.img}>image</div>
      <div className={styles.details}>
        <h3>{name}</h3>
        <p>{description}</p>
        <p>{currencyFormatter.format(price)}</p>
        <button>Add</button>
      </div>
    </div>
  );
}
