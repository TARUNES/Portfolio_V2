// Content data derived from the updated resume and professional background

export const hero = {
    greeting: "Hello, I'm",
    name: "Tarunes K",
    title: "AI Agent Software Developer",
    subtitle: "Specializing in Backend & Agentic AI Systems. 2+ years shipping production AI systems, LLM gateways, and multi-agent architectures on Azure & Kubernetes.",
    cta: "View Projects",
};

export const projects = [
    {
        id: 1,
        title: "Aegis",
        category: "LLM Gateway & Governance Platform",
        image: "/aegis-dashboard.png",
        description: "Multi-tenant LLM gateway handling request routing, cost governance, and enterprise safety at scale. Cut API costs by 30% with hybrid semantic caching (RedisVL), enforced PII masking (Presidio) and token budgets (OPA), with a Knowledge-Augmented Generation (KAG) layer on Neo4j.",
        tags: ["FastAPI", "Kubernetes", "RedisVL", "Qdrant", "Presidio", "OPA", "LangChain", "Neo4j"],
        link: "https://github.com/TARUNES/aegis-llm-gateway"
    },
    {
        id: 2,
        title: "NeverHold",
        category: "Real-Time Voice AI Platform",
        image: "/flowstate-dashboard.png",
        description: "Real-time voice AI platform for asynchronous customer interaction with low-latency conversation-state, interruption, and context handling across sessions.",
        tags: ["AsyncIO", "LangGraph", "Redis", "Real-Time Audio", "WebSockets", "STT/TTS"],
        link: "https://github.com/TARUNES"
    },
    {
        id: 3,
        title: "FlowState",
        category: "Multi-Agent Orchestration",
        image: "/flowstate-2dashboard.png",
        description: "Designed DAG-based workflow engine for parallel agent execution. Features Human-in-the-Loop oversight ensuring compliance with enterprise workflows and standards.",
        tags: ["LangGraph", "LangChain", "FastAPI", "Python", "AutoGen"],
        link: "https://github.com/TARUNES/flow-state-ai-langgraph"
    }
];

export const experience = [
    {
        id: 1,
        role: "AI Agent Software Developer",
        company: "Ericsson",
        period: "May 2026 – Present",
        description: "Designed and shipped a release-note automation system from scratch, adopted team-wide across the organization. Built a Low-Level Design (LLD) generator auto-deriving documentation from Java codebases. Deliver AI Agent and Java backend engineering for internal platforms, conducted GenAI enablement sessions for 45+ senior engineers, and built a Voice AI SDLC assistant.",
        keyProjects: ["Release-Note Automation System", "Java LLD Generator", "Voice AI SDLC Assistant"]
    },
    {
        id: 2,
        role: "Software Engineer",
        company: "Anunta Technology",
        period: "Jul 2024 – Apr 2026",
        description: "Owned the full lifecycle of 2 production AI systems as sole AI engineer from problem scoping through architecture design to Azure Kubernetes deployment. Built Incident Resolver (FastAPI, AutoGen, RAG, Qdrant, Azure OpenAI) cutting manual engineering triage by 40%. Engineered DesktopReady multi-tenant microservices and built DeskMate local-inference assistant on vLLM.",
        keyProjects: ["Incident Resolver (AIOps)", "DesktopReady (DaaS Microservices)", "DeskMate (vLLM Agent)"]
    },
    {
        id: 3,
        role: "Software Engineer Intern",
        company: "Xendworks",
        period: "Jan 2024 – Jul 2024",
        description: "Built secure REST APIs (OAuth 2.0, RBAC) and a Flutter mobile application from scratch with direct stakeholder involvement across the full requirements-to-delivery cycle. Shipped a production app scaled to 1,000+ active users, driving 20% engagement growth.",
        keyProjects: ["Secure REST APIs & Auth", "Flutter Mobile App (1,000+ Users)"]
    }
];

export const education = [
    {
        id: 1,
        degree: "B.Tech, Information Technology",
        school: "KCG College of Technology, Chennai",
        period: "2021 – 2025",
        description: "CGPA: 8.05 / 10",
        keyProjects: ["Incident Resolver", "Aegis LLM Gateway"]
    }
];

export const certifications = [
    {
        id: 1,
        title: "Microsoft Certified: Azure AI Engineer Associate",
        issuer: "Microsoft",
        year: "2025",
        link: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
        description: "Certified in designing and implementing AI solutions using Azure AI, Azure OpenAI, cognitive search, and semantic knowledge pipelines."
    },
    {
        id: 2,
        title: "HACKATOGE Winner",
        issuer: "Hackathon",
        year: "2024",
        link: "#",
        description: "Created an innovative fitness app showcasing technical skill and rapid product delivery."
    },
    {
        id: 3,
        title: "Skillathon Winner",
        issuer: "Skillathon",
        year: "2023",
        link: "#",
        description: "Built a clinical assistance app driving innovation in healthcare and clinical workflows."
    }
];

