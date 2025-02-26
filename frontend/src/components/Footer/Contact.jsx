import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingNavbar from "../NavBars/LandingNavBar";
import Footer from "./Footer";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        alert('Message Sent!');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <>
        <header>
            <LandingNavbar/>
        </header>
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card p-4 shadow m-5">
                        <form onSubmit={handleSubmit}>
            <h2 className="text-center mb-4">Contact Us</h2>
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    name="name" 
                                    value={formData.name} 
                                    onChange={handleChange} 
                                    required 
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    name="email" 
                                    value={formData.email} 
                                    onChange={handleChange} 
                                    required 
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Message</label>
                                <textarea 
                                    className="form-control" 
                                    rows="4" 
                                    name="message" 
                                    value={formData.message} 
                                    onChange={handleChange} 
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
};

export default Contact;
