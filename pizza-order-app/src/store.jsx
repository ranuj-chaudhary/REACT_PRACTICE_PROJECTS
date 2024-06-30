import { formatDate } from "../utils/helpers";

export const CREATE_USER = "CREATE_USER";

//   ################# USER REDUCER #####################

const initialUserState = {
  username: "",
  orderDateTime: new Date(),
  cart: [],
};

function UserReducer(state, action) {
  switch (action.type) {
    case CREATE_USER:
      const time = formatDate(new Date());
      const name = action.payload.username;
      return {
        ...state,
        username: name.toUpperCase(),
        orderDateTime: time,
      };
    default:
      return state;
  }
}

//   ################# CART REDUCER #####################
export const INSERT_CART_ITEM = "INSERT_CART_ITEM";
export const DECREASE_ITEM_QUANTITY = "DECREASE_ITEM_QUANTITY";
export const INCREASE_ITEM_QUANTITY = "INCREASE_ITEM_QUANTITY";
export const EMPTY_CART = "EMPTY_CART";
export const REMOVE_CURRENT_ITEM = "REMOVE_CURRENT_ITEM";
const initialCartState = {
  cart: [],
};

function CartReducer(state, action) {
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
        if (item.pizzaId == action.payload.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
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
            return {
              ...item,
              quantity: item.quantity - 1,
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

const rootReducers = 