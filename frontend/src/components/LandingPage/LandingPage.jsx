import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LandingPage.css";
import { motion } from "framer-motion";


const articles = [
  { id: 1, title: "Understanding AI in Education", tags: "EDUCATION", description: "Exploring the role of AI in modern education.", image: "https://alcorfund.com/wp-content/uploads/2020/09/Technical-Innovation.png", likes: 120 },
  { id: 2, title: "Latest Tech Innovations", tags: "NEWS", description: "Recent advancements in technology that are shaping the future.", image: "https://alcorfund.com/wp-content/uploads/2020/09/Technical-Innovation.png", likes: 95 },
  { id: 3, title: "The Future of Online Learning", tags: "EDUCATION", description: "How e-learning is evolving to meet modern needs.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaNQQxBi2N-PQLOUdMUyy6NccgNvlf0Q_Qjw&s", likes: 110 },
  { id: 4, title: "Breaking Health Discoveries", tags: "HEALTH", description: "Recent medical breakthroughs and research findings.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyFsDJy_UHalye8655WdCkKVTMx75ermvcoQ&s", likes: 80 },
  { id: 5, title: "Blockchain & Cryptocurrency", tags: "NEWS", description: "An overview of blockchain and digital currencies.", image: "https://img-cdn.inc.com/image/upload/f_webp,c_fit,w_1920,q_auto/images/panoramic/getty_676338290_306191.jpg", likes: 105 },
  { id: 6, title: "Mental Health Awareness", tags: "HEALTH", description: "Understanding mental health and its importance.", image: "https://media.istockphoto.com/id/1363774646/vector/mental-health.jpg?s=612x612&w=0&k=20&c=tez61I2L6Dp9WGPS2qLHJ9G-9sDRM8Uw3mJJEj1NqFE=", likes: 130 },
  { id: 7, title: "Space Exploration Updates", tags: "NEWS", description: "Latest discoveries in space exploration.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT1ej0MCn-X0K83xV6sJzezJkf89e-5UqR4Q&s", likes: 85 },
  { id: 8, title: "Best Sci-Fi Movies", tags: "ENTERTAINMENT", description: "Top science fiction movies of all time.", image: "https://cdn.pixabay.com/photo/2017/10/17/19/11/fantasy-2861815_640.jpg", likes: 75 },
  { id: 9, title: "Benefits of Yoga", tags: "HEALTH", description: "Health benefits of practicing yoga.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt27uSoFwVhRih9YDGDLx1AxYsAmQs_gSxGg&s", likes: 115 },
  { id: 10, title: "History of Artificial Intelligence", tags: "EDUCATION", description: "A look into the history and evolution of AI.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx2z8YPsk5HbJBoMf4br3rokBP42BHg6AlKA&s", likes: 125 },
  { id: 11, title: "Advancements in Medical Tech", tags: "HEALTH", description: "Latest technology in the medical field.", image: "https://media.istockphoto.com/id/1364324877/photo/medicine-doctor-analysis-and-diagnosis-checking-health-of-patient-online-and-testing-result.jpg?s=612x612&w=0&k=20&c=V6g0oKASvW0o2leSa5mm4_6-S0_LIsH8OsS4KIC70mw=", likes: 140 },
  { id: 12, title: "Top 10 Comedy Shows", tags: "ENTERTAINMENT", description: "Best comedy shows to watch.", image: "https://img.freepik.com/premium-vector/comedy-pop-art-style-editable-text-effect_102395-197.jpg?semt=ais_hybrid", likes: 90 },
  { id: 13, title: "Cybersecurity Trends", tags: "NEWS", description: "New trends in cybersecurity.", image: "https://media.istockphoto.com/id/1484313578/photo/cyber-security-network-data-protection-privacy-concept.jpg?s=612x612&w=0&k=20&c=mBkwneErmbHd7s8xauDNU-uXitNSXXBtxJ7C9He0Y9s=", likes: 98 },
  { id: 14, title: "Best Online Courses", tags: "EDUCATION", description: "Top online courses for skill development.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT99OI8jdsBpaR5mVjx_L4l956MLchHcp0w-g&s", likes: 108 },
  { id: 15, title: "Fitness & Nutrition Tips", tags: "HEALTH", description: "Essential tips for a healthy lifestyle.", image: "https://media.istockphoto.com/id/1395337483/photo/sports-and-gym-activities.jpg?s=612x612&w=0&k=20&c=lev6DFIvb5CVjdxSxuURswdZYLNHZPT4Y44iUkgm2q4=", likes: 112 },
  { id: 16, title: "Virtual Reality in Gaming", tags: "ENTERTAINMENT", description: "The impact of VR on gaming.", image: "https://media.istockphoto.com/id/1324380506/photo/people-with-vr-grasses-playing-virtual-reality-game-future-digital-technology-and-3d-virtual.jpg?s=612x612&w=0&k=20&c=I_9fnEi1hNHFwy0qe8g7V1ZQJmgyKEDOSDJonScTSMU=", likes: 88 },
  { id: 17, title: "The Rise of Podcasts", tags: "ENTERTAINMENT", description: "How podcasts are becoming mainstream.", image: "https://t4.ftcdn.net/jpg/02/75/00/01/360_F_275000195_rGRx3UMAvK2PQW8I4pSgHPZDXdK9MsF4.jpg", likes: 92 },
  { id: 18, title: "Impact of Climate Change", tags: "NEWS", description: "Effects of climate change worldwide.", image: "https://st.depositphotos.com/1288351/3082/i/450/depositphotos_30828375-stock-photo-global-warming.jpg", likes: 102 },
  { id: 19, title: "Augmented Reality in Education", tags: "EDUCATION", description: "How AR is transforming learning.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7yYOl6L5QvvL5wZPtUMNb_nleamR9NRquqQ&s", likes: 118 },
  { id: 20, title: "Healthy Eating Habits", tags: "HEALTH", description: "How to maintain a healthy diet.", image: "https://media.istockphoto.com/id/1457433817/photo/group-of-healthy-food-for-flexitarian-diet.jpg?s=612x612&w=0&k=20&c=v48RE0ZNWpMZOlSp13KdF1yFDmidorO2pZTu2Idmd3M=", likes: 122 }

];

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return <button className="slick-prev" onClick={onClick}>❮</button>;
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return <button className="slick-next" onClick={onClick}>❯</button>;
};

