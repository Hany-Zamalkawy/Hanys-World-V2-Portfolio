import { Profile, Skill, Experience, Education, Certification, Project, Service } from "./types";
import {
  initialProfile,
  skillsData,
  experiencesData,
  educationData,
  certificationsData,
  projectsData,
  servicesData,
  featuredSystemsData,
} from "./data";

export const uiTranslations = {
  en: {
    about: "About",
    specialization: "Specialization",
    architecture: "Architecture",
    experience: "Experience",
    systems: "Systems",
    credentials: "Credentials",
    services: "Services",
    education: "Education",
    projects: "Projects",
    contact: "Contact",
    availableBadge: "Available for Engagements",
    availableSubtext: "AVAILABLE FOR ENGAGEMENTS · CAIRO / REMOTE",
    exploreArchitecture: "Explore Architecture",
    githubCodebases: "GitHub Codebases",
    specializationKicker: "01 // SPECIALIZATION & STACK",
    specializationTitle: "Dual-Pillar Engineering Specialization",
    specializationSubtitle: "Designed with strict separation of concerns: production-grade client & API interfaces paired with distributed data pipelines and AI orchestration.",
    dualPillarTitle: "Dual-Pillar Engineering Specialization",
    dualPillarDesc: "Designed with strict separation of concerns: production-grade client & API interfaces paired with distributed data pipelines and AI orchestration.",
    pipelineKicker: "PIPELINE ARCHITECTURE SPEC",
    pipelineTitle: "End-to-End Distributed Data & Service Pipeline",
    pipelineHeadline: "End-to-End Distributed Data & Service Pipeline",
    zeroDataLoss: "Zero Data Loss Schema Guarantee",
    experienceTitle: "Professional Deployments & Initiatives",
    experienceKicker: "03 // TRACK RECORD & ROLES",
    trackRecordTitle: "Professional Deployments & Initiatives",
    trackRecordKicker: "03 // TRACK RECORD & ROLES",
    systemsTitle: "Featured Codebases & Systems",
    systemsKicker: "04 // PRODUCTION CODEBASES & SYSTEMS",
    viewAllGithub: "View all repositories on GitHub",
    sourceSpecs: "Source Specs",
    liveSystem: "Live System",
    credentialsTitle: "Accreditations & Certifications",
    credentialsKicker: "05 // VERIFIED INDUSTRY CREDENTIALS",
    dispatchTitle: "Dispatch Inquiries & Collaborations",
    dispatchKicker: "> hany@workstation:~$ initiate-contact --secure",
    secureChannelActive: "Secure Channel Active",
    directComm: "// DIRECT COMMUNICATION",
    repoNetwork: "// REPOSITORIES & NETWORK",
    primaryInquiries: "Primary Inquiries",
    copy: "Copy",
    resumeBtn: "Resume / CV",
    sysCyber: "CYBER",
    sysLight: "LIGHT",
    downloadCV: "Download Resume",
    pdfGuideTitle: "PDF SAVE INSTRUCTIONS",
    pdfGuideText: "To save as a pristine PDF, click the print button above and choose \"Save as PDF\" as your target printer. Ensure you adjust scaling and background graphics in your print settings if necessary.",
    close: "Close",
    clearFilter: "Clear selection filter",
    filteringBy: "Filtering by",
    techStackTitle: "Technical Stack",
    techStackDesc: "A collection of technologies I have integrated across projects, enterprise solutions, and sandbox environments.",
    servicesKicker: "02 // PRODUCTION SERVICES & CAPABILITIES",
    servicesTitle: "My Services",
    servicesDesc: "Scalable full-stack development, high-throughput data engineering pipelines, and intelligent AI backend architecture.",
    servicesSubtitle: "Specialized offerings bridging software engineering, data systems, and business architecture.",
    servicesDeliverables: "Key Deliverables & Specifications",
    servicesTech: "Core Technologies & Architectural Stack",
    requestService: "Inquire About Service",
    discussScope: "Discuss Project Scope",
    all: "All",
    languages: "Languages",
    frontEnd: "Front-End",
    backEnd: "Back-End",
    dataEngineering: "Data Engineering",
    cloudAI: "Cloud & AI",
    tools: "Tools",
    langDesc: "Syntax and foundations for robust and native scripts.",
    frameDesc: "Structured frameworks for client views and app servers.",
    cloudDesc: "Orchestration, containment, and continuous delivery pipelines.",
    dbDesc: "Persistent warehouses for secure transactional models.",
    coreJourneyTitle: "Core Journey",
    coreJourneyDesc: "Chronological ledger of professional, educational, and commercial milestones.",
    academicTitle: "Academic Foundations",
    academicDesc: "Formal academic history and qualifications.",
    certsTitle: "Industry Certifications",
    certsDesc: "Verified validation of technological fluency and operational paradigms.",
    projectsTitle: "Sandboxed Projects",
    projectsDesc: "Live prototypes, experimental engines, and published production-ready solutions.",
    liveDemo: "Live Demo",
    sourceCode: "Source Code",
    interactiveShell: "Interactive Shell",
    bashTerminal: "Terminal Shell Bash Emulator",
    readmeTab: "README.md",
    profileTab: "Profile.json",
    terminalLogsTab: "terminal_logs.sh",
    contactMeTab: "contact_me.py",
    contactTitle: "Initiate Communication",
    copyEmail: "Copy Email Address",
    copied: "Copied!",
    footerDesc: "A developer sandbox of Moustafa Hany Azab. Code. Ship. Impact.",
    backToTop: "Back to top",
    designedBy: "Designed & Engineered by Hany",
    systemReady: "SYSTEM READY",
    bashWelcome: "Welcome to Hany's Shell. Type 'help' to see available commands.",
    commandPrompt: "guest@hany-world:~$",
    interactiveEditor: "Live Interactive Editor",
    editorHeader: "Interactive Profile Editor — Modify fields below to update live portfolio view!",
    editModeLabel: "Bilingual JSON schema editing mode",
    resetBtn: "Reset Profile",
    saveBtn: "Apply Profile Changes",
    nameLabel: "Developer Name",
    roleLabel: "Target Role",
    missionLabel: "Operational Mission",
    focusLabel: "Target Focus Sectors (comma-separated)",
    bioLabel: "Professional Biography",
    emailCopiedToClipboard: "Email copied to clipboard!",
    skillsCategory: "Skills Category",
    showCertificates: "View Industry Credentials"
  },
  ar: {
    about: "من أنا",
    specialization: "التخصصات",
    architecture: "المعمارية",
    experience: "الخبرات",
    systems: "الأنظمة",
    credentials: "الاعتمادات",
    services: "الخدمات",
    education: "التعليم",
    projects: "المشاريع",
    contact: "اتصل بي",
    availableBadge: "متاح لفرص عمل ومشاريع",
    availableSubtext: "متاح لفرص عمل جديدة وتطوير أنظمة · القاهرة / عن بُعد",
    exploreArchitecture: "استكشف المعمارية",
    githubCodebases: "مستودعات GitHub",
    specializationKicker: "01 // التخصص والمهارات",
    specializationTitle: "التخصص الهندسي ثنائي الركائز",
    specializationSubtitle: "مصمم وفق مبدأ الفصل الصارم للمهام: واجهات عميل وواجهات برمجة تطبيقات احترافية مقترنة بخطوط بيانات موزعة وتنسيق الذكاء الاصطناعي.",
    dualPillarTitle: "التخصص الهندسي ثنائي الركائز",
    dualPillarDesc: "مصمم وفق مبدأ الفصل الصارم للمهام: واجهات عميل وواجهات برمجة تطبيقات احترافية مقترنة بخطوط بيانات موزعة وتنسيق الذكاء الاصطناعي.",
    pipelineKicker: "مواصفات خط أنابيب المعمارية",
    pipelineTitle: "خط أنابيب معالجة البيانات والخدمات الموزعة المتكامل",
    pipelineHeadline: "خط أنابيب معالجة البيانات والخدمات الموزعة المتكامل",
    zeroDataLoss: "ضمان سلامة المخططات وصفر فقدان بيانات",
    experienceTitle: "المسيرة المهنية والمبادرات البرمجية",
    experienceKicker: "03 // سجل الخبرات والمبادرات",
    trackRecordTitle: "المسيرة المهنية والمبادرات البرمجية",
    trackRecordKicker: "03 // سجل الخبرات والمبادرات",
    systemsTitle: "الأنظمة البرمجية ومشاريع الإنتاج",
    systemsKicker: "04 // مستودعات وأنظمة الإنتاج",
    viewAllGithub: "عرض كافة المستودعات على GitHub",
    sourceSpecs: "مواصفات المصدر",
    liveSystem: "الموقع المباشر",
    credentialsTitle: "الشهادات والاعتمادات المهنية المعتمدة",
    credentialsKicker: "05 // الاعتمادات التكنولوجية الدولية",
    dispatchTitle: "إرسال الاستفسارات والتعاون البرمجي",
    dispatchKicker: "> hany@workstation:~$ initiate-contact --secure",
    secureChannelActive: "قناة اتصال آمنة مفعلة",
    directComm: "// التواصل المباشر",
    repoNetwork: "// المستودعات والشبكات المهنية",
    primaryInquiries: "الاستفسارات الرئيسية",
    copy: "نسخ",
    resumeBtn: "السيرة الذاتية (CV)",
    sysCyber: "سيبراني",
    sysLight: "مضيء",
    downloadCV: "تحميل السيرة الذاتية",
    pdfGuideTitle: "تعليمات حفظ PDF",
    pdfGuideText: "لحفظ الملف بصيغة PDF نقية ومثالية، انقر فوق زر الطباعة أعلاه واختر \"حفظ بتنسيق PDF\" كطابعة مستهدفة. يرجى تفعيل طباعة الخلفيات والرسومات وتعيين الهوامش إلى 'بلا' للحصول على مظهر ممتاز.",
    close: "إغلاق",
    clearFilter: "إزالة التصفية",
    filteringBy: "تصفية حسب",
    techStackTitle: "مجموعة التقنيات",
    techStackDesc: "مجموعة من التقنيات التي قمت بدمجها وتطبيقها عبر المشاريع والمحاكاة التفاعلية المختلفة.",
    servicesKicker: "02 // الخدمات الهندسية والقدرات الإنتاجية",
    servicesTitle: "خدماتي البرمجية والهندسية",
    servicesDesc: "تطوير برمجيات الويب المتكاملة، بناء خطوط أنابيب هندسة البيانات، وهندسة خوادم الذكاء الاصطناعي عالية الأداء.",
    servicesSubtitle: "خدمات تخصصية تجمع بين هندسة البرمجيات، أنظمة البيانات، ونظم معلومات الأعمال.",
    servicesDeliverables: "أبرز المخرجات والمواصفات الفنية",
    servicesTech: "الركائز والتقنيات المعمارية المعتمدة",
    requestService: "طلب استشارة أو تنفيذ الخدمة",
    discussScope: "مناقشة تفاصيل المشروع",
    all: "الكل",
    languages: "لغات البرمجة",
    frontEnd: "الواجهات الأمامية",
    backEnd: "الأنظمة الخلفية",
    dataEngineering: "هندسة البيانات",
    cloudAI: "السحابة والذكاء الاصطناعي",
    tools: "أدوات التطوير",
    langDesc: "أسس برمجية متينة لبناء نصوص برمجية قوية وفعالة.",
    frameDesc: "أطر عمل هيكلية لواجهات المستخدم وخوادم التطبيقات.",
    cloudDesc: "أتمتة، حاويات سحابية، ومسارات تسليم ونشر مستمر.",
    dbDesc: "مستودعات بيانات آمنة وسريعة للتعامل مع النماذج الهيكلية والعلائقية.",
    coreJourneyTitle: "المسيرة المهنية",
    coreJourneyDesc: "سجل زمني للخبرات المهنية، الأكاديمية والعمل الحر الاستشاري.",
    academicTitle: "الأسس الأكاديمية",
    academicDesc: "سجل التعليم الأكاديمي والشهادات الجامعية والثانوية الرسمية.",
    certsTitle: "الشهادات التقنية والمهنية",
    certsDesc: "الاعتمادات المعتمدة من منصات عالمية مثل Anthropic و IBM و Coursera للتحقق من الكفاءة.",
    projectsTitle: "المشاريع والحلول الرقمية",
    projectsDesc: "نماذج حية ومشاريع متكاملة قمت بتطويرها ونشرها لتلبية الاحتياجات التقنية والبرمجية.",
    liveDemo: "العرض الحي",
    sourceCode: "كود المشروع",
    interactiveShell: "موجه الأوامر التفاعلي",
    bashTerminal: "محاكي موجه الأوامر الطرفية (Terminal Bash)",
    readmeTab: "README.md",
    profileTab: "Profile.json",
    terminalLogsTab: "terminal_logs.sh",
    contactMeTab: "contact_me.py",
    contactTitle: "بدء التواصل السريع",
    copyEmail: "نسخ البريد الإلكتروني",
    copied: "تم النسخ!",
    footerDesc: "مساحة التطوير الخاصة بالمطور مصطفى هاني عزب. برمجة. شحن. تأثير.",
    backToTop: "العودة للأعلى",
    designedBy: "تصميم وتطوير مصطفى هاني",
    systemReady: "النظام جاهز للتشغيل",
    bashWelcome: "مرحباً بك في موجه أوامر مصطفى هاني. اكتب 'help' لرؤية الأوامر المتاحة.",
    commandPrompt: "guest@hany-world:~$",
    interactiveEditor: "المحرر التفاعلي الحي",
    editorHeader: "محرر الملف الشخصي التفاعلي — قم بتعديل الحقول لتحديث الموقع في الوقت الفعلي!",
    editModeLabel: "وضع تعديل هيكل JSON ثنائي اللغة",
    resetBtn: "إعادة تعيين",
    saveBtn: "تطبيق التغييرات",
    nameLabel: "اسم المطور",
    roleLabel: "الدور المستهدف",
    missionLabel: "المهمة التشغيلية",
    focusLabel: "مجالات التركيز (مفصولة بفاصلة)",
    bioLabel: "السيرة الذاتية المهنية",
    emailCopiedToClipboard: "تم نسخ البريد الإلكتروني للحافظة!",
    skillsCategory: "فئة المهارة",
    showCertificates: "عرض شهادات الاعتماد والخبرات"
  }
};

