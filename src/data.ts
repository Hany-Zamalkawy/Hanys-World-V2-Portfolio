import {
  Skill,
  Experience,
  Education,
  Certification,
  Project,
  Profile,
  Service,
  TelemetryMetric,
  PipelineNode,
  SpecializationPillar
} from "./types";

export const initialProfile: Profile = {
  name: "Moustafa Hany Azab",
  alias: "Hany Zamlkawy",
  role: "Software & Data Engineering",
  mission: "Architecting resilient distributed software systems, high-throughput ETL data pipelines, and intelligent AI automation workflows from zero to production.",
  phone: "01228494191",
  email: "moustfahhany5@gmail.com",
  location: "Alexandria, Egypt",
  portfolioUrl: "https://hany-s-world-597716960036.europe-west2.run.app/",
  githubUrl: "https://github.com/Hany-Zamalkawy",
  linkedinUrl: "https://www.linkedin.com/in/moustafa-hany-azab-4550692b9/?skipRedirect=true",
  focus: [
    "Front-End Development & React.js",
    "Full-Stack Architecture",
    "Data Engineering Workflows (DEPI)",
    "AI & LLM Workflows (FlyRank AI)"
  ],
  bio: "I am Moustafa Hany Azab (known professionally as Hany Zamlkawy), an ambitious Business Information Systems student with a definitive focus on Software and Data Engineering. Driven by technical curiosity and a commitment to scalable architecture, I specialize in building solutions where business operations and robust technical development meet. My technical competencies span Modern Web Technologies, Full-Stack Architecture, and Data Engineering workflows. Having successfully navigated hands-on programs with industry leaders like IBM, ITIDA, and eYouth, I excel at managing data pipelines, deploying automated system scripts, and handling end-to-end client deliverables. I thrive in fast-paced, challenging environments and am actively seeking forward-thinking opportunities where I can collaborate with dynamic teams to design, implement, and optimize innovative software solutions.",
  heroBio: "Architecting resilient distributed software systems, high-throughput ETL data pipelines, and intelligent AI automation workflows from zero to production."
};

export const telemetryMetrics: TelemetryMetric[] = [
  { value: "99.9%", metric: "99.9%", label: "Pipeline SLA", labelEn: "Pipeline SLA", labelAr: "مستوى خدمة خط الأنابيب (SLA)", sublabel: "Zero Data Loss Schema" },
  { value: "<120ms", metric: "<120ms", label: "Endpoint Latency", labelEn: "Endpoint Latency", labelAr: "كمون نقاط النهاية", sublabel: "p99 Ingestion Target" },
  { value: "SOLID", metric: "SOLID", label: "Clean Architecture", labelEn: "Clean Architecture", labelAr: "معمارية برمجية نقية", sublabel: "Strict Modularity" },
  { value: "DEPI · NTI", metric: "DEPI · NTI", label: "Verified Lead", labelEn: "Verified Lead", labelAr: "قائد معتمد من الوزارة", sublabel: "Ministry Tech Tracks" }
];

