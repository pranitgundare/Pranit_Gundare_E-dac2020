import React from 'react'
import { NavLink } from "react-router-dom";
//import web from "../src/Logo.jpg";
import './Navbar.css';
const Navbar = () => {
    return (
        <>
            <div className="container-fluid nav_bg">
                <div class Name='row'>
                    <div class Name='col-10 mx-auto'>

                        <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
                            <div className="container-fluid">
                               
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <NavLink className="nav-link active" aria-current="page" to="/Homepage">Homepage</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/Home">Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/Register">Register</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/About">About</NavLink>
                                        </li>

                                      
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Navbar;

