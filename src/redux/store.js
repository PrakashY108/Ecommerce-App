import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../redux/slices/ProductsSlice"
import WishlistReducer from "./slices/WishlistSlice";
import CartSlice from "./slices/CartSlice";
import OrderSlice from "./slices/OrderSlice";


 const store = configureStore({
    reducer:{
    product: productReducer ,
    wishlist : WishlistReducer,
    cart : CartSlice,
    orders:OrderSlice,
    }
})

export default store;