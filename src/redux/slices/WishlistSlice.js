import { createSlice } from "@reduxjs/toolkit";

const WishlistSlice = createSlice({
    name:"wishlist",
    initialState:{
        data :[],
    },
    reducers:{
        addToWishlist(state,action){
            let tempdata = state.data
            tempdata.push(action.payload)
            state.data= tempdata
        },
        // removeFromWishlist(state,action){
        //    while(state.data= action.payload){
        //     state.data = null
        //  
          }
    
})

export const {addToWishlist} =WishlistSlice.actions;
export default WishlistSlice ;