import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { certifications } from '../data/content';
import '../styles/certifications.css';

const CertCard = ({ cert, index }) => {
    return (
        <motion.a 
            href={cert.link} 
            target="_blank" 
            className="cert-card-wrapper"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
        >
            <div className="cert-card-glass">
                <div className="cert-glow"></div>
                
                <div className="cert-header">
                    <div className="cert-icon-box">
                        {cert.logo ? (
                            <img src={cert.logo} alt="Issuer Logo" style={{ width: '80%', height: '80%', objectFit: 'contain' }} />
                        ) : (
                            <span className="cert-icon">📜</span>
                        )}
                    </div>
                    <span className="cert-year">{cert.year}</span>
                </div>
                
                <div className="cert-details">
                    <h3 className="cert-title">{cert.title}</h3>
                    <p className="cert-issuer">{cert.issuer}</p>
                    {cert.description && <p className="cert-description" style={{ fontSize: '0.85rem', color: '#888', marginTop: '0.5rem', lineHeight: '1.4' }}>{cert.description}</p>}
                </div>

                <div className="cert-arrow-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </div>
        </motion.a>
    );
};

const Certifications = () => {
  return (
    <section id="certifications" className="certifications-section">
      <div className="cert-grid-bg"></div>
      
      <div className="section-header">
        <h2>Credentials</h2>
        <p className="section-subtitle">Certifications & Achievements</p>
      </div>

      <div className="cert-grid">
        {certifications.map((cert, index) => (
            <CertCard key={cert.id} cert={cert} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Certifications;
