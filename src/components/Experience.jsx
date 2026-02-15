import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { experience, education } from '../data/content';

const PhaseItem = ({ item, index }) => {
    const ref = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    
    const isInView = useInView(ref, { once: false, margin: "-10%" });

    return (
        <div ref={ref} className="experience-item-wrapper" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            
            {/* The Node Column (Static Flex) */}
            <div className="exp-timeline-col">
                <motion.div 
                    className="exp-checkpoint-dot"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1, borderColor: '#00f2ea', boxShadow: '0 0 15px rgba(0, 242, 234, 0.5)' } : { scale: 0.9, borderColor: 'rgba(255,255,255,0.1)', boxShadow: 'none' }}
                    transition={{ duration: 0.4 }}
                />
            </div>

            {/* Content Card */}
            <motion.div 
                className="experience-card-glass"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
            >
               {/* Header: Role & Period */}
                <div className="exp-header">
                    <h3 className="exp-role">{item.role || item.degree || item.title}</h3>
                    <span className="exp-period-badge">
                        {item.period || item.year}
                    </span>
                </div>
                
                <h4 className="exp-company">{item.company || item.school || item.issuer}</h4>
                
                <div className="exp-details-container">
                     <p className="exp-desc">{item.description}</p>
                     
                     {item.keyProjects && (
                         <div className="exp-projects-reveal">
                             <ul className="project-list-mini">
                                 {item.keyProjects.map(p => (
                                     <li key={p}>{p}</li>
                                 ))}
                             </ul>
                         </div>
                     )}
                </div>

                <div className="card-ambient-glow" style={{ background: 'rgba(255,255,255,0.1)' }}></div>
            </motion.div>
        </div>
    );
};

const Experience = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end center"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

  return (
    <section id="experience" className="experience-section" ref={containerRef}>
      
      {/* The Continuous Line Background */}
      <div className="section-header">
        <h2>Journey</h2>
        <p className="section-subtitle">Career & Education</p>
      </div>
      
      <div className="experience-timeline">
        {/* The Continuous Line Background - Now inside the timeline container */}
        <div className="experience-absolute-line">
            <motion.div 
                className="experience-fill-line" 
                style={{ scaleY, transformOrigin: "top" }} 
            />
        </div>

        {experience.map((exp, index) => (
            <PhaseItem key={exp.id} item={exp} />
        ))}
        {education.map((edu, index) => (
            <PhaseItem key={edu.id} item={edu} />
        ))}
      </div>

    </section>
  );
};

export default Experience;
