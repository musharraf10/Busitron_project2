import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Dashboard from "./Dashboard";
import UsersManagement from "./UsersManagement"; // Import the UsersManagement Component
import AppNavbar from "./AppNavbar";
import Profile from "../components/Profile";
import ContentModeration from "./ContentModeration";

function Home({ props }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedComponent, setSelectedComponent] = useState("dashboard"); // Default page

  return (
    <div>
      <AppNavbar props={props}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <div className="d-flex">
        {isSidebarOpen && (
          <Sidebar props={props} setSelectedComponent={setSelectedComponent} />
        )}

        {/* Main Content - Conditionally Render Components */}
        <div
          className="flex-grow-1 p-3"
          style={{ marginLeft: isSidebarOpen ? "250px" : "0" }}
        >
          {selectedComponent === "dashboard" && <Dashboard props={props} />}
          {selectedComponent === "users" && <UsersManagement />}
          {selectedComponent === "settings" && (
            <Profile
              props={props}
              setSelectedComponent={setSelectedComponent}
            />
            
          )}
          {selectedComponent === "content" && <ContentModeration props={props} />}
        </div>
      </div>
    </div>
  );
}

export default Home;
