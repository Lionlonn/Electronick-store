import { configureStore } from "@reduxjs/toolkit";
import productsReducer from '../../entities/product/model/index'
import favoriteReducer from '../../features/favorite/model/index'


export const store = configureStore({
    reducer: {
        products: productsReducer,
        favorite: favoriteReducer
        
    }
})


console.log(store.getState());



export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch