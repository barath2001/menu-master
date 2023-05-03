import { CartItem } from "../store/cart-slice";
import styles from "./CartItemCard.module.css";
import { currencyFormatter } from "../utils/currencyFormatter";
import deleteIcon from "../images/delete-icon.png";
import { useDispatch } from "react-redux";
import {
  addItemToCart,
  removeItemFromCart,
  deleteItemFromCart,
} from "../store/cart-slice";

export function CartItemCard({ cartItem }: { cartItem: CartItem }) {
  const dispatch = useDispatch();

  function increaseQuantityHandler() {
    dispatch(
      addItemToCart({
        id: cartItem.id,
        name: cartItem.name,
        price: cartItem.price,
      })
    );
  }

  function decreaseQuantityHandler() {
    dispatch(removeItemFromCart(cartItem.id));
  }

  function deleteHandler() {
    dispatch(deleteItemFromCart(cartItem.id));
  }

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <span>{cartItem.name}</span>
        <span>{currencyFormatter.format(cartItem.totalAmount)}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["qty-btn"]} onClick={decreaseQuantityHandler}>
          -
        </button>
        <span>{cartItem.quantity}</span>
        <button className={styles["qty-btn"]} onClick={increaseQuantityHandler}>
          +
        </button>
        <button className={styles["delete-btn"]} onClick={deleteHandler}>
          <img src={deleteIcon} />
        </button>
      </div>
    </div>
  );
}