// DRY export of English data models directly from data.ts
export const enProfile: Profile = initialProfile;
export const enSkills: Skill[] = skillsData;
export const enExperiences: Experience[] = experiencesData;
export const enEducation: Education[] = educationData;
export const enCertifications: Certification[] = certificationsData;
export const enProjects: Project[] = projectsData;

export const arProfile: Profile = {
  name: "مصطفى هاني عزب",
  alias: "هاني زملكاوي",
  role: "هندسة البرمجيات والبيانات",
  mission: "برمجة. شحن. تأثير.",
  phone: "01228494191",
  email: "moustfahhany5@gmail.com",
  location: "الإسكندرية، مصر",
  portfolioUrl: "https://hany-s-world-597716960036.europe-west2.run.app/",
  githubUrl: "https://github.com/Hany-Zamalkawy",
  linkedinUrl: "https://www.linkedin.com/in/moustafa-hany-azab-4550692b9/?skipRedirect=true",
  focus: [
    "تطوير الواجهات الأمامية و React.js",
    "هندسة وتطوير الويب المتكامل",
    "هندسة البيانات في مبادرة DEPI",
    "واجهات الذكاء الاصطناعي في FlyRank AI"
  ],
  bio: "أنا مصطفى هاني عزب (المعروف مهنياً باسم هاني زملكاوي)، طالب نظم معلومات الأعمال (BIS) ومهندس برمجيات وبيانات طموح أركز بشكل حاسم على هندسة البرمجيات وهندسة البيانات. بدافع الفضول التقني والالتزام بالمعماريات القابلة للتوسع، أتخصص في بناء الحلول التي تتقاطع فيها عمليات الأعمال مع التطوير التقني المتين. تشمل كفاءاتي التقنية تقنيات الويب الحديثة، والهندسة الشاملة (Full-Stack)، ومسارات عمل هندسة البيانات. بعد إتمام برامج عملية مع رواد الصناعة مثل IBM وITIDA وeYouth، أتميز في إدارة خطوط أنابيب البيانات ونشر السكربتات المؤتمتة وتنفيذ متطلبات العملاء بالكامل.",
  heroBio: "تصميم وتنفيذ أنظمة برمجية موزعة عالية المرونة، وخطوط أنابيب بيانات فائقة السرعة، وتدفقات أتمتة ذكية بالذكاء الاصطناعي من البداية حتى الإنتاج."
};

