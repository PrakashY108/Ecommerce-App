import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../redux/slices/ProductsSlice"
import WishlistReducer from "./slices/WishlistSlice";
import CartSlice from "./slices/CartSlice";


 const store = configureStore({
    reducer:{
    product: productReducer ,
    wishlist : WishlistReducer,
    cart : CartSlice
    }
})

export default store;