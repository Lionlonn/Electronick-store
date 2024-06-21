import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProductItem } from "src/entities/product/api";


export interface CartItem extends ProductItem {
    quantity: number;
}

export interface Order {
    items: CartItem[];
    date: string;
}

const initialCartState: CartItem[] = [];
const initialOrderState: Order[] =[];

export const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            const existingItem = state.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity++
            } else {
                state.push({...action.payload, quantity: 1})
            }
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            const index = state.findIndex(item => item.id === action.payload)
            if (index !== -1) {
                state.splice(index, 1);
            }
        },
        updateQuantity: (state, action: PayloadAction<{ id: number, quantity: number}>) => {
            const { id, quantity } = action.payload;
            const item = state.find(item => item.id === id)
            if (item) {
                item.quantity = quantity
            }
        }
    }
})


export const ordersSlice = createSlice({
    name: 'orders',
    initialState: initialOrderState,
    reducers: {
        placeOrder: (state, action: PayloadAction<Order>) => {
            state.push(action.payload);
        }
    }
})

export const {addToCart, removeFromCart, updateQuantity} = cartSlice.actions
export const { placeOrder } = ordersSlice.actions 

export default {
    cartReducer: cartSlice.reducer,
    orderReducer: ordersSlice.reducer
}