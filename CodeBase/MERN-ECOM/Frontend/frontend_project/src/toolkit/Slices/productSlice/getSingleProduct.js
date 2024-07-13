import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export var fetchSingleProduct=createAsyncThunk('product/fetchSingleProduct',async(id)=>{
    var res = await axios.get(`http://localhost:5000/products/${id}`)
    return res.data
})
var initialState={
    loading:false,
    product:{},
    error:""
}
var getSingleProductsSlice=createSlice({
    name:'product',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
builder
.addCase(fetchSingleProduct.pending,(state,action)=>{
    state.loading=true
})
.addCase(fetchSingleProduct.fulfilled,(state,action)=>{
    state.loading=false;
    state.product=action.payload;
})
.addCase(fetchSingleProduct.rejected,(state,action)=>{
    state.loading=false;
    state.error=action.payload
})
    }

})
export default getSingleProductsSlice.reducer