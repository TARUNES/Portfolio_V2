// Content data aligned with the latest resume of Tarunes K

export const hero = {
    greeting: "Hello, I'm",
    name: "Tarunes K",
    title: "Software Engineer",
    subtitle: "2+ years of experience building production-grade backend systems, observability platforms, and event-driven microservices on Azure and Kubernetes. Shipping agentic AI & Java backend platforms at Ericsson; previously built production AI systems at Anunta.",
    cta: "View Projects",
};

export const projects = [
    {
        id: 1,
        title: "Aegis",
        category: "Centralized Gateway & Governance Platform",
        image: "/aegis-dashboard.png",
        description: "High-performance multi-tenant LLM gateway in Go and FastAPI for request routing, rate limiting, and cost governance. Integrated Prometheus metrics and Splunk dashboards; cut API costs by 30% with a hybrid semantic + exact-match cache (RedisVL); enforced PII masking (Presidio) and token budgets (OPA); deployed on Kubernetes with Qdrant, PostgreSQL, and a Neo4j knowledge-graph layer.",
        tags: ["Go", "FastAPI", "Kubernetes", "RedisVL", "Qdrant", "Presidio", "OPA", "Neo4j"],
        link: "https://github.com/TARUNES/aegis-llm-gateway"
    },
    {
        id: 2,
        title: "FlowState",
        category: "Autonomous Multi-Agent Orchestration",
        image: "/flowstate-dashboard.png",
        description: "DAG-based workflow engine with parallel agent execution plus retry and rollback. Features custom Human-in-the-Loop (HITL) modules ensuring 100% compliance with healthcare safety standards while automating 80% of manual verification.",
        tags: ["LangGraph", "LangChain", "FastAPI", "Multi-Agent Systems", "Python", "FastMCP"],
        link: "https://github.com/TARUNES/flow-state-ai-langgraph"
    },
    {
        id: 3,
        title: "NeverHold",
        category: "Voice AI Platform",
        image: "/flowstate-2dashboard.png",
        description: "Real-time voice AI platform for asynchronous customer interaction, handling conversation state, interruptions, and context across sessions.",
        tags: ["AsyncIO", "LangGraph", "Redis", "Real-Time Audio", "STT/TTS"],
        link: "https://github.com/TARUNES"
    }
];

export const experience = [
    {
        id: 1,
        role: "AI Agent Software Developer",
        company: "Ericsson | Chennai, India",
        period: "May 2026 - Present",
        description: "Designed and shipped a release-note automation system from scratch, now adopted team-wide, eliminating manual release documentation effort; built a LLD generator that auto-derives design documentation from Java codebases. Deliver AI Agent and Java backend engineering for internal telecom platforms, partnering with cross-functional teams to embed agentic AI into existing software workflows. Conducted GenAI and Agentic AI enablement sessions for 45+ senior engineers; self-initiated a Voice AI assistant integrated into SDLC workflows as an end-to-end agentic design proof-of-concept.",
        keyProjects: ["Release-Note Automation System", "Java LLD Generator", "Voice AI SDLC Assistant"]
    },
    {
        id: 2,
        role: "Software Engineer",
        company: "Anunta Technology | Chennai, India",
        period: "Jul 2024 - Apr 2026",
        description: "DesktopReady (DaaS): Engineered multi-tenant backend microservices for an Azure-based Desktop-as-a-Service platform - automating VM lifecycle, user provisioning, and Active Directory sync using Go, FastAPI, and Pydantic across 500+ virtual desktop sessions. Built DeskMate, a local-inference agentic desktop assistant on vLLM. Event-Driven Architecture & Log Pipeline: Architected asynchronous messaging with Kafka and RabbitMQ, reducing inter-service latency by 25%; designed a high-throughput log ingestion pipeline. Incident Resolver (AIOps Platform): A production AIOps platform (FastAPI, AutoGen, RAG, Qdrant, Azure OpenAI) that autonomously triages incidents and executes resolution workflows, reducing manual engineering intervention by 40%.",
        keyProjects: ["DesktopReady (DaaS Microservices)", "Kafka & RabbitMQ Messaging Pipeline", "Incident Resolver (AIOps)"]
    },
    {
        id: 3,
        role: "Software Engineer Intern",
        company: "Xendworks | Chennai, India",
        period: "Jan 2024 - Jul 2024",
        description: "Built secure RESTful APIs with OAuth 2.0 and Role-Based Access Control (RBAC) for sensitive enterprise data modules; shipped a Flutter app to 1,000+ active users with 20% engagement growth.",
        keyProjects: ["RESTful APIs & RBAC", "Flutter Production App"]
    }
];

export const education = [
    {
        id: 1,
        degree: "B.Tech in Information Technology",
        school: "KCG College of Technology | Chennai",
        period: "2021 - 2025",
        description: "CGPA: 8.05 / 10",
        keyProjects: ["Incident Resolver", "Aegis Gateway"]
    }
];

export const certifications = [
    {
        id: 1,
        title: "Microsoft Certified: Azure AI Engineer Associate",
        issuer: "Microsoft",
        year: "2025",
        link: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
        description: "Certified in building, training, and deploying cognitive models and agentic AI systems on Microsoft Azure."
    }
];

export const skills = [
    // Languages
    "Python", "Go", "Java", "SQL", "JavaScript",
    // Backend & Systems
    "FastAPI", "Microservices", "Kafka", "RabbitMQ", "OAuth 2.0",
    // Cloud / DevOps
    "Microsoft Azure", "Kubernetes", "Docker", "CI/CD", "Linux",
    // AI / ML
    "LangGraph", "LangChain", "AutoGen", "MCP", "RAG", "Voice AI", "vLLM",
    // Databases & Governance
    "PostgreSQL", "Redis", "Qdrant", "Neo4j", "OPA", "Presidio", "RedisVL"
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
    { year: "2026", title: "aegis-llm-gateway", tech: ["Go", "FastAPI", "Neo4j", "RedisVL"], link: "https://github.com/TARUNES/aegis-llm-gateway" },
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