const LandingPage = () => {
  const [filteredtags, setFilteredtags] = useState("ALL");

  // Filter articles by tags
  const filteredArticles =
    filteredtags === "ALL"
      ? articles
      : articles.filter((article) => article.tags === filteredtags);

  // Sort articles by likes (most liked first)
  const likedArticles = [...articles].sort((a, b) => b.likes - a.likes);

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />, 
    nextArrow: <CustomNextArrow />, 
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div>
      {/* Hero Section */}
      <motion.div
      className="hero-section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="hero-overlay"></div>
      <motion.div
        className="hero-content text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h1 className="display-4 fw-bold">Enhance Your Skills</h1>
        <p className="lead">
          Access high-quality content, guides, and courses to excel in your
          career.
        </p>
        <motion.button
          className="btn btn-warning"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Explore Courses
        </motion.button>
      </motion.div>
    </motion.div>
  

      {/* Trending Articles Section */}
      <div className="container mt-5">
        <h2 className="text-start mb-4">Trending Articles</h2>

        {/* Filter Buttons */}
        <div className="d-flex flex-wrap gap-2 mb-4">
          {["ALL", "EDUCATION", "ENTERTAINMENT", "NEWS", "HEALTH"].map((tags) => (
            <button
              key={tags}
              className={`btn ${filteredtags === tags ? "btn-primary" : "btn-outline-primary"}`}
              onClick={() => setFilteredtags(tags)}
            >
              {tags}
            </button>
          ))}
        </div>

        {/* Slider for Trending Articles */}
        <Slider {...sliderSettings} className="d-flex align-items-center">
          {filteredArticles.map((article) => (
            <div key={article.id} className="d-flex justify-content-center px-2">
              <div className="card p-3 shadow-sm text-center d-flex flex-column align-items-center article-card" style={{ width: '100%' }}>
                <img src={article.image} alt={article.title} className="img-fluid mb-3" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                <h5 className="card-title">{article.title}</h5>
                <span className="badge bg-info">{article.tags}</span>
                <p className="mt-2 text-center">{article.description}</p>
                <span className="text-muted">Likes: {article.likes}</span>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Most Liked Articles Section */}
      <div className="container mt-5">
        <h2 className="text-start mb-4">Most Liked Articles</h2>
        <Slider {...sliderSettings} className="d-flex align-items-center">
          {likedArticles.slice(0, 5).map((article) => (
            <div key={article.id} className="d-flex justify-content-center px-2">
              <div className="card p-3 shadow-sm text-center d-flex flex-column align-items-center article-card" style={{ width: '100%' }}>
                <img src={article.image} alt={article.title} className="img-fluid mb-3" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                <h5 className="card-title">{article.title}</h5>
                <span className="badge bg-info">{article.tags}</span>
                <p className="mt-2 text-center">{article.description}</p>
                <span className="text-muted">Likes: {article.likes}</span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default LandingPage;



