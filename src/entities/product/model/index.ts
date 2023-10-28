import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ProductApi, Product } from '../api'
import  StatusFlag  from '../../../shared/types/statusFlag'




export interface products {
    items : Product[] | undefined,
    status: null | StatusFlag
}

const initialState:products = {
    items: [],
    status: null
}

export const productsAll = createAsyncThunk(
    "products/productsAll",
    async (arg, thunkAPI) => {
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
            state.items = action.payload
        })
        .addCase(productsAll.rejected, (state) => {
            state.status = StatusFlag.Rejected
        })
    }
})

export default productsSlice.reducer