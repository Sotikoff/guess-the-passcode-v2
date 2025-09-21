import { configureStore } from "@reduxjs/toolkit";

import attemptsReducer from './features/attempts'
import codeInputReducer from './features/codeInput'

export const rootStore = configureStore({
    reducer: {
        attempts: attemptsReducer,
        codeInput: codeInputReducer
    }
})

export type RootState = ReturnType<typeof rootStore.getState>
export type RootDispatch = typeof rootStore.dispatch
export type RootStore = typeof rootStore
