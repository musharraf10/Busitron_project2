
import React, { useState } from "react";

const videos = [
  // Technology Category
  {
    title: "Latest AI Innovations",
    description: "Explore recent advancements in AI technology.",
    category: "Technology",
    videoUrl: "https://www.youtube.com/embed/2ePf9rue1Ao"
  },
  {
    title: "Quantum Computing Explained",
    description: "An introduction to quantum computing.",
    category: "Technology",
    videoUrl: "https://www.youtube.com/embed/QuR969uMICM"
  },
  {
    title: "The Future of AI: Innovations in 2025",
    description: "the latest advancements in artificial intelligence.",
    category: "Technology",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },

  // Entertainment Category
  {
    title: "Mahanadhi – Vijay TV Promo",
    description: "A promotional video for the Tamil television series",
    category: "Entertainment",
    videoUrl: "https://www.youtube.com/embed/oYBIKPUvYZos"
  },
  {
    title: "Behind the Scenes of Marvel Movies",
    description: "Exclusive insights into Marvel’s productions.",
    category: "Entertainment",
    videoUrl: "https://www.youtube.com/embed/hA6hldpSTF8"
  },
  {
    title: "Stand-up Comedy Special",
    description: "Enjoy the best stand-up comedy moments.",
    category: "Entertainment",
    videoUrl: "https://www.youtube.com/embed/5m6lymJy57E"
  },

  // Courses Category
  {
    title: "Complete JavaScript Course",
    description: "Learn JavaScript from scratch.",
    category: "Courses",
    videoUrl: "https://www.youtube.com/embed/Qqx_wzMmFeA"
  },
  {
    title: "Python for Beginners",
    description: "A complete Python programming tutorial.",
    category: "Courses",
    videoUrl: "https://www.youtube.com/embed/_uQrJ0TkZlc"
  },
  {
    "title": "Machine Learning Explained",
    "description": "An in-depth guide to get machine learning concepts.",
    "category": "Courses",
    "videoUrl": "https://www.youtube.com/embed/GwIo3gDZCVQ"
  },

  // News Category

  {
    "title": "Toronto Plane Crash: Delta Flight Overturns on Landing",
    "description": "Footage shows a Delta Air Lines jet flipping",
    "category": "News",
    "videoUrl": "https://www.theguardian.com/world/2025/feb/18/toronto-plane-crash-video"
  },
  {
    "title": "New Delhi Railway Station Stampede: 18 Dead",
    "description": "A tragic stampede at New Delhi railway station.",
    "category": "News",
    "videoUrl": "https://en.wikipedia.org/wiki/2025_New_Delhi_railway_station_stampede"
  },
  {
    "title": "Measles Outbreak Worsens in Texas",
    "description": "Health officials report a significant rise in measles cases among children in Texas.",
    "category": "News",
    "videoUrl": "https://www.foxnews.com/health/measles-outbreak-continues-worsen-among-kids-us-state"
  },


  // Health Category
  {
    "title": "Healthy Eating Habits For Kids",
    "description": "Learn about good habits and foods to avoid for a healthy lifestyle.",
    "category": "Health",
    "videoUrl": "https://www.youtube.com/watch?v=lZp6Ntomljc"
  },
  {
    "title": "10 Healthy Eating Habits for 2022",
    "description": "Discover ten habits to improve your diet and well-being.",
    "category": "Health",
    "videoUrl": "https://www.youtube.com/watch?v=KofJESkYGLE"
  },
  {
    "title": "Healthy Eating Habits: The 20 Minute Rule",
    "description": "Understand how taking time to eat.",
    "category": "Health",
    "videoUrl": "https://www.youtube.com/watch?v=Tp35JRidKKE"
  },


];

const categories = ["All", "Technology", "Entertainment", "Courses", "News", "Health"];
const ITEMS_PER_PAGE = 3;

const VideosCard = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredVideos = selectedCategory === "All" || selectedCategory === "News" || selectedCategory === "Health"
    ? videos.filter(video => selectedCategory === "All" || video.category === selectedCategory)
    : videos.filter(video => video.category === selectedCategory);

  const totalPages = Math.ceil(filteredVideos.length / ITEMS_PER_PAGE);
  const currentVideos = filteredVideos.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Trending Videos</h2>
      <div className="mb-4">
        <label className="form-label">Select Category:</label>
        <select className="form-select" onChange={(e) => { setSelectedCategory(e.target.value); setCurrentPage(1); }} value={selectedCategory}>
          {categories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>
      </div>
      <div className="row">
        {currentVideos.map((video, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card shadow-lg" style={{ height: '100%', border: '3px solid #ccc', transform: 'scale(1)', transition: 'transform 0.3s' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}>
              <div className="card-body d-flex flex-column">
                <div className="embed-responsive embed-responsive-16by9" style={{ overflow: 'hidden' }}>
                  <iframe
                    className="embed-responsive-item w-100"
                    src={video.videoUrl}
                    title={video.title}
                    style={{ transform: 'scale(1)', transition: 'transform 0.3s' }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.1)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
                    allowFullScreen
                  ></iframe>
                </div>
                <h5 className="card-title mt-3">{video.title}</h5>
                <h6 className="text-muted">{video.category}</h6>
                <p className="card-text">{video.description}</p>
                <a href={video.videoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-auto">
                  Watch on YouTube
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-center mt-3">
        <button
          className="btn btn-secondary me-2"
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}>
          ←
        </button>
        <span className="align-self-center">Page {currentPage} of {totalPages}</span>
        <button
          className="btn btn-secondary ms-2"
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}>
          →
        </button>
      </div>
    </div>
  );
};

export default VideosCard;
