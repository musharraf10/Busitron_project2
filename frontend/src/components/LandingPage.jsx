import React, { useState } from "react";
import { Container, Row, Col, Card, Badge, Button, Modal } from "react-bootstrap";
import { AppBar, Toolbar, Typography, Box, Button as MUIButton, CardContent, Grid, Chip ,CardMedia } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { makeStyles } from "@mui/styles";
import AuthForm from "./Auth/AuthForm";

const useStyles = makeStyles({
  appBar: { backgroundColor: "#3f51b5" },
  modalStyle: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor: 'white',
  },
  heroSection: {
    padding: "5rem 2rem",
    backgroundColor: "#f4f4f9",
    textAlign: "center",
  },
  card: {
    margin: "1rem",
    boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
    transition: "transform 0.3s",
    "&:hover": { transform: "scale(1.05)" },
  },
  modalContent: { padding: "20px", lineHeight: "1.6", fontSize: "1.1rem" },
  videoFrame: { width: "100%", height: "250px" },
});

const ReadableModal = ({ show, handleClose, article }) => {
  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
    <Modal.Header closeButton>
      <Modal.Title>{article?.title || "Article Details"}</Modal.Title>
    </Modal.Header>
    <Modal.Body className="modalContent">
      <p><strong>Description:</strong> {article?.description}</p>
      {article?.ranking && <p><strong>Ranking:</strong> {article.ranking}</p>}
      {article?.views && <p><strong>Views:</strong> {article.views}</p>}
      {article?.likes && <p><strong>Likes:</strong> {article.likes}</p>}
      {article?.badge && <p><strong>Badge:</strong> {article.badge}</p>}
      {article?.videoUrl && (
        <div>
          <strong>Video Guide:</strong>
          <iframe
            width="100%"
            height="315"
            src={article.videoUrl}
            title={article.title}
            frameBorder="0"
            allowFullScreen
          />
        </div>
      )}
    </Modal.Body>
    <Modal.Footer>
      <MUIButton variant="contained" color="secondary" onClick={handleClose}>Close</MUIButton>
    </Modal.Footer>
  </motion.div>
</Modal>




  );
};

