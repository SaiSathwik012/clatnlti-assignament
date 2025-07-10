import React from 'react';
import { motion } from 'framer-motion';
import { FaYoutube } from 'react-icons/fa';
import '../styles/DemoVideos.css'
const CLATDemoVideo = () => {
    // Single CLAT demo video
    const demoVideo = {
        title: "CLAT 2025 Complete Strategy Guide",
        youtubeUrl: "https://youtu.be/ExDwgDGLIW8?si=ELujjK1gTIWWGjVl",
        youtubeEmbedUrl: "https://www.youtube.com/embed/ExDwgDGLIW8?si=ELujjK1gTIWWGjVl",
        description: "In this comprehensive demo class, our expert faculty covers the complete CLAT 2025 preparation strategy.",
        features: [
            "Detailed syllabus analysis",
            "Section-wise preparation tips",
            "Recommended study materials",
            "Time management strategies"
        ]
    };

    return (
        <motion.div
            className="demo-video-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="demo-header">
                <h1>CLAT Demo Class</h1>
                <p>Get a preview of our teaching methodology with this free demo class</p>
                <div className="youtube-brand">
                    <FaYoutube className="youtube-icon" />
                    <span>Video hosted on YouTube</span>
                </div>
            </div>

            <div className="video-wrapper">
                <div className="video-embed">
                    <iframe
                        width="100%"
                        height="100%"
                        src={demoVideo.youtubeEmbedUrl}
                        title="CLAT Demo Class"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>

                <div className="video-details">
                    <h2>{demoVideo.title}</h2>
                    <p className="video-description">{demoVideo.description}</p>

                    <div className="video-features">
                        <h3>What You'll Learn:</h3>
                        <ul>
                            {demoVideo.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                    </div>

                    <a
                        href={demoVideo.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="watch-btn"
                    >
                        Watch on YouTube
                    </a>
                </div>
            </div>

            <div className="cta-section">
                <h2>Ready to start your CLAT preparation?</h2>
                <p>Join our comprehensive CLAT course for complete guidance</p>
                <div className="cta-buttons">
                    <motion.button
                        className="enroll-btn"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Enroll Now
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
};

export default CLATDemoVideo;