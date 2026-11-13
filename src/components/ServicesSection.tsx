import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Service } from "../types";
import { uiTranslations } from "../translations";

interface ServicesSectionProps {
  services: Service[];
  lang: "en" | "ar";
}

export default function ServicesSection({ services, lang }: ServicesSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const t = uiTranslations[lang];

  const categories = [
    { id: "All", label: lang === "en" ? "All Services" : "كافة الخدمات" },
    { id: "Full-Stack", label: lang === "en" ? "Full-Stack" : "تطوير الويب الشامل" },
    { id: "Data Engineering", label: lang === "en" ? "Data Engineering" : "هندسة البيانات" },
    { id: "Python & Architecture", label: lang === "en" ? "Python & Architecture" : "بايثون والمعمارية" },
    { id: "AI & Cloud", label: lang === "en" ? "AI & Cloud" : "الذكاء الاصطناعي والسحابة" },
  ];

  const filteredServices =
    activeCategory === "All"
      ? services
      : services.filter((s) => s.category === activeCategory);

  const getMaterialIcon = (iconName: string) => {
    switch (iconName) {
      case "Layers":
        return "layers";
      case "Database":
        return "database";
      case "Terminal":
        return "terminal";
      case "Sparkles":
        return "auto_awesome";
      case "Server":
        return "dns";
      case "Cloud":
        return "cloud_done";
      default:
        return "memory";
    }
  };

  const getAccentTheme = (index: number) => {
    const themes = [
      {
        badge: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
        icon: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
        hoverTitle: "group-hover:text-emerald-400",
        check: "text-emerald-400",
        cta: "bg-emerald-500/10 hover:bg-emerald-500 text-emerald-300 hover:text-zinc-950 border-emerald-500/25 hover:border-emerald-400",
      },
      {
        badge: "text-teal-400 bg-teal-500/10 border-teal-500/20",
        icon: "text-teal-400 bg-teal-500/10 border-teal-500/20",
        hoverTitle: "group-hover:text-teal-400",
        check: "text-teal-400",
        cta: "bg-teal-500/10 hover:bg-teal-400 text-teal-300 hover:text-zinc-950 border-teal-500/25 hover:border-teal-400",
      },
      {
        badge: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
        icon: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
        hoverTitle: "group-hover:text-cyan-400",
        check: "text-cyan-400",
        cta: "bg-cyan-500/10 hover:bg-cyan-400 text-cyan-300 hover:text-zinc-950 border-cyan-500/25 hover:border-cyan-400",
      },
    ];
    return themes[index % themes.length];
  };

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const offsetPosition = elementRect - bodyRect - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("moustfahhany5@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <motion.section
      id="services"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="space-y-8 scroll-mt-24"
    >
      {/* Section Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="font-mono text-emerald-400 text-xs font-semibold tracking-wider">
            {t.servicesKicker}
          </span>
          <div className="h-px flex-1 bg-white/10" />
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-white tracking-tight">
              {t.servicesTitle}
            </h2>
            <p className="text-zinc-400 text-sm max-w-2xl leading-relaxed">
              {t.servicesDesc}
            </p>
          </div>
          <span className="font-mono text-[11px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-md shrink-0 self-start md:self-auto">
            {lang === "en" ? `${services.length} Service Branches` : `${services.length} مسارات خدمة`}
          </span>
        </div>
      </div>

      {/* Category Filter Bar */}
      <div className="flex flex-wrap items-center gap-2 pb-2">
        <span className="font-mono text-[11px] text-zinc-500 uppercase tracking-wider flex items-center gap-1.5 mr-1">
          <span className="material-symbols-outlined text-[15px] text-emerald-400">tune</span>
          <span>{lang === "en" ? "Scope:" : "التصنيف:"}</span>
        </span>
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              id={`service-cat-btn-${cat.id.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
              className={`px-3.5 py-1.5 rounded-lg font-mono text-xs transition-all cursor-pointer border ${
                isActive
                  ? "bg-emerald-500/15 border-emerald-500/40 text-emerald-300 font-semibold shadow-sm shadow-emerald-500/10"
                  : "bg-white/[0.03] border-white/[0.08] text-zinc-400 hover:text-white hover:border-white/20"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredServices.map((service, index) => {
            const theme = getAccentTheme(index);

            return (
              <motion.div
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                whileHover={{ y: -3 }}
                key={service.id}
                id={`service-card-${service.id}`}
                className="card-surface rounded-2xl p-6 flex flex-col justify-between group transition-all"
              >
                <div className="space-y-4">
                  {/* Top Icon & Category */}
                  <div className="flex items-center justify-between gap-3">
                    <div
                      className={`w-10 h-10 rounded-xl border flex items-center justify-center ${theme.icon}`}
                    >
                      <span className="material-symbols-outlined text-[20px]">
                        {getMaterialIcon(service.icon)}
                      </span>
                    </div>
                    <span
                      className={`px-2.5 py-1 rounded-md border font-mono text-[10px] uppercase tracking-wider font-medium ${theme.badge}`}
                    >
                      {service.category}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-1.5">
                    <h3
                      className={`text-lg font-bold text-white transition-colors leading-snug ${theme.hoverTitle}`}
                    >
                      {service.title}
                    </h3>
                    <p className="font-mono text-[11px] text-zinc-400 leading-relaxed">
                      {service.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-zinc-400 leading-relaxed pt-1">
                    {service.description}
                  </p>

                  {/* Deliverables */}
                  <div className="space-y-2 pt-3 border-t border-white/[0.07]">
                    <h4 className="font-mono text-[10px] text-zinc-300 uppercase tracking-wider flex items-center gap-1.5">
                      <span className={`material-symbols-outlined text-[14px] ${theme.check}`}>
                        checklist
                      </span>
                      <span>{lang === "en" ? "Deliverables" : "المخرجات الفنية"}</span>
                    </h4>
                    <ul className="space-y-1.5 text-xs text-zinc-300">
                      {service.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2">
                          <span
                            className={`material-symbols-outlined text-[14px] shrink-0 mt-0.5 ${theme.check}`}
                          >
                            check_circle
                          </span>
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {service.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.05] text-[11px] font-mono text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer CTA */}
                <div className="pt-5 mt-5 border-t border-white/[0.08]">
                  <button
                    onClick={scrollToContact}
                    id={`inquire-btn-${service.id}`}
                    className={`w-full inline-flex items-center justify-center gap-2 border font-mono text-xs uppercase tracking-wider font-semibold py-2.5 px-3 rounded-xl transition-all active:scale-95 cursor-pointer ${theme.cta}`}
                  >
                    <span>{t.requestService}</span>
                    <span className="material-symbols-outlined text-[15px]">
                      {lang === "ar" ? "arrow_back" : "arrow_forward"}
                    </span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Consultation Banner */}
      <div className="card-surface rounded-2xl p-6 md:p-8 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="font-mono text-[11px] uppercase tracking-widest text-emerald-400 font-semibold">
                {lang === "en" ? "Direct Technical Consultation" : "استشارة هندسية برمجية مباشرة"}
              </span>
            </div>
            <h3 className="text-xl font-bold text-white">
              {lang === "en"
                ? "Need a scalable data pipeline or full-stack software system?"
                : "هل لديك مشروع يتطلب هندسة بيانات متقدمة أو تطبيق ويب شامل؟"}
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              {lang === "en"
                ? "Available for freelance consulting, full-stack web engineering, DEPI-grade ETL/ELT data pipelines, and AI backend automation."
                : "متاح للعمل الحر والاستشارات الهندسية المتخصصة، بناء خطوط أنابيب معالجة البيانات، وتطوير تطبيقات الويب وحلول الذكاء الاصطناعي."}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0 w-full lg:w-auto">
            <button
              onClick={handleCopyEmail}
              id="services-copy-email-btn"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-emerald-500/40 text-zinc-200 font-mono text-xs transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px] text-emerald-400">
                {copiedEmail ? "check" : "content_copy"}
              </span>
              <span>
                {copiedEmail
                  ? t.copied
                  : lang === "en"
                    ? "Copy Direct Email"
                    : "نسخ البريد الإلكتروني"}
              </span>
            </button>

            <button
              onClick={scrollToContact}
              id="services-email-cta-btn"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-mono text-xs uppercase tracking-wider font-bold transition-all shadow-lg shadow-emerald-500/20 cursor-pointer active:scale-95"
            >
              <span>{t.discussScope}</span>
              <span className="material-symbols-outlined text-[16px]">
                {lang === "ar" ? "arrow_back" : "arrow_forward"}
              </span>
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
