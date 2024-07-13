import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
// import { products } from '../products'
import Rating from '../Components/Rating'
// import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux'
import { fetchSingleProduct } from '../toolkit/Slices/productSlice/getSingleProduct'

function ProductDescriptionScreen() {
  var singleProductData = useSelector((state)=>state.singleProduct)
  var {loading,product,error}=singleProductData
  var dispatch= useDispatch()
  var { id: productid } = useParams()
  // var [product, setProduct] = useState({})
  
  useEffect(() => {
    // axios
    //   .get(`http://localhost:5000/products/${productid}`)
    //   .then((res) => {
    //     console.log(res);
    //     setProduct(res.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    dispatch(fetchSingleProduct(productid))
  }, [productid])

  // var product = products.find((p) => p._id === productid)
  // console.log(product)

  return (
    <>
      <div className='container my-5'>
            <Link to='/' className='btn btn-dark d-inline px-5 fw-bold'>
              Back
            </Link>
        <div className='row'>
          <div className='col-4 '>
            <img src={product.image} alt='' className='p-4 border border-2' height="300px" width="360px"/>
          </div>
          <div className='col-4 fs-5 my-4 '>
            <h5>Product: {product.name}</h5>
            <h5>Price: {product.price}</h5>
            <h5>
              <Rating
                value={product.rating}
                reviewtext={`${product.numreviews} reviews`}
              />
            </h5>
            <p>Description: {product.description}</p>
          </div>
          <div className='col-4 my-4'>
            <div>
              <strong>Price: </strong>
              <strong>{product.price} </strong>
            </div>
            <div className='my-3'>
              <strong>Status: </strong>
              <strong>
                {product.countInStock ? 'In stock' : 'Out of stock'}{' '}
              </strong>
              <div className='mt-4'>
                <button
                  className='btn btn-dark px-4 fw-bold'
                  disabled={product.countInStock === 0}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDescriptionScreen