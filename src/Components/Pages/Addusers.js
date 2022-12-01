import { React, useState } from 'react';
import axios from "axios"
import { useNavigate } from "react-router-dom";
import Navbar from '../Layouts/Navbar';

const Addusers = () => {

    let navigate = useNavigate()

    const [user, setUsers] = useState({
        name: "",
        email: "",
        password: "",
        contact: "",
    });

    const { name, email, password, contact } = user
    const onInputChange = (e) => {
        setUsers({ ...user, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://127.0.0.1:8000/insert", user);
        navigate("/home");

    };

    return (
        <div>
        <Navbar/>
            <div className="container">
                <form onSubmit={e => onSubmit(e)}>
                    <div className="mb-3">
                        <label
                            htmlFor="inputname"
                            className="col-sm-2 col-form-label">
                            Name
                        </label>
                        <div className="col-md-6">
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
                            <div className="col-md-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="staticEmail"
                                    name='email'
                                    value={email}
                                    onChange={(e) => onInputChange(e)}
                                />
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="contact"
                                className="col-sm-2 col-form-label">
                                Contact</label>
                            <div className="col-md-6">
                                <input
                                    type="tel"
                                    className="form-control"
                                    id="contact"
                                    name='contact'
                                    maxLength={10}
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
                            <div className="col-md-6">
                                <input
                                    type="password"
                                    className="form-control"
                                    id="inputPassword"
                                    name='password'
                                    value={password}
                                    onChange={(e) => onInputChange(e)}
                                />
                            </div>
                        </div>
                        <button
                            className="btn btn-primary">
                            Add user</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Addusers;
