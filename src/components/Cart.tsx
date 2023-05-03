import { useSelector } from "react-redux";
import { RootState } from "../store";
import styles from "./Cart.module.css";
import { CartItemCard } from "./CartItemCard";
import { currencyFormatter } from "../utils/currencyFormatter";

const TAX_RATE = 0.05;

export function Cart() {
  const { cartItems, totalQuantity, totalPrice } = useSelector(
    (state: RootState) => state.cart
  );

  const tax = totalPrice * TAX_RATE;
  const subTotal = totalPrice;
  const total = tax + subTotal;

  return (
    <div className={styles.container}>
      <div className={styles["item-list"]}>
        {cartItems.map((item) => (
          <CartItemCard cartItem={item} />
        ))}
        {cartItems.length === 0 && (
          <span className={styles["empty-msg"]}>No items</span>
        )}
      </div>
      <div className={styles["info-list"]}>
        <div className={styles.info}>
          <span>{`Tax ${TAX_RATE * 100}%`}</span>
          <span>{currencyFormatter.format(tax)}</span>
        </div>
        <div className={styles.info}>
          <span>Subtotal</span>
          <span>{currencyFormatter.format(subTotal)}</span>
        </div>
        <div className={styles.info}>
          <strong>Total</strong>
          <strong>{currencyFormatter.format(total)}</strong>
        </div>
      </div>
      <div className={styles.actions}>
        <button>Place Order</button>
      </div>
    </div>
  );
}
