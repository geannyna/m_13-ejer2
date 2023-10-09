import { configureStore } from "@reduxjs/toolkit";
import valueReducer from './sliceReducer';


export const store = configureStore({
  reducer:{ 
    valueState: valueReducer
  },
});
