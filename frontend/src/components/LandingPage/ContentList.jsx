import React from "react";
import { useNavigate } from "react-router-dom";
import contentData from "../data/contentData";

const ContentList = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px" }}>
      <h1>All Articles</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
        {contentData.map((content) => (
          <div
            key={content.id}
            onClick={() => navigate(`/content/${content.id}`)}
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "transform 0.2s",
              background: "#f9f9f9"
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <h3>{content.title}</h3>
            <p>{content.body.substring(0, 50)}...</p> {/* Show preview */}
            <p style={{ fontSize: "12px", color: "gray" }}>Published on: {content.publish_date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentList;
