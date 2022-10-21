import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      return {
        products: [...state.products, { ...action.payload, amount: 1 }],
      };
    },
    clearCart: (state) => {
      return { products: [] };
    },
    incrementProductAmount: (state, action) => {
      return {
        products: state.products.map((product) =>
          product.id === action.payload.id
            ? { ...product, amount: product.amount + 1 }
            : product
        ),
      };
    },
    decrementProductAmount: (state, action) => {
      return {
        products: state.products.map((product) =>
          product.id === action.payload.id
            ? { ...product, amount: product.amount - 1 }
            : product
        ),
      };
    },
  },
});

// state is redux state, cart is the name of slice we just gave, products is what is in products we want to pass on
export const cartProducts = (state) => state.cart.products;

// slice makes it easier to combine reduceers with actions all in one place
export const {
  addToCart,
  clearCart,
  incrementProductAmount,
  decrementProductAmount,
} = cartSlice.actions;

// to be able to use this we have to include this in the main reducer file
export default cartSlice.reducer;
