import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    tokens: '',
    email: '',
}

const connectionSlice = createSlice({
    name: 'connection',
    initialState,
    reducers: {
        setToken: (state, action) => {
            console.log(action);
            state.tokens = action.payload
        },
        setEmail: (state, action) => {
            state.email = action.payload
        }
    }
})

const {actions, reducer} = connectionSlice;

export const {
    setEmail,
    setToken,
} = actions;

export default reducer