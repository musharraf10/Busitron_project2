import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Subscriptions() {
  const [activePlans, setActivePlans] = useState([]);

  return (
    <div className="container mt-5">
      <h2 className="fw-bold">Subscriptions</h2>
      <p>Manage your subscriptions</p>

      {/* Active Plans */}
      <div className="border rounded p-3 mb-4">
        <h5 className="fw-bold">Active plans</h5>
        {activePlans.length === 0 ? (
          <p className="text-muted">You don’t have any active subscriptions</p>
        ) : (
          activePlans.map((plan, index) => (
            <p key={index} className="fw-bold">{plan}</p>
          ))
        )}
      </div>

      {/* Subscription Plans Available */}
      <h5 className="fw-bold">Subscription plans available</h5>
      <div className="border rounded p-4 d-flex align-items-center">
        {/* Left Side Content */}
        <div className="flex-grow-1">
          <h6 className="fw-bold">Personal Plan</h6>
          <p className="mb-1">
            New opportunities await. Sign up for Personal Plan to get all this and more:
          </p>
          <ul className="mb-2">
            <li>Access to 12,000+ top courses</li>
            <li>Courses in tech, business, and more</li>
            <li>Practice tests, exercises, and Q&A</li>
          </ul>
          <button className="btn btn-primary me-2">Subscribe</button>
          <button className="btn btn-outline-secondary">Learn more</button>
          <p className="text-muted mt-2">
            Starting at ₹1,039 per month. Cancel anytime.
          </p>
        </div>

        {/* Right Side Image */}
        <div>
          <img
            src="https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
            alt="Subscription"
            className="img-fluid"
            style={{width:"500px",height:"300px"}}
          />
        </div>
      </div>
    </div>
  );
}

export default Subscriptions;





