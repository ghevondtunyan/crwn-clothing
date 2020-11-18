import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReduser from "./root-reducer";

const middleWare = [logger];

const store = createStore(rootReduser, applyMiddleware(...middleWare));

export default store;
