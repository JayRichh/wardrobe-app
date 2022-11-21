import { combineReducers } from "redux";
import cartReducer from "./cart/cartSlice";
import styleReducer from "./style/styleSlice";
import productReducer from "./store/productsSlice";
import addressReducer from "./userInfo/addressSlice";

const rootReducer = combineReducers({
  cart: cartReducer,
  style: styleReducer,
  products: productReducer,
  address: addressReducer,
});

export default rootReducer;