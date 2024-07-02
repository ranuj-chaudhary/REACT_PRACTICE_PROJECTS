import {useState } from "react";
import { Form, redirect, useActionData } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";
import { useSelector } from "react-redux";
import store from "../../store";
import { emptyCart } from "../../store";
// https://uibakery.io/regex-library/phone-number

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);

  const cart = useSelector((state) => state.cart.cart);
  const errors = useActionData();

 
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
          {errors?.username && (
            <span className="text-red-600">{errors.username}</span>
          )}
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
            {errors?.phone && (
              <span className="text-red-600">{errors.phone}</span>
            )}
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

  // FORM ERROR HANDLING
  let errors = {};
  let userPattern = /^[a-zA-Z ]*$/;

  let validUsername = userPattern.test(data.username);
  if (!validUsername) {
    errors.username =
      "This doesn't look like valid username only aphabets are allowed.";
  }

  let mobileNumberPattern =
  /^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/;
  let validMobileNumber = mobileNumberPattern.test(data.phone);

  if (!validMobileNumber) {
    errors.phone = "That doesn't look like valid mobile number.";
  }

  if (Object.keys(errors).length) {
    return errors;
  }

  const newOrder = await createOrder(order);
  // EMPTY CART AFTER RECIEVING ORDER
  store.dispatch(emptyCart());

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
