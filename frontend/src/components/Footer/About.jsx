import React from "react";
import image from "../../assets/About.avif"; // Ensure the path is correct
import LandingNavbar from "../NavBars/LandingNavBar";
import Footer from "./Footer";
const About = () => {
  return (
    <>
    <header>
        <LandingNavbar/>
    </header>
    <section className="container py-5">
      <div className="row d-flex align-items-center">
        {/* Card 1 - Image */}
        <div className="col-md-6 mb-4 mb-md-0">
          <div className="card shadow-sm border-0">
            <img
              src={image} 
              alt="About Us"
              width={"100%"}
              className="card-img-top rounded"
            />
          </div>
        </div>

        {/* Card 2 - About Us Text */}
        <div className="col-md-6">
          <div className="card shadow-sm border-0 p-4">
            <h2 className="h3">About Us</h2>
            <p className="mt-3 text-muted">
              At <strong>Your Company Name</strong>, we believe in the power of innovation and excellence.
              Our mission is to provide high-quality products and services that drive success for our customers.
            </p>
            <p className="mt-3 text-muted">
              With years of experience in <strong>Your Industry/Niche</strong>, we specialize in understanding
              our clients needs and offering tailored solutions to ensure their growth and satisfaction.
            </p>
            <button className="btn btn-primary mt-4">Contact Us</button>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default About;
