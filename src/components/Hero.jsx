import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { hero } from '../data/content';
import ParticleBackground from './ParticleBackground';
import DecryptedText from './DecryptedText';
import MagneticButton from './MagneticButton';

const Hero = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

    return (
        <section ref={containerRef} className="hero-section">
            <ParticleBackground />

            <motion.div 
                style={{ y, opacity, scale }} 
                className="hero-container"
            >
                <div className="hero-content-wrapper">
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    >
                        <span className="hero-overline">
                            <DecryptedText text={hero.greeting} />
                        </span>
                    </motion.div>
                    
                    <div className="hero-title-wrapper">
                        <motion.h1 
                            className="hero-display-text"
                            initial={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)", y: 100 }}
                            animate={{ clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)", y: 0 }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                        >
                            {hero.name}
                        </motion.h1>
                    </div>

                    <div className="hero-subtitle-wrapper">
                         <motion.h2 
                            className="hero-sub-display"
                            initial={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)", y: 50 }}
                            animate={{ clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)", y: 0 }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
                        >
                            {hero.title}
                        </motion.h2>
                    </div>

                    <motion.p 
                        className="hero-desc"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                    >
                        {hero.subtitle}
                    </motion.p>
                    
                    <motion.div 
                        className="hero-actions"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1.2 }}
                        style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
                    >
                        <MagneticButton 
                            className="btn-primary"
                            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth'})}
                        >
                            {hero.cta}
                        </MagneticButton>

                        <MagneticButton 
                            className="btn-secondary"
                            onClick={() => window.dispatchEvent(new CustomEvent('open-resume-modal'))}
                        >
                            View Dossier ↗
                        </MagneticButton>
                    </motion.div>
                </div>
            </motion.div>
            
            <div className="hero-background-effects">
                <div className="gradient-orb-1"></div>
                <div className="gradient-orb-2"></div>
            </div>
        </section>
    );
};

export default Hero;
