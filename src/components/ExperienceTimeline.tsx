import { motion } from "framer-motion";
import { Experience } from "../types";
import { uiTranslations } from "../translations";

interface ExperienceTimelineProps {
  experiences: Experience[];
  selectedSkill?: string | null;
  onSelectSkill?: (skill: string | null) => void;
  lang: "en" | "ar";
}

export default function ExperienceTimeline({
  experiences,
  lang,
}: ExperienceTimelineProps) {
  const t = uiTranslations[lang];

  // Primary 4 engineering deployments + 3 foundational/training deployments from CV
  const primaryExperiences = experiences.slice(0, 4);
  const auxiliaryExperiences = experiences.slice(4);

  return (
    <motion.section
      id="experience"
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
            {t.experienceKicker}
          </span>
          <div className="h-px flex-1 bg-white/10" />
        </div>
        <h2 className="text-3xl font-bold text-white tracking-tight">
          {t.experienceTitle}
        </h2>
      </div>

      <div className="space-y-4">
        {primaryExperiences.map((exp, idx) => {
          const isFirst = idx === 0;
          return (
            <motion.div
              key={exp.id}
              whileHover={{ y: -2 }}
              className="card-surface rounded-2xl p-6 sm:p-8 transition-all hover:border-emerald-500/30"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/[0.06]">
                <div className="flex items-center gap-3">
                  <span
                    className={`w-2.5 h-2.5 rounded-full shrink-0 ${
                      isFirst ? "bg-emerald-400 animate-pulse" : "bg-zinc-500"
                    }`}
                  />
                  <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                </div>
                <span className="font-mono text-xs text-emerald-400 font-medium">
                  {exp.period}
                </span>
              </div>

              <div className="font-mono text-xs text-zinc-400 mt-3 mb-4">
                {exp.company}
              </div>

              <ul className="space-y-2.5 text-zinc-300 text-sm leading-relaxed">
                {exp.bullets.map((bullet, bidx) => (
                  <li key={bidx} className="flex items-start gap-2.5">
                    <span className="text-emerald-400 mt-0.5 font-bold font-mono">
                      ▹
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {exp.skillsUsed && exp.skillsUsed.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-5">
                  {exp.skillsUsed.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded bg-white/[0.04] text-[11px] font-mono text-zinc-300 border border-white/[0.04] hover:border-emerald-500/30 hover:text-white transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          );
        })}

        {/* Auxiliary Roles & Training Bento Strip */}
        {auxiliaryExperiences.length > 0 && (
          <div
            className={`grid grid-cols-1 gap-4 ${
              auxiliaryExperiences.length === 4 ? "md:grid-cols-2" : "md:grid-cols-3"
            }`}
          >
            {auxiliaryExperiences.map((aux) => (
              <motion.div
                key={aux.id}
                whileHover={{ y: -2 }}
                className="card-surface rounded-xl p-5 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs text-emerald-400 font-medium">
                    {aux.period}
                  </span>
                  <h4 className="text-white font-bold text-sm mt-1">{aux.role}</h4>
                  <p className="text-xs text-zinc-400 font-mono mt-0.5">
                    {aux.company}
                  </p>
                  {aux.bullets.length > 0 && (
                    <p className="text-xs text-zinc-300/90 mt-3 leading-relaxed">
                      {aux.bullets[0]}
                    </p>
                  )}
                </div>

                {aux.skillsUsed && aux.skillsUsed.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-4 mt-4 border-t border-white/[0.05]">
                    {aux.skillsUsed.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded bg-white/[0.04] text-[10px] font-mono text-zinc-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </motion.section>
  );
}
