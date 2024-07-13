import {configureStore} from '@reduxjs/toolkit'
import getAllProductsSlice from './Slices/productSlice/getAllProductsSlice'
import getSingleProduct from './Slices/productSlice/getSingleProduct'
import registerUserRedcer from './Slices/userSlice/registerUserSlice'
import loginUserReducer from './Slices/userSlice/loginUserSlice'
import profileReducer from './Slices/profileSlice/profileSlice'


export var store = configureStore({
    reducer:{
        products:getAllProductsSlice,
        singleProduct:getSingleProduct,
        registerUser: registerUserRedcer,
        loginUser:loginUserReducer,
        profileSlice:profileReducer
    }
})