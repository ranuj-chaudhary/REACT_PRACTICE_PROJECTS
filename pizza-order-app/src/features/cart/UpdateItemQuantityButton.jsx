import {
  DECREASE_ITEM_QUANTITY,
  INCREASE_ITEM_QUANTITY,
  useUser,
} from "../../context/UserContext";
import Button from "../../ui/Button";

function UpdateItemQuantity({ id, currentQuantity }) {
  const { dispatch } = useUser();
  return (
    <div className="button flex items-center">
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
      <span>{currentQuantity}</span>
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
