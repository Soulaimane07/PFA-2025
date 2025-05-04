import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { backendURL } from '../../Components/Variables';

// Async thunk to fetch devices
export const fetchDevices = createAsyncThunk(
  'devices/fetchDevices',
  async () => {
    const response = await fetch(`${backendURL}/devices`); // replace with your actual API
    const data = await response.json();
    return data;
  }
);


const devicesSlice = createSlice({
  name: 'devices',
  initialState: {
    data: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDevices.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDevices.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchDevices.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});


export default devicesSlice.reducer;