export const specializationPillars: SpecializationPillar[] = [
  {
    id: "pillar-se",
    pillarNumber: "Pillar I",
    title: "Software Engineering",
    titleEn: "Pillar I: Software Engineering",
    titleAr: "الركيزة الأولى: هندسة البرمجيات",
    subtitle: "Modern Web & Distributed APIs",
    subtitleEn: "Modern Web & Distributed APIs",
    subtitleAr: "الويب الحديث وواجهات البرمجة الموزعة",
    badge: "Production",
    description: "Robust frontend & backend architectures designed around DRY principles, microservices cohesion, strict typing, and high test coverage.",
    descriptionEn: "Robust frontend & backend architectures designed around DRY principles, microservices cohesion, strict typing, and high test coverage.",
    descriptionAr: "معماريات فرونت إند وباك إند قوية ومبنية وفق مبادئ DRY، وتماسك الخدمات المصغرة، والأنماط الصارمة، والتغطية الاختبارية الشاملة.",
    technologies: [
      "React.js / React 19",
      "HTML5",
      "Front-End Development",
      "TypeScript",
      "JavaScript (ESNext)",
      "Next.js App Router",
      "Node.js",
      "FastAPI",
      "Docker Containers",
      "Tailwind CSS",
      "REST / GraphQL",
      "SOLID Architecture"
    ],
    tags: [
      "React.js / React 19",
      "HTML5",
      "Front-End Development",
      "TypeScript",
      "JavaScript (ESNext)",
      "Next.js App Router",
      "Node.js",
      "FastAPI",
      "Docker Containers",
      "Tailwind CSS",
      "REST / GraphQL",
      "SOLID Architecture"
    ],
    iconName: "layers",
    icon: "layers",
    accentColor: "emerald"
  },
  {
    id: "pillar-data-ai",
    pillarNumber: "Pillar II",
    title: "Data & AI Systems",
    titleEn: "Pillar II: Data & AI Systems",
    titleAr: "الركيزة الثانية: أنظمة البيانات والذكاء الاصطناعي",
    subtitle: "Pipelines, Warehousing & LLMs",
    subtitleEn: "Pipelines, Warehousing & LLMs",
    subtitleAr: "خطوط الأنابيب، التخزين السحابي ونماذج LLMs",
    badge: "Scalable",
    description: "High-throughput automated ETL/ELT pipelines, relational storage schemas, vector embeddings, and autonomous agent orchestration.",
    descriptionEn: "High-throughput automated ETL/ELT pipelines, relational storage schemas, vector embeddings, and autonomous agent orchestration.",
    descriptionAr: "خطوط أنابيب معالجة مؤتمتة ETL/ELT فائقة السرعة، ومخططات تخزين علائقية، وتضمينات متجهة، وتنسيق ذاتي للوكلاء البرمجيين.",
    technologies: [
      "Python 3.12",
      "PostgreSQL",
      "DuckDB",
      "Polars Engine",
      "MongoDB",
      "Batch & Streaming ETL",
      "Google Cloud (GCP)",
      "AWS S3 / RDS",
      "n8n Automation",
      "Vector DBs",
      "LangChain Agents"
    ],
    tags: [
      "Python 3.12",
      "PostgreSQL",
      "DuckDB",
      "Polars Engine",
      "MongoDB",
      "Batch & Streaming ETL",
      "Google Cloud (GCP)",
      "AWS S3 / RDS",
      "n8n Automation",
      "Vector DBs",
      "LangChain Agents"
    ],
    iconName: "database",
    icon: "database",
    accentColor: "teal"
  }
];

