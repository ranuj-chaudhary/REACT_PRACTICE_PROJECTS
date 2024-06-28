import { useEffect, useState } from "react";
import { formatCurrency } from "../../utils/helpers";
import { getOrder } from "../../services/apiRestaurant";
import { useUser } from "../../context/UserContext";
import {
  INSERT_CART_ITEM,
  REMOVE_CURRENT_ITEM,
} from "../../context/UserContext";

function MenuItem({ pizza }) {
  const [quantity, setQuantity] = useState(1);
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const [currentQuantity, setCurrentQuantity] = useState(0);
  const { dispatch } = useUser();

  const cartItem = {
    id,
    name,
    unitPrice,
    imageUrl,
    quantity,
  };

  useEffect(
    function () {
      if (quantity < 1) {
        dispatch({ type: INSERT_CART_ITEM, payload: cartItem });
        setCurrentQuantity(0);
        setQuantity(1);
      } else if (quantity > 1) {
        dispatch({ type: INSERT_CART_ITEM, payload: cartItem });
      }
    },
    [quantity]
  );

  function handleAddToCart() {
    if (!soldOut) {
      setCurrentQuantity(1);
      setQuantity(1);
    }
    dispatch({ type: INSERT_CART_ITEM, payload: cartItem });
  }

  function handleDeleteFromCart() {
    setCurrentQuantity(0);
    dispatch({ type: REMOVE_CURRENT_ITEM, payload: { id } });
  }

  return (
    <li className="flex p-6">
      <img src={imageUrl} alt={name} />
      <div className="p-6">
        <p>{name} </p>
        <p>{ingredients.join(", ")}</p>
        {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
        <div className="flex gap-6">
          {currentQuantity > 0 && (
            <div className="button">
              <button
                className="m-2 rounded-full bg-yellow-300 px-4 py-3"
                onClick={() => setQuantity((quantity) => quantity - 1)}
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                className="m-2 rounded-full bg-yellow-300 px-4 py-3"
                onClick={() => setQuantity((quantity) => quantity + 1)}
              >
                +
              </button>
            </div>
          )}
          <div className="m-2">
            {currentQuantity == 0 && !soldOut ? (
              <button
                className="bg-yellow-300 p-4 uppercase"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            ) : null}
            {currentQuantity > 0 && (
              <button
                className="bg-yellow-300 p-4 uppercase"
                onClick={handleDeleteFromCart}
              >
                Delete
              </button>
            )}
          </div>
        </div>
      </div>
    </li>
  );
}
async function loader() {
  const order = await getOrder(id);
}
export default MenuItem;
