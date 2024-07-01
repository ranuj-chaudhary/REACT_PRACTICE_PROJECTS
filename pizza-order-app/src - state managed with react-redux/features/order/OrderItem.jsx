import { formatCurrency } from "../../utils/helpers";

function OrderItem({ item, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li>
      <div className="my-8 flex justify-between border-b-2 border-b-slate-300 text-slate-700">
        <p>
          <span>{quantity}&times;</span> {name} <br />
          <span className="font-sans italic text-slate-500">{ingredients}</span>
        </p>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default OrderItem;