export const pipelineNodes: PipelineNode[] = [
  {
    id: "node-1",
    step: "01",
    stepNumber: "01",
    stepName: "INGESTION",
    categoryEn: "INGESTION",
    categoryAr: "الاستيعاب والتدفق",
    title: "Data Sources",
    nameEn: "Data Sources",
    nameAr: "مصادر البيانات",
    description: "APIs, Webhooks, Streams & Storage",
    descriptionEn: "APIs, Webhooks, Streams & Storage",
    descriptionAr: "واجهات برمجية، خطافات الويب، التدفقات والتخزين",
    metric: "15k events/sec",
    metricEn: "15k events/sec",
    metricAr: "١٥ ألف حدث/ثانية",
    metricLabel: "Throughput",
    iconName: "input",
    icon: "input",
    details: [
      "REST & Webhook Ingestion",
      "Event Stream Buffering",
      "Cloud S3 Object Storage",
      "Pre-Ingestion Contract Validation"
    ]
  },
  {
    id: "node-2",
    step: "02",
    stepNumber: "02",
    stepName: "COMPUTE",
    categoryEn: "COMPUTE",
    categoryAr: "المعالجة والتحويل",
    title: "ETL & Validation",
    nameEn: "ETL & Validation",
    nameAr: "المعالجة والتأكد من الصحة",
    description: "Schema enforcement & transform",
    descriptionEn: "Schema enforcement & transform",
    descriptionAr: "تطبيق قيود المخططات والتحويلات الرياضية",
    metric: "DuckDB & Polars",
    metricEn: "DuckDB & Polars",
    metricAr: "محركات DuckDB & Polars",
    metricLabel: "Engine",
    iconName: "transform",
    icon: "transform",
    details: [
      "Vectorized Polars Processing",
      "DuckDB Analytical Staging",
      "Deterministic Schema Enforcement",
      "Automated Anomaly Quarantining"
    ]
  },
  {
    id: "node-3",
    step: "03",
    stepNumber: "03",
    stepName: "PERSISTENCE",
    categoryEn: "PERSISTENCE",
    categoryAr: "التخزين والاستدامة",
    title: "Lakehouse Store",
    nameEn: "Lakehouse Store",
    nameAr: "مستودع Lakehouse",
    description: "Postgres + Cloud Lake tier",
    descriptionEn: "Postgres + Cloud Lake tier",
    descriptionAr: "قواعد بيانات Postgres + طبقات بحيرات السحاب",
    metric: "Cold/Hot Tier",
    metricEn: "Cold/Hot Tier",
    metricAr: "طبقات تخزين باردة وساخنة",
    metricLabel: "Storage Strategy",
    iconName: "database",
    icon: "database",
    details: [
      "PostgreSQL ACID Relational Storage",
      "Multi-region Cloud Lake Tiers",
      "Partitioned Time-Series Indices",
      "Automated Snapshot & Recovery"
    ]
  },
  {
    id: "node-4",
    step: "04",
    stepNumber: "04",
    stepName: "SERVICES",
    categoryEn: "SERVICES",
    categoryAr: "الخدمات والواجهات",
    title: "FastAPI Services",
    nameEn: "FastAPI Services",
    nameAr: "خدمات FastAPI المصغرة",
    description: "Auth, caching & telemetry",
    descriptionEn: "Auth, caching & telemetry",
    descriptionAr: "المصادقة، التخزين المؤقت، والقياسات",
    metric: "<40ms Latency",
    metricEn: "<40ms Latency",
    metricAr: "كمون استجابة أقل من ٤٠ms",
    metricLabel: "Target p99",
    iconName: "api",
    icon: "api",
    details: [
      "High-Performance Asynchronous Endpoints",
      "JWT Security & Role-Based Authorization",
      "Distributed Redis Caching Layer",
      "Live Metric Telemetry Hooks"
    ]
  },
  {
    id: "node-5",
    step: "05",
    stepNumber: "05",
    stepName: "CLIENT",
    categoryEn: "CLIENT",
    categoryAr: "واجهة المستخدم للعميل",
    title: "React Dashboard",
    nameEn: "React Dashboard",
    nameAr: "لوحة تحكم React",
    description: "Real-time state & visualization",
    descriptionEn: "Real-time state & visualization",
    descriptionAr: "إدارة الحالة في الوقت الفعلي والتصور البياني",
    metric: "60 FPS Responsive",
    metricEn: "60 FPS Responsive",
    metricAr: "استجابة كاملة بمعدل 60 FPS",
    metricLabel: "Render Target",
    iconName: "devices",
    icon: "devices",
    details: [
      "Zero-Latency State Updates",
      "WebSockets & Server-Sent Events",
      "Dynamic Analytical Charts",
      "Strict Fluid Responsive Layouts"
    ]
  }
];

export const skillsData: Skill[] = [
  // Languages
  { name: "JavaScript", category: "Languages" },
  { name: "TypeScript", category: "Languages" },
  { name: "Python", category: "Languages" },
  { name: "HTML5", category: "Languages" },
  { name: "CSS3", category: "Languages" },
  { name: "Arabic (Native)", category: "Languages" },
  { name: "English (Fluent)", category: "Languages" },

  // Front-End
  { name: "React 19", category: "Front-End" },
  { name: "Vite", category: "Front-End" },
  { name: "Tailwind CSS", category: "Front-End" },
  { name: "Responsive Design", category: "Front-End" },
  { name: "Bilingual RTL/LTR Interfaces", category: "Front-End" },

  // Back-End
  { name: "Node.js", category: "Back-End" },
  { name: "Express.js", category: "Back-End" },
  { name: "Flask", category: "Back-End" },
  { name: "REST APIs", category: "Back-End" },
  { name: "Software Architecture", category: "Back-End" },

  // Data Engineering
  { name: "Data Pipelines", category: "Data Engineering" },
  { name: "ETL / ELT", category: "Data Engineering" },
  { name: "Data Analysis", category: "Data Engineering" },
  { name: "Data Visualization", category: "Data Engineering" },
  { name: "SQL & PostgreSQL", category: "Data Engineering" },
  { name: "Database Fundamentals", category: "Data Engineering" },

  // Cloud & AI
  { name: "Google Cloud Run", category: "Cloud & AI" },
  { name: "Google Vertex AI", category: "Cloud & AI" },
  { name: "AWS Bedrock", category: "Cloud & AI" },
  { name: "Anthropic Claude API", category: "Cloud & AI" },
  { name: "Prompt Engineering", category: "Cloud & AI" },
  { name: "Model Context Protocol (MCP)", category: "Cloud & AI" },
  { name: "Large Language Models (LLMs)", category: "Cloud & AI" },

  // Tools
  { name: "Git", category: "Tools" },
  { name: "GitHub", category: "Tools" },
  { name: "GitHub Copilot", category: "Tools" },
  { name: "Docker", category: "Tools" },
  { name: "VS Code & Cursor", category: "Tools" }
];

