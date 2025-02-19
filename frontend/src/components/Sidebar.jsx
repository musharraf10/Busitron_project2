import React from "react";
import { Nav } from "react-bootstrap";
import {
  FaTachometerAlt,
  FaUsers,
  FaMoneyBillWave,
  FaSignOutAlt,
} from "react-icons/fa";

const Sidebar = ({ props, setSelectedComponent }) => {
  return (
    <div
      className="bg-dark text-white p-3 vh-100 position-fixed top-0 start-0 d-flex flex-column"
      style={{ width: "250px" }}
    >
      <h4 className="mb-4">{props.name}</h4>
      <span>{props.role}</span>
      <Nav className="flex-column flex-grow-1">
        <Nav.Link
          onClick={() => setSelectedComponent("dashboard")}
          className="text-white"
        >
          <FaTachometerAlt /> Dashboard
        </Nav.Link>
        <Nav.Link
          onClick={() => setSelectedComponent("users")}
          className="text-white"
        >
          <FaUsers /> Users Management
        </Nav.Link>
        <Nav.Link onClick={() => setSelectedComponent("content")} className="text-white">
          <FaMoneyBillWave /> Content Management
        </Nav.Link>
        <Nav.Link href="#" className="text-white">
          <FaMoneyBillWave /> Payment Management
        </Nav.Link>
        <Nav.Link
          onClick={() => setSelectedComponent("settings")}
          className="text-white"
        >
          <FaMoneyBillWave /> Settings
        </Nav.Link>
      </Nav>
      <Nav.Link href="/landingpage" className="text-white mt-auto">
        <FaSignOutAlt /> Logout
      </Nav.Link>
    </div>
  );
};

export default Sidebar;
