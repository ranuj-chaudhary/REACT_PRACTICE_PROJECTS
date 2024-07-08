// Test ID: IIDSAT , PF0APX , YQJDKF, JHN1T4 (with ingredients), XRCR3P

import { useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import OrderItem from "./OrderItem";
import Button from "../../ui/Button";
function Order() {
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address,
  //  these are only for the restaurant staff
  const order = useLoaderData();

  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;

  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="mt-8">
      <div className="flex items-center justify-between text-xl">
        <h2> Order #{id} Status </h2>

        <div className="flex gap-6">
          {priority && (
            <span className="rounded-full bg-red-400 px-4 py-2 font-bold uppercase text-white">
              Priority
            </span>
          )}
          <span className="rounded-full bg-green-500 px-4 py-2 font-bold uppercase text-white">
            {status} order
          </span>
        </div>
      </div>

      <div className="my-6 flex justify-between bg-slate-200 p-6 text-xl font-bold">
        <p>
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p>(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>
      <ul>
        {cart.map((item, idx) => {
          return (
            <OrderItem
              item={item}
              ingredients={item.addIngredients.join(", ")}
              key={idx}
            />
          );
        })}
      </ul>
      <div className="flex justify-between text-2xl ">
        <p>Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
        <p>To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
      </div>
      <div className="my-6 flex justify-center">
        <Button to={"/menu"}>Order Again</Button>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  const { orderId } = params;
  const order = await getOrder(orderId);

  return order;
}

export default Order;

