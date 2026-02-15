import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ setLoading }) => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPercent(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 10) + 1;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [setLoading]);

  return (
    <motion.div
      className="preloader"
      initial={{ y: 0 }}
      exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
    >
      <div className="preloader-content">
        <motion.h1 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="loader-text"
        >
            INITIALIZING
        </motion.h1>
        
        <div className="loader-bar-container">
            <motion.div 
                className="loader-bar"
                initial={{ width: 0 }}
                animate={{ width: `${percent}%` }}
            />
        </div>
        
        <div className="loader-percent">
            {Math.min(percent, 100)}%
        </div>
      </div>
      
      {/* Background Grid Effect */}
      <div className="loader-grid"></div>
    </motion.div>
  );
};

export default Preloader;
