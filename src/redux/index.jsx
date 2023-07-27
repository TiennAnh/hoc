import { configureStore } from "@reduxjs/toolkit";
import connection from "./connections";

const rootReducer = {
    connection: connection
}
const store = configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: getDefaultMiddleware => 
    getDefaultMiddleware({serializableCheck: false})
})

export default store;