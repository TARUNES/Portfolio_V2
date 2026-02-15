
// Import icons mapping (we will do this in the component, keeping data pure strings is easier for now)

export const hero = {
    greeting: "Hello, I'm",
    name: "Tarunes K",
    title: "Software Engineer",
    subtitle: "2+ Years Experience building backend services and production AI systems on Azure and Kubernetes.",
    cta: "View Projects",
};

export const projects = [
    {
        id: 1,
        title: "Aegis",
        category: "AI Governance Platform",
        image: "/aegis-dashboard.png",
        description: "Architected centralized AI gateway for security, routing, and cost management. Implemented PII masking, OPA policy enforcement, and hybrid semantic caching.",
        tags: ["FastAPI", "Docker", "RedisVL", "Neo4j", "LangChain", "OPA"],
        link: "https://github.com/TARUNES/Aegis"
    },
    {
        id: 2,
        title: "FlowState",
        category: "Multi-Agent Orchestration",
        image: "/flowstate-dashboard.png",
        description: "Designed DAG-based workflow engine for parallel agent execution. Features Human-in-the-Loop oversight ensuring 100% compliance with healthcare standards.",
        tags: ["LangGraph", "LangChain", "FastAPI", "Python", "Vue.js"],
        link: "https://github.com/TARUNES/FlowState"
    }
];

export const experience = [
    {
        id: 1,
        role: "Junior Software Engineer",
        company: "Anunta Technology",
        period: "Jul 2024 - Present",
        description: "Worked on feature development and enhancements across microservices in an event-driven architecture, improving performance and scalability with RabbitMQ-based async communication. Contributed to an AI-driven Incident Resolver using Autogen and FastAPI, and enhanced DesktopReady (DaaS) with Azure VM, Active Directory, VMware automation, and Docker–Kubernetes deployments.",
        keyProjects: ["DesktopReady (DaaS Infrastructure)", "Incident Resolver (AI Ops)"]
    },
    {
        id: 2,
        role: "Software Engineer Intern",
        company: "Xendworks",
        period: "Jan 2024 - Jul 2024",
        description: "Developed and released the company's mobile app on both Android and iOS using Flutter, driving user adoption across 1K+ installs. Collaborated with cross-functional teams for seamless API integration and continuous deployment, ensuring 100% production stability.",
        keyProjects: ["XendCampus (Mobile App)"]
    }
];

export const education = [
    {
        id: 1,
        degree: "B.Tech in Information Technology",
        school: "KCG College of Technology, Chennai",
        period: "2021 - 2025",
        description: "",
        keyProjects: ["Health Sync", "Cyber Otaku"]
    }
];

export const certifications = [
    {
        id: 1,
        title: "Azure AI Engineer Associate",
        issuer: "Microsoft",
        year: "2025",
        link: "#",
        // logo removed as requested
    },
    {
        id: 2,
        title: "HACKATOGE 2024", // Assuming typo HACKTOGE -> HACKTOBER? Or just keep HACKTOGE. User wrote HACKTOGE. I will stick to what user wrote but capital "HACKTOGE".
        issuer: "Winner",
        year: "2024",
        link: "#",
        description: "Created an innovative fitness app showcasing technical skill."
    },
    {
        id: 3,
        title: "Skillathon 2023",
        issuer: "Winner",
        year: "2023",
        link: "#",
        description: "Built a clinical assistance app driving innovation in healthcare solutions."
    }
];

