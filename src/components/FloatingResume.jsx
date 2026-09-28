import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ArrowUpRight, Download } from 'lucide-react';

const FloatingResume = () => {
    return (
        <motion.div
            className="floating-resume-container"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2, duration: 0.8, type: "spring" }}
        >
            <a 
                href="/Tarunes_K_Dossier.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="dossier-main-link"
                title="Open Dossier"
            >
                <FileText size={15} />
                <span className="text">Dossier</span>
                <ArrowUpRight size={13} style={{ opacity: 0.7 }} />
            </a>

            <div className="dossier-divider"></div>

            <a 
                href="/Tarunes_K_Dossier.pdf" 
                download="Tarunes_K_Dossier.pdf" 
                className="dossier-download-btn"
                title="Download PDF"
            >
                <Download size={13} />
            </a>
        </motion.div>
    );
};

export default FloatingResume;
