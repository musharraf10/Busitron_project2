import React, { useState } from "react";

const likedVideos = [
  {
    title: "Behind the Scenes of Marvel Movies",
    description: "Exclusive insights into Marvel’s productions.",
    category: "Entertainment",
    videoUrl: "https://www.youtube.com/embed/hA6hldpSTF8",
    likes: 1500
  },
  {
    title: "Latest AI Innovations",
    description: "Explore recent advancements in AI technology.",
    category: "Technology",
    videoUrl: "https://www.youtube.com/embed/2ePf9rue1Ao",
    likes: 1200
  },
  {
    title: "Complete JavaScript Course",
    description: "Learn JavaScript from scratch.",
    category: "Courses",
    videoUrl: "https://www.youtube.com/embed/Qqx_wzMmFeA",
    likes: 980
  },
  {
    title: "Python for Beginners",
    description: "A complete Python programming tutorial.",
    category: "Courses",
    videoUrl: "https://www.youtube.com/embed/_uQrJ0TkZlc",
    likes: 900
  },
  {
    title: "Machine Learning Explained",
    description: "An in-depth guide to machine learning concepts.",
    category: "Courses",
    videoUrl: "https://www.youtube.com/embed/GwIo3gDZCVQ",
    likes: 870
  },
  {
    title: "Healthy Eating Habits",
    description: "Learn about good habits for a healthy lifestyle.",
    category: "Health",
    videoUrl: "https://www.youtube.com/watch?v=lZp6Ntomljc",
    likes: 850
  },
  {
    title: "Quantum Computing Explained",
    description: "An introduction to quantum computing.",
    category: "Technology",
    videoUrl: "https://www.youtube.com/embed/QuR969uMICM",
    likes: 820
  },
  {
    title: "Artificial Intelligence in 2025",
    description: "How AI is shaping the future of industries.",
    category: "Technology",
    videoUrl: "https://www.youtube.com/embed/2ePf9rue1Ao",
    likes: 800
  },
  {
    title: "Stand-up Comedy Special",
    description: "Enjoy the best stand-up comedy moments.",
    category: "Entertainment",
    videoUrl: "https://www.youtube.com/embed/5m6lymJy57E",
    likes: 780
  },
  {
    title: "New Delhi Railway Station Stampede: 18 Dead",
    description: "A tragic stampede at New Delhi railway station.",
    category: "News",
    videoUrl: "https://en.wikipedia.org/wiki/2025_New_Delhi_railway_station_stampede",
    likes: 750
  }
];

const ITEMS_PER_PAGE = 3;

const LikedVideos = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(likedVideos.length / ITEMS_PER_PAGE);
  const currentVideos = likedVideos.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Most Liked Videos</h2>
      <div className="row">
        {currentVideos.map((video, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card shadow-lg" style={{ height: '100%', border: '3px solid #ccc', transform: 'scale(1)', transition: 'transform 0.3s' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}>
              <div className="card-body">
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
                <p className="text-danger">❤️ {video.likes} Likes</p>
                <a href={video.videoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-100">
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

export default LikedVideos;
