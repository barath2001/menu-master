import foodItems from "../data/foodItems.json";
import { MenuItem } from "./MenuItem";
import styles from "./MenuList.module.css";
import { FoodItem } from "../data/type";

import { useDispatch } from "react-redux";
import { addItemToCart } from "../store/cart-slice";

export function MenuList() {
  const dispatch = useDispatch();

  function addToCartHandler(item: FoodItem) {
    dispatch(addItemToCart(item));
  }

  return (
    <div className={styles.container}>
      {foodItems.map((item) => (
        <MenuItem
          key={item.id}
          name={item.name}
          description={item.description}
          price={item.price}
          image={item.image}
          onAddToCart={addToCartHandler.bind(null, item)}
        />
      ))}
    </div>
  );
}
