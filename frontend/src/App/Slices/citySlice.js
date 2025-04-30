import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { backendURL } from '../../Components/Variables';

// Async thunk to fetch city
export const fetchCity = createAsyncThunk(
  'city/fetchCity',
  async (id) => {
    const response = await fetch(`${backendURL}/cities/${id}`); // replace with your actual API
    const data = await response.json();
    return data;
  }
);


const citySlice = createSlice({
  name: 'city',
  initialState: {
    data: null,
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCity.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCity.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchCity.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});


export default citySlice.reducer;
