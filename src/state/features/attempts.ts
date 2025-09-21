import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import type { CodeInput } from "./codeInput";

type Attempts = CodeInput[];

const initialState: Attempts = []

export const attemptsSlice = createSlice({
    name: 'attempts',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<CodeInput>) => {
            const newState = [...state]
            newState.push(action.payload)
            return newState
        }
    }
})

export default attemptsSlice.reducer
