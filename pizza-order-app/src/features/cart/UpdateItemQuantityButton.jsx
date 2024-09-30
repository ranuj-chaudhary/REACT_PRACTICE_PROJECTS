import { useEffect } from "react";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { increaseItemQuantity, decreaseItemQuantity } from "../../store";

function UpdateItemQuantity({ id, setCurrentQuantity = null }) {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const quantity = cart.find((item) => item.pizzaId === id)?.quantity || 0;

  useEffect(
    function () {
      if (setCurrentQuantity) {
        setCurrentQuantity(quantity);
      }
    },
    [quantity, setCurrentQuantity]
  );

  return (
    <div className="button flex items-center justify-center gap-3">
      <Button onClick={() => dispatch(decreaseItemQuantity(id))}>-</Button>
      <span>{quantity}</span>
      <Button
        onClick={() => {
          dispatch(increaseItemQuantity(id));
        }}
      >
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
