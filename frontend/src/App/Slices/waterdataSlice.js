import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { backendURL } from '../../Components/Variables';

// Async thunk to fetch waterdata
export const fetchWaterdata = createAsyncThunk(
  'waterdata/fetchWaterdata',
  async ({start, end}) => {
    const response = await fetch(`${backendURL}/waterdata/range?start=${start}&end=${end}`); // replace with your actual API
    const data = await response.json();
    return data;
  }
);


const waterdataSlice = createSlice({
  name: 'waterdata',
  initialState: {
    data: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWaterdata.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchWaterdata.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchWaterdata.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});


export default waterdataSlice.reducer;
