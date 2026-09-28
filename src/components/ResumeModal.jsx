import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink, X, FileText, Briefcase, Code, Award, GraduationCap, CheckCircle2 } from 'lucide-react';
import { contact } from '../data/content';

const ResumeModal = ({ isOpen, onClose }) => {
    const [viewMode, setViewMode] = useState('doc'); // 'doc' or 'pdf'

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
            window.dispatchEvent(new Event('lenis-start'));
        };
    }, [isOpen]);

    // Handle ESC key
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <motion.div 
            className="resume-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <motion.div 
                className="resume-modal-card"
                initial={{ scale: 0.94, opacity: 0, y: 25 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.94, opacity: 0, y: 20 }}
                transition={{ type: "spring", damping: 28, stiffness: 320 }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Modal Top Bar */}
                <div className="resume-modal-header">
                    <div className="resume-modal-title-group">
                        <div className="resume-icon-badge">
                            <FileText size={18} color="#00f2ea" />
                        </div>
                        <div>
                            <h2>Tarunes K</h2>
                            <p className="resume-modal-sub">
                                Software Engineer • AI Agent Systems • Azure & Kubernetes
                            </p>
                        </div>
                    </div>

                    <div className="resume-modal-actions">
                        <div className="resume-view-toggles">
                            <button 
                                className={`view-toggle-btn ${viewMode === 'doc' ? 'active' : ''}`}
                                onClick={() => setViewMode('doc')}
                            >
                                Overview
                            </button>
                            <button 
                                className={`view-toggle-btn ${viewMode === 'pdf' ? 'active' : ''}`}
                                onClick={() => setViewMode('pdf')}
                            >
                                Original PDF
                            </button>
                        </div>

                        <a 
                            href="/Tarunes_K_Dossier.pdf" 
                            download="Tarunes_K_Resume.pdf" 
                            className="resume-download-btn-primary"
                        >
                            <Download size={14} />
                            <span>Download PDF</span>
                        </a>

                        <a 
                            href="/Tarunes_K_Dossier.pdf" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="resume-open-btn"
                            title="Open in new window"
                        >
                            <ExternalLink size={15} />
                        </a>

                        <button className="resume-close-btn" onClick={onClose} aria-label="Close modal">
                            <X size={20} />
                        </button>
                    </div>
                </div>

                {/* Modal Content */}
                <div className="resume-modal-body">
                    {viewMode === 'pdf' ? (
                        <div className="pdf-embed-wrapper">
                            <iframe 
                                src="/Tarunes_K_Dossier.pdf#toolbar=0&navpanes=0" 
                                title="Tarunes K Resume PDF"
                                className="resume-pdf-iframe"
                            />
                        </div>
                    ) : (
                        <div className="resume-doc-sheet">
                            {/* Document Header */}
                            <header className="resume-doc-header">
                                <h1 className="resume-doc-name">TARUNES K</h1>
                                <div className="resume-doc-contact">
                                    <span>+91 9342595981</span>
                                    <span className="bullet-sep">•</span>
                                    <a href={`mailto:${contact.email}`}>{contact.email}</a>
                                    <span className="bullet-sep">•</span>
                                    <a href="https://www.linkedin.com/in/tarunes-k-3b3495273/" target="_blank" rel="noreferrer">LinkedIn</a>
                                    <span className="bullet-sep">•</span>
                                    <a href="https://github.com/TARUNES" target="_blank" rel="noreferrer">GitHub</a>
                                </div>
                            </header>

                            {/* Summary */}
                            <section className="resume-doc-section">
                                <div className="resume-section-heading">
                                    <h3>SUMMARY</h3>
                                    <div className="heading-rule"></div>
                                </div>
                                <p className="resume-summary-text">
                                    Software Engineer with 2+ years of experience building production-grade backend systems, observability platforms, and event-driven microservices on Azure and Kubernetes. Currently an AI Agent Software Developer at Ericsson, shipping agentic AI and Java backend platforms; previously owned 2 production AI systems end-to-end at Anunta. Microsoft Certified Azure AI Engineer Associate.
                                </p>
                            </section>

                            {/* Work Experience */}
                            <section className="resume-doc-section">
                                <div className="resume-section-heading">
                                    <h3><Briefcase size={14} className="inline-icon" /> WORK EXPERIENCE</h3>
                                    <div className="heading-rule"></div>
                                </div>

                                <div className="resume-experience-item">
                                    <div className="exp-line-header">
                                        <div className="exp-title-role">
                                            <strong>AI Agent Software Developer</strong>
                                            <span className="exp-org">Ericsson | Chennai, India</span>
                                        </div>
                                        <span className="exp-date">May 2026 - Present</span>
                                    </div>
                                    <ul className="resume-bullet-list">
                                        <li>
                                            Designed and shipped a <strong>release-note automation system</strong> from scratch, now adopted team-wide, eliminating manual release documentation effort; built a <strong>LLD generator</strong> that auto-derives design documentation from Java codebases.
                                        </li>
                                        <li>
                                            Deliver <strong>AI Agent and Java backend engineering</strong> for internal telecom platforms, partnering with cross-functional teams to embed agentic AI into existing software workflows.
                                        </li>
                                        <li>
                                            Conducted <strong>GenAI and Agentic AI enablement sessions</strong> for 45+ senior engineers; self-initiated a <strong>Voice AI assistant</strong> integrated into SDLC workflows as an end-to-end agentic design proof-of-concept.
                                        </li>
                                    </ul>
                                </div>

                                <div className="resume-experience-item">
                                    <div className="exp-line-header">
                                        <div className="exp-title-role">
                                            <strong>Software Engineer</strong>
                                            <span className="exp-org">Anunta Technology | Chennai, India</span>
                                        </div>
                                        <span className="exp-date">Jul 2024 - Apr 2026</span>
                                    </div>
                                    <ul className="resume-bullet-list">
                                        <li>
                                            <strong>DesktopReady (DaaS):</strong> Engineered multi-tenant backend microservices for an Azure-based Desktop-as-a-Service platform - automating VM lifecycle, user provisioning, and Active Directory sync using Go, FastAPI, and Pydantic across 500+ virtual desktop sessions. Built <strong>DeskMate</strong>, a local-inference agentic desktop assistant on vLLM.
                                        </li>
                                        <li>
                                            <strong>Event-Driven Architecture & Log Pipeline:</strong> Architected asynchronous messaging with Kafka and RabbitMQ, reducing inter-service latency by 25%; designed a high-throughput log ingestion pipeline.
                                        </li>
                                        <li>
                                            <strong>Incident Resolver (AIOps Platform):</strong> A production AIOps platform (FastAPI, AutoGen, RAG, Qdrant, Azure OpenAI) that autonomously triages incidents and executes resolution workflows, reducing manual engineering intervention by 40%.
                                        </li>
                                    </ul>
                                </div>

                                <div className="resume-experience-item">
                                    <div className="exp-line-header">
                                        <div className="exp-title-role">
                                            <strong>Software Engineer Intern</strong>
                                            <span className="exp-org">Xendworks | Chennai, India</span>
                                        </div>
                                        <span className="exp-date">Jan 2024 - Jul 2024</span>
                                    </div>
                                    <ul className="resume-bullet-list">
                                        <li>
                                            Built secure RESTful APIs with <strong>OAuth 2.0 and Role-Based Access Control (RBAC)</strong> for sensitive enterprise data modules; shipped a Flutter app to <strong>1,000+ active users</strong> with 20% engagement growth.
                                        </li>
                                    </ul>
                                </div>
                            </section>

                            {/* Technical Skills */}
                            <section className="resume-doc-section">
                                <div className="resume-section-heading">
                                    <h3><Code size={14} className="inline-icon" /> TECHNICAL SKILLS</h3>
                                    <div className="heading-rule"></div>
                                </div>
                                <div className="skills-category-table">
                                    <div className="skills-row">
                                        <span className="skill-cat-label">Languages:</span>
                                        <span className="skill-cat-val">Python, Go (Golang), Java, SQL, JavaScript</span>
                                    </div>
                                    <div className="skills-row">
                                        <span className="skill-cat-label">Backend & Systems:</span>
                                        <span className="skill-cat-val">Microservices, FastAPI, Kafka, RabbitMQ, asyncio, SQLAlchemy, Pydantic, OAuth 2.0, System Design</span>
                                    </div>
                                    <div className="skills-row">
                                        <span className="skill-cat-label">Cloud/DevOps:</span>
                                        <span className="skill-cat-val">Docker, Kubernetes, Azure, AKS, Git, Linux, CI/CD, Jenkins</span>
                                    </div>
                                    <div className="skills-row">
                                        <span className="skill-cat-label">AI / ML:</span>
                                        <span className="skill-cat-val">LangChain, LangGraph, AutoGen, MCP, Agentic AI, RAG, Azure OpenAI, Voice AI, vLLM, LoRA/PEFT</span>
                                    </div>
                                    <div className="skills-row">
                                        <span className="skill-cat-label">Databases & Governance:</span>
                                        <span className="skill-cat-val">PostgreSQL, MongoDB, Redis, Qdrant, ChromaDB, Neo4j, OPA, Presidio</span>
                                    </div>
                                </div>
                            </section>

                            {/* Projects */}
                            <section className="resume-doc-section">
                                <div className="resume-section-heading">
                                    <h3>PROJECTS</h3>
                                    <div className="heading-rule"></div>
                                </div>

                                <div className="resume-project-item">
                                    <div className="proj-line-header">
                                        <strong>Aegis | Centralized Gateway & Governance Platform</strong>
                                    </div>
                                    <ul className="resume-bullet-list">
                                        <li>
                                            Built a high-performance multi-tenant LLM gateway in Go and FastAPI for request routing, rate limiting, and cost governance; integrated Prometheus metrics and Splunk dashboards; cut API costs by 30% with a hybrid semantic + exact-match cache (RedisVL); enforced PII masking (Presidio) and token budgets (OPA); deployed on Kubernetes with Qdrant, PostgreSQL, and a Neo4j knowledge-graph layer.
                                        </li>
                                    </ul>
                                </div>

                                <div className="resume-project-item">
                                    <div className="proj-line-header">
                                        <strong>FlowState | Autonomous Multi-Agent Orchestration</strong>
                                    </div>
                                    <ul className="resume-bullet-list">
                                        <li>
                                            Designed a DAG-based workflow engine with parallel agent execution plus retry and rollback; built custom Human-in-the-Loop (HITL) modules ensuring 100% compliance with healthcare safety standards while automating 80% of manual verification.
                                        </li>
                                        <li className="tech-stack-line">
                                            <strong>Tech Stack:</strong> LangGraph, LangChain, FastAPI, Multi-Agent Systems, Python, Vue.js, FastMCP (MCP).
                                        </li>
                                    </ul>
                                </div>

                                <div className="resume-project-item">
                                    <div className="proj-line-header">
                                        <strong>NeverHold | Voice AI Platform</strong>
                                    </div>
                                    <ul className="resume-bullet-list">
                                        <li>
                                            Real-time voice AI platform for asynchronous customer interaction, handling conversation state, interruptions, and context across sessions.
                                        </li>
                                        <li className="tech-stack-line">
                                            <strong>Tech Stack:</strong> AsyncIO, LangGraph, Redis, Real-Time Audio Streaming, STT/TTS.
                                        </li>
                                    </ul>
                                </div>
                            </section>

                            {/* Certifications & Education */}
                            <div className="resume-grid-dual">
                                <section className="resume-doc-section">
                                    <div className="resume-section-heading">
                                        <h3><Award size={14} className="inline-icon" /> CERTIFICATIONS</h3>
                                        <div className="heading-rule"></div>
                                    </div>
                                    <div className="cert-box">
                                        <CheckCircle2 size={16} color="#00f2ea" />
                                        <div>
                                            <strong>Microsoft Certified: Azure AI Engineer Associate</strong>
                                            <p className="cert-meta">Microsoft • 2025</p>
                                        </div>
                                    </div>
                                </section>

                                <section className="resume-doc-section">
                                    <div className="resume-section-heading">
                                        <h3><GraduationCap size={14} className="inline-icon" /> EDUCATION</h3>
                                        <div className="heading-rule"></div>
                                    </div>
                                    <div className="edu-box">
                                        <strong>B.Tech in Information Technology</strong>
                                        <p className="edu-meta">KCG College of Technology | Chennai • 2021 - 2025</p>
                                        <span className="edu-cgpa">CGPA: 8.05 / 10</span>
                                    </div>
                                </section>
                            </div>
                        </div>
                    )}
                </div>
            </motion.div>
        </motion.div>
    );
};

export default ResumeModal;
