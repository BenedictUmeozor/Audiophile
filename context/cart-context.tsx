"use client";

import { T_NSP } from "@/constants/namespace";
import {
  ActionDispatch,
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { v4 as uuidv4 } from "uuid";

interface CartContextType {
  cart: T.Cart;
  dispatch: ActionDispatch<[action: T.CartAction]>;
}

const CartContext = createContext<CartContextType>({
  cart: { items: [], total: 0 },
  dispatch: () => null,
});

export const useCartContext = () => {
  return useContext(CartContext);
};

const initialCartState: T.Cart = { items: [], total: 0 };

function cartReducer(state: T.Cart, action: T.CartAction): T.Cart {
  switch (action.type) {
    case "SET_CART":
      return action.payload.cart;
    case "ADD_TO_CART": {
      const productExists = state.items.find(
        (item) => item.product.slug === action.payload.product.slug,
      );
      if (productExists) {
        const updatedState = {
          ...state,
          items: state.items.map((item) =>
            item.product.slug === action.payload.product.slug
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item,
          ),
          total:
            state.total +
            action.payload.product.price * action.payload.quantity,
        };
        localStorage.setItem(T_NSP.CART, JSON.stringify(updatedState));

        return updatedState;
      }

      const newItem: T.CartItem = {
        id: uuidv4(),
        product: action.payload.product,
        quantity: action.payload.quantity,
      };

      const updatedState = {
        ...state,
        items: [...state.items, newItem],
        total:
          state.total + action.payload.product.price * action.payload.quantity,
      };
      localStorage.setItem(T_NSP.CART, JSON.stringify(updatedState));

      return updatedState;
    }
    case "REMOVE_FROM_CART": {
      const itemToRemove = state.items.find(
        (item) => item.id === action.payload.cartItemId,
      );
      if (!itemToRemove) return state;
      const updatedItems = state.items.filter(
        (item) => item.id !== action.payload.cartItemId,
      );
      const updatedState = {
        ...state,
        items: updatedItems,
        total: state.total - itemToRemove.product.price * itemToRemove.quantity,
      };
      localStorage.setItem(T_NSP.CART, JSON.stringify(updatedState));
      return updatedState;
    }
    case "CLEAR_CART": {
      const updatedState = { items: [], total: 0 };
      localStorage.setItem(T_NSP.CART, JSON.stringify(updatedState));
      return updatedState;
    }
    case "INCREMENT_QUANTITY": {
      const item = state.items.find(
        (item) => item.id === action.payload.cartItemId,
      );

      if (!item) return state;

      const updatedState = {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.cartItemId
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
        total: state.total + item.product.price,
      };
      localStorage.setItem(T_NSP.CART, JSON.stringify(updatedState));
      return updatedState;
    }
    case "DECREMENT_QUANTITY": {
      const item = state.items.find(
        (item) => item.id === action.payload.cartItemId,
      );

      if (!item) return state;

      const updatedState = {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.cartItemId
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        ),
        total: state.total - item.product.price,
      };
      localStorage.setItem(T_NSP.CART, JSON.stringify(updatedState));
      return updatedState;
    }
    default:
      return state;
  }
}

export default function CartProvider({ children }: { children: ReactNode }) {
  const [cart, dispatch] = useReducer(cartReducer, initialCartState);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedcart = localStorage.getItem(T_NSP.CART);
      if (storedcart) {
        dispatch({
          type: "SET_CART",
          payload: { cart: JSON.parse(storedcart) },
        });
      }
    }
  }, []);

  return <CartContext value={{ cart, dispatch }}>{children}</CartContext>;
}
