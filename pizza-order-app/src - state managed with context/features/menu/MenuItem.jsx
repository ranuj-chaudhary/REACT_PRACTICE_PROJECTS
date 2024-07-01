import { memo, useEffect, useMemo, useState } from "react";
import { formatCurrency } from "../../utils/helpers";
import DeleteCartItem from "../cart/DeleteCartItem";
import UpdateCartButton from "../cart/UpdateCartButton";
import UpdateItemQuantity from "../cart/UpdateItemQuantityButton";
import { useUser } from "../../context/UserContext";

function MenuItem({ pizza, getItemById }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const [currentQuantity, setCurrentQuantity] = useState(0);

  const cartItem = {
    pizzaId: id,
    name,
    unitPrice,
    imageUrl,
    quantity: 1,
    totalPrice: unitPrice * 1,
    addIngredients: ingredients,
  };

  return (
    <li className="flex p-6 ">
      <img src={imageUrl} alt={name} className="h-32 w-32" />
      <div className="flex-1  p-6">
        <p className="text-xl">{name} </p>
        <p className="capitalize italic text-gray-500">
          {ingredients.join(", ")}
        </p>
        <div className="flex items-center justify-between first-line:gap-6">
          {!soldOut ? (
            <p>{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="font-bold text-red-600">Sold out</p>
          )}

          <div className="flex">
            {currentQuantity > 0 && (
              <UpdateItemQuantity
                id={id}
                setCurrentQuantity={setCurrentQuantity}
              />
            )}
            {/* CART BUTTON */}
            <div className="m-2">
              {currentQuantity == 0 && !soldOut ? (
                <UpdateCartButton
                  cartItem={cartItem}
                  setCurrentQuantity={setCurrentQuantity}
                  id={id}
                />
              ) : null}

              {/* DELETE CART ITEM BUTTON */}

              {currentQuantity > 0 && (
                <DeleteCartItem type={"primary"} id={id} />
              )}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default memo(MenuItem);
