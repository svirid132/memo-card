import { configureStore } from '@reduxjs/toolkit';
import cardReducer from '../components/Card/cardSlice';

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });


export const store = configureStore({
  reducer: {
    card: cardReducer,
  }
})