import { createSlice } from "@reduxjs/toolkit";

const CartSlice =createSlice({
    name:"cart",
    initialState:{
        data: [],
        isloading:false
    },
    reducers:{
    addToCart(state,action){
        const tempdata = state.data
        tempdata.push(action.payload)
        state.data = tempdata
    },}
 
})

export const {addToCart,removeFromCart} = CartSlice.actions;
export default CartSlice.reducer;
 