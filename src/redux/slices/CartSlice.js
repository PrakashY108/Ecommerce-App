import { createSlice } from "@reduxjs/toolkit";

const CartSlice =createSlice({
    name:"cart",
    initialState:{
        data: []
    },
    addToCart(state,action){
        const tempdata = state.data
        tempdata.push(action.payload)
        state.data = tempdata
    },
    removeFromCart(state,action){
        state.data = state - action.payload
    }
})

export const {addToCart,removeFromCart} = CartSlice.actions;
export default CartSlice;
 