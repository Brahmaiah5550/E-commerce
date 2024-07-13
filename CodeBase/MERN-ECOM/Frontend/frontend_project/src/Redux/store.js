import{applyMiddleware, createStore} from 'redux'
import { productReducer } from './reducers/productReducer'
import {thunk} from 'redux-thunk'


export var store = createStore(productReducer,applyMiddleware(thunk))
console.log(store)