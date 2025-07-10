import { motion } from 'framer-motion';
import {
    FaPhone,
    FaEnvelope,
    FaMapMarkerAlt,
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaLinkedin,
    FaArrowRight
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../assets/logonlti.png';

const Footer = () => {
    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <footer id="contact" className="footer-section">
            <div className="footer-container">
                <div className="footer-content">
                    {/* Logo and About */}
                    <motion.div
                        className="footer-column about"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="logo-container">
                            <img
                                src={logo}
                                alt="CLAT NLTI Logo"
                                className="logo-img"
                            />
                            <h3 className="footer-title">CLAT NLTI</h3>
                        </div>
                        <p className="footer-about">
                            India's premier CLAT coaching institute with a proven track record
                            of producing top rankers in NLUs across the country.
                        </p>
                        <div className="social-links">
                            <a href="#" className="social-icon facebook" aria-label="Facebook">
                                <FaFacebook />
                            </a>
                            <a href="#" className="social-icon twitter" aria-label="Twitter">
                                <FaTwitter />
                            </a>
                            <a href="#" className="social-icon instagram" aria-label="Instagram">
                                <FaInstagram />
                            </a>
                            <a href="#" className="social-icon linkedin" aria-label="LinkedIn">
                                <FaLinkedin />
                            </a>
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        className="footer-column links"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h3 className="footer-title">Quick Links</h3>
                        <ul className="links-list">
                            <li>
                                <button
                                    onClick={() => handleScroll('courses')}
                                    className="link-item"
                                >
                                    <FaArrowRight className="link-icon" />Our Courses
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => handleScroll('crash-course')}
                                    className="link-item"
                                >
                                    <FaArrowRight className="link-icon" />Crash Course
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => handleScroll('testimonials')}
                                    className="link-item"
                                >
                                    <FaArrowRight className="link-icon" />Success Stories
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => handleScroll('contact')}
                                    className="link-item"
                                >
                                    <FaArrowRight className="link-icon" />Contact Us
                                </button>
                            </li>
                            <li>
                                <Link to="/blog" className="link-item">
                                    <FaArrowRight className="link-icon" />Blog
                                </Link>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        className="footer-column contact"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3 className="footer-title">Contact Us</h3>
                        <div className="contact-info">
                            <div className="contact-item">
                                <div className="contact-icon-container">
                                    <FaPhone className="contact-icon" />
                                </div>
                                <div>
                                    <p className="contact-label">Phone</p>
                                    <a href="tel:+919876543210" className="contact-value">
                                        +91 9876142144
                                    </a>
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="contact-icon-container">
                                    <FaEnvelope className="contact-icon" />
                                </div>
                                <div>
                                    <p className="contact-label">Email</p>
                                    <a href="mailto:info@clatnlti.com" className="contact-value">
                                        clat.nlti@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="contact-icon-container">
                                    <FaMapMarkerAlt className="contact-icon" />
                                </div>
                                <div>
                                    <p className="contact-label">Address</p>
                                    <span className="contact-value">
                                        3256, Sector 44D, Chandigarh 160047
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Newsletter */}
                    <motion.div
                        className="footer-column newsletter"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <h3 className="footer-title">Newsletter</h3>
                        <p className="newsletter-text">
                            Subscribe to our newsletter for the latest updates and tips for CLAT preparation.
                        </p>
                        <form className="newsletter-form">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="newsletter-input"
                                required
                            />
                            <button
                                type="submit"
                                className="newsletter-button"
                            >
                                Subscribe
                            </button>
                        </form>
                    </motion.div>
                </div>

                <div className="footer-bottom">
                    <p className="copyright">
                        &copy; {new Date().getFullYear()} CLAT NLTI. All Rights Reserved. |
                        <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link> |
                        <Link to="/terms" className="footer-link">Terms of Service</Link>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;