export const skills = [
    "LangGraph", "LangChain", "AutoGen", "MCP", "Multi-Agent Orchestration",
    "RAG", "Voice AI", "vLLM", "Prompt Engineering", "Python",
    "Java", "FastAPI", "Microsoft Azure", "Kubernetes", "Docker",
    "PostgreSQL", "Redis", "Qdrant", "Neo4j", "OPA",
    "Presidio", "RedisVL", "REST API Design", "OAuth 2.0", "RabbitMQ", "Microservices"
];

export const contact = {
    email: "tarunes12@gmail.com",
    phone: "+91 9342595981",
    socials: [
        {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/tarunes-k-3b3495273/",
        },
        {
            name: "GitHub",
            link: "https://github.com/TARUNES",
        },
    ],
};

export const archive = [
    { year: "2026", title: "aegis-llm-gateway", tech: ["Python", "FastAPI", "Neo4j", "RedisVL"], link: "https://github.com/TARUNES/aegis-llm-gateway" },
    { year: "2025", title: "flow-state-ai-langgraph", tech: ["Python", "LangGraph", "FastAPI"], link: "https://github.com/TARUNES/flow-state-ai-langgraph" },
    { year: "2025", title: "plug-play-chatbot-ai", tech: ["Python", "LangChain"], link: "https://github.com/TARUNES/plug-play-chatbot-ai" },
    { year: "2025", title: "interior-panel-layout", tech: ["JavaScript"], link: "https://github.com/TARUNES/interior-panel-layout" },
    { year: "2025", title: "Health_Sync", tech: ["Dart", "Flutter"], link: "https://github.com/TARUNES/Health_Sync" },
    { year: "2025", title: "health_sync_doctor_app", tech: ["Dart", "Flutter"], link: "https://github.com/TARUNES/health_sync_doctor_app" },
    { year: "2025", title: "clipboard-sync", tech: ["Go"], link: "https://github.com/TARUNES/clipboard-sync" },
    { year: "2024", title: "crud-springboot", tech: ["Java", "Spring Boot"], link: "https://github.com/TARUNES/crud-springboot" },
    { year: "2024", title: "portfolio", tech: ["Dart"], link: "https://github.com/TARUNES/portfolio" },
    { year: "2024", title: "soul_reflection_backend", tech: ["Go"], link: "https://github.com/TARUNES/soul_reflection_backend" },
    { year: "2024", title: "go_backend_mongo_crud_rest", tech: ["Go", "MongoDB"], link: "https://github.com/TARUNES/go_backend_mongo_crud_rest" },
    { year: "2024", title: "app_fusion", tech: ["Dart"], link: "https://github.com/TARUNES/app_fusion" },
    { year: "2023", title: "Cafe_Online_Ecommerce", tech: ["Dart"], link: "https://github.com/TARUNES/Cafe_Online_Ecommerce" },
    { year: "2023", title: "weather_app_flutter_BLoc", tech: ["C++", "Flutter"], link: "https://github.com/TARUNES/weather_app_flutter_BLoc" },
    { year: "2023", title: "social_media_flutter", tech: ["Dart"], link: "https://github.com/TARUNES/social_media_flutter" },
    { year: "2023", title: "notes-Flutter", tech: ["C++"], link: "https://github.com/TARUNES/notes-Flutter" },
    { year: "2023", title: "cyberotaku", tech: ["JavaScript"], link: "https://github.com/TARUNES/cyberotaku" },
    { year: "2023", title: "Potato-disease", tech: ["Jupyter Notebook", "Python"], link: "https://github.com/TARUNES/Potato-disease" },
    { year: "2023", title: "thrifty-app", tech: ["JavaScript"], link: "https://github.com/TARUNES/thrifty-app" },
    { year: "2023", title: "Foodza", tech: ["JavaScript"], link: "https://github.com/TARUNES/Foodza" },
    { year: "2023", title: "study", tech: [], link: "https://github.com/TARUNES/study" },
    { year: "2023", title: "EtherJSTUTORIAL", tech: ["JavaScript"], link: "https://github.com/TARUNES/EtherJSTUTORIAL" },
    { year: "2023", title: "Graphical-Authuntication", tech: ["TypeScript"], link: "https://github.com/TARUNES/Graphical-Authuntication" },
    { year: "2023", title: "Croft", tech: ["JavaScript"], link: "https://github.com/TARUNES/Croft" },
    { year: "2023", title: "reduxtutorial", tech: ["Java"], link: "https://github.com/TARUNES/reduxtutorial" },
    { year: "2022", title: "Super-market-billing", tech: ["C++"], link: "https://github.com/TARUNES/Super-market-billing" },
    { year: "2022", title: "TIC-TAC-TOE", tech: ["Python"], link: "https://github.com/TARUNES/TIC-TAC-TOE" },
];
