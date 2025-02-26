import React, { useState } from "react";
import SubscriberSidebar from "../../components/NavBars/subscriberNavbar/SubscriberSidebar";
import AppNavbar from "../../components/NavBars/AppNavbar";
import Settings from "../../components/Settings";
import SubscriptionCards from "../../components/Subscriptions/SubscriptionCards";
import ContentList from "./ContentList";
import {Webinar} from "../../components/Webinar/Webinar";


function SubscriberHome({ props }) {
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
          <SubscriberSidebar props={props} setSelectedComponent={setSelectedComponent} />
        )}

        {/* Main Content - Conditionally Render Components */}
        <div
          className="flex-grow-1 p-3"
          style={{ marginLeft: isSidebarOpen ? "250px" : "0" }}
        >
          {selectedComponent === "feed" && < ContentList/>}
          {selectedComponent === "webinars" && <Webinar />}
          {selectedComponent === "settings" && (
            <Settings
              props={props}
              setSelectedComponent={setSelectedComponent}
            />
          )}
          {/* {selectedComponent === "content" && <ContentModeration props={props} />}

          {selectedComponent === 'payments' && <PaymentsDashboard/>} */}

          {selectedComponent === "plans" && <SubscriptionCards/>}
        </div> 
      </div>
    </div>
  );
}

export default SubscriberHome;