export const arSkills: Skill[] = [
  // Languages
  { name: "JavaScript", category: "Languages" },
  { name: "TypeScript", category: "Languages" },
  { name: "Python", category: "Languages" },
  { name: "HTML5", category: "Languages" },
  { name: "CSS3", category: "Languages" },
  { name: "العربية (اللغة الأم)", category: "Languages" },
  { name: "الإنجليزية (طلاقة)", category: "Languages" },

  // Front-End
  { name: "React 19", category: "Front-End" },
  { name: "Vite", category: "Front-End" },
  { name: "Tailwind CSS", category: "Front-End" },
  { name: "التصميم المتجاوب", category: "Front-End" },
  { name: "واجهات ثنائية اللغة (RTL/LTR)", category: "Front-End" },

  // Back-End
  { name: "Node.js", category: "Back-End" },
  { name: "Express.js", category: "Back-End" },
  { name: "Flask", category: "Back-End" },
  { name: "REST APIs", category: "Back-End" },
  { name: "هندسة البرمجيات المعمارية", category: "Back-End" },

  // Data Engineering
  { name: "خطوط أنابيب البيانات (Data Pipelines)", category: "Data Engineering" },
  { name: "هندسة البيانات (ETL / ELT)", category: "Data Engineering" },
  { name: "تحليل البيانات", category: "Data Engineering" },
  { name: "تصور وتمثيل البيانات", category: "Data Engineering" },
  { name: "SQL و PostgreSQL", category: "Data Engineering" },
  { name: "أساسيات قواعد البيانات", category: "Data Engineering" },

  // Cloud & AI
  { name: "Google Cloud Run", category: "Cloud & AI" },
  { name: "Google Vertex AI", category: "Cloud & AI" },
  { name: "AWS Bedrock", category: "Cloud & AI" },
  { name: "Anthropic Claude API", category: "Cloud & AI" },
  { name: "هندسة الأوامر (Prompt Engineering)", category: "Cloud & AI" },
  { name: "بروتوكول سياق النماذج (MCP)", category: "Cloud & AI" },
  { name: "النماذج اللغوية الكبيرة (LLMs)", category: "Cloud & AI" },

  // Tools
  { name: "Git", category: "Tools" },
  { name: "GitHub", category: "Tools" },
  { name: "GitHub Copilot", category: "Tools" },
  { name: "Docker", category: "Tools" },
  { name: "VS Code & Cursor", category: "Tools" }
];

