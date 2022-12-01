import React, { useState, useEffect } from 'react';
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom";
import Navbar from '../Layouts/Navbar';

const Editusers = () => {

    let navigate = useNavigate();
    const { id } = useParams();

    const [user, setUsers] = useState({
        name: "",
        email: "",
        password: "",
        contact:"",
    }); 

    const { name, email, password, contact } = user;
    const onInputChange = (e) => {
        setUsers({ ...user, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        loadUser();

    });

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://127.0.0.1:8000/change/${id}`, user)
        navigate("/home");
        
    };

    const loadUser = async () => {
        const result = await axios.get("http://127.0.0.1:8000/get", user)
        setUsers(result.data);
    }

    return (
        <div > 
        <Navbar/>
            <form className="container" onSubmit={(e) => onSubmit(e)}>
                <div className="mb-3">
                    <label
                        htmlFor="inputid"
                        className="col-sm-2 col-form-label">
                        Id
                    </label>
                    <div className="col-sm-6">
                        <input
                            type="text"
                            className="form-control"
                            id="inputid"
                            name='id'
                            value={id}
                            onChange={(e) => onInputChange(e)}
                        />
                    </div>

                    <label
                        htmlFor="inputname"
                        className="col-sm-2 col-form-label">
                        Name
                    </label>
                    <div className="col-sm-6">
                        <input
                            type="text"
                            className="form-control"
                            id="inputname"
                            name='name'
                            value={name}
                            onChange={(e) => onInputChange(e)}
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="staticEmail"
                            className="col-sm-2 col-form-label">
                            Email</label>
                        <div className="col-sm-6">
                            <input
                                type="text"
                                className="form-control"
                                id="staticEmail"
                                name='email'
                                value={email}
                                onChange={e => onInputChange(e)}
                            />
                        </div>
                    </div>

                    <div>
                    <label
                        htmlFor="contact"
                        className="col-sm-2 col-form-label">
                        Contact</label>
                    <div className="col-sm-6">
                        <input
                            type="tel"
                            className="form-control"
                            id="contact"
                            name='contact'
                            value={contact}
                            onChange={(e) => onInputChange(e)}
                        />
                    </div>
                </div>

                    <div className="mb-3 ">
                        <label
                            htmlFor="inputPassword"
                            className="col-sm-2 col-form-label">
                            Password
                        </label>
                        <div className="col-sm-6">
                            <input
                                type="password"
                                className="form-control"
                                id="inputPassword"
                                name='password'
                                value={password}
                                onChange={e => onInputChange(e)}
                            />
                        </div>
                    </div>
                    <button
                        className="btn btn-warning">
                        Update user
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Editusers;
