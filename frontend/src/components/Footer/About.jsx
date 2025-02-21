import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="row d-flex align-items-center">
      {/* Card 1 - Image */}
      <div className="col-md-6 mb-4 mb-md-0">
        <motion.div
          className="card shadow-sm border-0"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          style={{ maxWidth: "500px", margin: "0 auto" }}
        >
          <div className="image-container" style={{ position: "relative" }}>
            <img
              src={`https://picsum.photos/500?random=${Math.floor(Math.random() * 1000)}`}
              alt="About Us"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                borderRadius: "12px",
              }}
              className="card-img-top"
            />
            {/* Gradient overlay for blend effect */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "linear-gradient(180deg, rgba(0,0,0,0.3), transparent)",
                borderRadius: "12px",
              }}
            ></div>
          </div>
        </motion.div>
      </div>

      {/* Card 2 - About Us Text */}
      <div className="col-md-6 mb-4 mb-md-0">
        <motion.div
          className="card shadow-lg border-0 p-4"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="h3 text-xl font-bold">About Us</h2>
          <p className='mt-3 text-muted leading-relaxed'>
            At <strong>Your Company Name</strong>, we believe in the power of
            innovation and excellence. Our mission is to provide high-quality
            products and services that drive success for our customers.
          </p>
          <p className='mt-3 text-muted leading-relaxed'>
            With years of experience in <strong>Your Industry/Niche</strong>, we
            specialize in understanding our clients’ needs and offering tailored
            solutions to ensure their growth and satisfaction.
          </p>
          <motion.button
            className="btn btn-primary mt-4"
            whileHover={{ scale: 1.1, boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)" }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
