import { motion } from "framer-motion";
import { specializationPillars } from "../data";
import { uiTranslations } from "../translations";

interface SpecializationPillarsProps {
  lang: "en" | "ar";
}

export default function SpecializationPillars({ lang }: SpecializationPillarsProps) {
  const t = uiTranslations[lang];

  return (
    <motion.section
      id="specialization"
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
            {t.specializationKicker}
          </span>
          <div className="h-px flex-1 bg-white/10" />
        </div>
        <h2 className="text-3xl font-bold text-white tracking-tight">
          {t.specializationTitle}
        </h2>
        <p className="text-zinc-400 text-sm max-w-2xl leading-relaxed">
          {t.specializationSubtitle}
        </p>
      </div>

      {/* Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {specializationPillars.map((pillar) => {
          const isEmerald = pillar.accentColor === "emerald";
          return (
            <motion.div
              key={pillar.id}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="card-surface rounded-2xl p-7 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        isEmerald
                          ? "bg-emerald-500/10 border border-emerald-500/20 text-emerald-400"
                          : "bg-teal-500/10 border border-teal-500/20 text-teal-400"
                      }`}
                    >
                      <span className="material-symbols-outlined text-[20px]">
                        {pillar.icon}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">
                        {lang === "en" ? pillar.titleEn : pillar.titleAr}
                      </h3>
                      <p className="text-xs text-zinc-400 font-mono">
                        {lang === "en" ? pillar.subtitleEn : pillar.subtitleAr}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`px-2.5 py-1 rounded-md font-mono text-[11px] font-medium border ${
                      isEmerald
                        ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                        : "bg-teal-500/10 text-teal-400 border-teal-500/20"
                    }`}
                  >
                    {pillar.badge}
                  </span>
                </div>

                <p className="text-zinc-400 text-sm mt-5 leading-relaxed">
                  {lang === "en" ? pillar.descriptionEn : pillar.descriptionAr}
                </p>

                <div className="flex flex-wrap gap-2 pt-6">
                  {pillar.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.08] text-zinc-300 font-mono text-xs transition-colors ${
                        isEmerald
                          ? "hover:border-emerald-500/40 hover:text-white"
                          : "hover:border-teal-500/40 hover:text-white"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
