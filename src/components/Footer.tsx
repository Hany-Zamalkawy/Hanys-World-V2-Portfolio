import { motion } from "framer-motion";

interface FooterProps {
  lang?: "en" | "ar";
}

export default function Footer({ lang = "en" }: FooterProps) {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="border-t border-white/[0.08] bg-[#07090e] py-12 relative z-10"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-zinc-400">
        <div className="flex items-center gap-3">
          <span className="font-mono text-emerald-400 font-bold">&gt;_</span>
          <span className="text-white font-bold tracking-tight">
            MOUSTAFA HANY AZAB
          </span>
          <span className="text-zinc-600">·</span>
          <span className="font-mono text-zinc-400">
            {lang === "en" ? "Software & Data Engineer" : "مهندس برمجيات وبيانات"}
          </span>
        </div>

        <div className="flex items-center gap-6 font-mono text-xs">
          <a
            className="hover:text-emerald-400 transition-colors"
            href="https://github.com/Hany-Zamalkawy"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="hover:text-emerald-400 transition-colors"
            href="https://www.linkedin.com/in/moustafa-hany-azab-4550692b9/?skipRedirect=true"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="hover:text-emerald-400 transition-colors"
            href="mailto:moustfahany5@gmail.com"
          >
            {lang === "en" ? "Email" : "البريد الإلكتروني"}
          </a>
        </div>

        <div className="font-mono text-[11px] text-zinc-500">
          {lang === "en"
            ? "© 2026 Moustafa Hany Azab. All systems nominal."
            : "© 2026 مصطفى هاني عزب. جميع الأنظمة تعمل بكفاءة."}
        </div>
      </div>
    </motion.footer>
  );
}
