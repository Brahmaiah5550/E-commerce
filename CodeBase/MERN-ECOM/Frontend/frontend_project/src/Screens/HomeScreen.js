import React, { useEffect, useState } from 'react'
// import { products } from '../products'
import Product from '../Components/Product'
// import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProducts } from '../toolkit/Slices/productSlice/getAllProductsSlice'
// import { fetchProducts } from '../Redux/actions/productActions'

function HomeScreen() {
//  var [products, setProducts] = useState([])
  // useEffect(() => {
  //   axios
  //     .get('http://localhost:5000/products')
  //     .then((res) => {
  //       console.log(res)
  //       setProducts(res.data)
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     });
  // }, [])

var dispatch = useDispatch()//after iniitial rendering state upadate avutundi

var data = useSelector((state)=>state.products)//mumdu ede excute avutundi initiall rendering time lo dini tarvatha useeffect call aei updated stTE malli estundi
//useselector hook getstate method ni call chestadi internal ga
var {loading,products,error}=data
console.log(data)

useEffect(()=>{

// return dispatch(fetchProducts())//from redux

 dispatch(fetchAllProducts())

},[])
  return (
    <div className='container'>
      <div className='row my-3'>
        {
        products.map((product,index) => {
          return (
            <React.Fragment key={index}>
          <Product product={product} />
          </React.Fragment>
          )
        })
        }
      </div>
    </div>
  )
}

export default HomeScreen


