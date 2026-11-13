import React, { useState, useEffect } from "react";
import { Download, Menu, X, Globe } from "lucide-react";
import { uiTranslations } from "../translations";

const CV_PDF_URL = "/assets/aistudio/Moustafa_Hany_Azab_Resume_10-2026__9db89f64.pdf";
const CV_FILENAME = "Moustafa_Hany_Azab_Resume_10-2026.pdf";

interface NavbarProps {
  onResumeClick: () => void;
  lang: "en" | "ar";
  onLangToggle: () => void;
}

export default function Navbar({
  onResumeClick: _onResumeClick,
  lang,
  onLangToggle,
}: NavbarProps) {
  const [activeSection, setActiveSection] = useState("about");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleDownloadCV = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(CV_PDF_URL);
      if (!response.ok) throw new Error("Failed to fetch CV PDF");
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = CV_FILENAME;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(() => URL.revokeObjectURL(blobUrl), 1000);
    } catch {
      const link = document.createElement("a");
      link.href = CV_PDF_URL;
      link.download = CV_FILENAME;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const t = uiTranslations[lang];

  const sections = [
    { id: "about", label: t.about },
    { id: "specialization", label: t.specialization },
    { id: "architecture", label: t.architecture },
    { id: "services", label: t.services },
    { id: "experience", label: t.experience },
    { id: "systems", label: t.systems },
    { id: "credentials", label: t.credentials },
    { id: "contact", label: t.contact },
  ];

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  return (
    <header className="fixed top-5 inset-x-0 z-50 flex justify-center px-4" id="navbar-root">
      <nav className="flex items-center justify-between gap-3 md:gap-5 px-5 py-2.5 rounded-full bg-[#0d121c]/85 border border-white/10 backdrop-blur-xl shadow-2xl shadow-black/60 max-w-6xl w-full">
        {/* Brand Logo */}
        <a
          href="#about"
          onClick={(e) => handleNavClick(e, "about")}
          className="flex items-center gap-2 group shrink-0"
          id="nav-brand-logo"
        >
          <span className="font-mono text-emerald-400 font-semibold text-sm tracking-tight">&gt;_</span>
          <span className="font-mono text-xs uppercase tracking-wider font-bold text-white group-hover:text-emerald-400 transition-colors">
            Hany's World
          </span>
          <span className="inline-block w-1.5 h-3.5 bg-emerald-400/80 animate-pulse"></span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-5">
          {sections.map((section) => {
            const isActive = activeSection === section.id;
            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => handleNavClick(e, section.id)}
                className={`text-xs font-medium transition-colors whitespace-nowrap ${
                  isActive
                    ? "text-emerald-400 font-semibold"
                    : "text-zinc-400 hover:text-white"
                }`}
                id={`nav-link-${section.id}`}
              >
                {section.label}
              </a>
            );
          })}
        </div>

        {/* Right CTA cluster */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          {/* Availability pill */}
          <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/20 text-[11px] font-mono text-emerald-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="whitespace-nowrap">{t.availableBadge}</span>
          </div>

          {/* Bilingual Language Toggle */}
          <button
            onClick={onLangToggle}
            className="px-2.5 py-1 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-emerald-500/40 text-zinc-300 hover:text-white text-xs font-mono transition-all flex items-center gap-1 cursor-pointer"
            title={lang === "en" ? "تبديل إلى العربية" : "Switch to English"}
            id="lang-toggle-btn"
          >
            <Globe className="w-3 h-3 text-emerald-400" />
            <span className="font-semibold uppercase">{lang === "en" ? "AR" : "EN"}</span>
          </button>

          {/* Resume/CV Direct PDF Download */}
          <a
            href={CV_PDF_URL}
            download={CV_FILENAME}
            onClick={handleDownloadCV}
            className="px-3.5 py-1.5 rounded-full bg-white hover:bg-emerald-300 text-zinc-950 text-xs font-semibold transition-all flex items-center gap-1.5 shadow-sm active:scale-95 cursor-pointer"
            id="nav-resume-btn"
            title={lang === "en" ? "Download Resume / CV (PDF)" : "تحميل السيرة الذاتية (PDF)"}
          >
            <Download className="w-3.5 h-3.5 text-zinc-950" />
            <span className="whitespace-nowrap">{t.resumeBtn}</span>
          </a>

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 text-zinc-400 hover:text-white rounded-md bg-white/[0.05] border border-white/10"
            id="mobile-nav-toggle"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-16 inset-x-4 bg-[#0d121c]/95 border border-white/10 rounded-2xl p-5 shadow-2xl backdrop-blur-2xl flex flex-col gap-3">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={(e) => handleNavClick(e, section.id)}
              className="text-sm font-mono text-zinc-300 hover:text-emerald-400 py-1.5 px-3 rounded-lg hover:bg-white/[0.04] transition-colors"
            >
              {section.label}
            </a>
          ))}
          <a
            href={CV_PDF_URL}
            download={CV_FILENAME}
            onClick={(e) => {
              setMobileMenuOpen(false);
              handleDownloadCV(e);
            }}
            className="mt-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 text-xs font-semibold transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{t.resumeBtn} (PDF)</span>
          </a>
          <div className="pt-2 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-emerald-300">
            <span>{t.availableBadge}</span>
          </div>
        </div>
      )}
    </header>
  );
}
