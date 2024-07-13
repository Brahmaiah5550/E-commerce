import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'
export let registerUser = createAsyncThunk('user/registerUser', async (newUser) => {
  var res = await axios.post('http://localhost:5000/registerUser', newUser);
  console.log(res.data)
  return res.data
})

var initialState = {
  loading: false,
  user: {},
  error: ''
}

var registerSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state, action) => {
      registerUser.loading = true
    })
    builder.addCase(registerUser.fulfilled, (state, action) => {
      registerUser.loading = false
      registerUser.user = action.payload
    })
    builder.addCase(registerUser.rejected, (state, action) => {
      registerUser.loading = false
      registerUser.error = action.payload
    })
  }
})

export default registerSlice.reducer