import { useParams, Link } from 'react-router-dom';
import {
    FaStar,
    FaRegStar,
    FaClock,
    FaUsers,
    FaChartLine,
    FaFileAlt,
    FaCheck,
    FaBook,
    FaChalkboardTeacher,
    FaUserTie,
    FaArrowRight
} from 'react-icons/fa';
import '../styles/CourseDetail.css';

const CourseDetailPage = ({ courses }) => {
    const { courseId } = useParams();
    const course = courses.find(c => c.id === parseInt(courseId));

    if (!course) {
        return (
            <div className="course-not-found">
                <h2>Course not found</h2>
                <Link to="/courses">Back to all courses</Link>
            </div>
        );
    }

    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;

        for (let i = 0; i < fullStars; i++) {
            stars.push(<FaStar key={`full-${i}`} className="star-icon" />);
        }

        if (hasHalfStar) {
            stars.push(<FaStar key="half" className="star-icon half-star" />);
        }

        const emptyStars = 5 - stars.length;
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<FaRegStar key={`empty-${i}`} className="star-icon" />);
        }

        return stars;
    };

    return (
        <section className="course-detail-section">
            <div className="container">
                <div className="course-header">
                    <div className="breadcrumb">
                        <Link to="/">Home</Link> / <Link to="/courses">Courses</Link> / <span>{course.title}</span>
                    </div>

                    <div className="header-content">
                        <div className="header-left">
                            <h1>{course.title}</h1>
                            <p className="course-excerpt">{course.description}</p>

                            <div className="course-meta">
                                <div className="meta-item">
                                    <FaClock className="meta-icon" />
                                    <span>{course.duration}</span>
                                </div>
                                <div className="meta-item">
                                    <FaUsers className="meta-icon" />
                                    <span>{course.students}+ students</span>
                                </div>
                                <div className="meta-item">
                                    <div className="rating-stars">
                                        {renderStars(course.rating)}
                                    </div>
                                    <span>{course.rating}/5 ({course.reviews} reviews)</span>
                                </div>
                            </div>
                        </div>

                        <div className="header-right">
                            <div className="price-box">
                                <div className="current-price">₹{course.price}</div>
                                {course.originalPrice && (
                                    <div className="original-price">₹{course.originalPrice}</div>
                                )}
                                <button className="enroll-button">
                                    Enroll Now <FaArrowRight />
                                </button>
                                <button className="consultation-button">
                                    Book Free Consultation
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="course-content">
                    <div className="content-left">
                        <div className="course-overview">
                            <h2><FaBook /> Course Overview</h2>
                            <p>{course.longDescription}</p>
                        </div>

                        <div className="course-curriculum">
                            <h2><FaBook /> Curriculum</h2>
                            <ul>
                                {course.curriculum.map((item, index) => (
                                    <li key={index}>
                                        <FaCheck className="curriculum-icon" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mentorship-section">
                            <h2><FaChalkboardTeacher /> Mentorship Program</h2>
                            <p>{course.mentorship}</p>
                            <div className="mentor-features">
                                <div className="mentor-feature">
                                    <FaUserTie className="feature-icon" />
                                    <span>1:1 Sessions</span>
                                </div>
                                <div className="mentor-feature">
                                    <FaChalkboardTeacher className="feature-icon" />
                                    <span>Doubt Resolution</span>
                                </div>
                                <div className="mentor-feature">
                                    <FaFileAlt className="feature-icon" />
                                    <span>Career Guidance</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="content-right">
                        <div className="course-features">
                            <h2>Course Features</h2>
                            <ul>
                                {course.features.map((feature, index) => (
                                    <li key={index}>
                                        <FaCheck className="feature-icon" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="course-stats">
                            <div className="stat-item">
                                <FaClock className="stat-icon" />
                                <div className="stat-content">
                                    <div className="stat-value">{course.duration}</div>
                                    <div className="stat-label">Duration</div>
                                </div>
                            </div>
                            <div className="stat-item">
                                <FaUsers className="stat-icon" />
                                <div className="stat-content">
                                    <div className="stat-value">{course.students}+</div>
                                    <div className="stat-label">Students</div>
                                </div>
                            </div>
                            <div className="stat-item">
                                <FaChartLine className="stat-icon" />
                                <div className="stat-content">
                                    <div className="stat-value">{course.successRate}%</div>
                                    <div className="stat-label">Success Rate</div>
                                </div>
                            </div>
                            <div className="stat-item">
                                <FaFileAlt className="stat-icon" />
                                <div className="stat-content">
                                    <div className="stat-value">{course.mockTests}+</div>
                                    <div className="stat-label">Mock Tests</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CourseDetailPage;