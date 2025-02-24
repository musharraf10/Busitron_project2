import React, { useState } from "react";
import { Nav, Button } from "react-bootstrap";
import {
  FaTachometerAlt,
  FaUsers,
  FaMoneyBillWave,
  FaSignOutAlt,
  FaCogs,
} from "react-icons/fa";
import "./Sidebar.css"

const Sidebar = ({ props, setSelectedComponent }) => {
  const [activeComponent, setActiveComponent] = useState("dashboard");

  const handleComponentClick = (component) => {
    setSelectedComponent(component);
    setActiveComponent(component);
  };

  return (
    <div
      className="bg-dark text-white p-3 vh-100 position-fixed top-0 start-0 d-flex flex-column"
      style={{ width: "250px", borderRight: "1px solid rgba(255, 255, 255, 0.1)", zIndex:15 }}
    >
      <div className="d-flex align-items-center mb-4" >
        <img
          src={props.profileImage || `https://picsum.photos/100?random=${Math.floor(Math.random() * 1000)}`}
          alt="Profile"
          className="rounded-circle me-3"
          style={{ width: "50px", height: "50px", objectFit: "cover" }}
        />
        <div>
          <h5 className="mb-0">{props.name}</h5>
          <small>{props.role}</small>
        </div>
      </div>

      {/* Navigation Links */}
      <Nav className="flex-column flex-grow-1">
        <Nav.Link
          onClick={() => handleComponentClick("dashboard")}
          className={`text-white my-2 py-2 px-3 d-flex align-items-center ${
            activeComponent === "dashboard" ? "active-link" : ""
          }`}
        >
          <FaTachometerAlt className="me-2" /> Dashboard
        </Nav.Link>
        <Nav.Link
          onClick={() => handleComponentClick("users")}
          className={`text-white my-2 py-2 px-3 d-flex align-items-center ${
            activeComponent === "users" ? "active-link" : ""
          }`}
        >
          <FaUsers className="me-2" /> Users Management
        </Nav.Link>
        <Nav.Link
          onClick={() => handleComponentClick("content")}
          className={`text-white my-2 py-2 px-3 d-flex align-items-center ${
            activeComponent === "content" ? "active-link" : ""
          }`}
        >
          <FaMoneyBillWave className="me-2" /> Content Management
        </Nav.Link>
        <Nav.Link
          href="#"
          className={`text-white my-2 py-2 px-3 d-flex align-items-center`}
          onClick={() => handleComponentClick("payments")}
        >
          <FaMoneyBillWave className="me-2" /> Payment Management
        </Nav.Link>
        <Nav.Link
          onClick={() => handleComponentClick("settings")}
          className={`text-white my-2 py-2 px-3 d-flex align-items-center ${
            activeComponent === "settings" ? "active-link" : ""
          }`}
        >
          <FaCogs className="me-2" /> Settings
        </Nav.Link>
      </Nav>

      {/* Buy Subscription Section */}
      <div className="text-center bg-light text-dark p-3 rounded mb-4">
        <h6 className="mb-2">Get Premium Features!</h6>
        <p className="small text-muted mb-3">Upgrade to enjoy exclusive benefits.</p>
        <Button variant="primary" className="w-100 btn-custom"
        onClick={() => handleComponentClick("plans")}
        >
          Buy Subscription
        </Button>
      </div>

      {/* Logout Button */}
      <Nav.Link
        href="/"
        className="text-white mt-auto d-flex align-items-center"
      >
        <FaSignOutAlt className="me-2" /> Logout
      </Nav.Link>
    </div>
  );
};

export default Sidebar;
