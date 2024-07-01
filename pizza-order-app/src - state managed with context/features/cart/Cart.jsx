import { Link } from "react-router-dom";
import { useUser } from "../../context/UserContext";

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];
import CartItem from "./CartItem";
import { EMPTY_CART } from "../../context/UserContext";
import Button from "../../ui/Button";

function Cart() {
  const { cart, dispatch } = useUser();

  function handleEmptyCart() {
    dispatch({ type: EMPTY_CART });
  }

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
          <Button onClick={handleEmptyCart} type="primary">
            Clear cart
          </Button>
        </div>
      )}
    </div>
  );
}

export default Cart;
