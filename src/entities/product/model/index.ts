import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface FavouritesToggle {
    isFavorites: boolean,
    id: number
}

const initialState: FavouritesToggle = {
    isFavorites: false,
    id: 0
}


export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        add: (state) => {
            state.isFavorites = true
        },
        remove: (state) => {
            state.isFavorites = false
        },
        addToFavorite: (state, action: PayloadAction<boolean>) => {
            state.isFavorites = action.payload
        }
    }
})

export const { add, remove, addToFavorite } = favoritesSlice.actions
export default favoritesSlice.reducer 