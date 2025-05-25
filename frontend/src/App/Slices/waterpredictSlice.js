import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { backendURL } from '../../Components/Variables';
import { backendiot } from '../../Components/Variables';

// Async thunk to fetch waterpredict


export const SimulateWaterpredict = createAsyncThunk(
  'SimulateWaterpredict/fetchWaterpredict',
  async () => {
    const response = await fetch(`${backendiot}/simulate/iot`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch water prediction');
    }

    const data = await response.json();
    return data;
  }
);



const waterpredictSlice = createSlice({
  name: 'waterpredict',
  initialState: {
    data: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {
    setWaterpredict: (state, action) => {
      state.data = action.payload;
    },
    clearWaterpredict: (state) => {
      state.data = [];
    },
  },
  extraReducers: (builder) => {
    builder
      
      
      .addCase(SimulateWaterpredict.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(SimulateWaterpredict.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(SimulateWaterpredict.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setWaterpredict, clearWaterpredict } = waterpredictSlice.actions;
export default waterpredictSlice.reducer;
