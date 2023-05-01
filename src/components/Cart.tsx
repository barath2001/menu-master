import { useSelector } from "react-redux";
import { RootState } from "../store";

export function Cart() {
  const { cartItems, totalQuantity, totalPrice } = useSelector(
    (state: RootState) => state.cart
  );

  return (
    <div>
      <p>{totalQuantity}</p>
      <p>{totalPrice}</p>
    </div>
  );
}
