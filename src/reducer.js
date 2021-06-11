export const initialState = {
  basket: [],
  user: null,
};

//selector
export const getTotalPrice = (basket) =>
  basket?.reduce((amount, item) => item.quantity * item.price + amount, 0);

export const getItemTotal = (basket) =>
  basket?.reduce((itemTotal, item) => item.quantity + itemTotal, 0);

//reduceer is used to dispatch an action to the datalayer
const reducer = (state, action) => {
  //  console.log(action.item);
  switch (action.type) {
    case "ADD_TO_CART":
      console.log("reducer cart");
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_ITEM":
      console.log("remove item reducer");
      return {
        ...state,
        basket: state.basket.filter((baske) => baske.id !== action.item.id),
      };
    case "REMOVE_ALL_ITEMS":
      return {
        ...state,
        basket: [],
      };
    case "ADD_QUANTITY":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.item.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        console.log(`reducer  quantity ${newBasket[index].quantity}`);
        newBasket[index].quantity += 1;
        console.log(`reducer add quantity ${newBasket[index].quantity}`);
      } else {
        newBasket = [...state.basket, action.item];
        console.warn(`cant add quantity of product with id :${action.item.id}`);
      }

      sessionStorage.setItem("cart", JSON.stringify(newBasket));
      console.log(`reducer adddd quantity ${JSON.stringify(newBasket)}`);

      return {
        ...state,
        basket: newBasket,
      };
    case "SUB_QUANTITY": {
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.item.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        console.log(`reducer  quantity ${newBasket[index].quantity}`);
        newBasket[index].quantity = newBasket[index].quantity - 1;
        console.log(`reducer sub quantity ${newBasket[index].quantity}`);
      } else {
        newBasket = [...state.basket];
        console.warn(`cant add quantity of product with id :${action.item.id}`);
      }

      return {
        ...state,
        basket: newBasket,
      };
    }
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
