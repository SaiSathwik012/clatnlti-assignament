import React from 'react';
import { motion } from 'framer-motion';
import '../styles/NLUAdmissions.css';
import nluDelhi from '../assets/first-one.png';
import nalsarHyderabad from '../assets/second-one.jpg';
import nluBangalore from '../assets/third-one.png';
import nluKolkata from '../assets/fourth-img.jpg';
import jindalGlobal from '../assets/Jindal-Global-Law-School-min.png';

const NLUAdmissions = () => {
    const nluLogos = [
        { id: 1, src: nluDelhi, alt: 'NLU Delhi' },
        { id: 2, src: nalsarHyderabad, alt: 'NALSAR Hyderabad' },
        { id: 3, src: nluBangalore, alt: 'NLU Bangalore' },
        { id: 4, src: nluKolkata, alt: 'NLU Kolkata' },
        { id: 5, src: jindalGlobal, alt: 'Jindal Global Law School' }
    ];

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.div
            className="nlu-admissions-container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
        >
            <motion.h2
                className="nlu-admissions-heading"
                variants={itemVariants}
            >
                NLTI Students have secured admissions in Top NLUs
                <motion.div
                    className="heading-underline"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                />
            </motion.h2>

            <motion.div
                className="logo-carousel-container"
                variants={itemVariants}
            >
                <motion.div
                    className="logo-carousel"
                    animate={{
                        x: ['0%', '-100%']
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: 'linear'
                    }}
                >
                    {nluLogos.map((logo) => (
                        <motion.div
                            key={logo.id}
                            className="logo-item"
                            whileHover={{ scale: 1.1, zIndex: 10 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            <img src={logo.src} alt={logo.alt} />
                            <div className="logo-tooltip">{logo.alt}</div>
                        </motion.div>
                    ))}

                    {nluLogos.map((logo) => (
                        <motion.div
                            key={`duplicate-${logo.id}`}
                            className="logo-item"
                            whileHover={{ scale: 1.1, zIndex: 10 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            <img src={logo.src} alt={logo.alt} />
                            <div className="logo-tooltip">{logo.alt}</div>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="carousel-gradient left" />
                <div className="carousel-gradient right" />
            </motion.div>

            <motion.div
                className="stats-container"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
            >
                <div className="stat-item">
                    <div className="stat-number">200+</div>
                    <div className="stat-label">Students Placed</div>
                </div>
                <div className="stat-item">
                    <div className="stat-number">95%</div>
                    <div className="stat-label">Success Rate</div>
                </div>
                <div className="stat-item">
                    <div className="stat-number">15+</div>
                    <div className="stat-label">Years Experience</div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default NLUAdmissions;