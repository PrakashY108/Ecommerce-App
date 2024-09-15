import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: "cart",
    initialState: {
        data: [],
        isloading: false
    },
    reducers: {
        addToCart(state, action) {
            let isExists = false;
            // check if product already exists  in cart
            state.data.map((item) => {
                console.log("qty",item.qty);

                if (item.id === action.payload.id) {
                    isExists = true;
                    if (isExists) { item.qty = item.qty + 1; } 
                    console.log(item.qty);
                }
            })
            if (!isExists) {
                const tempdata = state.data 
                tempdata.push(action.payload)
                state.data = tempdata
            }

        },
    }

})

export const { addToCart, removeFromCart } = CartSlice.actions;
export default CartSlice.reducer;
