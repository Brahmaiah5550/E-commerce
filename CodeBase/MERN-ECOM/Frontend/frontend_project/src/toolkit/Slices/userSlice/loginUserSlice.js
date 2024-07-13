import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'
export let loginUser = createAsyncThunk('user/loginUser', async (user) => {
  var res = await axios.post('http://localhost:5000/login', user);
  console.log(res.data)
  return res.data
})

var initialState = {
  loading: false,
  user: {},
  error: ''
}

var loginUserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false
      state.user = action.payload
      localStorage.setItem('token',JSON.stringify(action.payload.token))
    })
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    })
  }
})

export default loginUserSlice.reducer