export const arExperiences: Experience[] = [
  {
    id: "exp-flyrank-frontend",
    period: "أكتوبر 2026 — الحالي (شهران)",
    role: "هندسة واجهات الذكاء الاصطناعي (Front-end AI Engineering)",
    company: "FlyRank AI · شيكاغو، إلينوي، الولايات المتحدة (عن بُعد)",
    bullets: [
      "تصميم وهندسة واجهات مستخدم عالية الأداء والدقة مصممة خصيصاً لمسارات عمل نماذج اللغة الكبيرة (LLMs) وتطبيقات الذكاء الاصطناعي.",
      "دمج واجهات برمجة التطبيقات الخلفية غير المتزامنة ومسارات التدفق الحي (Streaming Endpoints) لعرض مخرجات النماذج لحظياً في مكونات قابلة للتوسع.",
      "تحسين إدارة حالة الواجهة الأمامية وتقليل زمن استجابة العرض لتجربة مستخدم سلسة وسريعة عبر أدوات الذكاء الاصطناعي التفاعلية.",
      "تطبيق عقلية التطوير الشامل (Full-Stack) لمواءمة البنية التحتية القوية للذكاء الاصطناعي مع واجهة استخدام بديهية."
    ],
    skillsUsed: ["React.js", "TypeScript", "Tailwind CSS", "Streaming APIs", "LLM Workflows"]
  },
  {
    id: "exp-depi",
    period: "يوليو 2026 — الحالي (5 أشهر)",
    role: "مهندس بيانات (Data Engineer)",
    company: "مبادرة رواد مصر الرقمية (DEPI) - الدفعة R5 · الإسكندرية، مصر",
    bullets: [
      "الالتحاق بتخصص مكثف في هندسة البيانات (الدفعة R5) لربط العمليات التجارية بالبنية التقنية.",
      "التركيز على بناء أنظمة بيانات عالية الأداء ومسارات معالجة ETL/ELT وبنية تحتية تحليلية قابلة للتوسع."
    ],
    skillsUsed: ["Python", "SQL & PostgreSQL", "Data Pipelines", "ETL / ELT", "Data Modeling"]
  },
  {
    id: "exp-flyrank-backend",
    period: "يونيو 2026 — أكتوبر 2026 (5 أشهر)",
    role: "هندسة الذكاء الاصطناعي الخلفية (Backend AI Engineering)",
    company: "FlyRank AI · شيكاغو، إلينوي، الولايات المتحدة (عن بُعد)",
    bullets: [
      "تطوير أنظمة خلفية بالذكاء الاصطناعي لدعم النمو العضوي وتحسين محركات التوليد (GEO)، وأتمتة ظهور العلامات التجارية عبر محركات البحث التقليدية والذكاء الاصطناعي.",
      "حل تحديات استخبارات البحث سريعة التطور وبناء مسارات تحسين مدفوعة بالذكاء الاصطناعي بالتعاون مع الفريق الهندسي."
    ],
    skillsUsed: ["Python", "Flask", "GEO / Search Intelligence", "AI Pipelines", "REST APIs"]
  },
  {
    id: "exp-nti",
    period: "أغسطس 2026 — سبتمبر 2026 (شهران)",
    role: "مطور بايثون (Python Developer)",
    company: "المعهد القومي للاتصالات (NTI) · برنامج التدريب الصيفي NTI & ITIDA",
    bullets: [
      "بناء حلول برمجية بلغة بايثون وتحسين أداء التطبيقات خلال البرنامج التدريبي الصيفي المرموق لـ NTI و ITIDA.",
      "تطبيق مبادئ هندسة البرمجيات الحديثة على مشاريع واقعية بما يعزز مسيرتي كمطور شامل ومهندس بيانات."
    ],
    skillsUsed: ["Python", "Software Architecture", "Performance Optimization", "Git"]
  },
  {
    id: "exp-kanz-hackathon",
    period: "يوليو 2026",
    role: "مشارك – هاكاثون Kanz AI التدريبي للذكاء الاصطناعي",
    company: "Kanz AI",
    bullets: [
      "تصميم وهندسة نماذج أولية بالذكاء الاصطناعي التوليدي وأطر تعلم الآلة، وبناء منطق الخادم الخلفي ومعمارية قابلة للتوسع."
    ],
    skillsUsed: ["Generative AI", "ML Frameworks", "Backend Logic", "Architecture"]
  },
  {
    id: "exp-pathline",
    period: "فبراير 2026 — يوليو 2026 (6 أشهر)",
    role: "متدرب تطوير الويب (Web Development Intern)",
    company: "أكاديمية باث لاين للتدريب (PathLine) · القاهرة، مصر",
    bullets: [
      "اختياري ضمن برنامج PathLine التدريبي لبناء مشاريع واجهات أمامية واقعية وتوسيع معرض الأعمال وتطبيق معايير HTML5/CSS3 المتجاوبة."
    ],
    skillsUsed: ["HTML5", "CSS3", "JavaScript", "Responsive Design"]
  },
  {
    id: "exp-itida",
    period: "مارس 2026 — يونيو 2026 (4 أشهر)",
    role: "تأهيل العمل الحر (itida+gigs Freelance)",
    company: "ITIDA Gigs · الجيزة، مصر",
    bullets: [
      "إتمام برنامج ITIDA Gigs لتأهيل العمل الحر، والربط بين الدراسة الأكاديمية في نظم معلومات الأعمال ومتطلبات سوق العمل الحر وتسليم مشاريع ويب للعملاء."
    ],
    skillsUsed: ["React.js", "JavaScript", "Client Deliverables", "Web Development"]
  },
  {
    id: "exp-icareer",
    period: "نوفمبر 2025 — ديسمبر 2025 (شهران)",
    role: "تدريب التقنية لغير التقنيين (الأدوات الرقمية، الأتمتة والذكاء الاصطناعي)",
    company: "iCareer · الإسكندرية، مصر",
    bullets: [
      "إتقان الأدوات الرقمية وأتمتة سير العمل ودمج الذكاء الاصطناعي لتبسيط العمليات وتعميق الفهم المعماري للأنظمة الخلفية."
    ],
    skillsUsed: ["Automation", "AI Tools", "Digital Workflows"]
  }
];