export const experiencesData: Experience[] = [
  {
    id: "exp-flyrank-frontend",
    period: "Oct 2026 — Present (2 mos)",
    role: "Front-end AI Engineering",
    company: "FlyRank AI · Chicago, Illinois, United States (Remote)",
    bullets: [
      "Architecting high-performance, pixel-perfect user interfaces engineered specifically for complex LLM workflows and AI-driven applications.",
      "Integrating asynchronous backend AI APIs and streaming endpoints to dynamically render real-time model outputs into scalable UI components.",
      "Optimizing frontend state management and client-side rendering latency to ensure seamless, responsive user experiences across interactive AI tools.",
      "Applying a Full-Stack engineering mindset to align robust backend AI infrastructure with intuitive, user-centric interface design."
    ],
    skillsUsed: ["React.js", "TypeScript", "Tailwind CSS", "Streaming APIs", "LLM Workflows"]
  },
  {
    id: "exp-depi",
    period: "Jul 2026 — Present (5 mos)",
    role: "Data Engineer",
    company: "Digital Egypt Pioneers Initiative (DEPI), Batch R5 · Alexandria, Egypt",
    bullets: [
      "Undergoing an intensive specialization in Data Engineering (Batch R5) to bridge the gap between business operations and technical architecture.",
      "Focusing on building high-performance data systems, ETL/ELT ingestion workflows, and scalable analytical infrastructure."
    ],
    skillsUsed: ["Python", "SQL & PostgreSQL", "Data Pipelines", "ETL / ELT", "Data Modeling"]
  },
  {
    id: "exp-flyrank-backend",
    period: "Jun 2026 — Oct 2026 (5 mos)",
    role: "Backend AI Engineering",
    company: "FlyRank AI · Chicago, Illinois, United States (Remote)",
    bullets: [
      "Engineered backend AI systems powering organic growth and generative engine optimization (GEO), automating brand visibility across traditional and next-generation AI search engines.",
      "Tackled fast-moving search intelligence challenges in collaboration with engineering teams to build scalable AI-driven optimization pipelines."
    ],
    skillsUsed: ["Python", "Flask", "GEO / Search Intelligence", "AI Pipelines", "REST APIs"]
  },
  {
    id: "exp-nti",
    period: "Aug 2026 — Sep 2026 (2 mos)",
    role: "Python Developer",
    company: "National Telecommunication Institute (NTI) · NTI & ITIDA Summer Training Program",
    bullets: [
      "Built Python-based backend solutions and optimized application performance during the prestigious NTI & ITIDA Summer Training Program.",
      "Applied modern software architecture principles to real-world projects, complementing Full-Stack and Data Engineering workflows."
    ],
    skillsUsed: ["Python", "Software Architecture", "Performance Optimization", "Git"]
  },
  {
    id: "exp-kanz-hackathon",
    period: "Jul 2026",
    role: "Participant – Kanz AI Training Hackathon",
    company: "Kanz AI",
    bullets: [
      "Engineered AI prototypes with ML frameworks and generative AI, designing backend logic and scalable architecture."
    ],
    skillsUsed: ["Generative AI", "ML Frameworks", "Backend Logic", "Architecture"]
  },
  {
    id: "exp-pathline",
    period: "Feb 2026 — Jul 2026 (6 mos)",
    role: "Web Development Intern",
    company: "PathLine Training Academy · Cairo, Egypt",
    bullets: [
      "Selected for the PathLine Training Program to build real-world frontend projects, expand portfolio engineering systems, and apply HTML5/CSS3 responsive design standards."
    ],
    skillsUsed: ["HTML5", "CSS3", "JavaScript", "Responsive Design"]
  },
  {
    id: "exp-itida",
    period: "Mar 2026 — Jun 2026 (4 mos)",
    role: "itida+gigs Freelance",
    company: "ITIDA Gigs · Giza, Al Jizah, Egypt",
    bullets: [
      "Successfully completed the ITIDA Gigs Freelance Qualification Program, bridging BIS academic foundations with real-world freelance web development deliverables and client management."
    ],
    skillsUsed: ["React.js", "JavaScript", "Client Deliverables", "Web Development"]
  },
  {
    id: "exp-icareer",
    period: "Nov 2025 — Dec 2025 (2 mos)",
    role: "Tech for Non-Techies Training (Digital Tools, Automation & AI)",
    company: "iCareer · Alexandria, Egypt",
    bullets: [
      "Mastered Digital Tools, Workflow Automation, and AI integration to streamline operations, eliminate repetitive tasks, and strengthen backend system thinking."
    ],
    skillsUsed: ["Automation", "AI Tools", "Digital Workflows"]
  }
];

