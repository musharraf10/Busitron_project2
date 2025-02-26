import React, { useState, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "./profile.css"; 

const menuItems = [
  { name: "Profile", path: "profile" },
  { name: "Photo", path: "photo" },
  { name: "Account Settings", path: "accountsettings" },
  { name: "Payment Methods", path: "paymentmethods" },
  { name: "Subscriptions", path: "subscriptions" },
  { name: "Purchase History", path: "purchasehistory" },
  { name: "Logout", path: "logout" },
];

function Sidebar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogout = () => {
    navigate("/", { replace: true });
  };

  return (
    <div className="d-flex">
      {/* Sidebar (Fixed for Large Screens) */}
      {!isMobile && (
        <div className="sidebar bg-light p-3 border-end" style={{ position: "fixed", left: 0, top: "60px", height: "100vh", width: "250px", zIndex: 1100 }}>
          <h5 className="mb-3">Menu</h5>
          <ul className="list-group">
            {menuItems.map((item) => (
              <li
                key={item.path}
                className="list-group-item list-group-item-action"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  if (item.path === "logout") handleLogout();
                  else navigate(item.path);
                }}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}

    
      <div className="flex-grow-1" style={{ marginLeft: isMobile ? "0" : "250px", paddingLeft: "40px" }}>
        <div className="navbar-placeholder" style={{ height: "60px", display: isMobile ? "block" : "none" }}></div>
        
        {isMobile && (
          <div className="d-flex justify-content-start px-3">
            <button
              className="btn btn-dark"
              style={{ width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1200 }}
              onClick={() => setIsOpen(!isOpen)}
            >
              <FaBars size={20} />
            </button>
          </div>
        )}

        {/* Sidebar (Dropdown Below Icon on Small Screens) */}
        {isMobile && isOpen && (
          <div className="sidebar bg-light p-3 border rounded mx-3 mt-2" style={{ position: "absolute", left: "10px", width: "250px", zIndex: 1100 }}>
            <h5 className="mb-3">Menu</h5>
            <ul className="list-group">
              {menuItems.map((item) => (
                <li
                  key={item.path}
                  className="list-group-item list-group-item-action"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    if (item.path === "logout") handleLogout();
                    else navigate(item.path);
                    setIsOpen(false);
                  }}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Right Content Area */}
        <div className="content-area flex-grow-1 p-3" style={{ height: "100vh", overflowY: "auto", marginLeft: "20px" }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
