import { motion, useAnimation } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import '../styles/Testimonials.css';

// Import avatar images
import arshiya from '../assets/Arshiya.jpeg';  // Female
import ashmit from '../assets/Ashmit.jpeg';    // Male
import divas from '../assets/Divas.jpeg';      // Male
import priya from '../assets/Arshiya.jpeg';    // Female (using same for demo)
import rahul from '../assets/Ashmit.jpeg';     // Male (using same for demo)

const Testimonials = () => {
    // Testimonials data with 5 entries
    const testimonials = [
        {
            id: 1,
            author: "Arshiya Sharma",
            course: "CLAT 2023 Batch",
            rank: 42,
            quote: "NLTI's guidance helped me secure AIR 42. The faculty's personalized attention made all the difference in my preparation.",
            rating: 5,
            achievement: "NLU Delhi"
        },
        {
            id: 2,
            author: "Ashmit Patel",
            course: "CLAT 2023 Batch",
            rank: 18,
            quote: "The mock test series was incredibly similar to the actual CLAT. Scored AIR 18 thanks to their strategic approach.",
            rating: 5,
            achievement: "NALSAR Hyderabad"
        },
        {
            id: 3,
            author: "Divas Kumar",
            course: "CLAT 2022 Batch",
            rank: 75,
            quote: "From a 60%ile in first mock to AIR 75 in CLAT, the improvement was remarkable. Highly recommend their crash course.",
            rating: 4,
            achievement: "NLU Bangalore"
        },
        {
            id: 4,
            author: "Priya Verma",
            course: "CLAT 2023 Batch",
            rank: 29,
            quote: "The legal reasoning faculty is exceptional. Their shortcuts helped me solve questions 3x faster during the exam.",
            rating: 5,
            achievement: "WBNUJS Kolkata"
        },
        {
            id: 5,
            author: "Rahul Mehta",
            course: "CLAT 2022 Batch",
            rank: 56,
            quote: "As a repeater, I improved my rank from 420 to 56 with NLTI's one-year program. Worth every penny!",
            rating: 4,
            achievement: "NLU Jodhpur"
        }
    ];

    // Avatar assignment (3 female, 2 male)
    const assignAvatar = (index) => {
        const avatars = [arshiya, ashmit, divas, priya, rahul];
        return avatars[index % avatars.length];
    };

    const enhancedTestimonials = testimonials.map((testimonial, index) => ({
        ...testimonial,
        photo: assignAvatar(index)
    }));

    const containerRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const controls = useAnimation();
    const [isDragging, setIsDragging] = useState(false);
    const [extendedTestimonials, setExtendedTestimonials] = useState(enhancedTestimonials);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // Update window width on resize
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Duplicate testimonials for infinite scroll
    useEffect(() => {
        setExtendedTestimonials([...enhancedTestimonials, ...enhancedTestimonials]);
    }, [enhancedTestimonials]);

    // Auto-scroll every 4 seconds when not dragging
    useEffect(() => {
        if (isDragging) return;

        const interval = setInterval(() => {
            setActiveIndex(prev => (prev + 1) % enhancedTestimonials.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [enhancedTestimonials.length, isDragging]);

    // Animate scroll to center card
    useEffect(() => {
        const scrollToCenter = async () => {
            if (!containerRef.current) return;

            const container = containerRef.current;
            const card = container.children[activeIndex];

            if (card) {
                const containerWidth = container.offsetWidth;
                const cardWidth = card.offsetWidth;
                const scrollTo = card.offsetLeft - (containerWidth - cardWidth) / 2;

                await controls.start({
                    x: -scrollTo,
                    transition: { type: "spring", stiffness: 300, damping: 30 }
                });
            }
        };

        scrollToCenter();
    }, [activeIndex, controls]);

    // Handle drag events
    const handleDragStart = () => setIsDragging(true);
    const handleDragEnd = () => {
        setIsDragging(false);

        // Snap to nearest card
        if (containerRef.current) {
            const container = containerRef.current;
            const containerCenter = container.scrollLeft + container.offsetWidth / 2;

            let closestCard = null;
            let minDistance = Infinity;

            Array.from(container.children).forEach((card, index) => {
                const cardCenter = card.offsetLeft + card.offsetWidth / 2;
                const distance = Math.abs(containerCenter - cardCenter);

                if (distance < minDistance) {
                    minDistance = distance;
                    closestCard = index % enhancedTestimonials.length;
                }
            });

            if (closestCard !== null) {
                setActiveIndex(closestCard);
            }
        }
    };

    return (
        <section id="testimonials" className="testimonials-section">
            <div className="section-header">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="section-title"
                >
                    Success <span>Stories</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="section-subtitle"
                >
                    Hear from our students who secured top ranks in CLAT
                </motion.p>
            </div>

            <div className="testimonials-carousel-container">
                <motion.div
                    className="testimonials-carousel"
                    ref={containerRef}
                    animate={controls}
                    drag="x"
                    dragConstraints={{ right: 0, left: -2000 }}
                    dragElastic={0.1}
                    onDragStart={handleDragStart}
                    onDragEnd={handleDragEnd}
                    whileTap={{ cursor: "grabbing" }}
                >
                    {extendedTestimonials.map((testimonial, index) => {
                        const isCenter = index % enhancedTestimonials.length === activeIndex;
                        const cardIndex = index % enhancedTestimonials.length;

                        return (
                            <motion.div
                                key={`${testimonial.id}-${index}`}
                                className={`testimonial-card ${isCenter ? 'center-card' : ''}`}
                                initial={{ scale: 0.9, opacity: 0.6 }}
                                animate={{
                                    scale: isCenter ? 1.05 : 0.9,
                                    opacity: isCenter ? 1 : 0.6,
                                    zIndex: isCenter ? 10 : 1
                                }}
                                transition={{ type: "spring", stiffness: 300 }}
                                whileHover={{ scale: isCenter ? 1.1 : 0.95 }}
                            >
                                <div className="testimonial-content">
                                    <div className="student-meta">
                                        <motion.div
                                            className="avatar-container"
                                            whileHover={{ rotate: 5, scale: 1.05 }}
                                        >
                                            <img
                                                src={testimonial.photo}
                                                alt={testimonial.author}
                                                className="student-photo"
                                                loading="lazy"
                                            />
                                            {isCenter && (
                                                <motion.div
                                                    className="avatar-glow"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ duration: 0.5 }}
                                                />
                                            )}
                                        </motion.div>
                                        <div className="student-info">
                                            <h3 className="author-name">{testimonial.author}</h3>
                                            <p className="author-course">{testimonial.course}</p>
                                            {testimonial.rank && (
                                                <p className="author-rank">AIR {testimonial.rank}</p>
                                            )}
                                        </div>
                                    </div>
                                    <p className="testimonial-quote">"{testimonial.quote}"</p>
                                    <div className="rating">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <motion.span
                                                key={i}
                                                className="star"
                                                whileHover={{ scale: 1.2 }}
                                            >
                                                ★
                                            </motion.span>
                                        ))}
                                    </div>
                                    {testimonial.achievement && (
                                        <motion.div
                                            className="achievement-tag"
                                            whileHover={{ scale: 1.05 }}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.3 }}
                                        >
                                            <span>{testimonial.achievement}</span>
                                        </motion.div>
                                    )}
                                </div>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </div>

            <div className="carousel-dots">
                {enhancedTestimonials.map((_, index) => (
                    <motion.button
                        key={index}
                        className={`dot ${index === activeIndex ? 'active' : ''}`}
                        onClick={() => setActiveIndex(index)}
                        aria-label={`Go to testimonial ${index + 1}`}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        animate={{
                            scale: index === activeIndex ? 1.3 : 1,
                            backgroundColor: index === activeIndex ? '#3498db' : '#bdc3c7'
                        }}
                        transition={{ type: "spring", stiffness: 500 }}
                    />
                ))}
            </div>
        </section>
    );
};

export default Testimonials;