import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { commonStoreReducer } from './common_store';
import { coreMetricsReducer } from "../features/CoreMetrics/reducer";


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    commonStore: commonStoreReducer,
    coreMetricsReducer,
  },
});
