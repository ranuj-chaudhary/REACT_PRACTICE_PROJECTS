import { useEffect } from "react";
import {
  DECREASE_ITEM_QUANTITY,
  INCREASE_ITEM_QUANTITY,
  useUser,
} from "../../context/UserContext";
import Button from "../../ui/Button";

function UpdateItemQuantity({ id, setCurrentQuantity = null }) {
  const { dispatch, cart } = useUser();
  const quantity = cart.find((item) => item.pizzaId == id)?.quantity || 0;
  
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
      <Button
        onClick={() =>
          dispatch({
            type: DECREASE_ITEM_QUANTITY,
            payload: { id },
          })
        }
      >
        -
      </Button>
      <span>{quantity}</span>
      <Button
        onClick={() => {
          dispatch({ type: INCREASE_ITEM_QUANTITY, payload: { id } });
        }}
      >
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
