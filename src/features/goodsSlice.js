import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GOODS_URL } from "../const";

export const fethcGoods = createAsyncThunk(
    'goods/fetchGoods',
    async (gender) => {
        const response = await fetch(`${GOODS_URL}?gender=${gender}`);
        const data = await response.json();
        return data;
    }
)

export const goodsSlice = createSlice({
    name: 'goods',
    initialState: {
        status: 'idle',
        goodsList: [],
        error: null,
    },
    extraReducers: builder => {
        builder
        .addCase(fethcGoods.pending , (state) => {
            state.status = 'loading';
        })
        .addCase(fethcGoods.fulfilled , (state, action) => {
            state.status = 'success';
            state.goodsList = action.payload;
        })
        .addCase(fethcGoods.rejected , (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    }
});

export default goodsSlice.reducer;