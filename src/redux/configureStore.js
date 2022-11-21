import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from './reducer/countriesSlice';

const store = configureStore({
  reducer: {
    countries: countriesReducer,
  },
});

export default store;
