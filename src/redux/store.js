import { configureStore } from "@reduxjs/toolkit";
import whishlistSlice from "./slices/whishlistSlice";
import cartSlice from "./slices/cartSlice";

const store =configureStore({
    reducer:{
        // user:require('./slices/user').default
        wishlistReducer:whishlistSlice ,
        cartReducer:cartSlice
        
    }
})
export default store