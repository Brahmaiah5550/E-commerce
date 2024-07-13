import React from 'react'
import Rating from './Rating';
import { Link } from 'react-router-dom';

function Product({product}) {
  return (
    <div className='col-3 card m-2'>
      <Link to={`products/${product._id}`}>
        <img src={product.image} alt='' height='155px' className='mb-1' />
      </Link>
      <strong>Name: {product.name}</strong>
      <strong>Price: {product.price}</strong>
      <div>
        <Rating value={product.rating} reviewtext={`${product.numreviews} reviews`} />
      </div>
    </div>
  );
}

export default Product