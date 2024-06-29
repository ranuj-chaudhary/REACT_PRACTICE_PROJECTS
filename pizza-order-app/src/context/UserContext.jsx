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
        username: name.toUpperCase(),
        orderDateTime: time,
      };
    case INSERT_CART_ITEM:
      const itemExist = state.cart.filter(
        (item) => item.pizzaId == action.payload.pizzaId
      );

      if (itemExist.length > 0) {
        const updatedCart = state.cart
          .map((item) => {
            if (item.pizzaId == action.payload.pizzaId) {
              return {
                ...item,
                ...action.payload,
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
      const removedItem = state.cart.filter(
        (element) => element.pizzaId !== action.payload.id
      );

      return {
        ...state,
        cart: [...removedItem],
      };
    case EMPTY_CART:
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
}

function UserProvider({ children }) {
  const [{ username, cart }, dispatch] = useReducer(reducer, initialUserState);

  return (
    <UserContext.Provider value={{ username, dispatch, cart }}>
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
