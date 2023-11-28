import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ProductApi, ProductItem } from 'entities/product'
import  {StatusFlag}  from 'shared/types'




export interface products {
    item : ProductItem[] | undefined,
    status: null | StatusFlag
}

const initialState:products = {
    item: [],
    status: null
}

export const productsAll = createAsyncThunk(
    "products/productsAll",
    async () => {
        const response = await ProductApi.getProduct();
        return response;
    }
)


const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder
        .addCase(productsAll.pending, (state) => {
            state.status = StatusFlag.Pending
        })
        .addCase(productsAll.fulfilled, (state, action) => {
            state.status = StatusFlag.Fulfilled
            state.item = action.payload
        })
        .addCase(productsAll.rejected, (state) => {
            state.status = StatusFlag.Rejected
        })
    }
})

export default productsSlice.reducer