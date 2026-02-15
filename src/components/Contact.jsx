import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { contact } from '../data/content';
import '../styles/footer.css';

const Contact = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    return (
        <section id="contact" className="contact-section" ref={ref}>
            <div className="contact-content">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="contact-heading">
                        <span className="outline-text">Let's</span><br />
                        Work Together
                    </h2>
                    
                    <p className="contact-sub">
                        Have a project in mind? Let's build something specific and unique.
                    </p>
                    
                    <div className="email-wrapper">
                         <a href={`mailto:${contact.email}`} className="contact-email">
                            {contact.email}
                            <div className="email-line"></div>
                        </a>
                    </div>
                </motion.div>

                <motion.div 
                    className="social-links"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    {contact.socials.map((social) => (
                        <a key={social.name} href={social.link} target="_blank" rel="noopener noreferrer" className="social-link">
                            {social.name}
                        </a>
                    ))}
                </motion.div>
            </div>
            
            <footer className="footer">
                <div className="footer-line"></div>
                <div className="footer-content" style={{ flexDirection: 'column', gap: '0.5rem' }}>
                     <span>© {new Date().getFullYear()} {contact.email.split('@')[0]}</span>
                     
                     <span className="footer-signature">
                        Designed & Built by <span className="crazy-text">Tarunes K & AI</span> 🤖
                     </span>
                </div>
            </footer>
        </section>
    );
};

export default Contact;
