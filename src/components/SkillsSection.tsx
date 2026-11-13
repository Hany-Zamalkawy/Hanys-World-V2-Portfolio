import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Code2, Cloud, Database, X, Sparkles, Code } from "lucide-react";
import { Skill } from "../types";
import { uiTranslations } from "../translations";

interface SkillsSectionProps {
  skills: Skill[];
  selectedSkill: string | null;
  onSelectSkill: (skill: string | null) => void;
  lang: "en" | "ar";
}

export default function SkillsSection({
  skills,
  selectedSkill,
  onSelectSkill,
  lang,
}: SkillsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string | "All">("All");
  const t = uiTranslations[lang];

  const categories = [
    { name: "All", label: lang === "en" ? "All" : "الكل", icon: <Cpu className="w-4 h-4" /> },
    { name: "Languages", label: lang === "en" ? "Languages" : "اللغات", icon: <Code className="w-4 h-4" /> },
    { name: "Front-End", label: lang === "en" ? "Front-End" : "الواجهات الأمامية", icon: <Code2 className="w-4 h-4" /> },
    { name: "Back-End", label: lang === "en" ? "Back-End" : "الأنظمة الخلفية", icon: <Database className="w-4 h-4" /> },
    { name: "Data Engineering", label: lang === "en" ? "Data Engineering" : "هندسة البيانات", icon: <Cpu className="w-4 h-4" /> },
    { name: "Cloud & AI", label: lang === "en" ? "Cloud & AI" : "السحابة والذكاء الاصطناعي", icon: <Cloud className="w-4 h-4" /> },
    { name: "Tools", label: lang === "en" ? "Tools" : "أدوات التطوير", icon: <Sparkles className="w-4 h-4" /> },
  ];

  // Group skills by category
  const groupedSkills = {
    Languages: skills.filter((s) => s.category === "Languages"),
    "Front-End": skills.filter((s) => s.category === "Front-End"),
    "Back-End": skills.filter((s) => s.category === "Back-End"),
    "Data Engineering": skills.filter((s) => s.category === "Data Engineering"),
    "Cloud & AI": skills.filter((s) => s.category === "Cloud & AI"),
    Tools: skills.filter((s) => s.category === "Tools"),
  };

  const categoryDetails = [
    {
      key: "Languages",
      title: lang === "en" ? "Languages" : "اللغات المعتمدة",
      desc: lang === "en" ? "Syntax and foundations for robust, high-performance scripts and applications." : "القواعد والأساسيات لبناء نصوص برمجية وتطبيقات قوية وفعالة.",
      icon: <Code className="w-5 h-5 text-[#4be277]" />,
    },
    {
      key: "Front-End",
      title: lang === "en" ? "Front-End" : "الواجهات الأمامية",
      desc: lang === "en" ? "Modern component architecture, responsive UIs, and real-time streaming displays." : "هندسة المكونات الحديثة، واجهات متجاوبة، وعرض تدفق البيانات المباشر.",
      icon: <Code2 className="w-5 h-5 text-[#4be277]" />,
    },
    {
      key: "Back-End",
      title: lang === "en" ? "Back-End" : "الأنظمة الخلفية",
      desc: lang === "en" ? "High-concurrency servers, resilient REST APIs, and business domain logic." : "خوادم فائقة التزامن، واجهات برمجة REST، ومنطق الأعمال المؤسسي.",
      icon: <Database className="w-5 h-5 text-[#4be277]" />,
    },
    {
      key: "Data Engineering",
      title: lang === "en" ? "Data Engineering" : "هندسة البيانات",
      desc: lang === "en" ? "Robust ETL/ELT pipelines, analytical warehousing, and relational data modeling." : "خطوط أنابيب بيانات قوية (ETL/ELT)، مستودعات تحليلية، ونمذجة البيانات.",
      icon: <Cpu className="w-5 h-5 text-[#4be277]" />,
    },
    {
      key: "Cloud & AI",
      title: lang === "en" ? "Cloud & AI" : "السحابة والذكاء الاصطناعي",
      desc: lang === "en" ? "LLM integrations, prompt engineering, serverless container hosting, and MCP." : "تكاملات النماذج اللغوية، هندسة الأوامر، استضافة الحاويات، وبروتوكول MCP.",
      icon: <Cloud className="w-5 h-5 text-[#4be277]" />,
    },
    {
      key: "Tools",
      title: lang === "en" ? "Developer Tools" : "أدوات التطوير",
      desc: lang === "en" ? "Version control, containerization, AI-assisted coding, and IDE environments." : "إدارة الإصدارات، الحاويات، البرمجة المدعومة بالذكاء الاصطناعي، وبيئات العمل.",
      icon: <Sparkles className="w-5 h-5 text-[#4be277]" />,
    },
  ];

  const handleChipClick = (skillName: string) => {
    if (selectedSkill === skillName) {
      onSelectSkill(null); // toggle off
    } else {
      onSelectSkill(skillName);
    }
  };

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="space-y-8"
    >
      {/* Header */}
      <div className="space-y-3">
        <h2 className="font-sans text-3xl font-black flex items-center gap-4 text-[#dce5d9]">
          <span className="text-[#4be277] font-mono text-lg font-medium">01.</span> {t.techStackTitle}
        </h2>
        <div className="h-[2px] w-16 bg-[#4be277]" />
        <p className="text-[#bccbb9] text-sm max-w-xl">
          {lang === "en" 
            ? "A collection of technologies I have integrated across projects, enterprise solutions, and sandbox environments."
            : "مجموعة من التقنيات والأدوات التي قمت بدمجها وتوظيفها عبر المشاريع المختلفة وحلول الشركات."}
        </p>
      </div>

      {/* Filter Toolbar & Helper Alerts */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#3d4a3d]/30 pb-4">
        {/* Category filters */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`flex items-center gap-2 px-4 py-2 font-mono text-xs uppercase tracking-wider border rounded-sm transition-all active:scale-95 ${
                activeCategory === cat.name
                  ? "bg-[#4be277]/10 border-[#4be277] text-[#4be277]"
                  : "border-[#3d4a3d] hover:border-[#bccbb9]/40 text-[#bccbb9]"
              }`}
              id={`skills-filter-btn-${cat.name.replace("/", "-")}`}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </div>

        {/* Global Selected Skill State Indicator */}
        {selectedSkill && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="flex items-center gap-2 bg-[#4be277]/10 border border-[#4be277]/30 px-3 py-1.5 rounded-sm animate-pulse"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#4be277]" />
            <span className="font-mono text-[11px] text-[#4be277] font-semibold">
              {lang === "en" ? `Filtering by: ${selectedSkill}` : `البحث مصفى بـ: ${selectedSkill}`}
            </span>
            <button
              onClick={() => onSelectSkill(null)}
              className="text-[#bccbb9] hover:text-white transition-colors ml-1 focus:outline-none cursor-pointer"
              title="Clear selection filter"
              id="skills-clear-filter-btn"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </div>

      {/* Grid of Stack Containers */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <AnimatePresence mode="popLayout">
          {categoryDetails
            .filter((cat) => activeCategory === "All" || activeCategory === cat.key)
            .map((cat, idx) => {
              const list = groupedSkills[cat.key as keyof typeof groupedSkills];
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -4 }}
                  key={cat.key}
                  className="p-6 border border-[#3d4a3d] bg-[#091009]/80 rounded-sm hover:border-[#4be277] transition-colors duration-300 terminal-glow-hover flex flex-col justify-between space-y-6"
                  id={`skills-category-card-${cat.key}`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      {cat.icon}
                      <h3 className="font-sans text-base font-bold text-[#dce5d9] tracking-wider uppercase">
                        {cat.title}
                      </h3>
                    </div>
                    <p className="text-[11px] text-[#bccbb9]/60 leading-relaxed font-sans">
                      {cat.desc}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {list.map((skill) => {
                      const isSelected = selectedSkill === skill.name;
                      return (
                        <button
                          key={skill.name}
                          onClick={() => handleChipClick(skill.name)}
                          className={`px-3 py-1.5 border font-mono text-xs tracking-wide transition-all active:scale-95 rounded-sm ${
                            isSelected
                              ? "bg-[#4be277] border-[#4be277] text-[#003915] font-bold shadow-lg shadow-[#4be277]/20"
                              : "border-[#3d4a3d] text-[#bccbb9] hover:border-[#4be277]/60 hover:text-white bg-[#161d16]/30"
                          }`}
                          id={`skills-chip-${skill.name}`}
                        >
                          {skill.name}
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}
