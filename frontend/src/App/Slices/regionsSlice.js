import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { backendURL } from '../../Components/Variables';

// Async thunk to fetch regions
export const fetchRegions = createAsyncThunk(
  'regions/fetchRegions',
  async () => {
    const response = await fetch(`${backendURL}/regions`); // replace with your actual API
    const data = await response.json();
    return data;
  }
);


const regionsSlice = createSlice({
  name: 'regions',
  initialState: {
    data: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRegions.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRegions.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchRegions.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});


export default regionsSlice.reducer;
