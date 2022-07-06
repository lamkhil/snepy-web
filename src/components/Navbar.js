import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light px-4  ">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="#">
                        <img src="logo.png" alt="" width="195" height="35"/>
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="#">About us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="#">Product</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="#">Blog</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="#">Faq</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="#">Download</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="#">Contact us</NavLink>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">


                            <li className="nav-item">
                                <NavLink className="nav-link bg-primary text-light" to="#">Buy Now</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {props.child}
        </div>
    );
}

export default Navbar;