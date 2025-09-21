import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const INPUT_LENGTH = 4

export type CodeInput = (number | null)[]

const initialState: CodeInput = new Array(INPUT_LENGTH).fill(null)

export const codeInputSlice = createSlice({
    name: 'codeInput',
    initialState,
    reducers: {
        set: (state, action: PayloadAction<{ position: number, value: number }>) => {
            state.splice(action.payload.position, 1, action.payload.value)
        },
        delete: (state, action: PayloadAction<{ position: number }>) => {
            state.splice(action.payload.position, 1, null)
        },
    }
})

export default codeInputSlice.reducer
