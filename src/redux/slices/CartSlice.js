import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: "cart",
    initialState: {
        data: [], // Array to store cart items
        isLoading: false
    },
    reducers: {
        addToCart(state, action) {
            let isExists = false;
            // Check if product already exists in the cart
            state.data = state.data.map((item) => {
                if (item.id === action.payload.id) {
                    isExists = true;
                    item.qty += 1; // Increment quantity if it exists
                }
                return item;
            });

            // If product doesn't exist in the cart, add it
            if (!isExists) {
                state.data.push({ ...action.payload, qty: 1 }); // Add new item with initial quantity of 1
            }
        },

        removeFromCart(state, action) {
            state.data = state.data.reduce((acc, item) => {
                if (item.id === action.payload.id) {
                    if (item.qty > 1) {
                        // If more than 1 in quantity, decrement the quantity
                        acc.push({ ...item, qty: item.qty - 1 });
                    }
                    // If quantity is 1, item is not added back, effectively removing it
                } else {
                    // If item is not the one to be removed, keep it in the cart
                    acc.push(item);
                }
                return acc;
            }, []);
        }
    }
});

export const { addToCart, removeFromCart } = CartSlice.actions;
export default CartSlice.reducer;