export const educationData: Education[] = [
  {
    id: "edu-bis",
    degree: "Bachelor of Business Information Systems, Business Administration and Management, General",
    school: "Aboukir High Institutes · Alexandria, Egypt",
    period: "Sep 2025 — May 2029"
  },
  {
    id: "edu-tokyo",
    degree: "Non-degree course (GCI World): Global Creative Leaders (GCI) – Data Science & AI Program",
    school: "The University of Tokyo",
    period: "Sep 2026"
  },
  {
    id: "edu-vc",
    degree: "Higher National Diploma",
    school: "Victoria College, Alexandria City · Alexandria, Egypt",
    period: "Sep 2010 — Aug 2025"
  }
];

export const accreditedCertificationsData: Certification[] = [
  {
    id: "cert-mcp-intro",
    name: "Introduction to Model Context Protocol",
    issuer: "Anthropic",
    date: "2026",
    code: "VERIFIED: MCP-INTRO",
    category: "AI & Claude"
  },
  {
    id: "cert-ai-limits",
    name: "AI Capabilities and Limitations",
    issuer: "Anthropic",
    date: "2026",
    code: "VERIFIED: AI-LIMITS",
    category: "AI & Claude"
  },
  {
    id: "cert-ai-fluency-stud",
    name: "AI Fluency for Students",
    issuer: "Anthropic",
    date: "2026",
    code: "VERIFIED: AI-FLUENCY-STU",
    category: "AI & Claude"
  },
  {
    id: "cert-ai-fluency-build",
    name: "AI Fluency for Builders",
    issuer: "Anthropic",
    date: "2026",
    code: "VERIFIED: AI-FLUENCY-BLD",
    category: "AI & Claude"
  },
  {
    id: "cert-se-essentials",
    name: "Software Engineering Essentials",
    issuer: "IBM / Coursera",
    date: "2026",
    code: "VERIFIED: SE-ESSENTIALS",
    category: "Software & Cloud"
  },
  {
    id: "cert-ibm-py",
    name: "Python Project for AI and Application Development",
    issuer: "Coursera / IBM",
    date: "2026",
    code: "VERIFIED: PY-AI-DEV",
    category: "AI & Claude"
  },
  {
    id: "cert-ibm-flask",
    name: "Developing AI Applications with Python and Flask",
    issuer: "IBM",
    date: "2026",
    code: "VERIFIED: IBM-FLASK-26",
    category: "AI & Claude"
  },
  {
    id: "cert-icareer",
    name: "Tech for Non-Techies (Digital Tools, Automation & AI)",
    issuer: "iCareer / Plan International",
    date: "2025",
    code: "VERIFIED: TECH-NT-IC",
    category: "Professional"
  },
  {
    id: "cert-itida",
    name: "Freelance Qualification Certificate",
    issuer: "ITIDA Gigs",
    date: "2026",
    code: "VERIFIED: ITIDA-GIGS-01",
    category: "Professional"
  },
  {
    id: "cert-ibm-git",
    name: "GitHub Version Control & Repository Management",
    issuer: "IBM",
    date: "2026",
    code: "VERIFIED: IBM-GIT-VCS",
    category: "Software & Cloud"
  }
];

