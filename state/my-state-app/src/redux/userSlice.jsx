import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    users: [],
    loading: false
}

export const getAllusers = createAsyncThunk('users', async()=>{
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    return response.data
})





export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers :{
        increment: (state) => {state.value = state.value +1},
        decrement: (state) => {state.value = state.value -1},
    },
    extraReducers: (builder) => { builder.addCase(getAllusers.fulfilled, (state, action)=> {state.users = action.payload})

    }
})

export const {increment,decrement} = userSlice.actions
export default userSlice.reducer