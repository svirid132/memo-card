import { createSlice } from '@reduxjs/toolkit';
import data from './../../assets/data.json'

const initialState = {
    users: [],
    currentUserId: 1,
    scores: {
        current: 0,
        total: data.names.length,
    },
} 

export const statusSlice = createSlice({
    name: 'status',
    initialState, 
    reducers: { 
        setUsers(state, action) {
            const userNames = action.payload;
            state.users = userNames.map((name, index) => {
                return {
                    id: index + 1,
                    name,
                    score: 0,
                }
            });
        },
        switchUser(state) {
            const maxId = state.users.reduce((accam, user) => {
                return Math.max(accam, user.id);
            }, 0);
            if (state.currentUserId > maxId) {
                state.currentUserId = 1;
                return;
            }
            ++state.currentUserId;
        },
        plusScore(state) {
            state.users = state.users.map((user) => {
                if (user.id === state.currentUserId) {
                    return ({
                        ...user,
                        score: user.score + 1,
                    });
                }
                return user;
            });
            ++state.scores.current; 
        }
    }
});

export const {setUsers, switchUser, plusScore} = statusSlice.actions;

export const selectUsers = (state) => {
    return state.status.users;
}

export const selectCurrentUserId = (state) => {
    return state.status.currentUserId;
}

export const selectScores = (state) => {
    return state.status.scores;
}

export default statusSlice.reducer;