export const featuredSystemsData: Project[] = [
  {
    id: "sys-farmflow",
    title: "Project FarmFlow",
    description: "Distributed supply chain and agricultural dispatch platform. Connects producers directly with commercial aggregators via low-latency inventory syncing and automated route scheduling.",
    category: "Distributed Backend",
    skills: ["FastAPI", "PostgreSQL", "Docker", "Telemetry"],
    badge: "Distributed Backend",
    role: "Core Maintainer",
    github: "https://github.com/Hany-Zamalkawy/NTI_Summer_Intership_Project",
    link: "https://hany-zamalkawy.github.io/NTI_Summer_Intership_Project/"
  },
  {
    id: "sys-mizan",
    title: "Project Mizan",
    description: "Automated legal document classification and OCR intelligence pipeline. Ingests Arabic and Latin contracts, executing OCR extraction and entity disambiguation directly to indexed storage.",
    category: "Data & AI",
    skills: ["Tesseract OCR", "Drive Webhooks", "n8n Automation", "Streamlit"],
    badge: "AI & Document Automation",
    role: "Automated Pipeline",
    github: "https://github.com/Hany-Zamalkawy",
    link: "https://github.com/Hany-Zamalkawy"
  },
  {
    id: "sys-leon",
    title: "Leon Creative Digital Agency",
    description: "Ultra-fast agency web interface developed with custom zero-dependency styling and responsive layout engines, scoring a pristine 100/100 across Google Lighthouse audits.",
    category: "High Performance Web",
    skills: ["HTML5 Semantic", "CSS3 Modular", "SEO & Performance"],
    badge: "High Performance Web",
    role: "100/100 Lighthouse",
    github: "https://github.com/Hany-Zamalkawy/Leon-Agency",
    link: "https://hany-zamalkawy.github.io/Leon-Agency/"
  },
  {
    id: "sys-volt",
    title: "VOLT Analytics Platform",
    description: "Real-time athletic telemetry parsing system capturing velocity vectors, heart-rate zones, and tactical spatial positioning with automated reporting and anomaly detection.",
    category: "Sports Telemetry",
    skills: ["Python", "Polars", "Tailwind", "REST API"],
    badge: "Sports Telemetry & Analytics",
    role: "Telemetry Engine",
    github: "https://github.com/Hany-Zamalkawy/-VOLT-Sports",
    link: "https://hany-zamalkawy.github.io/-VOLT-Sports/"
  },
  {
    id: "sys-hanys-world",
    title: "HANY'S WORLD",
    description: "Bilingual EN/AR (RTL/LTR) cyber-minimalist engineering portfolio & interactive architecture platform featuring a live Manifest Terminal with lo-fi Web Audio typing SFX, pipeline visualizer, Express backend dispatch, and automated PDF/Markdown resume generation.",
    category: "Full-Stack & Interactive UI",
    skills: ["React 19", "TypeScript", "Express.js", "Tailwind CSS", "Framer Motion", "Web Audio API"],
    badge: "Flagship Production System",
    role: "Creator & Lead Architect",
    github: "https://github.com/Hany-Zamalkawy/My-Portfolio-HANY-S-WORLD",
    link: "https://hany-s-world-597716960036.europe-west2.run.app/"
  }
];

export const certificationsData: Certification[] = [
  // AI Engineering, Claude & Cloud (Anthropic / AWS / Udacity / Edureka)
  { id: "cert-claude-api", name: "Building with the Claude API", issuer: "Anthropic", date: "2026", category: "AI & Claude" },
  { id: "cert-claude-vertex", name: "Claude with Google Vertex AI", issuer: "Anthropic", date: "2026", category: "AI & Claude" },
  { id: "cert-claude-bedrock", name: "Claude with Amazon Bedrock", issuer: "Anthropic", date: "2026", category: "AI & Claude" },
  { id: "cert-mcp-intro", name: "Introduction to Model Context Protocol (MCP)", issuer: "Anthropic", date: "2026", category: "AI & Claude" },
  { id: "cert-mcp-adv", name: "Model Context Protocol: Advanced Topics", issuer: "Anthropic", date: "2026", category: "AI & Claude" },
  { id: "cert-ai-limits", name: "AI Capabilities and Limitations", issuer: "Anthropic", date: "2026", category: "AI & Claude" },
  { id: "cert-ai-fluency-found", name: "AI Fluency: Framework & Foundations", issuer: "Anthropic", date: "2026", category: "AI & Claude" },
  { id: "cert-ai-fluency-build", name: "AI Fluency for Builders", issuer: "Anthropic", date: "2026", category: "AI & Claude" },
  { id: "cert-ai-fluency-stud", name: "AI Fluency for Students", issuer: "Anthropic", date: "2026", category: "AI & Claude" },
  { id: "cert-aws-ai", name: "AWS AI Practitioner Challenge", issuer: "Udacity", date: "2026", category: "AI & Claude" },
  { id: "cert-vibe-copilot", name: "Vibe Coding with GitHub Copilot", issuer: "Edureka", date: "2026", category: "AI & Claude" },

  // Software Engineering, Data & Cloud (IBM / Coursera)
  { id: "cert-ai-flask", name: "Developing AI Applications with Python and Flask", issuer: "IBM / Coursera", date: "2026", category: "Software & Cloud" },
  { id: "cert-py-ds", name: "Python for Data Science, AI & Development", issuer: "IBM / Coursera", date: "2026", category: "Software & Cloud" },
  { id: "cert-backend-node", name: "Developing Back-End Apps with Node.js and Express", issuer: "IBM / Coursera", date: "2026", category: "Software & Cloud" },
  { id: "cert-frontend-react", name: "Developing Front-End Apps with React", issuer: "IBM / Coursera", date: "2026", category: "Software & Cloud" },
  { id: "cert-cloud-intro", name: "Introduction to Cloud Computing", issuer: "IBM / Coursera", date: "2026", category: "Software & Cloud" },
  { id: "cert-se-intro", name: "Introduction to Software Engineering", issuer: "IBM / Coursera", date: "2026", category: "Software & Cloud" },
  { id: "cert-git-intro", name: "Getting Started with Git and GitHub", issuer: "IBM / Coursera", date: "2026", category: "Software & Cloud" },
  { id: "cert-se-essentials", name: "Software Engineering Essentials", issuer: "Coursera", date: "2026", category: "Software & Cloud" }
];

