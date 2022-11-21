import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const styleSlice = createSlice({
  name: "style",
  initialState,
  reducers: {
    addStyle: (state, action) => {
      return {
        items: [...state.items, { ...action.payload, amount: 1 }],
      };
    },
    // take event and return new state with the event item removed
    removeFromStyle: (state, action) => {
      return {
        items: state.items.filter((item) => item._id !== action.payload._id),
      };
    },
    clearStyle: (state) => {
      return { items: [] };
    },
  },
});

// state is redux state, cart is the name of slice we just gave, products is what is in products we want to pass on
export const styleItems = (state) => state.style.items;

// slice makes it easier to combine reduceers with actions all in one place
export const { addStyle, clearStyle, removeFromStyle } = styleSlice.actions;

// to be able to use this we have to include this in the main reducer file
export default styleSlice.reducer;
