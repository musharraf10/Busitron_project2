import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./HomeWebinar.css";

import "bootstrap/dist/css/bootstrap.min.css";

export const dummyData1 = [
  {
    title: "Mastering React: Live Q&A Session",
    body: "Join us for a live Q&A session with React experts. Get your questions answered in real time!",
    publish_date: "2025-02-25T14:00:00Z",
    type: "video",
    author_id: "65d47b2c9c1e4f001a2b5001",
    tags: ["React", "Webinar", "Live", "Frontend"],
    status: "published",
    video_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    image_url: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
  },
  {
    title: "Building Scalable Web Apps with Node.js",
    body: "Learn how to build high-performance and scalable web applications using Node.js.",
    publish_date: "2025-03-05T16:30:00Z",
    type: "video",
    author_id: "65d47b2c9c1e4f001a2b5002",
    tags: ["Node.js", "Webinar", "Backend"],
    status: "published",
    video_url: "https://www.youtube.com/watch?v=Oe421EPjeBE",
    image_url: "https://img.youtube.com/vi/Oe421EPjeBE/maxresdefault.jpg",
  },
  {
    title: "State Management in React: Redux vs Context API",
    body: "A deep dive into managing state in React applications with Redux and Context API.",
    publish_date: "2025-03-12T18:00:00Z",
    video_url: "https://www.youtube.com/watch?v=9KJxaFHotqI",
    image_url: "https://img.youtube.com/vi/9KJxaFHotqI/maxresdefault.jpg",
  },{
    type: "video",
    author_id: "65d47b2c9c1e4f001a2b5003",
    publish_date: "2025-03-12T18:00:00Z",
    tags: ["React", "Redux", "Context API", "Webinar"],
    status: "published",
    video_url: "https://www.youtube.com/watch?v=9KJxaFHotqI",
    image_url: "https://img.youtube.com/vi/9KJxaFHotqI/maxresdefault.jpg",
  },
  {
    title: "Advanced JavaScript Concepts Explained",
    body: "An in-depth session covering closures, prototypes, and async programming in JavaScript.",
    type: "video",
    author_id: "65d47b2c9c1e4f001a2b5004",
    publish_date: "2025-03-20T15:00:00Z",
    tags: ["JavaScript", "Advanced", "Webinar"],
    status: "published",
    video_url: "https://www.youtube.com/watch?v=B7wHpNUUT4Y",
    image_url: "https://img.youtube.com/vi/B7wHpNUUT4Y/maxresdefault.jpg",
  }
];

export const HomeWebinar = () => {
  return (
    <div className="text-center p-4">
      {/* Heading */}
      <h2 className="mb-4 fw-bold">Webinar</h2>

      {/* Webinar Grid Layout */}
      <div className="container">
        <div className="row g-4">
          {dummyData1.map((k, index) => (
            <div key={index} className="col-md-4">
              <Card className="shadow-lg border-0">
                <Card.Img variant="top" src={k.image_url} style={{ height: "180px", objectFit: "cover" }} />
                <Card.Body>
                  <Card.Title className="fw-bold">{k.title}</Card.Title>
                  <Card.Text className="text-muted">{k.body}</Card.Text>
                  <Card.Text className="text-secondary small">
                    {new Date(k.publish_date).toDateString()}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* View More Button */}
      <Link to={"/webinar"}>
        <button
          className="btn btn-primary mt-4 px-4 py-2 rounded-pill fw-bold shadow"
          style={{ transition: "0.3s ease-in-out" }}
          onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
          onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
        >
          View More
        </button>
      </Link>
    </div>
  );
};
