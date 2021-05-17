import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { commonStoreReducer } from './common_store';


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    commonStore: commonStoreReducer
  },
});
