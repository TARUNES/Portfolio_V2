import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Download } from 'lucide-react';
import ResumeModal from './ResumeModal';

const FloatingResume = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleOpen = () => setIsOpen(true);
        window.addEventListener('open-resume-modal', handleOpen);
        return () => window.removeEventListener('open-resume-modal', handleOpen);
    }, []);

    return (
        <>
            <motion.div
                className="floating-resume-container"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.8, type: "spring" }}
            >
                {/* Clicking opens the interactive modal to SEE the resume */}
                <button 
                    onClick={() => setIsOpen(true)}
                    className="dossier-main-link"
                    title="See Resume & Experience"
                    type="button"
                >
                    <FileText size={15} />
                    <span className="text">Dossier</span>
                </button>

                <div className="dossier-divider"></div>

                {/* Direct 1-click Download button */}
                <a 
                    href="/Tarunes_K_Dossier.pdf" 
                    download="Tarunes_K_Resume.pdf" 
                    className="dossier-download-btn"
                    title="Download Resume PDF"
                >
                    <Download size={13} />
                </a>
            </motion.div>

            {/* Interactive Resume Viewer Modal */}
            <AnimatePresence>
                {isOpen && (
                    <ResumeModal 
                        isOpen={isOpen} 
                        onClose={() => setIsOpen(false)} 
                    />
                )}
            </AnimatePresence>
        </>
    );
};

export default FloatingResume;