const landingPageData = {
  trendingArticles: [
    {
      id: 1,
      title: "Understanding JavaScript Closures",
      description: "A deep dive into closures in JavaScript with examples.",
      ranking: 1,
      image :`https://picsum.photos/100?random=${Math.floor(
        Math.random() * 1000)}`,
      badge: "Trending ⚡",
    },
    {
      id: 2,
      title: "Mastering React Hooks",
      description: "Everything you need to know about React Hooks in 2025.",
      ranking: 2,
      image :`https://picsum.photos/100?random=${Math.floor(
        Math.random() * 1000)}`,
      badge: "Trending ⚡",
    },
  ],
  mostViewed: [
    {
      id: 1,
      title: "Python for Data Science",
      description: "Beginner's guide to Python in Data Science.",
      views: 15000,
      image :`https://picsum.photos/100?random=${Math.floor(
        Math.random() * 1000)}`,
      badge: "Most Viewed 👁",
    },
    {
      id: 2,
      title: "Advanced Node.js Patterns",
      description: "How to scale Node.js apps with advanced patterns.",
      views: 12000,
      image :`https://picsum.photos/100?random=${Math.floor(
        Math.random() * 1000)}`,
      badge: "Most Viewed 👁",
    },
  ],
  mostLoved: [
    {
      id: 1,
      title: "Building Responsive Websites with Flexbox",
      description: "Master Flexbox layouts with these real-world examples.",
      likes: 5000,
      image :`https://picsum.photos/100?random=${Math.floor(
        Math.random() * 1000)}`,
      badge: "Loved ❤",
    },
    {
      id: 2,
      title: "Understanding Asynchronous JavaScript",
      description: "Callback, Promises, and Async/Await explained in depth.",
      likes: 4800,
      image : `https://picsum.photos/100?random=${Math.floor(
        Math.random() * 1000)}`,
      badge: "Loved ❤",
    },
    {
      id: 3,
      title: "Understanding Asynchronous JavaScript",
      description: "Callback, Promises, and Async/Await explained in depth.",
      likes: 4800,
      image : `https://picsum.photos/100?random=${Math.floor(
        Math.random() * 1000)}`,
      badge: "Loved ❤",
    },
  ],
  videoGuides: [
    {
      id: 1,
      title: "React State Management with Redux",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      badge: "Video Guide",
    },
    {
      id: 2,
      title: "Docker for Beginners",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      badge: "Video Guide",
    },
    {
      id: 3,
      title: "Docker for Beginners",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      badge: "Video Guide",
    },
    {
      id: 4,
      title: "Docker for Beginners",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      badge: "Video Guide",
    }
  ],
  hero: {
    title: "Enhance Your Skills with Our Online Courses",
    description:
      "Access high-quality content, guides, and courses to excel in your career.",
    cta: "Start Learning Now",
  },
  sections: [
    {
      title: "Popular Courses",
      content: [
        {
          name: "React for Beginners",
          description: "Learn the basics of React and build interactive UIs",
          image: `https://picsum.photos/100?random=${Math.floor(
        Math.random() * 1000)}`,
        },
        {
          name: "Mastering JavaScript",
          description: "Advanced JavaScript techniques to become a pro",
          image:`https://picsum.photos/100?random=${Math.floor(
        Math.random() * 1000)}`,
        },
        {
          name: "Python for Data Science",
          description: "Leverage Python to analyze data and build models",
          image: `https://picsum.photos/100?random=${Math.floor(
        Math.random() * 1000)}`,
        },
        {
          name: "Python for Data Science 1",
          description: "Leverage Python to analyze data and build models",
          image: `https://picsum.photos/100?random=${Math.floor(
        Math.random() * 1000)}`,
        },
      ],
    },
    {
      title: "Latest Articles",
      content: [
        {
          title: "How to Build Modern Web Apps",
          description: "A comprehensive guide on building web applications",
          image: `https://picsum.photos/100?random=${Math.floor(
        Math.random() * 1000)}`,
            badge : 'Latest'
        },
        {
          title: "Understanding REST APIs",
          description: "Learn how to build and consume RESTful APIs",
          image: `https://picsum.photos/100?random=${Math.floor(
        Math.random() * 1000)}`,
        },
      ],
    },
  ],
};

