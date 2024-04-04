import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProductApi, ProductItem } from "src/entities/product";
import { StatusFlag } from "src/shared/types";
import { DeveloperProductsApi, FilmakingProductsApi, PhotographyProductsApi, PodcastProductsApi } from "../api";



export interface categoryProduct {
    item: ProductItem[] | undefined,
    status: null | StatusFlag
}

const initialState: categoryProduct = {
    item: [],
    status: null
}



export const getButtonProductsAll = createAsyncThunk(
    'categoryProduct/getButtonProductsAll',
    async () => {
        const response = await ProductApi.getProduct();
        return response
    }
)

export const getButtonDeveloperProduct = createAsyncThunk(
    'categoryProduct/getButtonDeveloperProduct',
    async () => {
        const response = await DeveloperProductsApi.getProduct();
        return response;
    }
)
export const getFilmakingProduct = createAsyncThunk(
    'categoryProduct/getFilmakeProduct',
    async () => {
        const response = await FilmakingProductsApi.getProduct();
        return response;
    }
)


export const getPodcastProduct = createAsyncThunk(
    'categoryProduct/getPodcastProduct',
    async () => {
        const response = await PodcastProductsApi.getProduct();
        return response;
    }
)
export const getPhotographyProduct = createAsyncThunk(
    'categoryProduct/getPhotographyProduct',
    async () => {
        const response = await PhotographyProductsApi.getProduct();
        return response;
    }
)



const buttonProductsSlice = createSlice({
    name: 'buttonProducts',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
        .addCase(getButtonProductsAll.pending, (state) => {
            state.status = StatusFlag.Pending;
        })
        .addCase(getButtonProductsAll.fulfilled, (state, action) => {
            state.status = StatusFlag.Fulfilled;
            state.item = action.payload;
        })
        .addCase(getButtonProductsAll.rejected, (state) => {
            state.status = StatusFlag.Rejected
        })
        

        .addCase(getButtonDeveloperProduct.pending, (state) => {
            state.status = StatusFlag.Pending;
        })
        .addCase(getButtonDeveloperProduct.fulfilled, (state, action) => {
            state.status = StatusFlag.Fulfilled;
            state.item = action.payload;
        })
        .addCase(getButtonDeveloperProduct.rejected, (state) => {
            state.status = StatusFlag.Rejected
        })

        
         .addCase(getFilmakingProduct.pending, (state) => {
            state.status = StatusFlag.Pending;
        })
        .addCase(getFilmakingProduct.fulfilled, (state, action) => {
            state.status = StatusFlag.Fulfilled;
            state.item = action.payload;
        })
        .addCase(getFilmakingProduct.rejected, (state) => {
            state.status = StatusFlag.Rejected
        }) 

        .addCase(getPhotographyProduct.pending, (state) => {
            state.status = StatusFlag.Pending;
        })
        .addCase(getPhotographyProduct.fulfilled, (state, action) => {
            state.status = StatusFlag.Fulfilled;
            state.item = action.payload;
        })
        .addCase(getPhotographyProduct.rejected, (state) => {
            state.status = StatusFlag.Rejected
        }) 


        .addCase(getPodcastProduct.pending, (state) => {
            state.status = StatusFlag.Pending;
        })
        .addCase(getPodcastProduct.fulfilled, (state, action) => {
            state.status = StatusFlag.Fulfilled;
            state.item = action.payload;
        })
        .addCase(getPodcastProduct.rejected, (state) => {
            state.status = StatusFlag.Rejected
        }) 
        
    },
})







export default buttonProductsSlice.reducer
