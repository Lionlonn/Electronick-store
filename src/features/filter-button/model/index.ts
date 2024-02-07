import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { StatusFlag } from "src/shared/types";
import { FilterApi, FilterData } from "../api";
import type { PayloadAction } from '@reduxjs/toolkit'


export interface filterData {
    items: FilterData[] 
    status: null | StatusFlag
}


const initialState: filterData = {
    items: [],
    status: null
}

export const fetchFilterData = createAsyncThunk(
    "filter/fetchFilterData",
    async () => {
        const response = await FilterApi.getFilterData();
        return response
    }
)


const filterSlice = createSlice({
    name: "getFilter",
    initialState,
    reducers: {
        addChecked(state, action: PayloadAction<{title: string, label:string}>) {
            const { title, label} = action.payload
            
            const filter = state.items.find(item => item.title === title);

            if (filter) {
                const dataItem = filter.data.find(item => item.label === label)
                
                if (dataItem) {
                    dataItem.checked = !dataItem.checked
                }
            }
        },
        removeChecked(state, action: PayloadAction<{title: string, label:string}>) {
            const { title, label } = action.payload
            const filter = state.items.find(item => item.title === title);
            if (filter) {
                let filterItem = filter.data.find(item => item.label !== action.payload.label)

                if (filterItem) filterItem.checked = !filterItem.checked
            }
            
            
        }
    },
    extraReducers: (builder) => {
        console.log(initialState)
        builder
        .addCase(fetchFilterData.pending, (state) => {
            state.status = StatusFlag.Pending
        })
        .addCase(fetchFilterData.fulfilled, (state, action) => {
            state.status = StatusFlag.Fulfilled
            state.items = action.payload
        })
        .addCase(fetchFilterData.rejected, (state) => {
            state.status = StatusFlag.Rejected
        })
    }
})

export const { addChecked, removeChecked } = filterSlice.actions;
export default filterSlice.reducer
