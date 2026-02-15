import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/content';

const getIconUrl = (tech) => {
    // Normalize tech name for simpleicons slug
    const slug = tech.toLowerCase()
        .replace(/\s+/g, '')
        .replace(/\./g, 'dot') 
        .replace('c++', 'cplusplus')
        .replace('c#', 'csharp');
    
    // Manual mapping for tricky ones or ensuring correct simpleicon slug
    const map = {
        'fastapi': 'fastapi',
        'docker': 'docker',
        'kubernetes': 'kubernetes',
        'azure': 'microsoftazure',
        'postgresql': 'postgresql',
        'redis': 'redis',
        'python': 'python',
        'go': 'go',
        'react': 'react',
        'javascript': 'javascript',
        'git': 'git',
        'linux': 'linux',
        'rabbitmq': 'rabbitmq',
        'pandas': 'pandas',
        'numpy': 'numpy',
        'pytorch': 'pytorch',
        'elasticsearch': 'elasticsearch',
        'jenkins': 'jenkins',
        'grafana': 'grafana',
        'langchain': 'langchain',
        'scikit-learn': 'scikitlearn',
        'mysql': 'mysql',
        // Fallbacks / Proxies
        'fastmcp': 'python',
        'langgraph': 'langchain',
        'autogen': 'microsoft', 
        'rag': 'openai', // Generic AI
        'kag': 'kaggle', // Maybe?
        'fine-tuning': 'huggingface',
        'promptengineering': 'openai', 
        'guardrails': 'python',
        'k-means': 'scikitlearn',
        'chromadb': 'python', // No official icon yet on simpleicons maybe
        'api development': 'postman',
        'system design': 'uml',
        'microservices': 'docker',
    };

    const finalSlug = map[slug] || slug;
    return `https://cdn.simpleicons.org/${finalSlug}/white`; 
};

const SkillCard = ({ skill, index }) => {
  const iconUrl = getIconUrl(skill);

  return (
    <motion.div
      className="skill-card-3d"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ 
        opacity: 1, 
        scale: 1, 
        transition: { type: "spring", bounce: 0.3, duration: 0.6, delay: index * 0.03 } 
      }}
      viewport={{ once: true, margin: "-10%" }}
      whileHover={{ y: -5, scale: 1.05 }}
    >
      <div className="skill-content">
        <div className="skill-icon-wrapper">
             <img 
                src={iconUrl} 
                alt={skill} 
                className="skill-icon-img" 
                onError={(e) => {
                    e.target.style.display='none'; 
                    // Make sibling (fallback text) visible
                    if(e.target.nextSibling) e.target.nextSibling.style.display='block';
                }} 
            />
            {/* Fallback text if icon fails */}
            <span className="skill-fallback" style={{display: 'none', fontSize: '1.5rem', fontWeight: 'bold', color: '#fff'}}>{skill.charAt(0)}</span>
        </div>
        <span className="skill-name">{skill}</span>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="skills-section-neon">
      <div className="section-header">
        <h2>Skills & Tech</h2>
        <p className="section-subtitle">Core Technologies</p>
      </div>
      
      <div className="skills-grid-neon" style={{ justifyContent: 'center' }}>
        {skills.map((skill, index) => (
          <SkillCard key={skill} skill={skill} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
