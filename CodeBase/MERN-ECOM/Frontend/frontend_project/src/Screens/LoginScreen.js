import React, { useState } from "react";
// import axios from 'axios'
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../toolkit/Slices/userSlice/loginUserSlice";

function LoginScreen() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  var dispatch = useDispatch();

  var submitHandler = (e) => {
    e.preventDefault();
    var user = {
      email,
      password,
    };
    console.log(user);
    dispatch(loginUser(user));
    // axios.post('')
    // .then ((res)=>{
    // console.log(res)
    // }).catch((error)=>{
    // console.log(error)
    // })
  };

  return (
    <div className="">
      <form className="my-5" onSubmit={submitHandler}>
        <div className="w-25 m-auto border border-2 border-secondary py-3 px-5 bg-secondary text-white">
          <div className="my-2">
            <label htmlFor="email" className="fs-5 fw-normal">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-control border border-2 border-dark mt-1"
              value={email}
              onChange={(e) => setEmail(() => e.target.value)}
            />
          </div>
          <div className="my-2">
            <label htmlFor="password" className="fs-5 fw-normal">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-control border border-2 border-dark mt-1"
              value={password}
              onChange={(e) => setPassword(() => e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-info fw-bold my-2">
            Login
          </button>
          <div className="fw-normal my-2">
            Don't have account?
            <Link to="/signup" className="ps-1 fw-medium text-info">
              Sign up
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginScreen;
