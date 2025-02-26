// import React from "react";

// function PurchaseHistoryContent() {
//   return <h2 className="h4">Purchase History</h2>;
// }

// export default PurchaseHistoryContent;
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function PurchaseHistoryContent() {
  const [activeTab, setActiveTab] = useState("Courses"); // Track active button

  return (
    <div className="container mt-5 text-center">
      {/* Heading */}
      <h2 className="h4 fw-bold fs-1">Purchase History</h2>
      <p className="text-muted">Your purchased courses</p>

      {/* Divider Line */}
      <hr  />

      {/* Buttons Section */}
      <div className="d-flex justify-content-center gap-3 mt-3">
        {["Courses", "Subscriptions", "Refunds"].map((tab) => (
          <button
            key={tab}
            className={`btn ${activeTab === tab ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content Display Based on Active Tab */}
      <div className="mt-4">
        {activeTab === "Courses" && <p>Showing your purchased courses...</p>}
        {activeTab === "Subscriptions" && <p>Showing your active subscriptions...</p>}
        {activeTab === "Refunds" && <p>Showing your refund history...</p>}
      </div>
    </div>
  );
}

export default PurchaseHistoryContent;

