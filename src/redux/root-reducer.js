import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReduser from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import durectoryRedcer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user: userReduser,
  cart: cartReducer,
  directory: durectoryRedcer,
  shop: shopReducer,
});

// export default combineReducers({
//   user: userReduser,
//   cart: cartReducer,
// });

export default persistReducer(persistConfig, rootReducer);
