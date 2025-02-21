import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import contentData from "../data/contentData";

const ContentDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const content = contentData.find((item) => item.id === parseInt(id));

  if (!content) return <h2>Article not found</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <button 
        onClick={() => navigate("/")} 
        style={{ marginBottom: "20px", padding: "10px", cursor: "pointer", background: "#007bff", color: "#fff", border: "none", borderRadius: "5px" }}
      >
        ← Go Back to Articles
      </button>
      <h2>{content.title}</h2>
      <p>{content.body}</p>
      <p style={{ fontSize: "12px", color: "gray" }}>Published on: {content.publish_date}</p>
    </div>
  );
};

export default ContentDetail;
