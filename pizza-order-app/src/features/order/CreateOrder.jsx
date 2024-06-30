import { useEffect, useState } from "react";
import { Form, redirect, useActionData, useNavigate } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import { useUser } from "../../context/UserContext";
import Button from "../../ui/Button";

// https://uibakery.io/regex-library/phone-number

const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const navigate = useNavigate();
  const { cart } = useUser();
  const order = useActionData();

  useEffect(function () {
    if (cart.length == 0) navigate("/menu");
  }, []);

  return (
    <div className="pt-8">
      <h2>Ready to order? Let's go!</h2>
      <Form method="post" action="/order/new" className="pt-2">
        <div>
          <label>First Name</label>
          <input
            type="text"
            name="customer"
            required
            className="my-2 w-full border border-stone-900 bg-slate-100 p-3"
            autoComplete="off"
          />
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <input
              type="tel"
              name="phone"
              required
              className="my-2 w-full border border-stone-900 bg-slate-100 p-3"
              autoComplete="off"
            />
          </div>
        </div>

        <div>
          <label>Address</label>
          <div>
            <input
              type="text"
              name="address"
              required
              className="my-2 w-full border border-stone-900 bg-slate-100 p-3"
              autoComplete="off"
            />
          </div>
        </div>

        <div className="py-3">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button type="primary">Order now</Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "true",
  };
  const newOrder = await createOrder(order);

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
