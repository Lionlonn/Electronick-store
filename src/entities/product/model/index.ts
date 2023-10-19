import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ProductApi } from '../api'


export const addFavoritesById = createAsyncThunk(
    'favorites/addToFavorites',
    async (id: number) => {
        // const response = await ProductApi.getProduct(id)
        return id

    }
)

export const removeFavoritesById = createAsyncThunk(
    'favorites/removeToFavorites',
    async (id: number) => {
        const response = await ProductApi.getProduct(id)
        return id

    }
)




export interface FavouritesToggle {
    favorites: { [id: number]: boolean}
}

const initialState: FavouritesToggle = {
    favorites: {},
}


export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        // addToFavorites: (state, action: PayloadAction<number>) => {
        //     const id = action.payload
        //     state.favorites[id] = true
            
        // },
        // removeFromFavorites: (state, action: PayloadAction<number>) => {
        //     const id = action.payload
        //     delete state.favorites[id]
        // }

    },
    extraReducers: (builder) => {
        builder
        .addCase(addFavoritesById.fulfilled, (state, action) => {
            const id = action.payload
            state.favorites[id] = true
       })
       .addCase(removeFavoritesById.fulfilled, (state, action) => {
        const id = action.payload
        state.favorites[id] = false
   })
    }
})

// export const { addToFavorites, removeFromFavorites, } = favoritesSlice.actions
export default favoritesSlice.reducer 

