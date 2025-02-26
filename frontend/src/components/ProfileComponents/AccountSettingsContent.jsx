// import React from "react";

// function AccountSettingsContent() {
//   <div>

//   </div>
// }

// export default AccountSettingsContent;
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaEdit, FaCheck } from "react-icons/fa"; // Importing Icons

function AccountSettingsContent() {
  const [email, setEmail] = useState("valibasha5944@gmail.com");
  const [isEditing, setIsEditing] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Handle Email Edit
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Save Email on Blur or Enter Key
  const saveEmail = () => {
    setIsEditing(false);
  };

  // Handle Password Change
  const handlePasswordChange = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
    } else {
      alert("Password changed successfully!");
      setNewPassword("");
      setConfirmPassword("");
    }
  };

  return (
    <div className="container mt-5">
      {/* Header */}
      <h2 className="h4 text-center fw-bold fs-1">Account</h2>
      <p className="text-center text-muted">
        Edit your account settings and change your password here.
      </p>
      <hr />

      {/* Email Section */}
      <div className="mb-0" style={{padding:"30px",margin:"90px"}}>
        <label className="form-label fw-bold">Email:</label>
        <div className="d-flex align-items-center border rounded p-2">
          {isEditing ? (
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={handleEmailChange}
              onBlur={saveEmail} // Save on blur
              onKeyDown={(e) => e.key === "Enter" && saveEmail()} // Save on Enter key
              autoFocus
            />
          ) : (
            <span className="fw-bold flex-grow-1">{email}</span>
          )}
          <button
            className="btn btn-outline-primary btn-sm ms-2"
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? <FaCheck /> : <FaEdit />}
          </button>
        </div>
      </div>

      {/* Password Change Form */}
      <form onSubmit={handlePasswordChange} className="mt-5" style={{border:"1px solid black",padding:"30px",margin:"90px"}}>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Re-type new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        {/* Change Password Button */}
        <button type="submit" className="btn btn-primary w-100">
          Change Password
        </button>
      </form>
    </div>
  );
}

export default AccountSettingsContent;

