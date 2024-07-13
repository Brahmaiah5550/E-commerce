import { GET_PRODUCT_FAILURE, GET_PRODUCT_SUCESS,GET_PRODUCT_REQUEST } from "../actions/productActions";

var initialState ={
    loading:false,
    products:[],
    error:''
}
export var productReducer= (state=initialState,action)=>{
switch(action.type){
    case GET_PRODUCT_REQUEST:
        return{
            ...state,
            loading:true
        }
        break;
        case GET_PRODUCT_SUCESS:
            return{
              
                loading:false,
                products:action.payload,
                error:""
            }
            break;
            case GET_PRODUCT_FAILURE:
                return{
          
                    loading:false,
                    products:[],
                    error:action.payload
                }
                break;
                default:
                    return initialState
}
}