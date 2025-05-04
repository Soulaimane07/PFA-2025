import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { backendURL } from '../../Components/Variables';

// Async thunk to fetch factories
export const fetchFactories = createAsyncThunk(
  'factories/fetchFactories',
  async () => {
    const response = await fetch(`${backendURL}/factories`); // replace with your actual API
    const data = await response.json();
    return data;
  }
);


const factoriesSlice = createSlice({
  name: 'factories',
  initialState: {
    data: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFactories.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchFactories.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchFactories.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});


export default factoriesSlice.reducer;
