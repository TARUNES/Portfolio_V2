import React from 'react';
import { motion } from 'framer-motion';

const FloatingResume = () => {
    return (
        <motion.div
            className="floating-resume-container"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2, duration: 0.8, type: "spring" }}
        >
            <a href="/Tarunes_K_Resume.pdf" download className="resume-btn">
                <span className="icon">📄</span>
                <span className="text">Resume</span>
            </a>
        </motion.div>
    );
};

export default FloatingResume;
