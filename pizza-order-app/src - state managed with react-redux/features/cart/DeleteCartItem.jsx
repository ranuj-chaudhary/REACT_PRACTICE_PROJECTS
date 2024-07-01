import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { removeCurrentItem } from "../../store";

function DeleteCartItem({ id }) {
  const dispatch = useDispatch();
  return (
    <Button type={"primary"} onClick={() => dispatch(removeCurrentItem(id))}>
      Delete
    </Button>
  );
}
export default DeleteCartItem;
