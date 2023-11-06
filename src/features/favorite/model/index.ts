import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ProductItem } from '../../../entities/product/api'


export interface favorite {
    items: ProductItem[] | undefined,
    itemsTotalQuantity: number,
    itemsTotalAmount: number
}


const initialState: favorite = {
    items: [],
    itemsTotalQuantity: 0,
    itemsTotalAmount: 0,
}




const favoriteSlice = createSlice({
    name: "favorite",
    initialState,
    reducers: {
        addToFavorite(state, action) {
            const itemIndex = state.items?.findIndex( 
                item => item.id === action.payload.id
            )
            if (itemIndex ) {
                if (itemIndex >= 0 && state.items) {
                    state.items[itemIndex].cartQuantity +=1
                } else {
                    const tempProduct = { ...action.payload, cartQuantity: 1}
                    state.items?.push(tempProduct);
                }
            }
            
            
        },
        removeToFavorite(state, action) {
            
        }
    }
})

export const { addToFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;