export const projectsData: Project[] = [
  {
    id: "proj-1",
    title: "FarmFlow – Python Farm-to-Consumer Commerce & Inventory System",
    description: "Engineered during NTI Summer Internship to streamline direct farm-to-consumer sales, eliminate intermediaries, and optimize inventory tracking and automated order management.",
    category: "Full-Stack",
    skills: ["Python", "Flask", "REST APIs", "Git", "GitHub Pages"],
    link: "https://hany-zamalkawy.github.io/NTI_Summer_Intership_Project/",
    github: "https://github.com/Hany-Zamalkawy/NTI_Summer_Intership_Project"
  },
  {
    id: "proj-2",
    title: "VOLT – Sports Gear Store & High-Performance Analytics Platform",
    description: "Architected a high-performance sports analytics platform delivering real-time actionable insights, athlete statistics, and deep historical trend analysis.",
    category: "Data & AI",
    skills: ["JavaScript", "Data Visualization", "Data Pipelines", "Responsive Design", "Git"],
    link: "https://hany-zamalkawy.github.io/-VOLT-Sports/",
    github: "https://github.com/Hany-Zamalkawy/-VOLT-Sports"
  },
  {
    id: "proj-3",
    title: "HANY'S WORLD – Interactive Portfolio & Engineering Platform",
    description: "Built and deployed a bilingual EN/AR (RTL/LTR) obsidian engineering portfolio with an interactive Manifest Terminal (lo-fi Web Audio typing SFX), pipeline visualizer, Express API health/contact dispatch, and instant PDF resume compilation.",
    category: "Full-Stack",
    skills: ["React 19", "TypeScript", "Express.js", "Tailwind CSS", "Framer Motion", "Google Cloud Run"],
    link: "https://hany-s-world-597716960036.europe-west2.run.app/",
    github: "https://github.com/Hany-Zamalkawy/My-Portfolio-HANY-S-WORLD"
  },
  {
    id: "proj-4",
    title: "Artisan Table – Restaurant Web Platform",
    description: "Built a dynamic menu engine, online reservation system, and feedback pipeline optimized for responsive performance and seamless user checkout.",
    category: "Full-Stack",
    skills: ["React 19", "JavaScript", "HTML5", "CSS3", "GitHub"],
    link: "https://hany-zamalkawy.github.io/restaurant_Artisan_Table/",
    github: "https://github.com/Hany-Zamalkawy/restaurant_Artisan_Table"
  },
  {
    id: "proj-5",
    title: "Leon – Creative Digital Agency Template",
    description: "Developed a modern, responsive one-page website for a creative digital agency featuring scroll-triggered animations, filterable portfolio, and sticky navigation.",
    category: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Git"],
    link: "https://hany-zamalkawy.github.io/Leon-Agency/",
    github: "https://github.com/Hany-Zamalkawy/Leon-Agency"
  }
];

