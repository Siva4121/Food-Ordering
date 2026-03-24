import { createSlice } from '@reduxjs/toolkit'
let cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartList: []
    },
    reducers: {
        addItem: (state, action) => {
            state.cartList.push(action.payload)
        },
        removeItem:(state, action) => {
            state.cartList = state.cartList.filter((x) => x.card.info.id != action.payload.card.info.id)
        }

    }
})
export let { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;