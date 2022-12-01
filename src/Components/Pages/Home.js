import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Navbar from '../Layouts/Navbar';
import axios from "axios";

const Home = ({ title }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUser();

    }, []);

    const loadUser = async () => {
        const result = await axios.get('http://127.0.0.1:8000/gets')
        setUsers(result.data);
    }

    const deleteUser = async id => {
        await axios.delete(`http://127.0.0.1:8000/remove/${id}`);
        loadUser();
    }

    return (
        <div className=' container '>
            <Navbar></Navbar>
            <div className='d-flex justify-content-center mt-5'>
                <div className="card" style={{ textAlign: 'center' }}>

                    <div className="card-body ">
                        <h3 className='title'>{title}</h3>
                        <h5 className="card-title">Why do we use it?</h5>
                        <p className="card-text">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                        </p>
                        <h5 className="card-title">Employee Details</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                        <table className="table">
                            <thead>
                                <tr className='bg-dark text-white'>
                                    <th scope="col">Id</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Contact</th>
                                    <th scope='col'>Action</th>
                                </tr>

                            </thead>
                            <tbody>
                                {users.map((user, index) => (
                                    <tr>
                                        <th scope='row'>{index + 1}</th>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.contact}</td>
                                        <td>
                                            <Link to="" className=''>
                                                <i className='fa fa-eye password-icon m-2' />
                                            </Link>
                                            <Link to={`/editusers/${user.id}`} className='btn btn-outline-primary m-2'>Edit</Link>
                                            <Link type="button" to="" className='btn btn-danger m-2' onClick={() => deleteUser(user.id)}>Delete</Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
