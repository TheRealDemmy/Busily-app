import reducers from "../reducers/CombineReducers";
import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from "redux-logger";

const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => {
        const middleware = getDefaultMiddleware();
        
        if (process.env.NODE_ENV === "development") {
            middleware.push(createLogger());
        }
        
        return middleware;
    },
});

export default store;
