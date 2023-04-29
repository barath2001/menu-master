import foodItems from "../data/foodItems.json";
import { MenuItem } from "./MenuItem";
import styles from "./MenuList.module.css";

export function MenuList() {
  console.log(foodItems);
  return (
    <div className={styles.container}>
      {foodItems.map((item) => (
        <MenuItem
          key={item.id}
          name={item.name}
          description={item.description}
          price={item.price}
          image={item.image}
        />
      ))}
    </div>
  );
}
