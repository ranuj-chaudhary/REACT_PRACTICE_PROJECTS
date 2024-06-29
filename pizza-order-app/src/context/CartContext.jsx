import { createContext, useContext, useReducer } from "react";

export const UPDATE_CART_ITEM = "UPDATE_CART_ITEM";
export const EMPTY_CART = "EMPTY_CART";
export const REMOVE_CURRENT_ITEM = "REMOVE_CURRENT_ITEM";

const initialCartState = {
  cart: [],
};

const CartContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case UPDATE_CART_ITEM:
      const itemExist = state.cart.includes(
        (item) => item.id == action.payload.pizzaId
      );

      if (itemExist) {
        const updatedCart = state.cart.map((item) => {
          if (item.id == action.payload.pizzaId) {
            return {
              ...action.payload,
            };
          }
        });

        return {
          ...state,
          cart: [...updatedCart],
        };
      }

      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

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

function CartProvider({ children }) {
  const [{ cart }, dispatch] = useReducer(reducer, initialCartState);

  return (
    <CartContext.Provider value={{ dispatch, cart }}>
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("Not recongnised the context...");
  }
  return context;
}

export { CartProvider, useCart };
