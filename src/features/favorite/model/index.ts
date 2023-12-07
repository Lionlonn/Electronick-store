import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ProductItem } from 'entities/product'


export interface favorite {
    items: ProductItem[],
}


const initialState: favorite = {
    items: [],
}



const favoriteSlice = createSlice({
    name: "favorite",
    initialState,
    reducers: {
        addToFavorite(state, action: PayloadAction<ProductItem>) {
            
            let existItemIndex = state.items.findIndex(item => item.id === action.payload.id)

            if (existItemIndex >= 0) {
                return
            } else {
                let buildFavoriteItem = { ...action.payload};
                state.items?.push(buildFavoriteItem);
            } 
            
        },
        removeFromFavorite(state, action) {
            let filteredItems = state.items.filter(item => item.id !== action.payload.id)
            state.items = filteredItems
        }
    }
})

export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;