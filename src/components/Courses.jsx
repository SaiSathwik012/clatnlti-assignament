import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import {
    FaGraduationCap,
    FaChartLine,
    FaBook,
    FaUsers,
    FaCheck,
    FaArrowRight,
    FaClock,
    FaUserTie,
    FaChalkboardTeacher,
    FaPhone,
    FaCalendarAlt
} from 'react-icons/fa';
import '../styles/Courses.css';

const Courses = ({ courses }) => {
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [hoveredCard, setHoveredCard] = useState(null);

    const openCourseModal = (course) => {
        setSelectedCourse(course);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = 'auto';
    };

    const courseColors = {
        foundation: '#667eea',
        target: '#f54ea2',
        crash: '#17ead9',
        premium: '#622774'
    };

    // Animation variants
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        show: { y: 0, opacity: 1 }
    };

    const cardHover = {
        scale: 1.03,
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
        transition: { type: "spring", stiffness: 400, damping: 10 }
    };

    const cardTap = {
        scale: 0.98
    };

    const headerIconHover = {
        rotate: [0, -10, 10, 0],
        transition: { duration: 0.6 }
    };

    return (
        <section id="courses" className="courses-section">
            <div className="container">
                <div className="section-header">
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        Our Programs
                    </motion.h2>
                    <motion.p
                        className="section-subtitle"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        Tailored learning paths for your success
                    </motion.p>
                </div>

                <motion.div
                    className="courses-grid"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    {courses.map((course) => (
                        <motion.div
                            key={course.id}
                            className="course-card-wrapper"
                            variants={item}
                            whileHover="hover"
                            whileTap="tap"
                            onHoverStart={() => setHoveredCard(course.id)}
                            onHoverEnd={() => setHoveredCard(null)}
                        >
                            <motion.div
                                className="course-card"
                                whileHover={cardHover}
                                whileTap={cardTap}
                            >
                                <div
                                    className="card-header"
                                    style={{ backgroundColor: courseColors[course.type] }}
                                >
                                    <motion.div
                                        className="course-icon-container"
                                        animate={hoveredCard === course.id ? "hover" : "normal"}
                                        variants={{
                                            hover: headerIconHover,
                                            normal: { rotate: 0 }
                                        }}
                                    >
                                        {course.type === 'foundation' && <FaGraduationCap className="course-icon" />}
                                        {course.type === 'target' && <FaChartLine className="course-icon" />}
                                        {course.type === 'crash' && <FaBook className="course-icon" />}
                                        {course.type === 'premium' && <FaUsers className="course-icon" />}
                                    </motion.div>
                                    <motion.span
                                        className="course-duration"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <FaClock /> {course.duration}
                                    </motion.span>
                                </div>

                                <div className="card-content">
                                    <h3 className="course-title">{course.title}</h3>
                                    <p className="course-description">{course.description}</p>

                                    <ul className="course-features">
                                        {course.features.slice(0, 3).map((feature, i) => (
                                            <motion.li
                                                key={i}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.1 * i }}
                                                viewport={{ once: true }}
                                            >
                                                <motion.span
                                                    className="check-icon"
                                                    whileHover={{ scale: 1.2 }}
                                                >
                                                    <FaCheck style={{ color: courseColors[course.type] }} />
                                                </motion.span>
                                                {feature}
                                            </motion.li>
                                        ))}
                                    </ul>

                                    <motion.button
                                        className="explore-button"
                                        style={{ backgroundColor: courseColors[course.type] }}
                                        whileHover={{
                                            scale: 1.05,
                                            boxShadow: `0 5px 15px ${courseColors[course.type]}80`
                                        }}
                                        whileTap={{ scale: 0.97 }}
                                        onClick={() => openCourseModal(course)}
                                    >
                                        Learn More
                                        <motion.span
                                            animate={{
                                                x: [0, 5, 0]
                                            }}
                                            transition={{
                                                repeat: Infinity,
                                                duration: 1.5
                                            }}
                                        >
                                            <FaArrowRight />
                                        </motion.span>
                                    </motion.button>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>

                <AnimatePresence>
                    {isModalOpen && selectedCourse && (
                        <motion.div
                            className="modal-overlay"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeModal}
                        >
                            <motion.div
                                className="modal-content"
                                initial={{ scale: 0.9, opacity: 0, y: 50 }}
                                animate={{
                                    scale: 1,
                                    opacity: 1,
                                    y: 0,
                                    transition: { type: "spring", damping: 25 }
                                }}
                                exit={{ scale: 0.9, opacity: 0, y: 50 }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <motion.button
                                    className="close-button"
                                    onClick={closeModal}
                                    whileHover={{ rotate: 90, scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    &times;
                                </motion.button>

                                <div className="modal-header">
                                    <motion.div
                                        className="modal-icon"
                                        style={{ backgroundColor: courseColors[selectedCourse.type] }}
                                        initial={{ rotate: -180, scale: 0 }}
                                        animate={{ rotate: 0, scale: 1 }}
                                        transition={{ type: "spring", delay: 0.2 }}
                                    >
                                        {selectedCourse.type === 'foundation' && <FaGraduationCap />}
                                        {selectedCourse.type === 'target' && <FaChartLine />}
                                        {selectedCourse.type === 'crash' && <FaBook />}
                                        {selectedCourse.type === 'premium' && <FaUsers />}
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        <h2>{selectedCourse.title}</h2>
                                        <p className="modal-subtitle">{selectedCourse.category || "Intensive Learning Program"}</p>
                                    </motion.div>
                                </div>

                                <div className="modal-body">
                                    <motion.div
                                        className="modal-section"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 }}
                                    >
                                        <h3><FaBook /> Overview</h3>
                                        <p>{selectedCourse.longDescription || selectedCourse.description}</p>
                                    </motion.div>

                                    <motion.div
                                        className="modal-section"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 }}
                                    >
                                        <h3><FaCheck /> What's Included</h3>
                                        <div className="features-grid">
                                            {[
                                                { icon: <FaUserTie />, text: "Expert Mentors" },
                                                { icon: <FaChalkboardTeacher />, text: "Practical Sessions" },
                                                { icon: <FaUsers />, text: "Peer Learning" },
                                                { icon: <FaClock />, text: "Flexible Schedule" }
                                            ].map((feature, index) => (
                                                <motion.div
                                                    key={index}
                                                    className="feature-item"
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: 0.6 + index * 0.1 }}
                                                    whileHover={{ y: -5 }}
                                                >
                                                    <motion.div
                                                        className="feature-icon"
                                                        whileHover={{ rotate: 360 }}
                                                    >
                                                        {feature.icon}
                                                    </motion.div>
                                                    <h4>{feature.text}</h4>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        className="modal-section"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.9 }}
                                    >
                                        <h3><FaGraduationCap /> Program Details</h3>
                                        <div className="details-grid">
                                            <motion.div
                                                whileHover={{ x: 5 }}
                                            >
                                                <h4>Duration</h4>
                                                <p>{selectedCourse.duration || '8 weeks'}</p>
                                            </motion.div>
                                            <motion.div
                                                whileHover={{ x: 5 }}
                                            >
                                                <h4>Requirements</h4>
                                                <p>{selectedCourse.prerequisites || 'Basic knowledge recommended'}</p>
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                </div>

                                <motion.div
                                    className="modal-footer"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1 }}
                                >
                                    <motion.button
                                        className="primary-button"
                                        style={{ backgroundColor: courseColors[selectedCourse.type] }}
                                        whileHover={{
                                            scale: 1.05,
                                            boxShadow: `0 5px 20px ${courseColors[selectedCourse.type]}80`
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <FaCalendarAlt /> Enroll Now
                                    </motion.button>
                                    <motion.button
                                        className="secondary-button"
                                        whileHover={{
                                            scale: 1.05,
                                            backgroundColor: '#f5f5f5'
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <FaPhone /> Contact Advisor
                                    </motion.button>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Courses;