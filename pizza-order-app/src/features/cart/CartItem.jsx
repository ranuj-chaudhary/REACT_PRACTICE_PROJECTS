import { useUser } from "../../context/UserContext";
import { formatCurrency } from "../../utils/helpers";
import DeleteCartItem from "./DeleteCartItem";
import UpdateItemQuantity from "./UpdateItemQuantityButton";

function CartItem({ item }) {
  const { pizzaId, name, quantity, unitPrice } = item;
  const { cart } = useUser();
  const { totalPrice } = cart.find((item) => item.pizzaId == pizzaId);
  return (
    <li className="flex justify-between items-center  border-b-4 border-yellow-400 bg-slate-300 p-4 font-bold">
      <p>
        {quantity}&times; {formatCurrency(unitPrice)} {name}
      </p>
      <div className="flex items-center">
        <p>{formatCurrency(totalPrice)}</p>
        <UpdateItemQuantity id={pizzaId} />
        <DeleteCartItem id={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
