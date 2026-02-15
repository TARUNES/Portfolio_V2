import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { projects, archive } from '../data/content';
import '../styles/archive.css';

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });

  return (
    <motion.div 
      ref={ref}
      className="project-card"
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="project-image-container">
        <img src={project.image} alt={project.title} className="project-image" />
      </div>
      <div className="project-info">
        <span className="project-category">{project.category}</span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tags">
          {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
        </div>
      </div>
    </motion.div>
  );
};

const ArchiveModal = ({ isOpen, onClose, items }) => {
    // Lock body scroll and pause Lenis when open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
            window.dispatchEvent(new Event('lenis-stop'));
        } else {
            document.body.style.overflow = 'unset';
            document.documentElement.style.overflow = 'unset';
            window.dispatchEvent(new Event('lenis-start'));
        }
        return () => { 
            document.body.style.overflow = 'unset';
            document.documentElement.style.overflow = 'unset';
            // Only restart if we are truly unmounting/closing, though handle carefully if unmount happens while open
            window.dispatchEvent(new Event('lenis-start'));
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <motion.div 
            className="archive-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <motion.div 
                className="archive-modal-card"
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="archive-modal-header">
                    <div>
                        <h2>Project Archive</h2>
                        <span style={{ fontSize: '0.9rem', color: '#666' }}>{items.length} projects</span>
                    </div>
                    <button className="archive-close-btn" onClick={onClose}>&times;</button>
                </div>
                
                <div className="archive-modal-body">
                     <div className="archive-list" style={{ borderTop: 'none' }}>
                        {items.map((project, i) => (
                             <a key={i} href={project.link} target="_blank" rel="noopener noreferrer" className="archive-item" style={{ textDecoration: 'none', display: 'grid' }}>
                                <span className="archive-year">{project.year}</span>
                                <span className="archive-title">{project.title}</span>
                                <span className="archive-tech">
                                    {project.tech && project.tech.length > 0 ? project.tech.join(' · ') : ''}
                                </span>
                                <span className="archive-link">
                                    <span style={{ fontSize: '0.8rem', opacity: 0.5, marginRight: '0.5rem' }}>GitHub</span>
                                    ↗
                                </span>
                             </a>
                        ))}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

const Projects = () => {
    const featuredProjects = projects.slice(0, 3);
    const [showModal, setShowModal] = useState(false);
    
    // Show top 5 as preview in the main page? User said "better to be open a large cart and list there". 
    // Maybe hide the list entirely on main page and just have the "Archive" header + button?
    // "don't span in archive show 5 and add see all and list there all" -> "Open large cart"
    // I will show 5 preview items, and the button opens the modal with ALL items.
    const previewArchive = archive.slice(0, 5);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-header">
        <h2>Selected Works</h2>
      </div>
      
      <div className="projects-container">
        {featuredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      <div className="projects-header" style={{ marginTop: '100px', borderBottom: 'none' }}>
        <h2>Archive</h2>
      </div>
      
      {/* Tiny Preview List */}
      <div className="archive-list">
        {previewArchive.map((project, i) => (
             <a key={i} href={project.link} target="_blank" rel="noopener noreferrer" className="archive-item" style={{ textDecoration: 'none', display: 'grid' }}>
                <span className="archive-year">{project.year}</span>
                <span className="archive-title">{project.title}</span>
                <span className="archive-tech">
                    {project.tech && project.tech.length > 0 ? project.tech.join(' · ') : ''}
                </span>
                <span className="archive-link">↗</span>
             </a>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <button 
            onClick={() => setShowModal(true)}
            className="btn-primary"
            style={{ 
                background: 'rgba(255,255,255,0.05)', 
                border: '1px solid rgba(255,255,255,0.1)', 
                color: 'var(--text)',
                padding: '1rem 2.5rem',
                fontSize: '0.9rem',
                borderRadius: '50px',
                cursor: 'pointer'
            }}
          >
              View Full Archive ({archive.length})
          </button>
      </div>

      <AnimatePresence>
        {showModal && <ArchiveModal isOpen={showModal} onClose={() => setShowModal(false)} items={archive} />}
      </AnimatePresence>

    </section>
  );
};

export default Projects;
