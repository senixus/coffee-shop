import { combineReducers } from "redux";
import { coffeeReducer } from "./coffeeReducer/coffee";
import { originReducer } from "./originReducer/origins";
import { cartReducer } from "./cartReducer/cart";
import { authReducer } from "./authReducer/auth";
import { wishListReducer } from "./wishListReducer/wishList";
import { getOrdersReducer } from "./orderReducer/getOrders";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  coffee: coffeeReducer,
  origin: originReducer,
  cart: cartReducer,
  auth: authReducer,
  wishList: wishListReducer,
  orders: getOrdersReducer,
});

export default persistReducer(persistConfig, rootReducer);
