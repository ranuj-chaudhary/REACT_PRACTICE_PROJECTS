import { createContext, useContext, useReducer } from "react";
import { formatDate } from "../utils/helpers";

export const CREATE_USER = "CREATE_USER";
export const INSERT_CART_ITEM = "INSERT_CART_ITEM";
export const DECREASE_ITEM_QUANTITY = "DECREASE_ITEM_QUANTITY";
export const INCREASE_ITEM_QUANTITY = "INCREASE_ITEM_QUANTITY";
export const EMPTY_CART = "EMPTY_CART";
export const REMOVE_CURRENT_ITEM = "REMOVE_CURRENT_ITEM";

const initialUserState = {
  username: "",
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
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    case REMOVE_CURRENT_ITEM:
      const removedItem = state.cart.filter(
        (item) => item.pizzaId !== action.payload.id
      );
      return {
        ...state,
        cart: [...removedItem],
      };
    case INCREASE_ITEM_QUANTITY:
      const updatedCart = state.cart.map((item) => {
        if (item.pizzaId == action.payload.id) {
          const updatedQuantity = item.quantity + 1;
          return {
            ...item,
            quantity: updatedQuantity,
            totalPrice: updatedQuantity * item.unitPrice,
          };
        } else {
          return item;
        }
      });

      return {
        ...state,
        cart: [...updatedCart],
      };

    case DECREASE_ITEM_QUANTITY:
      const newCart = state.cart
        .map((item) => {
          if (item.pizzaId == action.payload.id) {
            const updatedQuantity = item.quantity - 1;
            return {
              ...item,
              quantity: updatedQuantity,
              totalPrice: updatedQuantity * item.unitPrice,
            };
          } else {
            return item;
          }
        })
        .filter((item) => item.quantity > 0);

      return {
        ...state,
        cart: [...newCart],
      };

    case EMPTY_CART:
      return {
        ...state,
        cart: [],
      };
    case "GET_STATE":
      return { ...state };
    default:
      return state;
  }
}

function UserProvider({ children }) {
  const [{ username, cart }, dispatch] = useReducer(reducer, initialUserState);

  return (
    <UserContext.Provider value={{ username, cart, dispatch }}>
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
export { useUser, UserProvider };
