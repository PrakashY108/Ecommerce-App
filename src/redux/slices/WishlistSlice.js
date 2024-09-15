import { createSlice } from "@reduxjs/toolkit";

const WishlistSlice = createSlice({
    name:"wishlist",
    initialState:{
        data :[],
        isloading :false
    },
    reducers:{
        addToWishlist(state,action){
            const productId = action.payload.id;
            const productExists = state.data.some(product => product.id === productId);
            if (!productExists) {
                // If the product is not already in the wishlist, add it
                state.data.push(action.payload);
            } else {
                console.log(`Product with ID ${productId} is already in the wishlist.`);
            }
        }
          }
    
})

export const {addToWishlist} =WishlistSlice.actions;
export default WishlistSlice.reducer;
