import React, { useState } from "react";
import Sidebar from "../components/NavBars/Sidebar";
import Dashboard from "./Dashboard";
import UsersManagement from "./UsersManagement";
import AppNavbar from "../components/NavBars/AppNavbar";
import ContentModeration from "./ContentModeration";
import Settings from "../components/Settings";
import SubscriptionCards from "../components/Subscriptions/SubscriptionCards";

function Home({ props }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedComponent, setSelectedComponent] = useState("dashboard"); 

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
            <Settings
              props={props}
              setSelectedComponent={setSelectedComponent}
            />
          )}
          {selectedComponent === "content" && <ContentModeration props={props} />}

          {selectedComponent === "plans" && <SubscriptionCards/>}
        </div>
      </div>
    </div>
  );
}

export default Home;
