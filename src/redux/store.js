import { createStore, applyMiddleware } from "redux";
import movieReducer from "./reducers/movieReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";

const store = createStore(movieReducer, applyMiddleware(thunk, logger));
export default store;