export const skills = [
    "Python", "FastAPI", "LangChain", "LangGraph", "Azure", "Docker", "Kubernetes",
    "PostgreSQL", "React", "JavaScript", "Go", "RabbitMQ", "Elasticsearch",
    "AutoGen", "RAG", "Fine-tuning", "Prompt Engineering", "SQL", "Git",
    "Microservices", "CI/CD"
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
    { year: "2026", title: "aegis-llm-gateway", tech: ["Python"], link: "https://github.com/TARUNES/aegis-llm-gateway" },
    { year: "2025", title: "flow-state-ai-langgraph", tech: ["Python"], link: "https://github.com/TARUNES/flow-state-ai-langgraph" },
    { year: "2025", title: "plug-play-chatbot-ai", tech: [], link: "https://github.com/TARUNES/plug-play-chatbot-ai" },
    { year: "2025", title: "interior-panel-layout", tech: ["JavaScript"], link: "https://github.com/TARUNES/interior-panel-layout" },
    { year: "2025", title: "Health_Sync", tech: ["Dart"], link: "https://github.com/TARUNES/Health_Sync" },
    { year: "2025", title: "health_sync_doctor_app", tech: ["Dart"], link: "https://github.com/TARUNES/health_sync_doctor_app" },
    { year: "2025", title: "clipboard-sync", tech: ["Go"], link: "https://github.com/TARUNES/clipboard-sync" },
    { year: "2024", title: "crud-springboot", tech: ["Java"], link: "https://github.com/TARUNES/crud-springboot" },
    { year: "2024", title: "portfolio", tech: ["Dart"], link: "https://github.com/TARUNES/portfolio" },
    { year: "2024", title: "soul_reflection_backend", tech: ["Go"], link: "https://github.com/TARUNES/soul_reflection_backend" },
    { year: "2024", title: "go_backend_mongo_crud_rest", tech: ["Go"], link: "https://github.com/TARUNES/go_backend_mongo_crud_rest" },
    { year: "2024", title: "app_fusion", tech: ["Dart"], link: "https://github.com/TARUNES/app_fusion" },
    { year: "2023", title: "Cafe_Online_Ecommerce", tech: ["Dart"], link: "https://github.com/TARUNES/Cafe_Online_Ecommerce" },
    { year: "2023", title: "weather_app_flutter_BLoc", tech: ["C++"], link: "https://github.com/TARUNES/weather_app_flutter_BLoc" },
    { year: "2023", title: "social_media_flutter", tech: ["Dart"], link: "https://github.com/TARUNES/social_media_flutter" },
    { year: "2023", title: "notes-Flutter", tech: ["C++"], link: "https://github.com/TARUNES/notes-Flutter" },
    { year: "2023", title: "cyberotaku", tech: ["JavaScript"], link: "https://github.com/TARUNES/cyberotaku" },
    { year: "2023", title: "Potato-disease", tech: ["Jupyter Notebook"], link: "https://github.com/TARUNES/Potato-disease" },
    { year: "2023", title: "thrifty-app", tech: ["JavaScript"], link: "https://github.com/TARUNES/thrifty-app" },
    { year: "2023", title: "Foodza", tech: ["JavaScript"], link: "https://github.com/TARUNES/Foodza" },
    { year: "2023", title: "study", tech: [], link: "https://github.com/TARUNES/study" },
    { year: "2023", title: "EtherJSTUTORIAL", tech: [], link: "https://github.com/TARUNES/EtherJSTUTORIAL" },
    { year: "2023", title: "Graphical-Authuntication", tech: ["TypeScript"], link: "https://github.com/TARUNES/Graphical-Authuntication" },
    { year: "2023", title: "Croft", tech: ["JavaScript"], link: "https://github.com/TARUNES/Croft" },
    { year: "2023", title: "GrapicalAuthentication", tech: [], link: "https://github.com/TARUNES/GrapicalAuthentication" },
    { year: "2023", title: "reduxtutorial", tech: ["Java"], link: "https://github.com/TARUNES/reduxtutorial" },
    { year: "2023", title: "Mackerz", tech: [], link: "https://github.com/TARUNES/Mackerz" },
    { year: "2022", title: "Super-market-billing", tech: [], link: "https://github.com/TARUNES/Super-market-billing" },
    { year: "2022", title: "TIC-TAC-TOE", tech: [], link: "https://github.com/TARUNES/TIC-TAC-TOE" },
];
