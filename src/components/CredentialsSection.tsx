import { motion } from "framer-motion";
import { accreditedCertificationsData, educationData } from "../data";
import { arAccreditedCertifications, arEducation, uiTranslations } from "../translations";

interface CredentialsSectionProps {
  lang: "en" | "ar";
}

export default function CredentialsSection({ lang }: CredentialsSectionProps) {
  const t = uiTranslations[lang];
  const educationList = lang === "en" ? educationData : arEducation;
  const certList = lang === "en" ? accreditedCertificationsData : arAccreditedCertifications;

  return (
    <motion.section
      id="credentials"
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
            {t.credentialsKicker}
          </span>
          <div className="h-px flex-1 bg-white/10" />
        </div>
        <h2 className="text-3xl font-bold text-white tracking-tight">
          {lang === "en"
            ? "Education, Accreditations & Certifications"
            : "التعليم الأكاديمي والشهادات والاعتمادات المهنية"}
        </h2>
      </div>

      {/* Academic Education Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {educationList.map((edu) => (
          <motion.div
            key={edu.id}
            whileHover={{ y: -2 }}
            className="card-surface rounded-2xl p-6 flex flex-col justify-between gap-4 border border-white/[0.08]"
          >
            <div className="space-y-2.5">
              <div className="flex items-center justify-between gap-2">
                <div className="w-9 h-9 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 shrink-0">
                  <span className="material-symbols-outlined text-[19px]">
                    school
                  </span>
                </div>
                <span className="font-mono text-[11px] text-emerald-400 font-medium">
                  {edu.period}
                </span>
              </div>
              <h3 className="text-sm font-bold text-white leading-snug pt-1">
                {edu.school}
              </h3>
              <p className="text-xs text-zinc-300/90 leading-relaxed">
                {edu.degree}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Credentials List Container */}
      <div className="card-surface rounded-2xl p-6 sm:p-8 space-y-4">
        {certList.map((cert) => (
          <motion.div
            key={cert.id}
            whileHover={{ x: lang === "ar" ? -3 : 3 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:border-emerald-500/30 transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                <span className="material-symbols-outlined text-[20px]">
                  verified
                </span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">
                  {cert.name}
                </h4>
                <p className="text-xs text-zinc-400 font-mono mt-0.5">
                  {cert.issuer}
                </p>
              </div>
            </div>

            <span className="font-mono text-xs text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-500/20 self-start sm:self-center shrink-0">
              {cert.code || `VERIFIED: ${cert.id.toUpperCase()}`}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
