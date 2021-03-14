import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./index";
import { persistStore } from "redux-persist";
import logger from "redux-logger";

const middlewares = [thunk];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const configureStore = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
);

export const persistor = persistStore(configureStore);
