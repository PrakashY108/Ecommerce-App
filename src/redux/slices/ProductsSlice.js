import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
    name:"product",
    initialState:{
        data:[],
        isloading:false
    },
    reducers:{
      addproducts(state,action){
        state.data = action.payload;
      }
    }
})
export const {addproducts} = ProductSlice.actions;
export default ProductSlice.reducer;