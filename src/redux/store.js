import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import rootReduser from "./root-reducer";

const middleWare = [];

if (process.env.NODE_ENV === "development") {
  middleWare.push(logger);
}

export const store = createStore(rootReduser, applyMiddleware(...middleWare));

// export default store;

export const persistor = persistStore(store);

export default { store, persistor };
