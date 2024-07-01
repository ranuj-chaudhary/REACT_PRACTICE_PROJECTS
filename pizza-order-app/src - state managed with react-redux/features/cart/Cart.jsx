import CartItem from "./CartItem";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { emptyCart } from "../../store";

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  return (
    <div className="p-6">
      <Button to="/menu">&larr; Back to menu</Button>

      <ul className="flex flex-col justify-center gap-6 py-6">
        {cart.map((item, idx) => (
          <CartItem item={item} key={idx} />
        ))}
        {cart.length == 0 && (
          <p className="mt-8 text-center">
            Cart is empty. Go back to menu add new item to cart. 👈
          </p>
        )}
      </ul>

      {cart.length != 0 && (
        <div className="flex items-end justify-end gap-2">
          <Button to="/order/new" type="link">
            Order pizzas
          </Button>
          <Button onClick={() => dispatch(emptyCart())} type="primary">
            Clear cart
          </Button>
        </div>
      )}
    </div>
  );
}

export default Cart;
