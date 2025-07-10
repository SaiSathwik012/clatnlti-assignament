import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaUser, FaUserPlus } from 'react-icons/fa';
import { Link } from 'react-scroll';
import logo from '../assets/logonlti.png';
import { useState } from 'react';

const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        name: ''
    });

    const navItems = [
        { id: 1, name: "Courses", target: "courses" },
        { id: 2, name: "Crash Course", target: "crash-course" },
        { id: 3, name: "Testimonials", target: "testimonials" },
        { id: 4, name: "Contact", target: "contact" }
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleLogin = (e) => {
        e.preventDefault();
        // Add your login logic here
        console.log('Login data:', formData);
        setShowLogin(false);
    };

    const handleRegister = (e) => {
        e.preventDefault();
        // Add your registration logic here
        console.log('Register data:', formData);
        setShowRegister(false);
    };

    return (
        <motion.header
            className="navbar-container"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <nav className="navbar">
                <div className="logo-container">
                    <motion.div
                        className="logo-image-container"
                        whileHover={{ scale: 1.05 }}
                    >
                        <img
                            src={logo}
                            alt="CLAT NLTI Logo"
                            className="logo-image"
                        />
                    </motion.div>
                    <div className="logo-text-container">
                        <span className="logo-text">CLAT NLTI</span>
                        <span className="logo-subtext">Law Entrance Experts</span>
                    </div>
                </div>

                <div className="desktop-nav">
                    {navItems.map(item => (
                        <Link
                            key={item.id}
                            to={item.target}
                            smooth={true}
                            duration={500}
                            className="nav-link"
                            activeClass="active"
                        >
                            {item.name}
                            <motion.span
                                className="nav-link-underline"
                                initial={{ scaleX: 0 }}
                                whileHover={{ scaleX: 1 }}
                            />
                        </Link>
                    ))}

                    <div className="auth-buttons">
                        <motion.button
                            className="login-btn"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setShowLogin(true)}
                        >
                            <FaUser className="btn-icon" /> Login
                        </motion.button>
                        <motion.button
                            className="register-btn"
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 5px 15px rgba(58, 134, 255, 0.4)"
                            }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setShowRegister(true)}
                        >
                            <FaUserPlus className="btn-icon" /> Register
                        </motion.button>
                    </div>
                </div>

                <motion.button
                    className="mobile-menu-btn"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle navigation menu"
                    whileTap={{ scale: 0.9 }}
                >
                    {isMenuOpen ? (
                        <FaTimes className="menu-icon" />
                    ) : (
                        <FaBars className="menu-icon" />
                    )}
                </motion.button>

                {isMenuOpen && (
                    <motion.div
                        className="mobile-nav"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {navItems.map(item => (
                            <motion.div
                                key={item.id}
                                whileHover={{ x: 5 }}
                            >
                                <Link
                                    to={item.target}
                                    smooth={true}
                                    duration={500}
                                    className="mobile-nav-link"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            </motion.div>
                        ))}

                        <div className="mobile-auth-buttons">
                            <motion.button
                                className="mobile-login-btn"
                                onClick={() => {
                                    setIsMenuOpen(false);
                                    setShowLogin(true);
                                }}
                                whileHover={{ x: 5 }}
                            >
                                <FaUser className="btn-icon" /> Login
                            </motion.button>
                            <motion.button
                                className="mobile-register-btn"
                                onClick={() => {
                                    setIsMenuOpen(false);
                                    setShowRegister(true);
                                }}
                                whileHover={{ x: 5 }}
                            >
                                <FaUserPlus className="btn-icon" /> Register
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </nav>

            {/* Login Popup */}
            {showLogin && (
                <motion.div
                    className="auth-popup-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setShowLogin(false)}
                >
                    <motion.div
                        className="auth-popup"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="close-popup"
                            onClick={() => setShowLogin(false)}
                        >
                            <FaTimes />
                        </button>
                        <h2>Login</h2>
                        <form onSubmit={handleLogin}>
                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <motion.button
                                type="submit"
                                className="submit-btn"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Login
                            </motion.button>
                        </form>
                        <p className="switch-form">
                            Don't have an account?{' '}
                            <span onClick={() => {
                                setShowLogin(false);
                                setShowRegister(true);
                            }}>
                                Register
                            </span>
                        </p>
                    </motion.div>
                </motion.div>
            )}

            {/* Registration Popup */}
            {showRegister && (
                <motion.div
                    className="auth-popup-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setShowRegister(false)}
                >
                    <motion.div
                        className="auth-popup"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="close-popup"
                            onClick={() => setShowRegister(false)}
                        >
                            <FaTimes />
                        </button>
                        <h2>Register</h2>
                        <form onSubmit={handleRegister}>
                            <div className="form-group">
                                <label>Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <motion.button
                                type="submit"
                                className="submit-btn"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Register
                            </motion.button>
                        </form>
                        <p className="switch-form">
                            Already have an account?{' '}
                            <span onClick={() => {
                                setShowRegister(false);
                                setShowLogin(true);
                            }}>
                                Login
                            </span>
                        </p>
                    </motion.div>
                </motion.div>
            )}
        </motion.header>
    );
};

export default Navbar;