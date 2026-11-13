import { motion } from "framer-motion";
import { Profile } from "../types";
import { uiTranslations } from "../translations";
import { telemetryMetrics } from "../data";

interface HeroProps {
  profile: Profile;
  onResumeClick: () => void;
  lang: "en" | "ar";
}

export default function Hero({ profile, onResumeClick, lang }: HeroProps) {
  const t = uiTranslations[lang];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative rounded-3xl border border-white/[0.08] bg-[#0c1018]/90 overflow-hidden shadow-2xl"
    >
      {/* Dynamic Studio Backdrop with Vignette Blend */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Portrait Image masked seamlessly to blend graphic background away */}
        <div className={`absolute ${lang === "ar" ? "left-0" : "right-0"} top-0 bottom-0 w-full lg:w-[62%] h-full flex ${lang === "ar" ? "justify-start" : "justify-end"}`}>
          <img
            alt="Moustafa Hany Azab (Hany Zamlkawy)"
            className="w-full h-full object-cover object-[center_35%] lg:object-[68%_38%] opacity-35 lg:opacity-45 hero-mask filter contrast-125 saturate-50 hover:saturate-100 transition-all duration-1000 select-none"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxTtrKnvj3GkyzSS64-nXsoiJAitppTdigXJs6-PBCGMZMUMhvHNWF-ifM4fT4WXN6GCZHpd7JG61CM8g66mI2Fs8za5uDNsoSHCtwwlzTpL-AYRUDcYLhCxThll6sjLLiGq3OzXTohGuZiJaRRQ6MYhlV6qRhr24diSEqmf4bZZ4fXmxQq6WTy0B-fKTnSOOMp1Qdi9RbLE-x1j31bSGiawpdSRLnWyRBqYYvjuk"
            referrerPolicy="no-referrer"
          />
        </div>
        {/* Deep Radial and Linear Multi-stop Fades */}
        <div className={`absolute inset-0 bg-gradient-to-${lang === "ar" ? "l" : "r"} from-[#0c1018] via-[#0c1018]/95 lg:via-[#0c1018]/80 to-transparent`} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c1018] via-transparent to-[#0c1018]/60" />
        <div className={`absolute -top-32 ${lang === "ar" ? "-right-32" : "-left-32"} w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl`} />
      </div>

      {/* Hero Foreground Content */}
      <div className="relative z-10 p-8 sm:p-12 lg:p-16 max-w-2xl space-y-7">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-mono font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>{lang === "en" ? "AVAILABLE FOR ENGAGEMENTS · ALEXANDRIA, EGYPT / REMOTE" : "متاح للتعاقد والعمل · الإسكندرية، مصر / عن بُعد"}</span>
        </div>

        {/* Headings */}
        <div className="space-y-3">
          <p className="font-mono text-xs uppercase tracking-widest text-emerald-400/90 font-medium">
            {lang === "en" ? "Full-Stack Architecture · Distributed Data · AI Automation" : "معمارية الأنظمة الكاملة · البيانات الموزعة · أتمتة الذكاء الاصطناعي"}
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
            Moustafa <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              Hany Azab
            </span>
          </h1>
          <div className="flex flex-wrap items-center gap-2 font-mono text-sm sm:text-base text-zinc-300 pt-1">
            <span className="text-emerald-400 font-bold">&gt;</span>
            <span className="text-white font-medium">[{profile.alias || "Hany Zamlkawy"}]</span>
            <span className="text-zinc-500">·</span>
            <span className="text-zinc-300 font-medium">{profile.role}</span>
          </div>
        </div>

        {/* Bio statement */}
        <p className="text-zinc-300 text-base sm:text-lg leading-relaxed font-normal">
          {lang === "en"
            ? "Architecting resilient distributed software systems, high-throughput ETL data pipelines, and intelligent AI automation workflows from zero to production."
            : "تصميم وتنفيذ أنظمة برمجية موزعة عالية المرونة، وخطوط أنابيب بيانات ومعالجة فائقة السرعة، وتدفقات أتمتة ذكية بالذكاء الاصطناعي من البداية حتى بيئة الإنتاج."}
        </p>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center gap-3.5 pt-2">
          <a
            href="#systems"
            className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold text-xs uppercase tracking-wider transition-all shadow-lg shadow-emerald-500/20 flex items-center gap-2 active:scale-95 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">deployed_code</span>
            <span>{lang === "en" ? "Explore Architecture" : "استكشف البنية البرمجية"}</span>
          </a>

          <a
            href={profile.githubUrl || "https://github.com/Hany-Zamalkawy"}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-emerald-500/40 text-white font-medium text-xs uppercase tracking-wider transition-all flex items-center gap-2 active:scale-95"
          >
            <span className="material-symbols-outlined text-[18px]">code</span>
            <span>{lang === "en" ? "GitHub Codebases" : "مستودعات GitHub"}</span>
          </a>

          <a
            href={profile.linkedinUrl || "https://www.linkedin.com/in/moustafa-hany-azab-4550692b9/?skipRedirect=true"}
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-emerald-500/40 text-zinc-300 hover:text-white transition-all flex items-center justify-center active:scale-95"
            title="LinkedIn Profile"
          >
            <span className="material-symbols-outlined text-[19px]">link</span>
          </a>

          <a
            href="#contact"
            className="p-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-emerald-500/40 text-zinc-300 hover:text-white transition-all flex items-center justify-center active:scale-95"
            title="Contact Email"
          >
            <span className="material-symbols-outlined text-[19px]">alternate_email</span>
          </a>
        </div>

        {/* Enterprise Telemetry Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/[0.08]">
          {telemetryMetrics.map((metric, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-xl font-bold font-mono text-emerald-400">
                {metric.metric}
              </div>
              <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                {lang === "en" ? metric.labelEn : metric.labelAr}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
