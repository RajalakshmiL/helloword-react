import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : 'cart',
    initialState: {
        items:[]
    },
    reducers:{
        addItem: (state, action) => {
            // VANILLA REDUX(OLDER) => DON'T MUTATE the state,return was mandatory
            // const newState = [...state];
            // newState.items.push(action.payload);
            // return newState;

            // REDUX TOOLKIT(User Immer library behind the scenes(BTS)) - We have to ṁutate the state
            // mutating the state over here.. (directly modifying the state)
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items.pop();
        },
        clearCart: (state) => {
            // RTK => either mutate the existing state or return the new state 
            state.items.length = 0;
            // return {items:[]};
        }
    }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;