import React, { useState, useEffect } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { FaSignOutAlt } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import "./AppNavbar.css";

const AppNavbar = ({ props, isSidebarOpen, setIsSidebarOpen }) => {
  const [loginDuration, setLoginDuration] = useState("00:00:00");

  // Function to format duration in HH:MM:SS
  const formatTime = (seconds) => {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${hrs}:${mins}:${secs}`;
  };

  useEffect(() => {
    const loginTime = sessionStorage.getItem("loginTime") || Date.now();
    sessionStorage.setItem("loginTime", loginTime);

    const interval = setInterval(() => {
      const elapsedTime = Math.floor((Date.now() - loginTime) / 1000);
      setLoginDuration(formatTime(elapsedTime));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Logout Function
  const handleLogout = () => {
    sessionStorage.removeItem("loginTime");
    alert("Logged out successfully!");
    window.location.reload();
  };

  return (
    <Navbar
      bg="white"
      variant="dark"
      style={{
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        zIndex: 9,
      }}
      className=" position-sticky top-0 "
    >
      <Button
        variant="outline-light"
        className="position-absolute"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        style={{
          top: "12px",
          left: isSidebarOpen ? "250px" : "20px",
          zIndex: 1050,
          color: "black",
          border: "none",
          background: "transparent",
        }}
      >
        {isSidebarOpen ? <ArrowBackIosIcon size={20} /> : <FaBars size={20} />}
      </Button>
      <Navbar.Brand
        className=""
        style={{
          marginLeft: "60px",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {props.name}
      </Navbar.Brand>
      <Nav className="ms-auto d-flex align-items-center">
        <span className="loggedintext text-black me-3">
          ⏳ Logged in: {loginDuration}
        </span>
        <Nav.Link className="navlinkoflogout" href="/">
          <Button
            className="rounded-1 logoutbutton btn btn-outline-danger d-flex flex-row justify-content-center align-items-center"
            onClick={handleLogout}
            style={{
              backgroundColor: "transparent",
              borderColor: "red",
              color: "red",
            }}
          >
            <FaSignOutAlt className="mr-2" />
            <p className="p-0 m-0">Logout</p>
          </Button>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default AppNavbar;
