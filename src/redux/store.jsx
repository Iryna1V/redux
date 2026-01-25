import {configureStore} from '@reduxjs/toolkit';
import dishes from "./dishesSlice";
export const store = configureStore({
  reduser: {
    dishes
  },
})
export default store;