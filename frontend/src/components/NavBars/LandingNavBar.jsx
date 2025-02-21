import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LandingPageNav.css"; 
import AuthForm from "../AuthForm";

const LandingNavbar = () => {
    const [activeLink, setActiveLink] = useState("home");
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    const handleLoginClick = () => {
        setShowModal(true); // Show the modal when Login button is clicked
    };

    const handleCloseModal = () => {
        setShowModal(false); // Close the modal
    };

    return (
        <div>
            {/* Navbar Section */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                    <NavLink
                        className="navbar-brand"
                        to="/"
                        onClick={() => {
                            handleLinkClick("home");
                            window.scrollTo(0, 0); // Scroll to top
                        }}
                    >
                        NICHE-FLARE
                    </NavLink>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <NavLink
                                    className={`nav-link ${activeLink === "home" ? "active" : ""}`}
                                    to="/"
                                >
                                    Home
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <button
                                    className="btn btn-light"
                                    onClick={handleLoginClick}
                                >
                                    Login
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <Modal show={showModal} onHide={handleCloseModal} centered>
                <AuthForm/>
            </Modal>
        </div>
    );
};

export default LandingNavbar;
