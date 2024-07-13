import axios from 'axios'


export var GET_PRODUCT_REQUEST= 'GET_PRODUCT_REQUEST';
export var GET_PRODUCT_SUCESS= 'GET_PRODUCT_SUCESS';
export var GET_PRODUCT_FAILURE= 'GET_PRODUCT_FAILURE';


var getProductRequest = ()=>{
    return{
        type:GET_PRODUCT_REQUEST
    }
    
}
var getProductSucess = (productsdata)=>{
    return{
        type:GET_PRODUCT_SUCESS,
        payload:productsdata
    }
    
}
var getProductFailure = (errormsg)=>{
    return{
        type:GET_PRODUCT_FAILURE,
        payload:errormsg
    }
    
}

export var fetchProducts=()=>{
    return(dispatch)=>{
        dispatch(getProductRequest)
        axios.get('http://localhost:5000/products')
      .then((res)=>{
dispatch(getProductSucess(res.data))
      })
      .catch((err)=>{
dispatch(getProductFailure(err))
      })
    }
}
