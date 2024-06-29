import { formatCurrency } from "../../utils/helpers";

function OrderItem({ item, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li > 
      <div className="flex justify-between my-8 text-slate-700">
        <p>
          <span>{quantity}&times;</span> {name} <br/>
          <span >{ingredients}</span>
        </p>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default OrderItem;
