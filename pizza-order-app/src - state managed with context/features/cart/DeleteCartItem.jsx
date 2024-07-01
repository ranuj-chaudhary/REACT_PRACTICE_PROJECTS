import { REMOVE_CURRENT_ITEM, useUser } from "../../context/UserContext";
import Button from "../../ui/Button";

function DeleteCartItem({ id }) {
    const {dispatch} = useUser()
  return (
    <Button
      type={"primary"}
      onClick={() => dispatch({ type: REMOVE_CURRENT_ITEM, payload: { id } })}
    >
      Delete
    </Button>
  );
}
export default DeleteCartItem;