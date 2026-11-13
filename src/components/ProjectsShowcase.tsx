import { motion } from "framer-motion";
import { Project } from "../types";
import { uiTranslations } from "../translations";

interface ProjectsShowcaseProps {
  projects: Project[];
  selectedSkill?: string | null;
  onSelectSkill?: (skill: string | null) => void;
  lang: "en" | "ar";
}

export default function ProjectsShowcase({
  projects,
  lang,
}: ProjectsShowcaseProps) {
  const t = uiTranslations[lang];

  const getProjectIcon = (index: number, id?: string) => {
    if (id === "sys-hanys-world") return "terminal";
    if (id === "sys-hanys-world-v2") return "deployed_code";
    switch (index) {
      case 0:
        return "hub";
      case 1:
        return "document_scanner";
      case 2:
        return "bolt";
      case 3:
        return "monitoring";
      default:
        return "terminal";
    }
  };

  const getAccentStyles = (index: number, id?: string) => {
    if (id === "sys-hanys-world") {
      return {
        text: "text-emerald-400",
        hoverIcon: "group-hover:text-emerald-400",
        hoverTitle: "group-hover:text-emerald-400",
      };
    }
    if (id === "sys-hanys-world-v2") {
      return {
        text: "text-teal-400",
        hoverIcon: "group-hover:text-teal-400",
        hoverTitle: "group-hover:text-teal-400",
      };
    }
    switch (index) {
      case 0:
        return {
          text: "text-emerald-400",
          hoverIcon: "group-hover:text-emerald-400",
          hoverTitle: "group-hover:text-emerald-400",
        };
      case 1:
        return {
          text: "text-teal-400",
          hoverIcon: "group-hover:text-teal-400",
          hoverTitle: "group-hover:text-teal-400",
        };
      case 2:
        return {
          text: "text-emerald-400",
          hoverIcon: "group-hover:text-emerald-400",
          hoverTitle: "group-hover:text-emerald-400",
        };
      case 3:
      default:
        return {
          text: "text-cyan-400",
          hoverIcon: "group-hover:text-cyan-400",
          hoverTitle: "group-hover:text-cyan-400",
        };
    }
  };

  return (
    <motion.section
      id="systems"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      {/* Section Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="font-mono text-emerald-400 text-xs font-semibold tracking-wider">
            {t.systemsKicker}
          </span>
          <div className="h-px flex-1 bg-white/10" />
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h2 className="text-3xl font-bold text-white tracking-tight">
            {t.systemsTitle}
          </h2>
          <a
            className="font-mono text-xs text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5 transition-colors group cursor-pointer"
            href="https://github.com/Hany-Zamalkawy"
            target="_blank"
            rel="noreferrer"
          >
            <span>{t.viewAllGithub}</span>
            <span className="material-symbols-outlined text-[15px] group-hover:translate-x-0.5 transition-transform">
              {lang === "ar" ? "arrow_back" : "arrow_forward"}
            </span>
          </a>
        </div>
      </div>

      {/* Systems Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj, idx) => {
          const styles = getAccentStyles(idx, proj.id);
          const icon = getProjectIcon(idx, proj.id);
          const isOddLast = projects.length % 2 === 1 && idx === projects.length - 1;
          const hasDistinctLive = Boolean(proj.link && proj.link !== proj.github);

          return (
            <motion.div
              key={proj.id}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className={`card-surface rounded-2xl p-7 flex flex-col justify-between group transition-all ${
                isOddLast ? "md:col-span-2" : ""
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span
                    className={`text-[11px] font-mono font-semibold tracking-wider uppercase ${styles.text}`}
                  >
                    {proj.badge || proj.category}
                  </span>
                  <span
                    className={`material-symbols-outlined text-zinc-500 ${styles.hoverIcon} transition-colors`}
                  >
                    {icon}
                  </span>
                </div>

                <h3
                  className={`text-xl font-bold text-white ${styles.hoverTitle} transition-colors`}
                >
                  {proj.title}
                </h3>

                <p className="text-sm text-zinc-400 leading-relaxed">
                  {proj.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {proj.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md bg-white/[0.04] text-[11px] font-mono text-zinc-300 border border-white/[0.04] hover:border-emerald-500/30 hover:text-white transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
                <span className={`font-mono text-xs ${styles.text}`}>
                  {proj.role || "Core Maintainer"}
                </span>

                <div className="flex items-center gap-4">
                  {hasDistinctLive && (
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-xs text-emerald-400 hover:text-emerald-300 flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <span>{t.liveSystem}</span>
                      <span className="material-symbols-outlined text-[14px]">
                        open_in_new
                      </span>
                    </a>
                  )}
                  <a
                    href={proj.github || proj.link || "https://github.com/Hany-Zamalkawy"}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-xs text-zinc-300 hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>{t.sourceSpecs}</span>
                    <span className="material-symbols-outlined text-[14px]">
                      north_east
                    </span>
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
