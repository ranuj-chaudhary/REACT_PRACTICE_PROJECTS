import { useUser } from "../../context/UserContext";
import { formatCurrency } from "../../utils/helpers";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice, unitPrice } = item;
  const { cart } = useUser();

 

  return (
    <li className="flex justify-between  border-b-4 border-yellow-400 bg-slate-300 p-4 font-bold">
      <p>
        {quantity}&times; {formatCurrency(unitPrice)} {name}
      </p>
      <div>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default CartItem;