export const arEducation: Education[] = [
  {
    id: "edu-bis",
    degree: "بكالوريوس نظم معلومات الأعمال (BIS)، إدارة الأعمال والإدارة العامة",
    school: "معاهد أبو قير العليا · الإسكندرية، مصر",
    period: "سبتمبر 2025 — مايو 2029"
  },
  {
    id: "edu-tokyo",
    degree: "دورة غير أكاديمية (GCI World): القادة المبدعون العالميون – علوم البيانات والذكاء الاصطناعي",
    school: "جامعة طوكيو (The University of Tokyo)",
    period: "سبتمبر 2026"
  },
  {
    id: "edu-vc",
    degree: "الدبلوم الوطني العالي (Higher National Diploma)",
    school: "كلية فيكتوريا، الإسكندرية · الإسكندرية، مصر",
    period: "سبتمبر 2010 — أغسطس 2025"
  }
];

export const arAccreditedCertifications: Certification[] = [
  { id: "cert-mcp-intro", name: "مقدمة إلى بروتوكول سياق النماذج (MCP)", issuer: "أنثروبيك (Anthropic)", date: "2026", code: "VERIFIED: MCP-INTRO", category: "AI & Claude" },
  { id: "cert-ai-limits", name: "إمكانيات وحدود الذكاء الاصطناعي", issuer: "أنثروبيك (Anthropic)", date: "2026", code: "VERIFIED: AI-LIMITS", category: "AI & Claude" },
  { id: "cert-ai-fluency-stud", name: "طلاقة الذكاء الاصطناعي للطلاب", issuer: "أنثروبيك (Anthropic)", date: "2026", code: "VERIFIED: AI-FLUENCY-STU", category: "AI & Claude" },
  { id: "cert-ai-fluency-build", name: "طلاقة الذكاء الاصطناعي للمطورين والبناة", issuer: "أنثروبيك (Anthropic)", date: "2026", code: "VERIFIED: AI-FLUENCY-BLD", category: "AI & Claude" },
  { id: "cert-se-essentials", name: "أساسيات هندسة البرمجيات", issuer: "IBM / كورسيرا", date: "2026", code: "VERIFIED: SE-ESSENTIALS", category: "Software & Cloud" },
  { id: "cert-ibm-py", name: "مشروع بايثون للذكاء الاصطناعي وتطوير التطبيقات", issuer: "كورسيرا / IBM", date: "2026", code: "VERIFIED: PY-AI-DEV", category: "AI & Claude" },
  { id: "cert-ibm-flask", name: "تطوير تطبيقات الذكاء الاصطناعي باستخدام Python و Flask", issuer: "IBM", date: "2026", code: "VERIFIED: IBM-FLASK-26", category: "AI & Claude" },
  { id: "cert-icareer", name: "التقنية لغير التقنيين (الأدوات الرقمية، الأتمتة والذكاء الاصطناعي)", issuer: "iCareer / بلان إنترناشيونال", date: "2025", code: "VERIFIED: TECH-NT-IC", category: "Professional" },
  { id: "cert-itida", name: "شهادة تأهيل العمل الحر (ITIDA Gigs)", issuer: "ITIDA Gigs", date: "2026", code: "VERIFIED: ITIDA-GIGS-01", category: "Professional" },
  { id: "cert-ibm-git", name: "إدارة المستودعات والتحكم في الإصدارات عبر GitHub", issuer: "IBM", date: "2026", code: "VERIFIED: IBM-GIT-VCS", category: "Software & Cloud" }
];

