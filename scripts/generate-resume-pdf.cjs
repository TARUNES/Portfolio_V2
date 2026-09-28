const fs = require('fs');
const PDFDocument = require('pdfkit');

function generateResume(outputPath) {
  const doc = new PDFDocument({
    size: 'A4',
    margins: { top: 28, bottom: 28, left: 36, right: 36 }
  });

  const writeStream = fs.createWriteStream(outputPath);
  doc.pipe(writeStream);

  const primaryColor = '#0f172a';
  const bodyColor = '#1e293b';
  const mutedColor = '#475569';
  const linkColor = '#0369a1';
  const lineColor = '#94a3b8';

  const pageWidth = 595.28;
  const leftMargin = 36;
  const contentWidth = pageWidth - (leftMargin * 2);

  // Header - Centered Name
  doc.font('Helvetica-Bold').fontSize(19).fillColor(primaryColor).text('Tarunes K', { align: 'center' });
  doc.moveDown(0.2);
  
  // Contact row
  doc.font('Helvetica').fontSize(9).fillColor(bodyColor);
  doc.text(
    '+91 9342595981  |  tarunes12@gmail.com  |  LinkedIn  |  GitHub  |  Portfolio',
    { align: 'center' }
  );
  doc.moveDown(0.4);

  function addSection(title) {
    doc.moveDown(0.35);
    doc.font('Helvetica-Bold').fontSize(9.5).fillColor(primaryColor).text(title.toUpperCase(), { characterSpacing: 0.5 });
    const y = doc.y + 1;
    doc.strokeColor(lineColor).lineWidth(0.75).moveTo(leftMargin, y).lineTo(pageWidth - leftMargin, y).stroke();
    doc.y = y + 3.5;
  }

  // SUMMARY
  addSection('Summary');
  doc.font('Helvetica').fontSize(8.5).fillColor(bodyColor).text(
    'Software Engineer with 2+ years of experience building production-grade backend systems, observability platforms, and event-driven microservices on Azure and Kubernetes. Currently an AI Agent Software Developer at Ericsson, shipping agentic AI and Java backend platforms; previously owned 2 production AI systems end-to-end at Anunta. Microsoft Certified Azure AI Engineer Associate.',
    { align: 'justify', lineGap: 1.5 }
  );

  // WORK EXPERIENCE
  addSection('Work Experience');

  // Ericsson
  doc.font('Helvetica-Bold').fontSize(9).fillColor(primaryColor).text('AI Agent Software Developer', leftMargin, doc.y, { continued: true });
  doc.font('Helvetica-Bold').fontSize(8.5).fillColor(primaryColor).text('May 2026 - Present', { align: 'right' });
  doc.font('Helvetica-Oblique').fontSize(8.5).fillColor(mutedColor).text('Ericsson | Chennai, India');
  doc.moveDown(0.15);

  const ericssonBullets = [
    'Designed and shipped a release-note automation system from scratch, now adopted team-wide, eliminating manual release documentation effort; built a LLD generator that auto-derives design documentation from Java codebases.',
    'Deliver AI Agent and Java backend engineering for internal telecom platforms, partnering with cross-functional teams to embed agentic AI into existing software workflows.',
    'Conducted GenAI and Agentic AI enablement sessions for 45+ senior engineers; self-initiated a Voice AI assistant integrated into SDLC workflows as an end-to-end agentic design proof-of-concept.'
  ];
  ericssonBullets.forEach(b => {
    doc.font('Helvetica').fontSize(8.2).fillColor(bodyColor).text('•  ' + b, { indent: 8, lineGap: 1 });
  });

  doc.moveDown(0.25);

  // Anunta
  doc.font('Helvetica-Bold').fontSize(9).fillColor(primaryColor).text('Software Engineer', leftMargin, doc.y, { continued: true });
  doc.font('Helvetica-Bold').fontSize(8.5).fillColor(primaryColor).text('Jul 2024 - Apr 2026', { align: 'right' });
  doc.font('Helvetica-Oblique').fontSize(8.5).fillColor(mutedColor).text('Anunta Technology | Chennai, India');
  doc.moveDown(0.15);

  const anuntaBullets = [
    { bold: 'DesktopReady (DaaS): ', text: 'Engineered multi-tenant backend microservices for an Azure-based Desktop-as-a-Service platform - automating VM lifecycle, user provisioning, and Active Directory sync using Go, FastAPI, and Pydantic across 500+ virtual desktop sessions. Built DeskMate, a local-inference agentic desktop assistant on vLLM.' },
    { bold: 'Event-Driven Architecture & Log Pipeline: ', text: 'Architected asynchronous messaging with Kafka and RabbitMQ, reducing inter-service latency by 25%; designed a high-throughput log ingestion pipeline' },
    { bold: 'Incident Resolver (AIOps Platform): ', text: 'A production AIOps platform (FastAPI, AutoGen, RAG, Qdrant, Azure OpenAI) that autonomously triages incidents and executes resolution workflows, reducing manual engineering intervention by 40%.' }
  ];
  anuntaBullets.forEach(b => {
    doc.font('Helvetica-Bold').fontSize(8.2).fillColor(bodyColor).text('•  ' + b.bold, { indent: 8, continued: true });
    doc.font('Helvetica').fontSize(8.2).fillColor(bodyColor).text(b.text, { lineGap: 1 });
  });

  doc.moveDown(0.25);

  // Xendworks
  doc.font('Helvetica-Bold').fontSize(9).fillColor(primaryColor).text('Software Engineer Intern', leftMargin, doc.y, { continued: true });
  doc.font('Helvetica-Bold').fontSize(8.5).fillColor(primaryColor).text('Jan 2024 - Jul 2024', { align: 'right' });
  doc.font('Helvetica-Oblique').fontSize(8.5).fillColor(mutedColor).text('Xendworks | Chennai, India');
  doc.moveDown(0.15);

  doc.font('Helvetica').fontSize(8.2).fillColor(bodyColor).text(
    '•  Built secure RESTful APIs with OAuth 2.0 and Role-Based Access Control (RBAC) for sensitive enterprise data modules; shipped a Flutter app to 1,000+ active users with 20% engagement growth.',
    { indent: 8, lineGap: 1 }
  );

  // TECHNICAL SKILLS
  addSection('Technical Skills');
  const skillsData = [
    { title: 'Languages: ', detail: 'Python, Go (Golang), Java, SQL, JavaScript' },
    { title: 'Backend & Systems: ', detail: 'Microservices, FastAPI, Kafka, RabbitMQ, asyncio, SQLAlchemy, Pydantic, OAuth 2.0, System Design' },
    { title: 'Cloud/DevOps: ', detail: 'Docker, Kubernetes, Azure, AKS, Git, Linux, CI/CD, Jenkins' },
    { title: 'AI / ML: ', detail: 'LangChain, LangGraph, AutoGen, MCP, Agentic AI, RAG, Azure OpenAI, Voice AI, vLLM, LoRA/PEFT' },
    { title: 'Databases & Governance: ', detail: 'PostgreSQL, MongoDB, Redis, Qdrant, ChromaDB, Neo4j, OPA, Presidio' }
  ];
  skillsData.forEach(s => {
    doc.font('Helvetica-Bold').fontSize(8.2).fillColor(primaryColor).text(s.title, { continued: true });
    doc.font('Helvetica').fontSize(8.2).fillColor(bodyColor).text(s.detail, { lineGap: 1 });
  });

  // PROJECTS
  addSection('Projects');

  // Aegis
  doc.font('Helvetica-Bold').fontSize(8.8).fillColor(primaryColor).text('Aegis | Centralized Gateway & Governance Platform');
  doc.font('Helvetica').fontSize(8.1).fillColor(bodyColor).text(
    '•  Built a high-performance multi-tenant LLM gateway in Go and FastAPI for request routing, rate limiting, and cost governance; integrated Prometheus metrics and Splunk dashboards; cut API costs by 30% with a hybrid semantic + exact-match cache (RedisVL); enforced PII masking (Presidio) and token budgets (OPA); deployed on Kubernetes with Qdrant, PostgreSQL, and a Neo4j knowledge-graph layer.',
    { indent: 8, lineGap: 1 }
  );

  doc.moveDown(0.2);

  // FlowState
  doc.font('Helvetica-Bold').fontSize(8.8).fillColor(primaryColor).text('FlowState | Autonomous Multi-Agent Orchestration');
  doc.font('Helvetica').fontSize(8.1).fillColor(bodyColor).text(
    '•  Designed a DAG-based workflow engine with parallel agent execution plus retry and rollback; built custom Human-in-the-Loop (HITL) modules ensuring 100% compliance with healthcare safety standards while automating 80% of manual verification.',
    { indent: 8, lineGap: 1 }
  );
  doc.font('Helvetica-Bold').fontSize(8.1).fillColor(primaryColor).text('    Tech Stack: ', { continued: true });
  doc.font('Helvetica').fontSize(8.1).fillColor(bodyColor).text('LangGraph, LangChain, FastAPI, Multi-Agent Systems, Python, Vue.js, FastMCP (MCP).', { lineGap: 1 });

  doc.moveDown(0.2);

  // NeverHold
  doc.font('Helvetica-Bold').fontSize(8.8).fillColor(primaryColor).text('NeverHold | Voice AI Platform');
  doc.font('Helvetica').fontSize(8.1).fillColor(bodyColor).text(
    '•  Real-time voice AI platform for asynchronous customer interaction, handling conversation state, interruptions, and context across sessions.',
    { indent: 8, continued: true }
  );
  doc.font('Helvetica-Bold').fontSize(8.1).fillColor(primaryColor).text(' Tech Stack: ', { continued: true });
  doc.font('Helvetica').fontSize(8.1).fillColor(bodyColor).text('AsyncIO, LangGraph, Redis, Real-Time Audio Streaming, STT/TTS.', { lineGap: 1 });

  // CERTIFICATIONS
  addSection('Certifications');
  doc.font('Helvetica-Bold').fontSize(8.5).fillColor(primaryColor).text('Microsoft Certified: Azure AI Engineer Associate | Microsoft', leftMargin, doc.y, { continued: true });
  doc.font('Helvetica-Bold').fontSize(8.5).fillColor(primaryColor).text('2025', { align: 'right' });

  // EDUCATION
  addSection('Education');
  doc.font('Helvetica-Bold').fontSize(8.5).fillColor(primaryColor).text('KCG College of Technology | Chennai', leftMargin, doc.y, { continued: true });
  doc.font('Helvetica-Bold').fontSize(8.5).fillColor(primaryColor).text('2021 - 2025', { align: 'right' });
  doc.font('Helvetica').fontSize(8.2).fillColor(bodyColor).text('B.Tech in Information Technology | CGPA: 8.05');

  doc.end();

  return new Promise((resolve, reject) => {
    writeStream.on('finish', resolve);
    writeStream.on('error', reject);
  });
}

async function run() {
  await generateResume('public/Tarunes_K_Dossier.pdf');
  await generateResume('public/Tarunes_K_Resume.pdf');
  await generateResume('public/Tarunes_K_CV.pdf');
  console.log('Generated updated PDF for Dossier, Resume, and CV!');
}

run().catch(console.error);
