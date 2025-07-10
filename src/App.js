import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Courses from './components/Courses';
import CourseDetailPage from './components/CourseDetailPage';
import CrashCourse from './components/CrashCourse';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import './App.css';
import './styles/animations.css';
import './styles/globals.css';
import CLATDemoVideo from './components/CLATDemoVideo';
import NLUAdmissions from './components/NLUAdmissions';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const coursesData = [
    {
      id: 1,
      title: "Foundation Batch",
      type: "foundation",
      description: "Long-term preparation with full mentorship, mocks, and live sessions.",
      longDescription: "Our Foundation Batch is designed for students starting early in their preparation journey. This comprehensive program covers all aspects of the exam with detailed conceptual clarity, regular practice sessions, and personalized feedback to ensure strong fundamentals.",
      duration: "12 Months",
      price: 24999,
      originalPrice: 34999,
      rating: 4.8,
      reviews: 215,
      students: 350,
      successRate: 92,
      mockTests: 25,
      isPopular: true,
      features: [
        "Daily live classes",
        "Weekly tests",
        "Personal mentorship",
        "Study material",
        "Doubt solving sessions",
        "Performance analytics",
        "Parent-teacher meetings"
      ],
      curriculum: [
        "Legal Reasoning Fundamentals",
        "Logical Reasoning Techniques",
        "English Mastery Program",
        "Current Affairs Integration",
        "Quantitative Aptitude Basics",
        "Mock Test Series",
        "Answer Writing Practice"
      ],
      mentorship: "Dedicated mentors with 5+ years experience guiding students through personalized learning paths"
    },
    {
      id: 2,
      title: "Target Batch",
      type: "target",
      description: "For repeaters and droppers focusing on exam cracking strategies.",
      longDescription: "The Target Batch is specifically designed for students who are attempting the exam for the second time or need intensive preparation. This program focuses on advanced strategies, time management, and high-yield topics to maximize scores in minimal time.",
      duration: "6 Months",
      price: 19999,
      originalPrice: 27999,
      rating: 4.9,
      reviews: 180,
      students: 250,
      successRate: 95,
      mockTests: 18,
      features: [
        "Advanced strategy sessions",
        "Previous year analysis",
        "Time management",
        "Intensive mock tests",
        "Error analysis",
        "Shortcut techniques",
        "Exam temperament building"
      ],
      curriculum: [
        "Advanced Legal Reasoning",
        "High-Speed Logical Techniques",
        "Precision English Modules",
        "Current Affairs Crash Course",
        "Quantitative Shortcuts",
        "Full-Length Mocks",
        "Previous Year Paper Analysis"
      ],
      mentorship: "Specialized mentors with expertise in exam patterns and advanced preparation techniques"
    },
    {
      id: 3,
      title: "Crash Course",
      type: "crash",
      description: "Last-minute preparation with essential concepts and mock tests.",
      longDescription: "Our Crash Course is perfect for students who need to revise the entire syllabus quickly before the exam. This intensive program covers all high-yield topics, provides important shortcuts, and includes multiple full-length mocks to build exam temperament.",
      duration: "2 Months",
      price: 12999,
      originalPrice: 19999,
      rating: 4.7,
      reviews: 150,
      students: 200,
      successRate: 88,
      mockTests: 12,
      features: [
        "Concept summaries",
        "Important formulas",
        "Quick revision sheets",
        "Speed tests",
        "Exam pattern analysis",
        "Last-minute tips",
        "Doubt clearing sessions"
      ],
      curriculum: [
        "Legal Reasoning Crash",
        "Logical Reasoning Speed Techniques",
        "English Quick Revision",
        "Current Affairs Highlights",
        "Quantitative Formula Sheet",
        "Speed Test Series",
        "Exam Day Strategy"
      ],
      mentorship: "Experienced mentors providing last-minute guidance and confidence-building sessions"
    }
  ];

  const testimonialsData = [
    {
      id: 1,
      quote: "This crash course helped me crack CLAT in just 2 months! The faculty's approach made complex topics simple.",
      author: "Priya, 2025 Batch",
      rating: 5
    },
    {
      id: 2,
      quote: "The mentorship and mocks were excellent. The mock tests mirrored the actual exam pattern perfectly.",
      author: "Arjun, 2024 Batch",
      rating: 5
    },
    {
      id: 3,
      quote: "I improved my score by 40% after joining NLTI. Their logical reasoning techniques are unmatched.",
      author: "Riya, 2024 Batch",
      rating: 4
    }
  ];

  return (
    <Router>
      <div className="app">
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Courses courses={coursesData} />
              <CLATDemoVideo />
              <NLUAdmissions />
              <CrashCourse />
              <Testimonials testimonials={testimonialsData} />
            </>
          } />
          <Route path="/courses/:courseId" element={<CourseDetailPage courses={coursesData} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;