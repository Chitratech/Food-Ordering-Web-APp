import { useDispatch, useSelector } from "react-redux";
import CartItems from "./CartItems";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const allItems = useSelector((store) => store.cart.items);
const dispatch= useDispatch();
  const clearItems=()=>{
    dispatch(clearCart());
  }
  // Calculate the total cart value using reduce
  const total = allItems.reduce((acc, item) => acc + item.card.info.price, 0);

  return (
    <>
      <h1 className="p-4 font-bold">Added {allItems.length} Items in Cart </h1>

<button onClick={clearItems} > Clear Cart</button>
      {allItems.map((item) => (
        <CartItems key={item.card.info.id} {...item.card.info} />
      ))}
      <div>Total: {total / 100}</div>
    </>
  );
}

export default Cart;