export const arCertifications: Certification[] = [
  // AI Engineering, Claude & Cloud (Anthropic / AWS / Udacity / Edureka)
  { id: "cert-claude-api", name: "بناء وتطوير التطبيقات باستخدام Claude API", issuer: "أنثروبيك (Anthropic)", date: "2026", category: "AI & Claude" },
  { id: "cert-claude-vertex", name: "دمج Claude مع Google Vertex AI", issuer: "أنثروبيك (Anthropic)", date: "2026", category: "AI & Claude" },
  { id: "cert-claude-bedrock", name: "دمج Claude مع Amazon Bedrock", issuer: "أنثروبيك (Anthropic)", date: "2026", category: "AI & Claude" },
  { id: "cert-mcp-intro", name: "مقدمة إلى بروتوكول سياق النماذج (MCP)", issuer: "أنثروبيك (Anthropic)", date: "2026", category: "AI & Claude" },
  { id: "cert-mcp-adv", name: "بروتوكول سياق النماذج (MCP): مواضيع متقدمة", issuer: "أنثروبيك (Anthropic)", date: "2026", category: "AI & Claude" },
  { id: "cert-ai-limits", name: "إمكانيات وحدود الذكاء الاصطناعي", issuer: "أنثروبيك (Anthropic)", date: "2026", category: "AI & Claude" },
  { id: "cert-ai-fluency-found", name: "طلاقة الذكاء الاصطناعي: الأطر والأسس", issuer: "أنثروبيك (Anthropic)", date: "2026", category: "AI & Claude" },
  { id: "cert-ai-fluency-build", name: "طلاقة الذكاء الاصطناعي للمطورين والبناة", issuer: "أنثروبيك (Anthropic)", date: "2026", category: "AI & Claude" },
  { id: "cert-ai-fluency-stud", name: "طلاقة الذكاء الاصطناعي للطلاب", issuer: "أنثروبيك (Anthropic)", date: "2026", category: "AI & Claude" },
  { id: "cert-aws-ai", name: "تحدي ممارس الذكاء الاصطناعي من AWS", issuer: "يوداسيتي (Udacity)", date: "2026", category: "AI & Claude" },
  { id: "cert-vibe-copilot", name: "البرمجة بالفايب باستخدام GitHub Copilot", issuer: "إديوريكا (Edureka)", date: "2026", category: "AI & Claude" },

  // Software Engineering, Data & Cloud (IBM / Coursera)
  { id: "cert-ai-flask", name: "تطوير تطبيقات الذكاء الاصطناعي باستخدام Python و Flask", issuer: "IBM / كورسيرا", date: "2026", category: "Software & Cloud" },
  { id: "cert-py-ds", name: "بايثون لعلوم البيانات والذكاء الاصطناعي والتطوير", issuer: "IBM / كورسيرا", date: "2026", category: "Software & Cloud" },
  { id: "cert-backend-node", name: "تطوير تطبيقات الباك إند باستخدام Node.js و Express", issuer: "IBM / كورسيرا", date: "2026", category: "Software & Cloud" },
  { id: "cert-frontend-react", name: "تطوير تطبيقات الفرونت إند باستخدام React", issuer: "IBM / كورسيرا", date: "2026", category: "Software & Cloud" },
  { id: "cert-cloud-intro", name: "مقدمة في الحوسبة السحابية", issuer: "IBM / كورسيرا", date: "2026", category: "Software & Cloud" },
  { id: "cert-se-intro", name: "مقدمة في هندسة البرمجيات", issuer: "IBM / كورسيرا", date: "2026", category: "Software & Cloud" },
  { id: "cert-git-intro", name: "البدء باستخدام Git و GitHub", issuer: "IBM / كورسيرا", date: "2026", category: "Software & Cloud" },
  { id: "cert-se-essentials", name: "أساسيات هندسة البرمجيات", issuer: "كورسيرا (Coursera)", date: "2026", category: "Software & Cloud" }
];

export const arProjects: Project[] = [
  {
    id: "proj-1",
    title: "منصة FarmFlow — نظام التجارة وإدارة المخزون من المزرعة للمستهلك بـ Python | معهد NTI",
    description: "مشروع تم تطويره خلال التدريب الصيفي للمعهد القومي للاتصالات (NTI) لتيسير البيع المباشر من المزارع للمستهلك وإلغاء الوسطاء وتتبع المخزون وأتمتة إدارة الطلبات.",
    category: "Full-Stack",
    skills: ["Python", "Flask", "REST APIs", "Git", "GitHub Pages"],
    link: "https://hany-zamalkawy.github.io/NTI_Summer_Intership_Project/",
    github: "https://github.com/Hany-Zamalkawy/NTI_Summer_Intership_Project"
  },
  {
    id: "proj-2",
    title: "منصة VOLT — متجر المعدات الرياضية ومنصة التحليلات فائقة الأداء",
    description: "هندسة منصة تحليلات رياضية متقدمة تقدم رؤى قابلة للتنفيذ في الوقت الفعلي، وإحصاءات دقيقة للرياضيين، وتحليلاً عميقاً للاتجاهات التاريخية.",
    category: "Data & AI",
    skills: ["JavaScript", "Data Visualization", "Data Pipelines", "Responsive Design", "Git"],
    link: "https://hany-zamalkawy.github.io/-VOLT-Sports/",
    github: "https://github.com/Hany-Zamalkawy/-VOLT-Sports"
  },
  {
    id: "proj-3",
    title: "منصة HANY'S WORLD — السيرة الذاتية التفاعلية السيبرانية",
    description: "تصميم ونشر محفظة أعمال تفاعلية ثنائية اللغة (عربي/إنجليزي) و(RTL/LTR) مع دعم الثيمين، وتصفية المهارات، ومحاكاة موجه الأوامر الطرفية (CLI)، وتصدير فوري للسيرة الذاتية بصيغة PDF.",
    category: "Frontend",
    skills: ["React 19", "TypeScript", "Tailwind CSS", "Google Cloud Run", "Vite"],
    link: "https://hany-s-world-597716960036.europe-west2.run.app/",
    github: "https://github.com/Hany-Zamalkawy/My-Portfolio-HANY-S-WORLD"
  },
  {
    id: "proj-4",
    title: "موقع Artisan Table — منصة الويب الشاملة للمطاعم",
    description: "بناء محرك تفاعلي لقوائم الطعام، ونظام حجز طاولات مباشر، ومسار جمع الملاحظات محسّن للسرعة والاستجابة وتجربة مستخدم سلسة.",
    category: "Full-Stack",
    skills: ["React 19", "JavaScript", "HTML5", "CSS3", "GitHub"],
    link: "https://hany-zamalkawy.github.io/restaurant_Artisan_Table/",
    github: "https://github.com/Hany-Zamalkawy/restaurant_Artisan_Table"
  },
  {
    id: "proj-5",
    title: "موقع Leon — قالب الوكالة الرقمية الإبداعية",
    description: "تطوير موقع ويب حديث وسريع الاستجابة لوكالة رقمية إبداعية يتميز بحركات تمرير سلسة، ومحفظة أعمال مصفاة، وشريط تنقل مثبت.",
    category: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Git"],
    link: "https://hany-zamalkawy.github.io/Leon-Agency/",
    github: "https://github.com/Hany-Zamalkawy/Leon-Agency"
  }
];

