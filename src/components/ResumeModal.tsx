import { useState } from "react";
import { motion } from "framer-motion";
import { X, Copy, Check, Printer, FileDown, Clipboard, Terminal, User, Mail, Globe, MapPin, Instagram, Facebook, MessageCircle, Send } from "lucide-react";
import { Profile, Experience, Education, Certification, Project } from "../types";
import { jsPDF } from "jspdf";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: Profile;
  experiences: Experience[];
  education: Education[];
  certifications: Certification[];
  projects: Project[];
  lang: "en" | "ar";
}

export default function ResumeModal({
  isOpen,
  onClose,
  profile,
  experiences,
  education,
  certifications,
  projects,
  lang,
}: ResumeModalProps) {
  const [copyFormat, setCopyFormat] = useState<"markdown" | "json">("markdown");
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleDownloadPDF = () => {
    try {
      const doc = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4"
      });

      // Page dimensions
      const pageHeight = doc.internal.pageSize.getHeight();
      const pageWidth = doc.internal.pageSize.getWidth();
      const margin = 20;
      const contentWidth = pageWidth - (margin * 2);
      let y = 15;

      const checkPageBreak = (neededHeight: number) => {
        if (y + neededHeight > pageHeight - margin) {
          doc.addPage();
          y = margin;
          return true;
        }
        return false;
      };

      const writeCenteredText = (text: string, size: number, isBold: boolean) => {
        doc.setFont("times", isBold ? "bold" : "normal");
        doc.setFontSize(size);
        doc.setTextColor(0, 0, 0);
        doc.text(text, pageWidth / 2, y, { align: "center" });
      };

      const writeWrappedText = (text: string, size: number, isBold: boolean, align: "left" | "center" | "right" = "left", indent = 0) => {
        doc.setFont("times", isBold ? "bold" : "normal");
        doc.setFontSize(size);
        doc.setTextColor(0, 0, 0);
        const splitText = doc.splitTextToSize(text, contentWidth - indent);
        splitText.forEach((line: string) => {
          if (align === "center") {
            doc.text(line, pageWidth / 2, y, { align: "center" });
          } else if (align === "right") {
            doc.text(line, pageWidth - margin, y, { align: "right" });
          } else {
            doc.text(line, margin + indent, y);
          }
          y += (size * 0.35) + 1.2;
        });
      };

      const renderSectionHeader = (title: string) => {
        y += 4;
        checkPageBreak(12);
        writeCenteredText(title, 12, true);
        y += 6;
      };

      // --- PAGE 1 ---
      // Header
      // Header
      writeCenteredText("MOUSTAFA HANY AZAB", 16, true);
      y += 5.5;
      writeCenteredText("(HANY_ZAMLKAWY)", 10.5, true);
      y += 5.5;
      writeCenteredText(
        lang === "en"
          ? "Software & Data Engineering · (BIS) Student"
          : "هندسة البرمجيات والبيانات · طالب نظم معلومات الأعمال",
        9.5,
        true
      );
      y += 4.5;
      writeCenteredText(
        "Egypt | +201228494191 | moustfahhany5@gmail.com | linkedin.com/in/moustafa-hany-azab-4550692b9",
        8,
        false
      );
      y += 4;
      writeCenteredText("github.com/Hany-Zamalkawy", 8, false);
      y += 7;

      // 1. PROFESSIONAL SUMMARY
      renderSectionHeader(lang === "en" ? "PROFESSIONAL SUMMARY" : "الملخص المهني");
      const summaryText =
        lang === "en"
          ? (profile.heroBio || profile.bio)
          : (profile.heroBio || profile.bio);
      writeWrappedText(summaryText, 9, false);
      y += 3;

      // 2. EXPERIENCE
      renderSectionHeader(lang === "en" ? "EXPERIENCE" : "الخبرات العملية");
      experiences.forEach((exp) => {
        checkPageBreak(22);
        doc.setFont("times", "bold");
        doc.setFontSize(9.5);
        doc.text(`• ${exp.role} | ${exp.company} | ${exp.period}`, margin, y);
        y += 4.5;

        exp.bullets.forEach((b) => {
          checkPageBreak(12);
          doc.setFont("times", "normal");
          doc.setFontSize(8.5);
          doc.text("•", margin + 4, y);
          writeWrappedText(b, 8.5, false, "left", 7);
          y += 0.5;
        });
        y += 2.5;
      });

      // 3. EDUCATION
      renderSectionHeader(lang === "en" ? "EDUCATION" : "التعليم الأكاديمي");
      education.forEach((edu) => {
        checkPageBreak(16);
        doc.setFont("times", "bold");
        doc.setFontSize(9.5);
        doc.text(`• ${edu.degree}`, margin, y);
        y += 4;
        doc.setFont("times", "normal");
        doc.setFontSize(8.5);
        writeWrappedText(`${edu.school} | ${edu.period}`, 8.5, false, "left", 4);
        y += 2;
      });

      // 4. PROJECTS
      renderSectionHeader(lang === "en" ? "FEATURED PROJECTS" : "أبرز المشاريع");
      projects.forEach((proj) => {
        checkPageBreak(18);
        doc.setFont("times", "bold");
        doc.setFontSize(9.5);
        doc.text(`• ${proj.title} (${proj.category})`, margin, y);
        y += 4;

        doc.setFont("times", "normal");
        doc.setFontSize(8.5);
        writeWrappedText(proj.description, 8.5, false, "left", 4);
        y += 1;
        if (proj.skills && proj.skills.length > 0) {
          doc.setFont("times", "italic");
          doc.setFontSize(8);
          writeWrappedText(`Stack: ${proj.skills.join(", ")}`, 8, false, "left", 4);
          y += 1;
        }
        y += 2;
      });

      // 5. CERTIFICATIONS & CREDENTIALS
      renderSectionHeader(lang === "en" ? "CERTIFICATIONS & CREDENTIALS" : "الشهادات والاعتمادات");
      certifications.forEach((cert) => {
        checkPageBreak(10);
        doc.setFont("times", "normal");
        doc.setFontSize(8.5);
        doc.text("•", margin + 3, y);
        writeWrappedText(`${cert.name} — ${cert.issuer} (${cert.date})`, 8.5, false, "left", 6);
        y += 0.5;
      });
      y += 3;

      // 6. TECHNICAL SKILLS & LANGUAGES
      renderSectionHeader(lang === "en" ? "TECHNICAL SKILLS" : "المهارات التقنية");
      const skillsCategories = [
        { label: "Languages", val: "JavaScript, TypeScript, Python, HTML5, CSS3" },
        { label: "Front-End", val: "React 19, Vite, Tailwind CSS, Responsive Design, RTL/LTR Parity" },
        { label: "Back-End", val: "Node.js, Express.js, Flask, REST APIs, System Architecture" },
        { label: "Data Engineering", val: "Data Pipelines, ETL/ELT, PostgreSQL, SQL, Database Fundamentals" },
        { label: "Cloud & AI", val: "Google Cloud Run, Vertex AI, AWS Bedrock, Anthropic Claude API, Prompt Engineering, MCP" },
        { label: "Tools", val: "Git, GitHub, GitHub Copilot, Docker, VS Code" }
      ];

      skillsCategories.forEach((sc) => {
        checkPageBreak(10);
        doc.setFont("times", "bold");
        doc.setFontSize(8.5);
        doc.text(sc.label + ": ", margin + 3, y);
        const lw = doc.getTextWidth(sc.label + ": ");
        doc.setFont("times", "normal");
        writeWrappedText(sc.val, 8.5, false, "left", 3 + lw);
        y += 1;
      });

      doc.save("Moustafa_Hany_Azab_Resume.pdf");
    } catch (err) {
      console.error("PDF generation failed, falling back to window.print", err);
      window.print();
    }
  };

  const handlePrint = () => {
    // 1. Trigger the native browser print dialog (perfect for saving as PDF)
    window.print();

    // 2. Automatically generate and download the CV as a beautifully formatted Markdown (.md) file!
    try {
      const markdownContent = generateMarkdown();
      const blob = new Blob([markdownContent], { type: "text/markdown;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "Moustafa_Hany_Azab_CV.md";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (e) {
      console.error("Direct download failed, fallback to print/clipboard", e);
    }
  };

  const generateMarkdown = () => {
    return `# ${profile.name}
**${profile.role}**
*${profile.mission}*

Email: moustfahhany5@gmail.com
GitHub: https://github.com/Hany-Zamalkawy
LinkedIn: https://www.linkedin.com/in/moustafa-hany-azab-4550692b9/
Instagram: https://www.instagram.com/hany_zamlkawy/
Facebook: https://www.facebook.com/Hany.Zamlkawy
WhatsApp: @Hany_Zamlkawy
Telegram: @Hany_Zamlkawy (https://t.me/Hany_Zamlkawy)
Location: Alexandria, Egypt / Remote / Hybrid / Employed

## Summary
${profile.bio}

## Core Focus Areas
${profile.focus.map((f) => `- ${f}`).join("\n")}

## Work History
${experiences
  .map(
    (exp) => `### ${exp.role} at ${exp.company}
*${exp.period}*
${exp.bullets.map((b) => `- ${b}`).join("\n")}
${exp.skillsUsed ? `Utilized: ${exp.skillsUsed.join(", ")}` : ""}`
  )
  .join("\n\n")}

## Academic Timeline
${education
  .map(
    (edu) => `### ${edu.degree}
*${edu.school} (${edu.period})*`
  )
  .join("\n\n")}

## Certifications & Training
${certifications
  .map(
    (cert) => `- **${cert.name}** — ${cert.issuer} (${cert.date})`
  )
  .join("\n")}

## Featured Codebases
${projects
  .map(
    (proj) => `- **${proj.title}** (${proj.category}): ${proj.description}
  Skills: ${proj.skills.join(", ")}`
  )
  .join("\n")}`;
  };

  const handleCopy = () => {
    const textToCopy =
      copyFormat === "markdown"
        ? generateMarkdown()
        : JSON.stringify({ profile, experiences, education, certifications, projects }, null, 2);

    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const downloadFile = (content: string, filename: string, contentType: string) => {
    const blob = new Blob([content], { type: contentType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleDownloadHtml = () => {
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${profile.name} - Resume</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Inter', sans-serif;
      background-color: #ffffff;
      color: #111111;
    }
    .font-mono {
      font-family: 'JetBrains Mono', monospace;
    }
    @media print {
      body {
        background-color: #ffffff;
        color: #000000;
      }
      .no-print {
        display: none !important;
      }
    }
  </style>
</head>
<body class="p-6 md:p-12 max-w-4xl mx-auto bg-white text-black">
  <div class="no-print mb-8 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm rounded-md flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 shadow-sm">
    <div>
      <p class="font-semibold">Printable Resume Document</p>
      <p class="text-xs text-emerald-700/90 mt-0.5">Press <kbd class="px-1.5 py-0.5 bg-white border rounded shadow-sm text-xs font-mono font-bold">Ctrl + P</kbd> (or <kbd class="px-1.5 py-0.5 bg-white border rounded shadow-sm text-xs font-mono font-bold">Cmd + P</kbd>) to save as a high-quality PDF or print directly from your browser.</p>
    </div>
    <button onclick="window.print()" class="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded shadow transition-colors whitespace-nowrap">
      Print / Save as PDF
    </button>
  </div>

  <div class="space-y-8 text-sm leading-relaxed">
    <!-- Header section -->
    <div class="border-b border-gray-200 pb-6 flex flex-col md:flex-row justify-between items-start gap-4">
      <div class="space-y-1">
        <h1 class="text-3xl font-bold tracking-tight text-gray-900">
          ${profile.name}
        </h1>
        <p class="font-mono text-sm text-emerald-600 font-semibold tracking-wider uppercase">
          ${profile.role}
        </p>
        <p class="text-gray-500 text-xs italic">
          "${profile.mission}"
        </p>
      </div>

      <!-- Contact specifications -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs font-mono text-gray-600">
        <span class="flex items-center gap-2">
          Email: moustfahhany5@gmail.com
        </span>
        <span class="flex items-center gap-2">
          GitHub: github.com/Hany-Zamalkawy
        </span>
        <span class="flex items-center gap-2">
          Instagram: instagram.com/hany_zamlkawy
        </span>
        <span class="flex items-center gap-2">
          Facebook: facebook.com/Hany.Zamlkawy
        </span>
        <span class="flex items-center gap-2">
          WhatsApp: @Hany_Zamlkawy (+201228494191)
        </span>
        <span class="flex items-center gap-2">
          Telegram: @Hany_Zamlkawy
        </span>
        <span class="flex items-center gap-2 sm:col-span-2">
          Location: Alexandria, Egypt / Remote / Hybrid / Employed
        </span>
      </div>
    </div>

    <!-- Profile Statement -->
    <div class="space-y-2">
      <h2 class="font-mono text-xs text-emerald-600 uppercase tracking-wider font-bold border-b border-gray-200 pb-1">
        Summary Statement
      </h2>
      <p class="text-gray-700 leading-relaxed font-sans">
        ${profile.bio}
      </p>
    </div>

    <!-- Two-column splits -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      
      <!-- Left smaller specs column -->
      <div class="space-y-6 md:col-span-1">
        
        <!-- Focus Keywords -->
        <div class="space-y-3">
          <h2 class="font-mono text-xs text-emerald-600 uppercase tracking-wider font-bold border-b border-gray-200 pb-1">
            Focus Stacks
          </h2>
          <div class="flex flex-wrap gap-1.5">
            ${profile.focus.map((f) => `<span class="px-2 py-0.5 bg-gray-100 border border-gray-200 text-[10px] text-gray-700 font-mono rounded-sm">${f}</span>`).join("")}
          </div>
        </div>

        <!-- Languages & Core competencies -->
        <div class="space-y-2">
          <h2 class="font-mono text-xs text-emerald-600 uppercase tracking-wider font-bold border-b border-gray-200 pb-1">
            Core Skills Covered
          </h2>
          <div class="text-[11px] font-mono text-gray-600 leading-relaxed">
            JavaScript • TypeScript • Python • React 19 • Vite • Tailwind CSS • Node.js • Express.js • Flask • REST APIs • PostgreSQL • Data Pipelines (ETL) • Google Cloud Run • Vertex AI • AWS Bedrock • Anthropic Claude API • Prompt Engineering • MCP • Docker • Git
          </div>
        </div>

        <!-- Academic Timeline -->
        <div class="space-y-4">
          <h2 class="font-mono text-xs text-emerald-600 uppercase tracking-wider font-bold border-b border-gray-200 pb-1">
            Academic Timeline
          </h2>
          <div class="space-y-4">
            ${education.map((edu) => `
              <div class="space-y-1">
                <div class="text-[10px] font-mono text-emerald-600">${edu.period}</div>
                <div class="font-bold text-gray-900 text-xs leading-snug">${edu.degree}</div>
                <div class="text-xs text-gray-600">${edu.school}</div>
              </div>
            `).join("")}
          </div>
        </div>

        <!-- Certifications & Training -->
        <div class="space-y-4">
          <h2 class="font-mono text-xs text-emerald-600 uppercase tracking-wider font-bold border-b border-gray-200 pb-1">
            Certifications
          </h2>
          <div class="space-y-3">
            ${certifications.map((cert) => `
              <div class="space-y-0.5">
                <div class="flex justify-between text-[9px] font-mono text-emerald-600">
                  <span>${cert.issuer}</span>
                  <span>${cert.date}</span>
                </div>
                <div class="font-medium text-gray-900 text-xs leading-tight">${cert.name}</div>
              </div>
            `).join("")}
          </div>
        </div>

      </div>

      <!-- Right heavy experience column -->
      <div class="space-y-6 md:col-span-2">
        <div class="space-y-6">
          <h2 class="font-mono text-xs text-emerald-600 uppercase tracking-wider font-bold border-b border-gray-200 pb-1">
            Professional Employment
          </h2>
          <div class="space-y-6">
            ${experiences.map((exp) => `
              <div class="space-y-2">
                <div class="flex justify-between items-start flex-wrap gap-1">
                  <div>
                    <h3 class="font-sans text-sm font-bold text-gray-900">
                      ${exp.role}
                    </h3>
                    <div class="text-xs text-gray-600 font-medium">
                      ${exp.company}
                    </div>
                  </div>
                  <span class="font-mono text-[10px] text-emerald-600">
                    ${exp.period}
                  </span>
                </div>

                <ul class="space-y-1.5 pl-4 list-disc text-xs text-gray-700">
                  ${exp.bullets.map((bullet) => `
                    <li class="leading-relaxed">
                      ${bullet}
                    </li>
                  `).join("")}
                </ul>
              </div>
            `).join("")}
          </div>
        </div>

        <!-- Featured Projects -->
        <div class="space-y-4 pt-4 border-t border-gray-200">
          <h2 class="font-mono text-xs text-emerald-600 uppercase tracking-wider font-bold border-b border-gray-200 pb-1">
            Featured Projects
          </h2>
          <div class="space-y-4">
            ${projects.map((proj) => `
              <div class="space-y-1">
                <div class="flex justify-between items-start flex-wrap gap-1">
                  <div class="font-bold text-gray-900 text-xs">${proj.title}</div>
                  <span class="font-mono text-[9px] text-emerald-600">${proj.category}</span>
                </div>
                <p class="text-xs text-gray-700 leading-relaxed">${proj.description}</p>
                <div class="text-[10px] font-mono text-gray-500">Skills: ${proj.skills.join(", ")}</div>
              </div>
            `).join("")}
          </div>
        </div>

      </div>

    </div>
  </div>
</body>
</html>`;

    downloadFile(htmlContent, "Moustafa_Hany_Azab_Resume.html", "text/html");
  };

  const handleDownloadMarkdown = () => {
    const mdContent = generateMarkdown();
    downloadFile(mdContent, "Moustafa_Hany_Azab_Resume.md", "text/markdown");
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn print:static print:bg-white print:p-0"
      id="resume-modal-overlay"
      role="dialog"
      aria-modal="true"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="relative bg-[#0e150e] border border-[#3d4a3d] max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-sm flex flex-col justify-between print:static print:border-none print:max-h-none print:shadow-none print:text-black shadow-2xl terminal-glow"
        id="resume-modal-content"
      >
        
        {/* Header toolbar for utilities - hidden in printing */}
        <div className="sticky top-0 bg-[#161d16] border-b border-[#3d4a3d] px-6 py-4 flex justify-between items-center z-10 print:hidden">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-[#4be277]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#4be277] font-semibold">
              {lang === "en" ? "Download Resume" : "تحميل السيرة الذاتية"}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Format toggle */}
            <div className="flex bg-[#091009] p-0.5 border border-[#3d4a3d] rounded-sm">
              <button
                onClick={() => setCopyFormat("markdown")}
                className={`px-2 py-1 text-[10px] font-mono rounded-sm transition-colors cursor-pointer ${
                  copyFormat === "markdown" ? "bg-[#242c24] text-[#4be277]" : "text-[#bccbb9]/60 hover:text-white"
                }`}
                id="resume-format-markdown-btn"
              >
                MD
              </button>
              <button
                onClick={() => setCopyFormat("json")}
                className={`px-2 py-1 text-[10px] font-mono rounded-sm transition-colors cursor-pointer ${
                  copyFormat === "json" ? "bg-[#242c24] text-[#4be277]" : "text-[#bccbb9]/60 hover:text-white"
                }`}
                id="resume-format-json-btn"
              >
                JSON
              </button>
            </div>

            {/* Copy button */}
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 border border-[#3d4a3d] hover:border-[#4be277] hover:text-[#4be277] text-[#bccbb9] font-mono text-[10px] uppercase px-3 py-1.5 rounded-sm transition-colors cursor-pointer"
              id="resume-copy-btn"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#4be277]" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? (lang === "en" ? "Copied" : "تم النسخ") : (lang === "en" ? "Copy Payload" : "نسخ البيانات")}
            </button>

            {/* Download Official PDF Resume Link */}
            <a
              href="/assets/aistudio/Moustafa_Hany_Azab_Resume_10-2026__9db89f64.pdf"
              download="Moustafa_Hany_Azab_Resume_10-2026.pdf"
              className="flex items-center gap-1.5 border border-[#4be277] hover:bg-[#4be277]/20 text-[#4be277] bg-[#4be277]/10 font-mono text-[10px] uppercase px-4 py-1.5 rounded-sm transition-all duration-300 shadow-[0_0_15px_rgba(75,226,119,0.2)] hover:shadow-[0_0_25px_rgba(75,226,119,0.4)] cursor-pointer"
              id="resume-download-pdf-btn"
              title="Download official PDF CV"
            >
              <FileDown className="w-3.5 h-3.5 animate-pulse" />
              {lang === "en" ? "Download PDF" : "تحميل PDF"}
            </a>

            {/* Print / Save PDF Button */}
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 border border-[#bccbb9]/40 hover:border-white hover:bg-white/10 text-[#bccbb9] hover:text-white font-mono text-[10px] uppercase px-4 py-1.5 rounded-sm transition-all duration-300 cursor-pointer"
              id="resume-print-pdf-btn"
              title="Print Resume or Save as PDF via browser"
            >
              <Printer className="w-3.5 h-3.5" />
              {lang === "en" ? "Print / Save" : "طباعة / حفظ"}
            </button>

            {/* Close modal */}
            <button
              onClick={onClose}
              className="p-1 border border-[#3d4a3d]/40 text-[#bccbb9]/60 hover:text-white hover:border-[#ff8b7c] hover:bg-[#ff8b7c]/10 rounded-sm transition-colors ml-2 cursor-pointer"
              title="Close Resume"
              id="resume-close-btn"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Helper Banner for PDF saving */}
        <div className="mx-8 mt-6 p-3 bg-[#111911] border border-[#3d4a3d]/60 text-xs text-[#bccbb9]/90 font-mono rounded-sm flex items-start gap-2.5 print:hidden">
          <span className="text-[#4be277] font-bold">{lang === "en" ? "PDF GUIDE:" : "دليل الـ PDF:"}</span>
          <div>
            <p>
              {lang === "en" 
                ? "To save as PDF, click \"Download Hany's PDF CV\" above and select \"Save as PDF\" as your destination printer. (Note: if your browser blocks print dialogs inside the preview frame, please open the site in a new tab first!)."
                : "لحفظ السيرة الذاتية بصيغة PDF، انقر فوق الزر \"تحميل السيرة الذاتية (PDF)\" في الأعلى، ثم اختر \"حفظ كـ PDF\" كوجهة للطباعة. (تنبيه: إذا كان متصفحك يمنع نوافذ الطباعة داخل معاينة الموقع، يرجى فتح الموقع في نافذة جديدة أولاً!)."}
            </p>
          </div>
        </div>

        {/* Resume document canvas */}
        <div className="p-8 md:p-12 space-y-8 text-sm leading-relaxed print:p-0 print:text-black" id="resume-printable-document" dir={lang === "ar" ? "rtl" : "ltr"}>
          {/* Header section */}
          <div className="border-b border-[#3d4a3d]/30 pb-6 flex flex-col md:flex-row justify-between items-start gap-4 print:text-black print:border-black/20">
            <div className="space-y-1">
              <h1 className="text-3xl font-bold tracking-tight text-white print:text-black">
                {profile.name}
              </h1>
              <p className="font-mono text-sm text-[#4be277] font-semibold tracking-wider uppercase print:text-black">
                {profile.role}
              </p>
              <p className="text-[#bccbb9] text-xs italic print:text-black/70">
                "{profile.mission}"
              </p>
            </div>

            {/* Contact specifications */}
            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs font-mono text-[#bccbb9]/80 print:text-black ${lang === "ar" ? "text-right" : "text-left"}`}>
              <span className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#4be277] print:text-black" />
                moustfahhany5@gmail.com
              </span>
              <span className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-[#4be277] print:text-black" />
                github.com/Hany-Zamalkawy
              </span>
              <span className="flex items-center gap-2">
                <Instagram className="w-3.5 h-3.5 text-[#4be277] print:text-black" />
                instagram.com/hany_zamlkawy
              </span>
              <span className="flex items-center gap-2">
                <Facebook className="w-3.5 h-3.5 text-[#4be277] print:text-black" />
                facebook.com/Hany.Zamlkawy
              </span>
              <a
                href="https://wa.me/201228494191"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-[#4be277] transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#4be277] print:text-black" />
                WhatsApp: @Hany_Zamlkawy
              </a>
              <a
                href="https://t.me/Hany_Zamlkawy"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-[#4be277] transition-colors"
              >
                <Send className="w-3.5 h-3.5 text-[#4be277] print:text-black" />
                Telegram: @Hany_Zamlkawy
              </a>
              <span className="flex items-center gap-2 sm:col-span-2 text-[#bccbb9]/90">
                <MapPin className="w-3.5 h-3.5 text-[#4be277] print:text-black" />
                {lang === "en" ? "Alexandria, Egypt / Remote / Hybrid / Employed" : "الإسكندرية، مصر / عمل عن بعد / هجين / موظف حالياً"}
              </span>
            </div>
          </div>

          {/* Profile Statement */}
          <div className="space-y-2">
            <h2 className="font-mono text-xs text-[#4be277] uppercase tracking-wider font-bold border-b border-[#3d4a3d]/20 pb-1 print:text-black print:border-black/20 print:font-bold">
              {lang === "en" ? "Summary Statement" : "الملخص المهني"}
            </h2>
            <p className="text-[#bccbb9] leading-relaxed font-sans print:text-black/80 whitespace-pre-line">
              {profile.bio}
            </p>
          </div>

          {/* Two-column splits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 print:grid print:grid-cols-3 print:gap-6">
            
            {/* Left smaller specs column */}
            <div className="space-y-6 md:col-span-1 print:col-span-1">
              
              {/* Focus Keywords */}
              <div className="space-y-3">
                <h2 className="font-mono text-xs text-[#4be277] uppercase tracking-wider font-bold border-b border-[#3d4a3d]/20 pb-1 print:text-black print:border-black/20">
                  {lang === "en" ? "Focus Stacks" : "مجالات التركيز"}
                </h2>
                <div className="flex flex-wrap gap-1.5">
                  {profile.focus.map((f, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 bg-[#161d16] border border-[#3d4a3d] text-[10px] text-[#bccbb9] font-mono rounded-sm print:text-black print:border-black/20 print:bg-transparent"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              {/* Languages & Core competencies */}
              <div className="space-y-2">
                <h2 className="font-mono text-xs text-[#4be277] uppercase tracking-wider font-bold border-b border-[#3d4a3d]/20 pb-1 print:text-black print:border-black/20">
                  {lang === "en" ? "Core Skills Covered" : "المهارات التقنية المغطاة"}
                </h2>
                <div className="text-[11px] font-mono text-[#bccbb9]/80 leading-relaxed print:text-black">
                  JavaScript • TypeScript • Python • React 19 • Vite • Tailwind CSS • Node.js • Express.js • Flask • REST APIs • PostgreSQL • Data Pipelines (ETL) • Google Cloud Run • Vertex AI • AWS Bedrock • Anthropic Claude API • Prompt Engineering • MCP • Docker • Git
                </div>
              </div>

              {/* Academic Milestones */}
              <div className="space-y-4">
                <h2 className="font-mono text-xs text-[#4be277] uppercase tracking-wider font-bold border-b border-[#3d4a3d]/20 pb-1 print:text-black print:border-black/20">
                  {lang === "en" ? "Academic Timeline" : "المسار الأكاديمي"}
                </h2>
                <div className="space-y-4">
                  {education.map((edu) => (
                    <div key={edu.id} className="space-y-1">
                      <div className="text-[10px] font-mono text-[#4be277] print:text-neutral-600">{edu.period}</div>
                      <div className="font-bold text-white text-xs leading-snug print:text-black">{edu.degree}</div>
                      <div className="text-xs text-[#bccbb9]/80 print:text-black/70">{edu.school}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications & Training */}
              <div className="space-y-4">
                <h2 className="font-mono text-xs text-[#4be277] uppercase tracking-wider font-bold border-b border-[#3d4a3d]/20 pb-1 print:text-black print:border-black/20">
                  {lang === "en" ? "Certifications" : "الشهادات والاعتمادات"}
                </h2>
                <div className="space-y-3 max-h-[350px] overflow-y-auto pr-1 print:max-h-none print:overflow-visible">
                  {certifications.map((cert) => (
                    <div key={cert.id} className="space-y-0.5">
                      <div className="flex justify-between text-[9px] font-mono text-[#4be277]/80 print:text-neutral-600">
                        <span>{cert.issuer}</span>
                        <span>{cert.date}</span>
                      </div>
                      <div className="font-medium text-white text-xs leading-tight print:text-black">{cert.name}</div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right heavy experience column */}
            <div className="space-y-6 md:col-span-2 print:col-span-2">
              <div className="space-y-6">
                <h2 className="font-mono text-xs text-[#4be277] uppercase tracking-wider font-bold border-b border-[#3d4a3d]/20 pb-1 print:text-black print:border-black/20">
                  {lang === "en" ? "Professional Employment" : "التاريخ المهني والخبرة"}
                </h2>
                <div className="space-y-6">
                  {experiences.map((exp) => (
                    <div key={exp.id} className="space-y-2">
                      <div className="flex justify-between items-start flex-wrap gap-1">
                        <div>
                          <h3 className="font-sans text-sm font-bold text-white print:text-black">
                            {exp.role}
                          </h3>
                          <div className="text-xs text-[#bccbb9] font-medium print:text-black/80">
                            {exp.company}
                          </div>
                        </div>
                        <span className="font-mono text-[10px] text-[#4be277] print:text-neutral-600">
                          {exp.period}
                        </span>
                      </div>

                      <ul className="space-y-1.5 pl-4 list-disc text-xs text-[#bccbb9]/80 print:text-black/80">
                        {exp.bullets.map((bullet, idx) => (
                          <li key={idx} className="leading-relaxed">
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Featured Technical Projects */}
              <div className="space-y-4 pt-4 border-t border-[#3d4a3d]/20 print:border-black/20">
                <h2 className="font-mono text-xs text-[#4be277] uppercase tracking-wider font-bold border-b border-[#3d4a3d]/20 pb-1 print:text-black print:border-black/20">
                  {lang === "en" ? "Featured Technical Projects" : "أبرز المشاريع التقنية"}
                </h2>
                <div className="space-y-4">
                  {projects.map((proj) => (
                    <div key={proj.id} className="space-y-1">
                      <div className="flex justify-between items-start flex-wrap gap-1">
                        <h3 className="font-sans text-xs font-bold text-white print:text-black">
                          {proj.title}
                        </h3>
                        <span className="font-mono text-[9px] text-[#4be277] print:text-neutral-600">
                          {proj.category}
                        </span>
                      </div>
                      <p className="text-[11px] text-[#bccbb9]/90 print:text-black/80 leading-relaxed">
                        {proj.description}
                      </p>
                      <div className="flex flex-wrap gap-1 pt-1">
                        {proj.skills.map((s, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-[9px] font-mono text-[#bccbb9]/70 print:text-neutral-700 bg-[#161d16] print:bg-transparent px-1.5 py-0.5 rounded-sm border border-[#3d4a3d]/40 print:border-none"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>

      </motion.div>
    </div>
  );
}
