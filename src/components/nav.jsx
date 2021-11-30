import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm" id="mainNav">
            <div className="container px-5">
                <a className="navbar-brand fw-bold" href="#page-top">Start Bootstrap</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="bi-list"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto me-4 my-3 my-lg-0">
                        <li className="nav-item"><a className="nav-link me-lg-3" href="#features">Features</a></li>
                        <li className="nav-item"><a className="nav-link me-lg-3" href="#download">Download</a></li>
                        <li className="nav-item"><Link to="/api" className="nav-link me-lg-3" >Api</Link></li>
                        <li className="nav-item"><Link to="/register" className="nav-link me-lg-3" >Register</Link></li>
                        <li className="nav-item"><Link to="/maps" className="nav-link me-lg-3" >Map</Link></li>
                    </ul>
                    <button className="btn btn-primary rounded-pill px-3 mb-2 mb-lg-0" data-bs-toggle="modal" data-bs-target="#feedbackModal">
                        <span className="d-flex align-items-center">
                            <i className="bi-chat-text-fill me-2"></i>
                            <span className="small">Send Feedback</span>
                        </span>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Nav;