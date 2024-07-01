import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/helpers";
import { useSelector } from "react-redux";

function CartOverview() {
  const cart = useSelector((state) => state.cart.cart);

  const totolOrderPrice = cart.reduce(
    (acc, curr) => acc + curr.quantity * curr.unitPrice,
    0
  );

  if (cart.length == 0) return null;

  return (
    <div className="flex justify-between bg-black/90 p-6 font-bold text-white">
      <p className="flex gap-2">
        <span>{`${cart.length} pizzas /`}</span>
        <span>{`${formatCurrency(totolOrderPrice)}`}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
