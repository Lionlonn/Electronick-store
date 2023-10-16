import { configureStore } from "@reduxjs/toolkit";
import favouriteReducer from '../../entities/product/model/index'

export const store = configureStore({
    reducer: {
        favourite: favouriteReducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch