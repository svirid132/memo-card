import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { loadInfo } from './loadInfo';

const initialState = {
    cards: []  
};

export const loadingInfo = createAsyncThunk(
    'card/loadInfo',
    async ({id, name}, {requestId}) => {
      const data = await loadInfo(id, name);
      return data;
    }
);

export const cardSlice = createSlice({
    name: "card",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadingInfo.pending, (state, action) => {
                state.cards.push({
                    currentRequestId: action.meta.requestId
                });
            })
            .addCase(loadingInfo.fulfilled, (state, action) => {
                state.cards = state.cards.map((item, index) => {
                    if (item.currentRequestId === action.meta.requestId) {
                        return action.payload;
                    }
                    return item;
                });
            })
    }
});

export const selectCardInfo = (id) => (state) => state.card.cards[id];

export default cardSlice.reducer;


