import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";


const middleware = [];

// if (process.env.NODE_ENV === "development") {
//     middleware.push(logger)
// }

export const store = createStore(rootReducer, applyMiddleware(...middleware))