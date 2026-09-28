const fs = require('fs');
const PDFDocument = require('pdfkit');

function generateResume(outputPath) {
  const doc = new PDFDocument({
    size: 'A4',
    margins: { top: 32, bottom: 32, left: 38, right: 38 }
  });

  const writeStream = fs.createWriteStream(outputPath);
  doc.pipe(writeStream);

  const primaryColor = '#111827';
  const mutedColor = '#374151';
  const lightMuted = '#4B5563';
  const lineColor = '#D1D5DB';

  // Header
  doc.font('Helvetica-Bold').fontSize(18).fillColor(primaryColor).text('TARUNES K', { align: 'center' });
  doc.moveDown(0.2);
  doc.font('Helvetica-Bold').fontSize(10.5).fillColor(mutedColor).text('AI Agent Software Developer | Backend & Agentic AI Systems', { align: 'center' });
  doc.moveDown(0.2);
  doc.font('Helvetica').fontSize(9).fillColor(lightMuted).text('Chennai, India  |  tarunes12@gmail.com  |  +91 9342595981  |  github.com/TARUNES', { align: 'center' });
  doc.moveDown(0.5);

  function addSectionHeader(title) {
    doc.moveDown(0.4);
    doc.font('Helvetica-Bold').fontSize(9.5).fillColor(primaryColor).text(title.toUpperCase(), { characterSpacing: 0.5 });
    const y = doc.y + 1;
    doc.strokeColor(lineColor).lineWidth(0.8).moveTo(38, y).lineTo(595.28 - 38, y).stroke();
    doc.y = y + 4;
  }

  // PROFESSIONAL SUMMARY
  addSectionHeader('Professional Summary');
  doc.font('Helvetica').fontSize(8.5).fillColor(mutedColor).text(
    'AI Agent Software Developer with 2+ years shipping production AI systems end-to-end, from stakeholder scoping to Azure Kubernetes deployment. Specializes in agentic architectures (LangGraph, AutoGen, MCP, multi-agent orchestration), RAG, and scalable backend engineering (FastAPI, Java, microservices). Cut manual engineering effort by up to 40% and API costs by 30% through autonomous incident-resolution and LLM-gateway platforms. Microsoft Certified Azure AI Engineer Associate, currently driving AI adoption and productivity tooling across engineering teams in a telecom enterprise.',
    { align: 'justify', lineGap: 1.5 }
  );

  // CORE SKILLS
  addSectionHeader('Core Skills');
  const skills = [
    { label: 'AI / Agentic Systems', val: 'LangChain, LangGraph, AutoGen, MCP, Multi-Agent Orchestration, RAG, Voice AI, vLLM, LoRA/PEFT, LLM Evaluation, Prompt Engineering, Vector Embeddings' },
    { label: 'Backend & Languages', val: 'Python, Java, SQL, JavaScript, FastAPI, REST API Design, OAuth 2.0, RBAC, Microservices, WebSockets, RabbitMQ, SQLAlchemy' },
    { label: 'Cloud, DevOps & Data', val: 'Microsoft Azure, Azure OpenAI, Azure Kubernetes Service (AKS), Docker, Kubernetes, CI/CD, PostgreSQL, Redis, Qdrant, Neo4j (Knowledge Graphs)' },
    { label: 'Governance & Tooling', val: 'OPA, Presidio (PII Masking), Semantic Caching (RedisVL), Mermaid/Diagram Automation, LLD Generation, Release Automation' }
  ];

  skills.forEach(s => {
    doc.font('Helvetica-Bold').fontSize(8.5).fillColor(primaryColor).text('•  ' + s.label + ': ', { continued: true });
    doc.font('Helvetica').fontSize(8.5).fillColor(mutedColor).text(s.val, { lineGap: 1 });
  });

  // PROFESSIONAL EXPERIENCE
  addSectionHeader('Professional Experience');

  // Ericsson
  doc.font('Helvetica-Bold').fontSize(9).fillColor(primaryColor).text('AI Agent Software Developer  |  Ericsson', { continued: true });
  doc.font('Helvetica-Bold').fontSize(8.5).fillColor(mutedColor).text('May 2026 – Present | Chennai, India', { align: 'right' });
  const ericssonBullets = [
    'Designed and shipped a release-note automation system from scratch, now adopted team-wide across the organization, eliminating manual release documentation effort.',
    'Built a Low-Level Design (LLD) generator that auto-derives design documentation from Java codebases, standardizing design output and cutting design-review turnaround time.',
    'Deliver AI Agent and Java backend engineering for internal platforms, partnering with cross-functional teams to embed agentic AI into existing telecom software workflows.',
    'Conducted internal GenAI and Agentic AI enablement sessions for 45+ senior engineers, translating LLM concepts into practical workflows for non-AI teams.',
    'Self-initiated a Voice AI assistant integrated into SDLC workflows as a proof-of-concept demonstrating end-to-end agentic design patterns, and own the mandate to drive AI adoption and productivity across the team, contributing directly to AI-in-telecom initiatives.'
  ];
  ericssonBullets.forEach(b => {
    doc.font('Helvetica').fontSize(8.2).fillColor(mutedColor).text('•  ' + b, { indent: 10, lineGap: 1 });
  });

  doc.moveDown(0.3);

  // Anunta
  doc.font('Helvetica-Bold').fontSize(9).fillColor(primaryColor).text('Software Engineer  |  Anunta Technology', { continued: true });
  doc.font('Helvetica-Bold').fontSize(8.5).fillColor(mutedColor).text('Jul 2024 – Apr 2026 | Chennai, India', { align: 'right' });
  const anuntaBullets = [
    'Owned the full lifecycle of 2 production AI systems as sole AI engineer - from stakeholder problem scoping through architecture design to deployment on Azure Kubernetes.',
    'Built Incident Resolver, a production AIOps platform (FastAPI, AutoGen, RAG, Qdrant, Azure OpenAI) that autonomously triages incidents and executes resolution workflows, reducing manual engineering intervention by 40%.',
    'Engineered DesktopReady, multi-tenant backend microservices for a DaaS platform automating VM lifecycle, user/group management, and monitoring; built DeskMate, a local-inference agentic desktop assistant on vLLM that resolves system anomalies before they escalate.'
  ];
  anuntaBullets.forEach(b => {
    doc.font('Helvetica').fontSize(8.2).fillColor(mutedColor).text('•  ' + b, { indent: 10, lineGap: 1 });
  });

  doc.moveDown(0.3);

  // Xendworks
  doc.font('Helvetica-Bold').fontSize(9).fillColor(primaryColor).text('Software Engineer Intern  |  Xendworks', { continued: true });
  doc.font('Helvetica-Bold').fontSize(8.5).fillColor(mutedColor).text('Jan 2024 – Jul 2024 | Chennai, India', { align: 'right' });
  const xendworksBullets = [
    'Built secure REST APIs (OAuth 2.0, RBAC) and a Flutter application from scratch with direct stakeholder involvement across the full requirements-to-delivery cycle.',
    'Shipped a production app that scaled to 1,000+ active users, driving 20% engagement growth.'
  ];
  xendworksBullets.forEach(b => {
    doc.font('Helvetica').fontSize(8.2).fillColor(mutedColor).text('•  ' + b, { indent: 10, lineGap: 1 });
  });

  // SELECTED PROJECTS
  addSectionHeader('Selected Projects');

  doc.font('Helvetica-Bold').fontSize(9).fillColor(primaryColor).text('Aegis - LLM Gateway & Governance Platform', { continued: true });
  doc.font('Helvetica-Oblique').fontSize(8).fillColor(lightMuted).text(' - FastAPI, Kubernetes, RedisVL, Qdrant, Presidio, OPA, LangChain, PostgreSQL, Neo4j');
  const aegisBullets = [
    'Built a multi-tenant LLM gateway handling request routing, cost governance, and enterprise safety at scale for AI applications.',
    'Cut API costs by 30% with a hybrid semantic cache (RedisVL); enforced PII masking (Presidio) and token budgets (OPA); added a Knowledge-Augmented Generation (KAG) layer on Neo4j for structured reasoning.'
  ];
  aegisBullets.forEach(b => {
    doc.font('Helvetica').fontSize(8.2).fillColor(mutedColor).text('•  ' + b, { indent: 10, lineGap: 1 });
  });

  doc.moveDown(0.2);
  doc.font('Helvetica-Bold').fontSize(9).fillColor(primaryColor).text('NeverHold - Voice AI Platform', { continued: true });
  doc.font('Helvetica-Oblique').fontSize(8).fillColor(lightMuted).text(' - AsyncIO, LangGraph, Redis, Real-Time Audio Streaming, STT/TTS');
  doc.font('Helvetica').fontSize(8.2).fillColor(mutedColor).text('•  Real-time voice AI platform for asynchronous customer interaction with conversation-state, interruption, and context handling across sessions.', { indent: 10, lineGap: 1 });

  // EDUCATION & CERTIFICATIONS (Side-by-side or stacked cleanly)
  addSectionHeader('Education');
  doc.font('Helvetica-Bold').fontSize(9).fillColor(primaryColor).text('B.Tech, Information Technology', { continued: true });
  doc.font('Helvetica-Bold').fontSize(8.5).fillColor(mutedColor).text('2025', { align: 'right' });
  doc.font('Helvetica').fontSize(8.5).fillColor(lightMuted).text('KCG College of Technology  |  CGPA: 8.05');

  addSectionHeader('Certifications');
  doc.font('Helvetica').fontSize(8.5).fillColor(mutedColor).text('•  Microsoft Certified: Azure AI Engineer Associate (2025)');

  doc.end();

  return new Promise((resolve, reject) => {
    writeStream.on('finish', resolve);
    writeStream.on('error', reject);
  });
}

async function run() {
  await generateResume('public/Tarunes_K_Resume.pdf');
  await generateResume('public/Tarunes_K_CV.pdf');
  console.log('Successfully generated updated resume and CV PDFs!');
}

run().catch(console.error);
