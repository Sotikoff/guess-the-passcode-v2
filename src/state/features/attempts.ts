import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


type Attempts = number[][];

const initialState: Attempts = []

export const attemptsSlice = createSlice({
    name: 'attempts',
    initialState,
    reducers: {
        set: (state, action: PayloadAction<number[]>) => {
            const newState = [...state]
            newState.push(action.payload)
            return newState
        }
    }
})

export default attemptsSlice.reducer
