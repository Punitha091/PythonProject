import React, { useState } from 'react';
import Navbar from '../Layouts/Navbar';

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const submitRegistration = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password
      }),
    };

    const response = await fetch("/insert", requestOptions);
    const data = await response.json();

    if (!response.ok) {

      console.log("go away");

    } else {
      console.log([data, "error occured"])
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitRegistration();
  };

  return (
    <div className='container'>
      <Navbar />
      <p>Welcome</p>

      <form className="" onSubmit={handleSubmit}>
        <h1 className="d flex justify-text-center">Register</h1>

        <div className="form-check">
          <label className="label">Email Address</label>
          <div className="control">
            <input
              type="text"
              placeholder="Enter a Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              required
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Email Address</label>
          <div className="control">
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input"
              required
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Password</label>
          <div className="control">
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
              required
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Confirm Password</label>
          <div className="control">
            <input
              type="password"
              placeholder="Enter password"
              className="input"
              required
            />
          </div>
        </div>
        <button className="button is-primary" type="submit">
          Register
        </button>
      </form>


    </div>
  );
}

export default Register;
