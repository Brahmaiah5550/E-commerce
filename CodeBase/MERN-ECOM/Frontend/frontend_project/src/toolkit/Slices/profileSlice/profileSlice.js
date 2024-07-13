import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
export let verifyToken = createAsyncThunk('profile/verifyToken', async () => {
  var token = localStorage.getItem('token')
  console.log(token)
  var res = await axios.get('http://localhost:5000/profile',{
    headers: {
      'x-token': token
    }
  });
  console.log(res.data);
  return res.data;
});

var initialState = {
  loading: false,
  user: {},
  error: '',
};

var profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(verifyToken.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(verifyToken.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
     
    });
    builder.addCase(verifyToken.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default profileSlice.reducer;