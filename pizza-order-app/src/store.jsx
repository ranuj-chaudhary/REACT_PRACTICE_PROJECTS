import {
  applyMiddleware,
  combineReducers,
  createStore,
} from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

export const CREATE_USER = "CREATE_USER";

//   ################# USER REDUCER #####################

const initialUserState = {
  username: "",
  state: "idle",
  address: "",
  position: {},
};

function UserReducer(state = initialUserState, action) {
  switch (action.type) {
    case CREATE_USER:
      console.log(action.payload);
      const name = action.payload.username;
      return {
        ...state,
        username: name.toUpperCase(),
      };
    default:
      return state;
  }
}

//   ################# CART REDUCER #####################
const INSERT_CART_ITEM = "INSERT_CART_ITEM";
const DECREASE_ITEM_QUANTITY = "DECREASE_ITEM_QUANTITY";
const INCREASE_ITEM_QUANTITY = "INCREASE_ITEM_QUANTITY";
const EMPTY_CART = "EMPTY_CART";
const REMOVE_CURRENT_ITEM = "REMOVE_CURRENT_ITEM";

const initialCartState = {
  cart: [],
};

function CartReducer(state = initialCartState, action) {
  switch (action.type) {
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
        if (item.pizzaId === action.payload.id) {
          const updatedQuantity = item.quantity + 1;
          return {
            ...item,
            quantity: updatedQuantity,
            totalPrice: item.unitPrice * updatedQuantity,
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
          if (item.pizzaId === action.payload.id) {
            const updatedQuantity = item.quantity - 1;
            return {
              ...item,
              quantity: updatedQuantity,
              totalPrice: item.unitPrice * updatedQuantity,
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
    default:
      return state;
  }
}

// ############ COMBINE REDUCERS ##################

const rootReducers = combineReducers({ cart: CartReducer, user: UserReducer });

const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunk))
); 

export default store;

// ############# USER ACTION CREATORS ##################
export function createUser(name) {
  return { type: CREATE_USER, payload: { username: name } };
}

// ############# USER ACTION CREATORS ##################

export function insertCartItem(cartItem) {
  return { type: INSERT_CART_ITEM, payload: cartItem };
}
export function increaseItemQuantity(id) {
  return { type: INCREASE_ITEM_QUANTITY, payload: { id } };
}
export function decreaseItemQuantity(id) {
  return {
    type: DECREASE_ITEM_QUANTITY,
    payload: { id },
  };
}
export function removeCurrentItem(id) {
  return { type: REMOVE_CURRENT_ITEM, payload: { id } };
}

export function emptyCart() {
  return { type: EMPTY_CART };
}
