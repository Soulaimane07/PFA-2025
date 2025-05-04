import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { backendURL } from '../../Components/Variables';

// Async thunk to fetch cities
export const fetchCities = createAsyncThunk(
  'cities/fetchCities',
  async () => {
    const response = await fetch(`${backendURL}/cities`); // replace with your actual API
    const data = await response.json();
    return data;
  }
);


const citiesSlice = createSlice({
  name: 'cities',
  initialState: {
    data: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCities.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCities.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchCities.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});


export default citiesSlice.reducer;
