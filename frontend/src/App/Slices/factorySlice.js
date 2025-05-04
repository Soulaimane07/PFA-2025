import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { backendURL } from '../../Components/Variables';

// Async thunk to fetch factory
export const fetchFactory = createAsyncThunk(
  'factory/fetchFactory',
  async (id) => {
    const response = await fetch(`${backendURL}/factories/${id}`); // replace with your actual API
    const data = await response.json();
    return data;
  }
);


const factorySlice = createSlice({
  name: 'factory',
  initialState: {
    data: null,
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFactory.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchFactory.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchFactory.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});


export default factorySlice.reducer;
