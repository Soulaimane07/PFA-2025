import { configureStore } from '@reduxjs/toolkit';
import regionsReducer from './Slices/regionsSlice';
import regionReducer from './Slices/regionSlice';

import citiesReducer from './Slices/citiesSlice';
import cityReducer from './Slices/citySlice';

import factoriesReducer from './Slices/factoriesSlice';
import factoryReducer from './Slices/factorySlice';

import devicesiesReducer from './Slices/devicesSlice';
import notificationsReducer from './Slices/notificationsSlice';
import accountsSlice from './Slices/accountsSlice';

import waterdataSlice from './Slices/waterdataSlice';
import waterpredictSlice from './Slices/waterpredictSlice';



export const store = configureStore({
  reducer: {
    regions: regionsReducer,
    region: regionReducer,

    cities: citiesReducer,
    city: cityReducer,
    
    factories: factoriesReducer,
    factory: factoryReducer,

    devices: devicesiesReducer,
    notifications: notificationsReducer,
    accounts: accountsSlice,
    
    waterdata: waterdataSlice,
    waterpredict: waterpredictSlice,
  },
});
