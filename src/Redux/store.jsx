// src/Redux/store.jsx
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import cartReducer from "./cartSlice";

const store = configureStore({
    reducer: {
        product: productReducer,
        cart: cartReducer,
    },
});

export default store; // Export as default