export const enServices: Service[] = [
  {
    id: "srv-fullstack",
    title: "Full-Stack Web Engineering",
    tagline: "End-to-end resilient web applications engineered for speed, modularity, and high-load scalability.",
    category: "Full-Stack",
    description: "Architecting and implementing modern web applications from responsive front-end user experiences to robust, scalable backend APIs. Utilizing clean component design systems, state management, and production-ready deployments.",
    deliverables: [
      "Custom Single Page Applications (SPA) & Interactive Dashboards",
      "RESTful & GraphQL Backend API Development",
      "Component-Driven UI Engineering with TypeScript & React",
      "Cross-Platform Responsive Optimization & Core Web Vitals Tuning"
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
      "Data Cleaning, Deduplication, and Validation Systems",
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

export const arServices: Service[] = [
  {
    id: "srv-fullstack",
    title: "تطوير وهندسة برمجيات الويب الشاملة (Full-Stack)",
    tagline: "بناء تطبيقات ويب مرنة وعالية الكفاءة والسرعة من الواجهات وحتى خوادم الباك إند.",
    category: "Full-Stack",
    description: "تصميم وتنفيذ تطبيقات الويب الحديثة والمتكاملة بدءاً من تجارب المستخدم التفاعلية سريعة الاستجابة وحتى واجهات برمجة التطبيقات (APIs) القوية. الاعتماد على هيكلة برمجية نظيفة وإدارة حالة متقدمة ونشر موثوق للإنتاج.",
    deliverables: [
      "تطبيقات الصفحة الواحدة المخصصة (SPA) ولوحات التحكم التفاعلية",
      "بناء وتطوير واجهات برمجة التطبيقات الخلفية (RESTful & GraphQL APIs)",
      "تصميم واجهات المستخدم بالمكونات المستقلة باستخدام React و TypeScript",
      "تحسين الأداء وسرعة الاستجابة عبر كافة الأجهزة ومحركات البحث"
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "Vite"],
    icon: "Layers"
  },
  {
    id: "srv-data-eng",
    title: "هندسة البيانات وبناء خطوط الأنابيب (Data Engineering)",
    tagline: "بناء خطوط معالجة البيانات ETL/ELT عالية الكفاءة وهياكل التخزين التحليلية الموثوقة.",
    category: "Data Engineering",
    description: "تخصص عميق في هندسة البيانات وبناء أنظمة معالجة البيانات الضخمة استناداً لمبادرة رواد مصر الرقمية (DEPI - الدفعة R5). تحويل البيانات الخام غير المنظمة إلى أصول نظيفة ومحسنة للاستعلام لسد الفجوة بين العمليات التشغيلية والبنية التحتية التقنية.",
    deliverables: [
      "خطوط أنابيب بيانات مؤتمتة بنظام الدُفعات والتدفق الحي (Batch & Stream ETL/ELT)",
      "تصميم مستودعات البيانات وتحسين أداء الاستعلامات الضخمة",
      "أنظمة تنظيف وتدقيق البيانات وإزالة التكرارات وضمان الجودة",
      "نماذج البيانات التحليلية وتغذية لوحات ذكاء الأعمال (BI)"
    ],
    techStack: ["Python", "SQL", "PostgreSQL", "أساسيات قواعد البيانات", "أتمتة سير العمل"],
    icon: "Database"
  },
  {
    id: "srv-python-backend",
    title: "حلول بايثون المتقدمة وهندسة النظم المعمارية",
    tagline: "خوادم بايثون فائقة الإنتاجية والسرعة وتطبيق مبادئ هندسة البرمجيات المعمارية الحديثة.",
    category: "Python & Architecture",
    description: "صقل المهارات عبر البرنامج التدريبي الصيفي المرموق للمعهد القومي للاتصالات (NTI و ITIDA). بناء خدمات وحلول خلفية برمجية باستخدام Python مع تطبيق معايير هندسة البرمجيات المعمارية وتحسين كفاءة المعالجة وحل الاختناقات البرمجية.",
    deliverables: [
      "خدمات ويب برمجية وواجهات REST APIs فائقة الأداء بـ Python",
      "فحص وتحليل أداء التطبيقات وتقليل زمن الاستجابة (Latency)",
      "تطبيق مبادئ التصميم المعماري النظيف (SOLID) والخدمات المصغرة",
      "معالجة المهام الخلفية غير المتزامنة والمجدولات التلقائية"
    ],
    techStack: ["Python", "هندسة البرمجيات المعمارية", "تحسين الأداء البرمجي", "التطوير الشامل"],
    icon: "Terminal"
  },
  {
    id: "srv-ai-agent",
    title: "تكامل حلول الذكاء الاصطناعي والأتمتة الذكية",
    tagline: "تعزيز البرمجيات بقدرات نماذج اللغة الضخمة (LLMs) ووكلاء الاستكشاف الذكيين.",
    category: "AI & Cloud",
    description: "توظيف الخبرة العملية المكتسبة كمهندس ذكاء اصطناعي للباك إند في FlyRank AI. دمج نماذج الذكاء الاصطناعي التوليدي، وتطوير وكلاء الاكتشاف الذاتيين، ومحركات البحث الدلالي داخل أنظمة الويب والشركات.",
    deliverables: [
      "تكامل مخصص لنماذج اللغة (Gemini API / LLMs) والمساعدين الحواريين",
      "بناء وكلاء الذكاء الاصطناعي للاستكشاف واستخلاص البيانات تلقائياً",
      "محركات البحث الدلالي وتلخيص المحتوى التفاعلي الفوري",
      "أتمتة العمليات التشغيلية المعقدة وكتابة نصوص برمجية ذكية"
    ],
    techStack: ["Gemini API", "هندسة الأوامر الذكية", "Python", "الحوسبة السحابية", "Node.js"],
    icon: "Sparkles"
  },
  {
    id: "srv-db-optimization",
    title: "هندسة قواعد البيانات وتحسين سرعة الاستعلامات",
    tagline: "تصميم قواعد بيانات علائقية ومستندية قابلة للتوسع وضبط الفهارس لضمان سرعة الاستجابة.",
    category: "Data Engineering",
    description: "تصميم وتطوير مخططات قواعد البيانات العلائقية والمستندية (PostgreSQL, MongoDB, Firebase). تحليل خطط تنفيذ الاستعلامات وضبط الفهارس وتطبيق قواعد سلامة البيانات لتحقيق استجابة فائقة السرعة تحت الضغط.",
    deliverables: [
      "تصميم وهيكلة قواعد البيانات العلائقية (SQL) والمستندية (NoSQL)",
      "تحليل خطط الاستعلامات وضبط الفهارس لتسريع استرجاع البيانات",
      "إدارة العمليات التبادلية الآمنة وإدارة تجمعات الاتصال (Connection Pooling)",
      "استراتيجيات ترحيل قواعد البيانات وإدارة إصدارات المخططات"
    ],
    techStack: ["PostgreSQL", "MongoDB", "Firebase", "SQL", "أساسيات قواعد البيانات"],
    icon: "Server"
  },
  {
    id: "srv-cloud-devops",
    title: "النشر السحابي وأتمتة العمليات (DevOps & CI/CD)",
    tagline: "حاويات التطبيقات السحابية، أنابيب النشر المؤتمتة، وضمان موثوقية الأنظمة.",
    category: "AI & Cloud",
    description: "بناء الجسر السلس بين بيئة التطوير المحلية وبيئة الإنتاج السحابية الحية من خلال الحاويات البرمجية، أنابيب التكامل والنشر المستمر (CI/CD)، إدارة المتغيرات السرية، والمراقبة الحية لحالة الخوادم.",
    deliverables: [
      "حزم وتجهيز التطبيقات بالحاويات باستخدام Docker",
      "بناء أنابيب التكامل والنشر المستمر التلقائية عبر GitHub Actions",
      "تهيئة الاستضافة السحابية وتوجيه النطاقات (GCP, Vercel)",
      "مراقبة الجاهزية التشغيلية وتأمين البيئات البرمجية"
    ],
    techStack: ["Git", "GitHub Actions", "Docker", "الحوسبة السحابية", "Vite"],
    icon: "Cloud"
  }
];

export const enFeaturedSystems: Project[] = featuredSystemsData;

export const arFeaturedSystems: Project[] = [
  {
    id: "sys-farmflow",
    title: "منصة FarmFlow",
    description: "منصة موزعة لسلاسل التوريد والخدمات اللوجستية الزراعية. تربط المزارعين مباشرة بالأسواق التجارية الكبرى عبر مزامنة منخفضة الكمون للمخزون وجدولة آلية للمسارات.",
    category: "أنظمة خلفية موزعة",
    skills: ["FastAPI", "PostgreSQL", "Docker", "Telemetry"],
    badge: "أنظمة خلفية موزعة",
    role: "المطور الرئيسي",
    github: "https://github.com/Hany-Zamalkawy/NTI_Summer_Intership_Project",
    link: "https://hany-zamalkawy.github.io/NTI_Summer_Intership_Project/"
  },
  {
    id: "sys-mizan",
    title: "مشروع ميزان الذكي",
    description: "خط أنابيب ذكاء اصطناعي وتعرف ضوئي آلي (OCR) لتصنيف المستندات القانونية. يستوعب العقود باللغتين العربية واللاتينية، ويستخرج الكيانات ويفك غموضها مباشرة إلى التخزين المفهرس.",
    category: "الذكاء الاصطناعي وأتمتة المستندات",
    skills: ["Tesseract OCR", "Drive Webhooks", "n8n Automation", "Streamlit"],
    badge: "الذكاء الاصطناعي وأتمتة المستندات",
    role: "خط أنابيب مؤتمت",
    github: "https://github.com/Hany-Zamalkawy",
    link: "https://github.com/Hany-Zamalkawy"
  },
  {
    id: "sys-leon",
    title: "وكالة ليون الرقمية الإبداعية",
    description: "واجهة وكالة رقمية فائقة السرعة طُوّرت بدون مكتبات خارجية وتعتمد محركات تخطيط وتصميم متجاوب كاملة، مسجلة 100/100 في جميع اختبارات Google Lighthouse.",
    category: "ويب فائق الأداء",
    skills: ["HTML5 Semantic", "CSS3 Modular", "SEO & Performance"],
    badge: "ويب فائق الأداء",
    role: "100/100 Lighthouse",
    github: "https://github.com/Hany-Zamalkawy/Leon-Agency",
    link: "https://hany-zamalkawy.github.io/Leon-Agency/"
  },
  {
    id: "sys-volt",
    title: "منصة فولت للتحليلات الرياضية",
    description: "نظام استيعاب وتحليل القياسات الرياضية عن بُعد في الوقت الفعلي، يلتقط متجهات السرعة، ومناطق معدل ضربات القلب، والمواقع المكانية التكتيكية مع تقارير آلية وكشف الشذوذ.",
    category: "تحليلات رياضية وقياسات عن بُعد",
    skills: ["Python", "Polars", "Tailwind", "REST API"],
    badge: "تحليلات رياضية وقياسات عن بُعد",
    role: "محرك القياسات عن بُعد",
    github: "https://github.com/Hany-Zamalkawy/-VOLT-Sports",
    link: "https://hany-zamalkawy.github.io/-VOLT-Sports/"
  },
  {
    id: "sys-hanys-world",
    title: "HANY'S WORLD",
    description: "منصة هندسة برمجيات وسيرة ذاتية تفاعلية ثنائية اللغة (عربي/إنجليزي) و(RTL/LTR) مزودة بمحطة أوامر تفاعلية مع مؤثرات صوتية للكتابة، ومخطط معمارية البيانات، ونظام مراسلات Express، وتصدير فوري للسيرة الذاتية بصيغة PDF.",
    category: "تطوير متكامل وواجهات تفاعلية",
    skills: ["React 19", "TypeScript", "Express.js", "Tailwind CSS", "Framer Motion", "Web Audio API"],
    badge: "النظام الرئيسي للإنتاج",
    role: "المؤسس والمعماري الرئيسي",
    github: "https://github.com/Hany-Zamalkawy/My-Portfolio-HANY-S-WORLD",
    link: "https://hany-s-world-597716960036.europe-west2.run.app/"
  }
];
