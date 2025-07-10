import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaArrowRight, FaStar, FaCertificate, FaChalkboardTeacher } from 'react-icons/fa';

const CounselingPopup = ({ onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        city: '',
        course: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        onClose();
    };

    return (
        <motion.div
            className="nlti-popup-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <motion.div
                className="nlti-counseling-popup"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: 'spring', damping: 25 }}
                onClick={(e) => e.stopPropagation()}
            >
                <button className="nlti-popup-close" onClick={onClose}>
                    &times;
                </button>

                <div className="nlti-popup-header">
                    <h2>Book a Counseling Session</h2>
                    <p>Get personalized guidance from our legal education experts</p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="nlti-form-group">
                        <label htmlFor="name">Name*</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="nlti-form-group">
                        <label htmlFor="phone">Phone Number*</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="Enter your number (+91)"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="nlti-form-group">
                        <label htmlFor="email">Email*</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="nlti-form-group">
                        <label htmlFor="city">City*</label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            placeholder="Enter City"
                            value={formData.city}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="nlti-form-group">
                        <label htmlFor="course">Choose your Course*</label>
                        <select
                            id="course"
                            name="course"
                            value={formData.course}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select a course</option>
                            <option value="CLAT & AILET">CLAT & AILET</option>
                            <option value="NLSAT">NLSAT</option>
                            <option value="CUET-PG LLB">CUET-PG LLB</option>
                        </select>
                    </div>

                    <motion.button
                        type="submit"
                        className="nlti-popup-submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Schedule a Free Session
                    </motion.button>
                </form>
            </motion.div>
        </motion.div>
    );
};

const HeroSection = () => {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        // Show popup after 3 seconds
        const timer = setTimeout(() => {
            setShowPopup(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="nlti-hero-wrapper">
            {/* Animated background elements */}
            <div className="nlti-hero-bg-elements">
                <motion.div
                    className="nlti-bg-shape-1"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.1 }}
                    transition={{ duration: 1.5, delay: 0.3, type: 'spring' }}
                />
                <motion.div
                    className="nlti-bg-shape-2"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.1 }}
                    transition={{ duration: 1.5, delay: 0.6, type: 'spring' }}
                />
                <div className="nlti-bg-grid-pattern"></div>
            </div>

            {/* Floating decorative elements */}
            <motion.div
                className="nlti-floating-feature nlti-feature-1"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                whileHover={{ scale: 1.05 }}
            >
                <FaCertificate className="nlti-feature-icon" />
                <span>Bar Council Approved</span>
            </motion.div>

            <motion.div
                className="nlti-floating-feature nlti-feature-2"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                whileHover={{ scale: 1.05 }}
            >
                <FaChalkboardTeacher className="nlti-feature-icon" />
                <span>Expert Faculty</span>
            </motion.div>

            {/* Main content container */}
            <div className="nlti-hero-container">
                {/* Text content */}
                <div className="nlti-hero-content">
                    <motion.div
                        className="nlti-text-block"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <motion.div
                            className="nlti-success-tag"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.6, type: 'spring' }}
                        >
                            <FaStar className="nlti-star-icon" />
                            <span>98% Success Rate</span>
                        </motion.div>

                        <motion.h1
                            className="nlti-main-headline"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                        >
                            <motion.span
                                className="nlti-headline-gradient"
                                initial={{ backgroundPosition: '0% 50%' }}
                                animate={{ backgroundPosition: '100% 50%' }}
                                transition={{ duration: 6, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }}
                            >
                                Elevate Your Legal Career with NLTI
                            </motion.span>
                        </motion.h1>

                        <motion.p
                            className="nlti-subheading"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 1 }}
                        >
                            Join India's premier law training institute with a proven track record of producing top-ranked NLU candidates through our intensive mentorship programs.
                        </motion.p>

                        <motion.div
                            className="nlti-cta-group"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 1.2 }}
                        >
                            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                                <Link
                                    to="crash-course"
                                    smooth={true}
                                    duration={500}
                                    className="nlti-primary-btn"
                                >
                                    <span>Enroll Now</span>
                                    <FaArrowRight className="nlti-btn-icon" />
                                    <div className="nlti-btn-hover-effect"></div>
                                </Link>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                                <Link
                                    to="courses"
                                    smooth={true}
                                    duration={500}
                                    className="nlti-secondary-btn"
                                >
                                    <span>Explore Programs</span>
                                    <FaArrowRight className="nlti-btn-icon" />
                                </Link>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Stats section */}
                    <motion.div
                        className="nlti-stats-section"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.4 }}
                    >
                        {[
                            { number: '1500+', label: 'Students Trained' },
                            { number: '98%', label: 'Success Rate' },
                            { number: '50+', label: 'NLU Selections' }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                className="nlti-stat-card"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 1.6 + index * 0.2 }}
                                whileHover={{ y: -5 }}
                            >
                                <span className="nlti-stat-number">{stat.number}</span>
                                <span className="nlti-stat-label">{stat.label}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Hero image/visual */}
                <motion.div
                    className="nlti-hero-visual"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <div className="nlti-main-visual">
                        <div className="nlti-visual-overlay"></div>
                        <div className="nlti-visual-content">
                            <motion.div
                                className="nlti-visual-highlight"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 1 }}
                            >
                                <h3>8-Week Intensive Crash Course</h3>
                                <p>Starting July 15, 2023</p>
                                <motion.div
                                    className="nlti-visual-cta"
                                    whileHover={{ scale: 1.05 }}
                                    onClick={() => setShowPopup(true)}
                                >
                                    Book Free Counseling
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="nlti-scroll-hint"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 2 }}
            >
                <motion.div
                    className="nlti-scroll-animation"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    <div className="nlti-scroll-dot"></div>
                </motion.div>
                <span>Scroll to Discover</span>
            </motion.div>

            {/* Counseling Popup */}
            <AnimatePresence>
                {showPopup && (
                    <CounselingPopup onClose={() => setShowPopup(false)} />
                )}
            </AnimatePresence>
        </section>
    );
};

export default HeroSection;