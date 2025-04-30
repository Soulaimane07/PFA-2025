import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { backendURL } from '../../Components/Variables';

// Async thunk to fetch region
export const fetchRegion = createAsyncThunk(
  'region/fetchRegion',
  async (id) => {
    const response = await fetch(`${backendURL}/regions/${id}`); // replace with your actual API
    const data = await response.json();
    return data;
  }
);


const regionSlice = createSlice({
  name: 'region',
  initialState: {
    data: null,
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRegion.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRegion.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchRegion.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});


export default regionSlice.reducer;
