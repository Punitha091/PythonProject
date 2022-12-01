import React from 'react';
import {Link} from "react-router-dom"
import Dropdown from 'react-bootstrap/Dropdown';

const Navbar = () => {
    return (
        <div className=''>
            <nav className="navbar navbar-expand-lg " style={{background: "#e3f2fd ", fontSize:'large',}}>
                <div className="container-fluid">
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className='nav-link' to={"/home"}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/about"}>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/contact"}>Contact</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Dropdown className='nav-item dropdown'>
                                <Dropdown.Toggle variant="" id="dropdown-basic">
                                  Dropdown Button
                                </Dropdown.Toggle>
                                <Dropdown.Menu className='nav-item dropdown'>
                                  <Dropdown.Item ><Link className="nav-link" to={"/login"}>Employee details</Link> </Dropdown.Item>
                                  <Dropdown.Item ><Link className="nav-link" to={"/about"}> Another action </Link> </Dropdown.Item>
                                  <Dropdown.Item ><Link className="nav-link" to={"/home"}> Something else </Link></Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                            </li>
                           
                        </ul>
                       
                    </div>
                    <Link className='btn btn-outline-dark m-2' to={"/addusers"}>Add Users</Link>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
