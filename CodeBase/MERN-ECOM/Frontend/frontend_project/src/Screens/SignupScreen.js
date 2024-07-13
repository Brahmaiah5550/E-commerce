import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import {useDispatch, useSelector} from 'react-redux'
import { registerUser } from '../toolkit/Slices/userSlice/registerUserSlice'

function SignupScreen() {

 let [name, setName] =  useState('')
 let [email, setEmail] =  useState('')
 let [password, setPassword] =  useState('')
  let [cpassword, setcPassword] = useState('');

var dispatch = useDispatch()


  var submitHandler = (e) => {
    e.preventDefault()
    var newUser = {
      name,
      email,
      password,
      cpassword
    }
    console.log(newUser)
    dispatch(registerUser(newUser))
  }

  return (
    <div className='my-3 '>
      <form onSubmit={submitHandler}>
        <div className='w-25 m-auto border border-2 border-secondary py-3 px-5 bg-secondary text-white'>
          <div className='my-2'>
            <label htmlFor='name' className='fs-5 fw-normal'>
              Name
            </label>
            <input
              type='text'
              id='name'
              className='form-control border border-2 border-dark mt-1'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='my-2'>
            <label htmlFor='email' className='fs-5 fw-normal'>
              Email
            </label>
            <input
              type='email'
              id='email'
              className='form-control border border-2 border-dark mt-1'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='my-2'>
            <label htmlFor='password' className='fs-5 fw-normal'>
              Password
            </label>
            <input
              type='password'
              id='password'
              className='form-control border border-2 border-dark mt-1'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='my-2'>
            <label htmlFor='cpassword' className='fs-5 fw-normal'>
              Confirm Password
            </label>
            <input
              type='password'
              id='cpassword'
              className='form-control border border-2 border-dark mt-1'
              value={cpassword}
              onChange={(e) => setcPassword(e.target.value)}
            />
          </div>
          <button
            type='submit'
            className='btn btn-info w-50 fw-medium my-2 fs-5'
          >
            Sign up
          </button>
          <div className='fw-medium'>Already have Account ?
            <Link to = '/login' className='ps-3 fw-bold text-warning'>Login</Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignupScreen