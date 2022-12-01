import React from 'react';
import Navbar from '../Layouts/Navbar';
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Login = () => {

  return (
    <div>
      <Navbar />
      <div className='d-flex justify-content-center mt-5'>
        <div className="card " style={{ textAlign: 'center' }} >
          <div className="card-body "></div>
          <h2>Login</h2>
          <form className='container'>
            <div className=" mb-3 ">
              <label htmlFor="Email"
                className="form-label">
                Email address</label>
              <input
                type="email"
                className="form-control"
                id="Email"
                aria-describedby="emailHelp"
              />
              <div
                id="emailHelp"
                className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" />
              <Link to="" className='btn btn-primary'>
                <FontAwesomeIcon icon="fa-solid fa-eye" />
              </Link>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