const LandingPage = () => {
  const classes = useStyles();
  const [modalData, setModalData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [openLoginModal, setOpenLoginModal] = useState(false);

  const handleLoginOpen = () => setOpenLoginModal(true);
  const handleLoginClose = () => setOpenLoginModal(false);

  const openModal = (article) => {
    setModalData(article);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalData(null);
  };

  return (
    <div>
       

      {/* Modal for Login Form */}
      <Modal open={openLoginModal} onClose={handleLoginClose}>
        <Box className={classes.modalStyle}>
          <Typography variant="h6">Login</Typography>
          {/* <AuthForm /> Assuming this is your login form */}
          <Button onClick={handleLoginClose}>Close</Button>
        </Box>
      </Modal>

      <Box className={classes.heroSection}>
        <Typography variant="h2">{landingPageData.hero.title}</Typography>
        <Typography variant="h6">{landingPageData.hero.description}</Typography>
        <Button variant="success">{landingPageData.hero.cta}</Button>
      </Box>


      <Container>

       <Typography variant="h4" align="center" style={{ marginBottom: '2rem', marginTop: '1rem' }}>
        Trending Articles
      </Typography>
      <Box style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
        {landingPageData.trendingArticles.map((article) => (
          <div key={article.id} style={{ width: '300px', position: 'relative' }}>
            <Card onClick={() => openModal(article)} style={{height:'350px'}}>
              {article.badge && (
                <Chip
                  label={article.badge}
                  color="secondary"
                  style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    zIndex: 1,
                  }}
                />
              )}
              <CardMedia
                component="img"
                height="150"
                image={article.image}
                alt={article.title}
              />

              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {article.title}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {article.description}
                </Typography>
                <Button variant="contained" color="primary" onClick={() => openModal(article)} style={{ marginTop: '10px' }}>
                  Read More
                </Button>
              </CardContent>
            </Card>
          </div>
        ))}
      </Box>


      {/* Most Loved Content Section */}
      <Typography variant="h4" align="center" style={{ marginBottom: "2rem", marginTop:'1rem' }}>
        Most Loved Articles
      </Typography>

      <Box display="flex" flexWrap="wrap" justifyContent="center" gap={2} >
        {landingPageData.mostLoved.map((article) => (
          <motion.div whileHover={{ scale: 1.05 }} key={article.id} style={{ width: '300px', position: 'relative' }}>
            <Card onClick={() => openModal(article)}>
              {/* Badge in the top-right corner */}
              {article.badge && (
                <Chip
                  label={article.badge}
                  color="secondary"
                  style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    zIndex: 1,
                  }}
                />
              )}

              {/* Card Image */}
              <CardMedia
                component="img"
                height="150"
                image={article.image}
                alt={article.title}
              />

              {/* Card Content */}
              <CardContent>
                <Typography variant="h6" gutterBottom>{article.title}</Typography>
                <Typography variant="body2" gutterBottom>{article.description}</Typography>
                <Typography variant="body2" color="textSecondary">Likes: {article.likes}</Typography>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </Box>
      <Typography variant="h4" align="center" style={{ marginBottom: "2rem", marginTop:'1rem' }}>
        Most Viewed Articles
      </Typography>

      <Box display="flex" flexWrap="wrap" justifyContent="center" gap={2}>
        {landingPageData.mostViewed.map((article) => (
          <motion.div whileHover={{ scale: 1.05 }} key={article.id} style={{ width: '300px', position: 'relative' }}>
            <Card onClick={() => openModal(article)}>
              {article.badge && (
                <Chip
                  label={article.badge}
                  color="primary"
                  style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    zIndex: 1,
                  }}
                />
              )}

              {/* Card Image */}
              <CardMedia
                component="img"
                height="150"
                image={article.image}
                alt={article.title}
              />

              {/* Card Content */}
              <CardContent>
                <Typography variant="h6" gutterBottom>{article.title}</Typography>
                <Typography variant="body2" gutterBottom>{article.description}</Typography>
                <Typography variant="body2" color="textSecondary">Views: {article.views}</Typography>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </Box>
      <Typography variant="h4" align="center" style={{ marginBottom: "2rem", marginTop:'1rem' }}>Popular Courses</Typography>
      <Grid container spacing={3}>
        {landingPageData.sections[0].content.map((course, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Card onClick={() => openModal(course)}>
                <CardMedia
                  component="img"
                  alt={course.name}
                  height="140"
                  image={course.image}
                  title={course.name}
                />
                <CardContent>
                  <Typography variant="h6">{course.name}</Typography>
                  <Typography variant="body2" color="textSecondary">{course.description}</Typography>
                  <Button variant="contained" color="primary" onClick={() => openModal(course)} style={{ marginTop: "10px" }}>
                    View Course
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h4" align="center" style={{ marginBottom: "2rem", marginTop:'1rem' }}>Latest Articles</Typography>
      <Grid container spacing={3}>
        {landingPageData.sections[1].content.map((article, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Card onClick={() => openModal(article)}>
                <CardMedia
                  component="img"
                  alt={article.title}
                  height="140"
                  image={article.image}
                  title={article.title}
                />
                <CardContent>
                
                  <Typography variant="h6">{article.title}</Typography>
                  <Typography variant="body2" color="textSecondary">{article.description}</Typography>
                  <Button variant="contained" color="primary" onClick={() => openModal(article)} style={{ marginTop: "10px" }}>
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
        <Typography variant="h4" align="center" style={{ marginBottom: "2rem", marginTop:'1rem' }}>Video Guides</Typography>
        <Row>
          {landingPageData.videoGuides.map((guide) => (
            <Col key={guide.id} md={6}>
              <Card className={classes.card}>
                <Card.Body>
                  <Card.Title>
                    {guide.title} <Badge bg="danger" pill>{guide.badge}</Badge>
                  </Card.Title>
                  <Box className={classes.videoFrame}>
                    <iframe
                      className={classes.videoFrame}
                      src={guide.videoUrl}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={guide.title}
                    ></iframe>
                  </Box>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      {modalData && <ReadableModal show={showModal} handleClose={closeModal} article={modalData} />}
    </div>
  );
};

export default LandingPage;
