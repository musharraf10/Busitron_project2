import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import "./Webinar.css";

export const dummyData = [
  {
    "title": "Mastering React: Live Q&A Session",
    "body": "Join us for a live Q&A session with React experts. Get your questions answered in real time!",
    "type": "video",
    "author_id": "65d47b2c9c1e4f001a2b5001",
    "publish_date": "2025-02-25T14:00:00Z",
    "tags": ["React", "Webinar", "Live", "Frontend"],
    "status": "published",
    "video_url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    "image_url": "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
  },
  {
    "title": "Building Scalable Web Apps with Node.js",
    "body": "Learn how to build high-performance and scalable web applications using Node.js.",
    "type": "video",
    "author_id": "65d47b2c9c1e4f001a2b5002",
    "publish_date": "2025-03-05T16:30:00Z",
    "tags": ["Node.js", "Webinar", "Backend"],
    "status": "published",
    "video_url": "https://www.youtube.com/watch?v=Oe421EPjeBE",
    "image_url": "https://img.youtube.com/vi/Oe421EPjeBE/maxresdefault.jpg"
  },
  {
    "title": "State Management in React: Redux vs Context API",
    "body": "A deep dive into managing state in React applications with Redux and Context API.",
    "type": "video",
    "author_id": "65d47b2c9c1e4f001a2b5003",
    "publish_date": "2025-03-12T18:00:00Z",
    "tags": ["React", "Redux", "Context API", "Webinar"],
    "status": "published",
    "video_url": "https://www.youtube.com/watch?v=9KJxaFHotqI",
    "image_url": "https://img.youtube.com/vi/9KJxaFHotqI/maxresdefault.jpg"
  },
  {
    "title": "Advanced JavaScript Concepts Explained",
    "body": "An in-depth session covering closures, prototypes, and async programming in JavaScript.",
    "type": "video",
    "author_id": "65d47b2c9c1e4f001a2b5004",
    "publish_date": "2025-03-20T15:00:00Z",
    "tags": ["JavaScript", "Advanced", "Webinar"],
    "status": "published",
    "video_url": "https://www.youtube.com/watch?v=B7wHpNUUT4Y",
    "image_url": "https://img.youtube.com/vi/B7wHpNUUT4Y/maxresdefault.jpg"
  },
  {
    "title": "Web Security Best Practices",
    "body": "Learn essential security practices to protect your web applications from threats.",
    "type": "video",
    "author_id": "65d47b2c9c1e4f001a2b5005",
    "publish_date": "2025-04-02T17:00:00Z",
    "tags": ["Security", "Web", "Best Practices"],
    "status": "published",
    "video_url": "https://www.youtube.com/watch?v=6x5zWfkhL7U",
    "image_url": "https://img.youtube.com/vi/6x5zWfkhL7U/maxresdefault.jpg"
  },
  {
    "title": "Introduction to Machine Learning",
    "body": "A beginner-friendly introduction to Machine Learning concepts and algorithms.",
    "type": "video",
    "author_id": "65d47b2c9c1e4f001a2b5006",
    "publish_date": "2025-04-10T14:00:00Z",
    "tags": ["Machine Learning", "AI", "Webinar"],
    "status": "published",
    "video_url": "https://www.youtube.com/watch?v=aircAruvnKk",
    "image_url": "https://img.youtube.com/vi/aircAruvnKk/maxresdefault.jpg"
  },
  {
    "title": "Python for Data Science",
    "body": "Learn how to use Python for data analysis, visualization, and machine learning.",
    "type": "video",
    "author_id": "65d47b2c9c1e4f001a2b5007",
    "publish_date": "2025-04-18T19:00:00Z",
    "tags": ["Python", "Data Science", "Webinar"],
    "status": "published",
    "video_url": "https://www.youtube.com/watch?v=RBSGKlAvoiM",
    "image_url": "https://img.youtube.com/vi/RBSGKlAvoiM/maxresdefault.jpg"
  },
  {
    "title": "The Future of Web Development: Trends in 2025",
    "body": "Stay ahead with the latest web development trends and technologies.",
    "type": "video",
    "author_id": "65d47b2c9c1e4f001a2b5008",
    "publish_date": "2025-04-25T20:30:00Z",
    "tags": ["Web Development", "Trends", "Webinar"],
    "status": "published",
    "video_url": "https://www.youtube.com/watch?v=R4nhTRwxD8c",
    "image_url": "https://img.youtube.com/vi/R4nhTRwxD8c/maxresdefault.jpg"
  },
  {
    "title": "Building RESTful APIs with Express.js",
    "body": "A hands-on session on creating RESTful APIs using Express.js and MongoDB.",
    "type": "video",
    "author_id": "65d47b2c9c1e4f001a2b5009",
    "publish_date": "2025-05-02T15:45:00Z",
    "tags": ["API", "Express.js", "MongoDB", "Webinar"],
    "status": "published",
    "video_url": "https://www.youtube.com/watch?v=pKd0Rpw7O48",
    "image_url": "https://img.youtube.com/vi/pKd0Rpw7O48/maxresdefault.jpg"
  },
  {
    "title": "DevOps Essentials: CI/CD Pipelines",
    "body": "Learn the fundamentals of DevOps, including CI/CD pipeline setup and automation.",
    "type": "video",
    "author_id": "65d47b2c9c1e4f001a2b5010",
    "publish_date": "2025-05-10T12:00:00Z",
    "tags": ["DevOps", "CI/CD", "Webinar"],
    "status": "published",
    "video_url": "https://www.youtube.com/watch?v=8fi7uSYlOdc",
    "image_url": "https://img.youtube.com/vi/8fi7uSYlOdc/maxresdefault.jpg"
  }
]

