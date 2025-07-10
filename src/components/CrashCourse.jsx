import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FiCheck, FiClock, FiAward, FiBook, FiUser, FiBarChart2, FiHelpCircle, FiCalendar, FiArrowRight } from 'react-icons/fi';
import { FaStar, FaRegStar, FaFire, FaBookOpen, FaChalkboardTeacher, FaTrophy } from 'react-icons/fa';

const CrashCourse = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        preferredBatch: ''
    });

    // Countdown timer for offer
    const [timeLeft, setTimeLeft] = useState({
        hours: 23,
        minutes: 59,
        seconds: 59
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                const seconds = prev.seconds - 1;
                const minutes = seconds < 0 ? prev.minutes - 1 : prev.minutes;
                const hours = minutes < 0 ? prev.hours - 1 : prev.hours;

                return {
                    hours: hours < 0 ? 23 : hours,
                    minutes: minutes < 0 ? 59 : minutes,
                    seconds: seconds < 0 ? 59 : seconds
                };
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you ${formData.name}! We've received your registration for the ${formData.preferredBatch} batch. Our team will contact you shortly.`);
        setFormData({
            name: '',
            phone: '',
            email: '',
            preferredBatch: ''
        });
    };

    const features = [
        { icon: <FaBookOpen className="feature-icon" />, text: "2 comprehensive classes per subject" },
        { icon: <FaChalkboardTeacher className="feature-icon" />, text: "Personalized mentorship from NLU graduates" },
        { icon: <FiBarChart2 className="feature-icon" />, text: "12 full-length mock tests with AIR" },
        { icon: <FiUser className="feature-icon" />, text: "Weekly performance analysis" },
        { icon: <FiCheck className="feature-icon" />, text: "Exclusive study material portal" },
        { icon: <FiHelpCircle className="feature-icon" />, text: "Dedicated doubt-solving" },
        { icon: <FiClock className="feature-icon" />, text: "Exam strategy workshops" },
        { icon: <FaTrophy className="feature-icon" />, text: "Previous year paper analysis" }
    ];

    // Floating stars animation
    const Star = () => (
        <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{
                y: [0, -15, 0],
                opacity: [0.5, 1, 0.5],
                rotate: [0, 180]
            }}
            transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
            }}
            className="floating-star"
        >
            <FaStar className="star-icon" />
        </motion.div>
    );

    return (
        <section id="crash-course" className="crash-course-section">
            {/* Animated Background Elements */}
            <div className="animated-bg-elements">
                {[...Array(8)].map((_, i) => (
                    <Star key={i} />
                ))}
                <motion.div
                    className="floating-law-book"
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 5, 0]
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                    }}
                >
                    <FiBook />
                </motion.div>
            </div>

            <div className="container">
                <motion.div
                    className="header-wrapper"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <motion.div
                        className="tag-label"
                        whileHover={{ scale: 1.05 }}
                    >
                        <span><FaFire className="fire-icon" /> LIMITED SEATS AVAILABLE</span>
                    </motion.div>

                    <motion.h1
                        className="main-heading"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <motion.span
                            animate={{ color: ['#4a6bff', '#ff6b6b', '#4a6bff'] }}
                            transition={{ duration: 8, repeat: Infinity }}
                        >
                            CLAT
                        </motion.span> Crash Course <span>2026</span>
                    </motion.h1>

                    <motion.p
                        className="sub-heading"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        Transform your preparation in just <strong>8 weeks</strong> with our intensive program designed by <strong>NLU alumni</strong>
                    </motion.p>
                </motion.div>

                {/* Offer Banner */}
                <motion.div
                    className="offer-banner"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <div className="offer-content">
                        <motion.div
                            className="offer-badge"
                            whileHover={{ rotate: [-5, 5, -5] }}
                            transition={{ duration: 0.8 }}
                        >
                            <span>🔥 EARLY BIRD OFFER</span>
                        </motion.div>

                        <motion.h3
                            whileInView={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 1.5, delay: 0.3 }}
                        >
                            Enroll before July 30 & save <span className="highlight">40%</span>
                        </motion.h3>

                        <div className="price-container">
                            <span className="original-price">₹15,999</span>
                            <motion.span
                                className="discounted-price"
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                ₹9,999
                            </motion.span>
                            <span className="discount-tag">40% OFF</span>
                        </div>

                        <div className="countdown-timer">
                            <span>Offer ends in:</span>
                            <div className="timer-digits">
                                <span>{timeLeft.hours.toString().padStart(2, '0')}</span>h
                                <span>{timeLeft.minutes.toString().padStart(2, '0')}</span>m
                                <span>{timeLeft.seconds.toString().padStart(2, '0')}</span>s
                            </div>
                        </div>

                        <motion.div
                            className="seats-indicator"
                            initial={{ scale: 0.95 }}
                            animate={{ scale: 1 }}
                            transition={{
                                repeat: Infinity,
                                repeatType: "reverse",
                                duration: 1.5
                            }}
                        >
                            <div className="seats-text">Only 5 seats left at this price!</div>
                            <div className="progress-track">
                                <motion.div
                                    className="progress-bar"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: '30%' }}
                                    transition={{ duration: 1.5, delay: 0.3 }}
                                    viewport={{ once: true }}
                                />
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Main Content */}
                <div className="content-grid">
                    {/* Features Section */}
                    <motion.div
                        className="features-card"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <div className="card-header">
                            <motion.h2
                                whileInView={{ scale: [1, 1.02, 1] }}
                                transition={{ duration: 1 }}
                            >
                                What You'll <span className="underline">Get</span>
                            </motion.h2>
                            <p>Comprehensive preparation package for CLAT 2026</p>
                        </div>

                        <div className="features-grid">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    className="feature-item"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.1 * index }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    whileHover={{
                                        y: -5,
                                        boxShadow: "0 10px 20px rgba(74, 107, 255, 0.1)"
                                    }}
                                >
                                    <motion.div
                                        className="icon-wrapper"
                                        whileHover={{ rotate: 15, scale: 1.1 }}
                                    >
                                        {feature.icon}
                                    </motion.div>
                                    <p>{feature.text}</p>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            className="success-stories"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                        >
                            <div className="stars">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} className="star-filled" />
                                ))}
                            </div>
                            <p>"This crash course helped me improve my score by 35 marks! The mocks were exactly like the real CLAT."</p>
                            <div className="student-name">- Rohan K., AIR 42</div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column */}
                    <div className="right-column">
                        {/* Schedule Card */}
                        <motion.div
                            className="schedule-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <motion.h3
                                whileInView={{ x: [0, 5, 0] }}
                                transition={{ duration: 1 }}
                            >
                                ⏳ Program Schedule
                            </motion.h3>

                            <div className="schedule-details">
                                {[
                                    { icon: <FiCalendar />, label: "Start Date", value: "August 1, 2025" },
                                    { icon: <FiClock />, label: "Duration", value: "8 Weeks Intensive" },
                                    { icon: <FiUser />, label: "Batch Size", value: "Max 20 Students" },
                                    { icon: <FiBarChart2 />, label: "Class Timings", value: "Mon-Fri (6-8 PM)" }
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        className="schedule-item"
                                        whileHover={{ x: 5 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <div className="schedule-icon">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <div className="schedule-label">{item.label}</div>
                                            <div className="schedule-value">{item.value}</div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div
                                className="batch-notice"
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="notice-content">
                                    <span>Next batch starts August 15</span>
                                    <small>Filling fast - 65% booked</small>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Registration Form */}
                        <motion.div
                            className="form-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <motion.h3
                                whileInView={{ scale: [1, 1.03, 1] }}
                                transition={{ duration: 1 }}
                            >
                                📝 Reserve Your Seat
                            </motion.h3>

                            <form onSubmit={handleSubmit}>
                                {[
                                    { type: "text", name: "name", placeholder: "Your Full Name" },
                                    { type: "tel", name: "phone", placeholder: "Mobile Number" },
                                    { type: "email", name: "email", placeholder: "Email Address" }
                                ].map((field, index) => (
                                    <motion.div
                                        key={index}
                                        className="input-group"
                                        whileFocus={{ scale: 1.02 }}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 * index }}
                                    >
                                        <input
                                            type={field.type}
                                            name={field.name}
                                            value={formData[field.name]}
                                            onChange={handleChange}
                                            placeholder={field.placeholder}
                                            required
                                        />
                                    </motion.div>
                                ))}

                                <motion.div
                                    className="input-group"
                                    whileFocus={{ scale: 1.02 }}
                                >
                                    <select
                                        name="preferredBatch"
                                        value={formData.preferredBatch}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select Preferred Batch</option>
                                        <option value="august-1">August 1 Batch (Morning)</option>
                                        <option value="august-1-eve">August 1 Batch (Evening)</option>
                                        <option value="august-15">August 15 Batch (Filling Fast)</option>
                                    </select>
                                </motion.div>

                                <motion.button
                                    type="submit"
                                    className="submit-btn"
                                    whileHover={{
                                        scale: 1.03,
                                        boxShadow: "0 5px 15px rgba(74, 107, 255, 0.4)"
                                    }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Enroll Now
                                    <motion.span
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{
                                            duration: 1.5,
                                            repeat: Infinity
                                        }}
                                    >
                                        <FiArrowRight className="arrow-icon" />
                                    </motion.span>
                                </motion.button>
                            </form>

                            <motion.div
                                className="form-footer"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 1 }}
                            >
                                <p>🚀 Limited seats available. Get personal attention from mentors.</p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CrashCourse;