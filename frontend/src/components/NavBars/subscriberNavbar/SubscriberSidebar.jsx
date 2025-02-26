import React, { useState } from "react";
import { Nav, Button } from "react-bootstrap";
import {
  FaTachometerAlt,
  FaUsers,
  FaMoneyBillWave,
  FaSignOutAlt,
  FaCogs,
} from "react-icons/fa";
import "../adminNavbar/Sidebar.css"
import "../adminNavbar/Sidebar2.css"


const SubscriberSidebar = ({ props, setSelectedComponent }) => {
  const [activeComponent, setActiveComponent] = useState("dashboard");

  const handleComponentClick = (component) => {
    setSelectedComponent(component);
    setActiveComponent(component);
  };

  return (
    <div
      className="leftsidebar bg-dark text-white p-3 vh-100 position-fixed top-0 start-0 d-flex flex-column"
      style={{ width: "250px", borderRight: "1px solid rgba(255, 255, 255, 0.1)", zIndex:15 }}
    >
      <div className="d-flex align-items-center mb-4" >
        <img
          src={props.profileImage || `https://picsum.photos/100?random=${Math.floor(Math.random() * 1000)}`}
          alt="Profile"
          className="rounded-circle me-3"
          style={{ width: "50px", height: "50px", objectFit: "cover" }}
        />
        <div className="adminnameandrole">
          <h5 className="mb-0">{props.name}</h5>
          <small>{props.role}</small>
        </div>
      </div>

      {/* Navigation Links */}
      <Nav className="sidebarnamesparent flex-column flex-grow-1">
        <Nav.Link
          onClick={() => handleComponentClick("feed")}
          className={`text-white sidebarname my-2 py-2 px-3 d-flex align-items-center ${
            activeComponent === "feed" ? "active-link" : ""
          }`}
        >
          <FaTachometerAlt className="me-2" /> Feed
        </Nav.Link>
        <Nav.Link
          onClick={() => handleComponentClick("webinars")}
          className={`text-white sidebarname my-2 py-2 px-3 d-flex align-items-center ${
            activeComponent === "webinars" ? "active-link" : ""
          }`}
        >
          <FaUsers className="me-2" /> Webinar's
        </Nav.Link>
        <Nav.Link
          onClick={() => handleComponentClick("bookmarks")}
          className={`text-white sidebarname my-2 py-2 px-3 d-flex align-items-center ${
            activeComponent === "bookmarks" ? "active-link" : ""
          }`}
        >
          <FaMoneyBillWave className="me-2" /> Book Marks
        </Nav.Link>
        <Nav.Link
          href="/subscriber"
          className={`text-white sidebarname my-2 py-2 px-3 d-flex align-items-center`}
          onClick={() => handleComponentClick("upcomingwebinars")}
        >
          <FaMoneyBillWave className="me-2" /> Upcoming Webinars
        </Nav.Link>
        <Nav.Link
          onClick={() => handleComponentClick("settings")}
          className={`text-white sidebarname my-2 py-2 px-3 d-flex align-items-center ${
            activeComponent === "settings" ? "active-link" : ""
          }`}
        >
          <FaCogs className="me-2" /> Settings
        </Nav.Link>


          {/* Logout Button */}
          <Nav.Link
         href="/"
          className={`text-white sidebarname my-2 py-2 px-3 d-flex align-items-center `}
        >
           <FaSignOutAlt className="me-2 " /> Logout
        </Nav.Link>
      </Nav>

      <div className="text-center bg-light text-dark p-3 rounded mb-4">
        <h6 className="mb-2">Get Premium Features!</h6>
        <p className="small text-muted mb-3">Upgrade to enjoy exclusive benefits.</p>
        <Button variant="primary" className="w-100 btn-custom"
        onClick={() => handleComponentClick("plans")}
        >
          Buy Subscription
        </Button>
      </div>

    
    </div>
  );
};

export default SubscriberSidebar;
