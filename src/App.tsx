import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ManifestTerminal from "./components/ManifestTerminal";
import SpecializationPillars from "./components/SpecializationPillars";
import PipelineVisualizer from "./components/PipelineVisualizer";
import ServicesSection from "./components/ServicesSection";
import ExperienceTimeline from "./components/ExperienceTimeline";
import ProjectsShowcase from "./components/ProjectsShowcase";
import CredentialsSection from "./components/CredentialsSection";
import DispatchConsole from "./components/DispatchConsole";
import Footer from "./components/Footer";
import ResumeModal from "./components/ResumeModal";

import { Profile } from "./types";
import { projectsData } from "./data";
import {
  enProfile,
  arProfile,
  enExperiences,
  arExperiences,
  enFeaturedSystems,
  arFeaturedSystems,
  enEducation,
  arEducation,
  enCertifications,
  arCertifications,
  enServices,
  arServices,
} from "./translations";

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  // Persistent Language State ("en" vs "ar")
  const [lang, setLang] = useState<"en" | "ar">(() => {
    const saved = localStorage.getItem("hany-portfolio-lang");
    return (saved as "en" | "ar") || "en";
  });

  // Synchronize document dir and lang attributes for natural directionality flow (LTR vs RTL)
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("lang", lang);
    if (lang === "ar") {
      root.setAttribute("dir", "rtl");
    } else {
      root.setAttribute("dir", "ltr");
    }
  }, [lang]);

  const handleLangToggle = () => {
    setLang((prev) => {
      const next = prev === "en" ? "ar" : "en";
      localStorage.setItem("hany-portfolio-lang", next);
      return next;
    });
  };

  const profile: Profile = lang === "en" ? enProfile : arProfile;
  const currentExperiences = lang === "en" ? enExperiences : arExperiences;
  const currentSystems = lang === "en" ? enFeaturedSystems : arFeaturedSystems;
  const currentEducation = lang === "en" ? enEducation : arEducation;
  const currentCertifications = lang === "en" ? enCertifications : arCertifications;
  const currentServices = lang === "en" ? enServices : arServices;

  return (
    <div className="min-h-screen bg-[#07090e] text-zinc-100 font-sans selection:bg-emerald-500/30 selection:text-emerald-300 relative">
      {/* Background Architectural Grid Pattern */}
      <div className="fixed inset-0 grid-pattern pointer-events-none z-0 opacity-40" />

      {/* Atmospheric Top Ambient Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[500px] ambient-glow pointer-events-none z-0" />

      {/* Floating Pill Navigation Bar */}
      <Navbar
        onResumeClick={() => setResumeOpen(true)}
        lang={lang}
        onLangToggle={handleLangToggle}
      />

      {/* Main Content Container matching max-w-6xl from design */}
      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-24 space-y-28">
        {/* 00. Hero with Masked Silhouette & Telemetry Strip */}
        <Hero
          profile={profile}
          onResumeClick={() => setResumeOpen(true)}
          lang={lang}
        />

        {/* 01. Profile & Philosophy: macOS Studio Manifest Module (#about) */}
        <ManifestTerminal profile={profile} lang={lang} />

        {/* 02. Dual-Pillar Engineering Specialization (#specialization) */}
        <SpecializationPillars lang={lang} />

        {/* 03. Distributed Architecture Workflow Visualizer (#architecture) */}
        <PipelineVisualizer lang={lang} />

        {/* 04. Engineering & Production Services (#services) */}
        <ServicesSection services={currentServices} lang={lang} />

        {/* 05. Professional Track Record & Deployments (#experience) */}
        <ExperienceTimeline
          experiences={currentExperiences}
          lang={lang}
        />

        {/* 05. Production Codebases & Featured Systems (#systems) */}
        <ProjectsShowcase
          projects={currentSystems}
          lang={lang}
        />

        {/* 06. Verified Industry Credentials & Certifications (#credentials) */}
        <CredentialsSection lang={lang} />

        {/* 07. Dispatch Console & Direct Contact (#contact) */}
        <DispatchConsole lang={lang} />
      </main>

      {/* Global Executive Footer */}
      <Footer lang={lang} />

      {/* Interactive Printable PDF-like Resume Compiler Dialog */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
        profile={profile}
        experiences={currentExperiences}
        education={currentEducation}
        certifications={currentCertifications}
        projects={projectsData}
        lang={lang}
      />
    </div>
  );
}
