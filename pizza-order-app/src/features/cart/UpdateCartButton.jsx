import { INSERT_CART_ITEM, useUser } from "../../context/UserContext";
import Button from "../../ui/Button";

function UpdateCartButton({cartItem}) {
  const { dispatch } = useUser();
  return (
    <Button
      type={"primary"}
      onClick={() => dispatch({ type: INSERT_CART_ITEM, payload: cartItem })}
    >
      Add to cart
    </Button>
  );
}
export default UpdateCartButton;
