import { combineReducers } from "redux";
import cartReducer from "./cart/cartSlice";
import productReducer from "./store/productsSlice";
import addressReducer from "./userInfo/addressSlice";

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productReducer,
  address: addressReducer,
});

export default rootReducer;