export const servicesData: Service[] = [
  {
    id: "srv-fullstack",
    title: "Full-Stack Web Engineering",
    tagline: "End-to-end resilient web applications engineered for speed, modularity, and high-load scalability.",
    category: "Full-Stack",
    description: "Architecting and implementing modern web applications from responsive front-end user experiences to robust, scalable backend APIs. Utilizing clean component design systems, state management, and production-ready deployments.",
    deliverables: [
      "Custom Single Page Applications (SPA) & Micro-frontends",
      "RESTful & GraphQL Backend API Engineering",
      "Interactive Client Dashboards & Real-time UI Flows",
      "Cross-Platform Responsive Optimization & Accessibility"
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "Vite"],
    icon: "Layers"
  },
  {
    id: "srv-data-eng",
    title: "Data Engineering & Pipeline Architecture",
    tagline: "High-performance ETL/ELT pipelines, data transformation, and reliable analytical storage systems.",
    category: "Data Engineering",
    description: "Specialized in designing resilient data pipelines and data warehousing infrastructures based on DEPI Batch R5 specialization. Transforming raw unstructured data into clean, query-optimized assets bridging business operations with technical architecture.",
    deliverables: [
      "Automated Batch & Stream ETL/ELT Data Pipelines",
      "Data Warehouse Schema Design & Performance Tuning",
      "Data Cleaning, Deduplication, and Validation Pipelines",
      "Analytical Data Models & Business Intelligence Feeders"
    ],
    techStack: ["Python", "SQL", "PostgreSQL", "Database Fundamentals", "Workflow Automation"],
    icon: "Database"
  },
  {
    id: "srv-python-backend",
    title: "Python Solutions & Backend Architecture",
    tagline: "High-throughput microservices, computational modules, and application performance optimization.",
    category: "Python & Architecture",
    description: "Formed through rigorous NTI & ITIDA Summer Training paradigms. Developing high-throughput Python backend systems and computational utilities while applying modern software architecture principles, algorithmic efficiency, and bottleneck elimination.",
    deliverables: [
      "High-Performance Python Web Services & APIs",
      "Application Performance Profiling & Latency Reduction",
      "SOLID Architectural Design & Modular Microservices",
      "Asynchronous Task Workers & Background Schedulers"
    ],
    techStack: ["Python", "Software Architecture", "Performance Optimization", "Full-Stack Development"],
    icon: "Terminal"
  },
  {
    id: "srv-ai-agent",
    title: "AI Integration & Intelligent Automation",
    tagline: "Augmenting software products with LLM intelligence, search discovery agents, and automated workflows.",
    category: "AI & Cloud",
    description: "Leveraging hands-on backend AI engineering experience from FlyRank AI. Integrating Large Language Models (LLMs), AI discovery agents, and semantic search capabilities into web and enterprise workflows.",
    deliverables: [
      "Custom LLM API Integrations & Conversational Agents",
      "Autonomous AI Web Discovery & Scraping Agents",
      "Semantic Search & Dynamic Content Summarizers",
      "Intelligent Business Workflow & Script Automation"
    ],
    techStack: ["Gemini API", "Prompt Engineering", "Python", "Cloud Computing", "Node.js"],
    icon: "Sparkles"
  },
  {
    id: "srv-db-optimization",
    title: "Database Architecture & Optimization",
    tagline: "Scalable relational and document data storage, index tuning, and high-availability schemas.",
    category: "Data Engineering",
    description: "Designing structured relational and NoSQL schemas (PostgreSQL, MongoDB, Firebase). Tuning database indices, crafting optimized queries, and implementing data integrity constraints to ensure sub-second response times.",
    deliverables: [
      "Relational (SQL) & Document (NoSQL) Schema Modeling",
      "Query Execution Plan Analysis & Index Optimization",
      "Secure Transactional Logic & Connection Pooling",
      "Database Migration Strategies & Schema Versioning"
    ],
    techStack: ["PostgreSQL", "MongoDB", "Firebase", "SQL", "Database Fundamentals"],
    icon: "Server"
  },
  {
    id: "srv-cloud-devops",
    title: "Cloud Deployment & DevOps Automation",
    tagline: "Containerized deployments, automated CI/CD pipelines, and cloud infrastructure reliability.",
    category: "AI & Cloud",
    description: "Streamlining the bridge from local development to production through containerization, continuous integration/delivery (CI/CD) pipelines, cloud environment management, and production health monitoring.",
    deliverables: [
      "Docker Containerization & Multi-stage Builds",
      "Automated CI/CD Pipelines via GitHub Actions",
      "Cloud Ingress & Hosting Configuration (GCP, Vercel)",
      "System Uptime Monitoring & Environment Security"
    ],
    techStack: ["Git", "GitHub Actions", "Docker", "Cloud Computing", "Vite"],
    icon: "Cloud"
  }
];

