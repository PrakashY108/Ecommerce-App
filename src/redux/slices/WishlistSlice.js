import { createSlice } from "@reduxjs/toolkit";

const WishlistSlice = createSlice({
    name:"wishlist",
    initialState:{
        data :[],
        isloading :false
    },
    reducers:{
        addToWishlist(state,action){
            let tempdata = state.data
            tempdata.push(action.payload)
            state.data= tempdata
        }
          }
    
})

export const {addToWishlist} =WishlistSlice.actions;
export default WishlistSlice.reducer;
