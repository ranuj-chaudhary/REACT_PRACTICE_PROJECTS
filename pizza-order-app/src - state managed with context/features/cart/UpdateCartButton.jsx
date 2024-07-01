import { INSERT_CART_ITEM, useUser } from "../../context/UserContext";
import Button from "../../ui/Button";

function UpdateCartButton({ cartItem, setCurrentQuantity, id }) {
  const { dispatch, cart } = useUser();
 

  function getElementByid(id) {
    setCurrentQuantity(1);
  }

  return (
    <Button
      type={"primary"}
      onClick={() => {
        dispatch({ type: INSERT_CART_ITEM, payload: cartItem });
        getElementByid(id);
      }}
    >
      Add to cart
    </Button>
  );
}
export default UpdateCartButton;
