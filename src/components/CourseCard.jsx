import { motion } from 'framer-motion';
import { useMemo } from 'react';

const CourseCard = ({ course }) => {  // Removed index since we use course.id for key
    const featuresList = useMemo(() => (
        course.features.map((feature, i) => (
            <li key={i} className="feature-item">
                <span className="feature-icon">✓</span>
                {feature}
            </li>
        ))
    ), [JSON.stringify(course.features)]);  // Stringify for stable comparison

    return (
        <motion.div
            key={`course-${course.id}`}  // Simplified key
            className="course-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
                once: true,
                margin: "0px 0px -100px 0px",
                amount: 0.1
            }}
            transition={{
                duration: 0.5,
                delay: 0.1,  // Fixed delay or remove if not needed
                type: "spring",
                stiffness: 100
            }}
        >
            <div className="card-header">
                <h3 className="course-title">{course.title}</h3>
                <span className="course-duration">{course.duration}</span>
            </div>
            <p className="course-description">{course.description}</p>
            <ul className="course-features">
                {featuresList}
            </ul>
            <div className="course-cta">
                <button className="enroll-button">Enroll Now</button>
                <button className="details-button">View Details</button>
            </div>
        </motion.div>
    );
};

export default CourseCard;