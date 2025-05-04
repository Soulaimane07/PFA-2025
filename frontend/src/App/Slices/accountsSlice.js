import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { backendURL } from '../../Components/Variables';

// Async thunk to fetch accounts
export const fetchAccounts = createAsyncThunk(
  'accounts/fetchAccounts',
  async () => {
    const response = await fetch(`${backendURL}/users`); // replace with your actual API
    const data = await response.json();
    return data;
  }
);


const accountsSlice = createSlice({
  name: 'accounts',
  initialState: {
    data: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAccounts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAccounts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchAccounts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});


export default accountsSlice.reducer;
