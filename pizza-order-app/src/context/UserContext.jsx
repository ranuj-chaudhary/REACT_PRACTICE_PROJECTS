import { createContext, useContext, useReducer } from "react";
import { formatDate } from "../utils/helpers";

export const CREATE_USER = "CREATE_USER";
export const INSERT_CART_ITEM = "INSERT_CART_ITEM";
export const EMPTY_CART = "EMPTY_CART";
export const REMOVE_CURRENT_ITEM = "REMOVE_CURRENT_ITEM";

const initialUserState = {
  username: "",
  orderDateTime: null,
  cart: [],
};

const UserContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case CREATE_USER:
      const time = formatDate(new Date());
      const name = action.payload.username;
      return {
        ...state,
        username: name.slice(0, 1).toUpperCase() + name.slice(1),
        orderDateTime: time,
      };
    case INSERT_CART_ITEM:
      


      const itemExist = state.cart.filter(
        (item) => item.id == action.payload.id
      );
      if (itemExist.length > 0) {
        const updatedCart = state.cart
          .map((item) => {
            if (item.id == action.payload.id) {
              return {
                ...item,
                quantity: action.payload.quantity,
              };
            } else {
              return item;
            }
          })
          .filter((item) => item.quantity > 0);

        return {
          ...state,
          cart: [...updatedCart],
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      }
    case REMOVE_CURRENT_ITEM:
      const index = state.cart.findIndex(
        (element) => element.id == action.payload.id
      );
      const removedItem = state.cart.splice(index, 1);

      return {
        ...state,
        cart: [...state.cart],
      };
    default:
      return state;
  }
}

function UserProvider({ children }) {
  const [{ username }, dispatch] = useReducer(reducer, initialUserState);

  return (
    <UserContext.Provider value={{ username, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}

function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("Not recongnised the context...");
  }
  return context;
}

export { UserProvider, useUser };
