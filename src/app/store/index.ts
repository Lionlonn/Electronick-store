import { configureStore } from "@reduxjs/toolkit";
import productsReducer from 'entities/product/model/index'
import favoriteReducer from 'features/favorite/model/index'
import filterReducer from 'features/filter-button/model/index'
import buttonProductsReducer from 'features/category-buttons/model/index'
import cartReducer, { ordersSlice }  from "src/entities/product/model/action-creators";
import userReducer from 'features/auth/model/index'


export const store = configureStore({
    reducer: {
        products: productsReducer,
        favorite: favoriteReducer,
        filter: filterReducer,
        buttonPrudcts: buttonProductsReducer,
        cartSlice: cartReducer.cartReducer,
        orderSlice: cartReducer.orderReducer,
        user: userReducer,
    }
})


console.log(store.getState());



export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

