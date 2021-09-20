import { configureStore } from '@reduxjs/toolkit';
<<<<<<< HEAD
import fieldGameReducer from '../components/FieldGame/fieldGameSlice';
import statusReducer from '../components/Status/statusSlice';
import authorizationReducer from "../components/Authorization/authorizationSlice"

export const store = configureStore({
  reducer: {
    fieldGame: fieldGameReducer,
    status: statusReducer,
    authorization: authorizationReducer,
  }
});
=======
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
>>>>>>> cabde82cd3109b689791deeeafb923fff13298ee
