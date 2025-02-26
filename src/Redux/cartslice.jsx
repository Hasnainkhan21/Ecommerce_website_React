import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
};

const cartSlice = createSlice({ // Fixed typo: `creatSlice` -> `createSlice`
    name: 'cart', // Changed name to 'cart' to avoid conflict with 'product'
    initialState,
    reducers: {
     
        addToCart(state, action) {
            state.products.push(action.payload); 
        },
    },
});

export const { addToCart } = cartSlice.actions; // Export actions if needed
export default cartSlice.reducer;