export const Webinar = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState(dummyData);
  const [isLatest, setIsLatest] = useState(false);

  useEffect(() => {
    filterData();
  }, [searchText, isLatest]); 

  const inputHandler = (e) => {
    setSearchText(e.target.value);
  };

  const latestHandler = () => {
    setIsLatest(true);
  };

  const resetHandler = () => {
    setIsLatest(false);
  };

  const filterData = () => {
    let filtered = dummyData;

    if (isLatest) {
      const tenDaysAgo = new Date();
      tenDaysAgo.setDate(tenDaysAgo.getDate() - 10);
      filtered = filtered.filter((item) => new Date(item.publish_date) >= tenDaysAgo);
    }

    if (searchText) {
      filtered = filtered.filter((item) => item.title.toLowerCase().includes(searchText.toLowerCase()));
    }

    setFilteredData(filtered);
  };

  return (
    <>
      <div className="search-container mt-5" ><br />
        <input
          type="text"
          onChange={inputHandler}
          className="search-input"
          placeholder="Search videos..."  
          value={searchText}
        />
        <button onClick={latestHandler}>Latest</button>
        <button onClick={resetHandler}>Reset</button>
      </div>
  
      <div className="card-container">
        {filteredData.length > 0 ? (
          filteredData.map((k, index) => (
            <Card key={index} className="video-card">
              <Card.Img variant="top" src={k.image_url} alt="Thumbnail" className="card-img" />
              <Card.Body>
                <Card.Title className="card-title">{k.title}</Card.Title>
                <Card.Text className="card-body">{k.body}</Card.Text>
                <Card.Text className="card-date">{new Date(k.publish_date).toDateString()}</Card.Text>
                <Card.Text className="card-tags">
                  {k.tags.map((tag, i) => (
                    <span key={i} className="tag">
                      {tag}
                    </span>
                  ))}
                </Card.Text>
                {/* <Card.Text>{k.status}</Card.Text> */}
              </Card.Body>
            </Card>
          ))
        ) : (
          <p >No videos found.</p>
        )}
      </div>
    </>
  );
  
};
