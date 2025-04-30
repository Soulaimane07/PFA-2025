import { configureStore } from '@reduxjs/toolkit';
import regionsReducer from './Slices/regionsSlice';
import regionReducer from './Slices/regionSlice';
import citiesReducer from './Slices/citySlice';

export const store = configureStore({
  reducer: {
    regions: regionsReducer,
    region: regionReducer,
    city: citiesReducer,
  },
});
