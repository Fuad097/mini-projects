import {createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Counter {
    value: number
}



const initialState : Counter = {
    value: 50 ,
}

const productSlice = createSlice({
    
    name : "product",
    initialState,
    reducers: {
        increment: (state) => {state.value =state.value +1},
        decrement: (state) =>{state.value -= 1},
        incrementByAmount: (state:Counter,action: PayloadAction<Counter>) =>{
             state = action.payload
        }
    }
    
    
})

export {increment, decrement} =  productSlice.actions;
export default productSlice.reducer