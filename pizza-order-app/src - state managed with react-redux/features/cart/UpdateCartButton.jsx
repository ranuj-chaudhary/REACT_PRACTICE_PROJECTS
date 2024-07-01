import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { insertCartItem } from "../../store";

function UpdateCartButton({ cartItem, setCurrentQuantity}) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  function updateCurrenQuantity() {
    setCurrentQuantity(1);
  }

  return (
    <Button
      type={"primary"}
      onClick={() => {
        dispatch(insertCartItem(cartItem));
        updateCurrenQuantity();
      }}
    >
      Add to cart
    </Button>
  );
}
export default UpdateCartButton;
