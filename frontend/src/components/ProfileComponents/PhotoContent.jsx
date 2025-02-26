// import React from "react";

// function PhotoContent() {
//   return (
//     <div>
//       <h2 className="h4">Photo Upload</h2>
//       <input type="file" className="form-control mt-2" />
//     </div>
//   );
// }

// export default PhotoContent;
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function PhotoContent() {
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="h4 text-center fs-1">Photo</h2>
      <p className="text-center text-muted">
        Add a nice photo of yourself for your profile.
      </p>
      <hr />

      {/* Image Preview */}
      <div className="d-flex justify-content-center my-3 mt-5">
        <div
          className="border rounded p-3"
          style={{
            width: "300px",
            height: "150px",
            backgroundColor: "#f8f9fa",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {image ? (
            <img
              src={image}
              alt="Profile Preview"
              className="img-fluid rounded"
              style={{ maxHeight: "100%" }}
            />
          ) : (
            <img
              src="https://www.pngkey.com/png/detail/22-223848_businessman-vector-person-logo-png.png"
              alt="Default Icon"
              className="img-fluid"
            />
          )}
        </div>
      </div>

      {/* File Input */}
      <div className="mb-3 text-center">
        <label className="form-label fw-bold mt-4">Add / Change Image</label>
        <div className="d-flex justify-content-center gap-2">
          <input
            type="file"
            className="form-control"
            accept="image/*"
            onChange={handleImageChange}
          />
          <button className="btn btn-outline-primary">Upload image</button>
        </div>
      </div>

      {/* Save Button */}
      <div className="text-center">
        <button className="btn btn-primary mt-3" style={{padding:"5px 15px"}}>Save</button>
      </div>
    </div>
  );
}

export default PhotoContent;

