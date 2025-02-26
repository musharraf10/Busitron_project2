import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function ProfileContent() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "",
    dob: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile Data:", formData);
    alert("Profile saved successfully!");
  };

  return (
    <div className="container mt-5">
      <h2 className="h4 text-center fs-1">Profile</h2>
      <p className="text-center text-muted">
        Add information about yourself.
      </p>
    <hr />
      {/* Profile Form */}
      <form className="w-50 mx-auto mt-3 p-2 " style={{border:"1px solid black"} } onSubmit={handleSubmit} >
        {/* First Name */}
        <div className="mb-0 p-2">
          <label className="form-label fw-bold">First Name</label>
          <input
            type="text"
            className="form-control"
            name="firstName"
            placeholder="Firstname"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Last Name */}
        <div className="mb-0 p-1">
          <label className="form-label fw-bold">Last Name</label>
          <input
            type="text"
            className="form-control"
            name="lastName"
            placeholder="Lastname"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email */}
        <div className="mb-0 p-1">
          <label className="form-label fw-bold">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Phone Number */}
        <div className="mb-0 p-1">
          <label className="form-label fw-bold">Phone Number</label>
          <input
            type="tel"
            className="form-control"
            name="phone"
            placeholder="Phone number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        {/* Gender */}
        <div className="mb-0 p-1">
          <label className="form-label fw-bold">Gender</label>
          <select
            className="form-select"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Date of Birth */}
        <div className="mb-0 p-1">
          <label className="form-label fw-bold">Date of Birth</label>
          <input
            type="date"
            className="form-control"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </div>

        {/* Save Button */}
        <div className="text-center">
          <button type="submit" className="btn btn-primary">Save</button>
        </div>
      </form>
    </div>
  );
}

export default ProfileContent;
