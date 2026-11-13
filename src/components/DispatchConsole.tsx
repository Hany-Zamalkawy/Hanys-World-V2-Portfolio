import { useState, useEffect, type FormEvent } from "react";
import { motion } from "framer-motion";
import { uiTranslations } from "../translations";

interface DispatchConsoleProps {
  lang: "en" | "ar";
}

export default function DispatchConsole({ lang }: DispatchConsoleProps) {
  const t = uiTranslations[lang];

  // Clipboard copy states
  const [copied, setCopied] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Form states
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [statusMsg, setStatusMsg] = useState("");

  // Server health state
  const [serverHealth, setServerHealth] = useState<{ status: string; uptime: number } | null>(null);

  useEffect(() => {
    fetch("/api/health")
      .then((res) => res.json())
      .then((data) => setServerHealth(data))
      .catch(() => setServerHealth(null));
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("moustfahany5@gmail.com").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    });
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("01228494191").then(() => {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2200);
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("sending");
    setStatusMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setStatusMsg(
          lang === "en"
            ? "Transmission confirmed. Moustafa will respond to your message promptly."
            : "تم تأكيد الإرسال بنجاح. سيقوم مصطفى بالرد على استفسارك في أقرب وقت."
        );
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setStatusMsg(data.error || (lang === "en" ? "Dispatch failed. Please retry." : "فشل الإرسال. يرجى المحاولة ثانية."));
      }
    } catch {
      setStatus("error");
      setStatusMsg(
        lang === "en"
          ? "Network error occurred while connecting to /api/contact."
          : "حدث خطأ في الاتصال بنقطة النهاية /api/contact."
      );
    }
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      <div className="card-surface rounded-2xl p-6 sm:p-10 border border-white/[0.08]">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
          <div>
            <div className="text-xs font-mono text-emerald-400 font-semibold">
              &gt; hany@workstation:~$ initiate-contact --secure
            </div>
            <h3 className="text-2xl font-bold text-white mt-1">
              {t.dispatchTitle}
            </h3>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>
              {serverHealth?.status === "ok"
                ? lang === "en"
                  ? "Secure Channel Active (Online)"
                  : "القناة الآمنة نشطة (متصل)"
                : lang === "en"
                ? "Secure Channel Active"
                : "القناة الآمنة نشطة"}
            </span>
          </div>
        </div>

        {/* Contact Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
          {/* Direct Email & Phone Boxes */}
          <div className="space-y-3">
            <div className="text-xs font-mono text-zinc-400">
              {t.directComm}
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 overflow-hidden">
                <span className="material-symbols-outlined text-emerald-400 text-[20px]">
                  mail
                </span>
                <div className="overflow-hidden">
                  <div className="text-[10px] font-mono text-zinc-400 uppercase">
                    {t.primaryInquiries}
                  </div>
                  <a
                    className="text-white hover:text-emerald-400 font-mono text-sm font-semibold truncate block transition-colors"
                    href="mailto:moustfahany5@gmail.com"
                  >
                    moustfahany5@gmail.com
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className={`px-3 py-1.5 rounded-lg border font-mono text-xs transition-all active:scale-95 shrink-0 flex items-center gap-1 cursor-pointer ${
                  copied
                    ? "bg-emerald-500/30 text-emerald-300 border-emerald-500/40"
                    : "bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border-emerald-500/20"
                }`}
                id="copyBtn"
              >
                <span className="material-symbols-outlined text-[14px]">
                  {copied ? "check" : "content_copy"}
                </span>
                <span>{copied ? t.copied : t.copy}</span>
              </button>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 overflow-hidden">
                <span className="material-symbols-outlined text-emerald-400 text-[20px]">
                  call
                </span>
                <div className="overflow-hidden">
                  <div className="text-[10px] font-mono text-zinc-400 uppercase">
                    {lang === "en" ? "Direct Phone · Alexandria, Egypt" : "الهاتف المباشر · الإسكندرية، مصر"}
                  </div>
                  <a
                    className="text-white hover:text-emerald-400 font-mono text-sm font-semibold truncate block transition-colors"
                    href="tel:+201228494191"
                    dir="ltr"
                  >
                    +20 122 849 4191 (01228494191)
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyPhone}
                className={`px-3 py-1.5 rounded-lg border font-mono text-xs transition-all active:scale-95 shrink-0 flex items-center gap-1 cursor-pointer ${
                  copiedPhone
                    ? "bg-emerald-500/30 text-emerald-300 border-emerald-500/40"
                    : "bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border-emerald-500/20"
                }`}
                id="copyPhoneBtn"
              >
                <span className="material-symbols-outlined text-[14px]">
                  {copiedPhone ? "check" : "content_copy"}
                </span>
                <span>{copiedPhone ? t.copied : t.copy}</span>
              </button>
            </div>
          </div>

          {/* Repositories & Network */}
          <div className="space-y-3">
            <div className="text-xs font-mono text-zinc-400">
              {t.repoNetwork}
            </div>
            <div className="grid grid-cols-2 gap-3">
              <a
                className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-emerald-500/40 text-white font-mono text-xs flex items-center justify-between transition-colors group cursor-pointer"
                href="https://github.com/Hany-Zamalkawy"
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-emerald-400 text-[18px]">
                    code
                  </span>
                  <span>GitHub</span>
                </div>
                <span className="material-symbols-outlined text-zinc-500 group-hover:text-emerald-400 text-[14px]">
                  north_east
                </span>
              </a>

              <a
                className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-emerald-500/40 text-white font-mono text-xs flex items-center justify-between transition-colors group cursor-pointer"
                href="https://www.linkedin.com/in/moustafa-hany-azab-4550692b9/?skipRedirect=true"
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-emerald-400 text-[18px]">
                    link
                  </span>
                  <span>LinkedIn</span>
                </div>
                <span className="material-symbols-outlined text-zinc-500 group-hover:text-emerald-400 text-[14px]">
                  north_east
                </span>
              </a>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 overflow-hidden">
                <span className="material-symbols-outlined text-emerald-400 text-[20px]">
                  location_on
                </span>
                <div className="overflow-hidden">
                  <div className="text-[10px] font-mono text-zinc-400 uppercase">
                    {lang === "en" ? "Base Location & Availability" : "الموقع الأساسي والتوافر"}
                  </div>
                  <div className="text-white font-mono text-xs font-semibold truncate">
                    {lang === "en" ? "Alexandria, Egypt · Remote & On-Site" : "الإسكندرية، مصر · عمل عن بُعد وحضوري"}
                  </div>
                </div>
              </div>
              <a
                href="https://wa.me/201228494191"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 font-mono text-xs transition-colors shrink-0"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Interactive Dispatch Form */}
        <div className="pt-8 mt-8 border-t border-white/[0.08] space-y-4">
          <div className="text-xs font-mono text-zinc-400">
            {lang === "en" ? "// TRANSMIT DIRECT DISPATCH TO SERVER" : "// إرسال برقية مباشرة إلى الخادم"}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                  {lang === "en" ? "Name / Organization" : "الاسم / المؤسسة"}
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={lang === "en" ? "e.g., Sarah Vance (Tech Lead)" : "مثال: م. أحمد (مدير تقني)"}
                  className="w-full bg-white/[0.02] border border-white/[0.08] rounded-xl px-4 py-2.5 text-xs font-mono text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500/60 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                  {lang === "en" ? "Direct Email Address" : "البريد الإلكتروني المباشر"}
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="contact@enterprise.com"
                  className="w-full bg-white/[0.02] border border-white/[0.08] rounded-xl px-4 py-2.5 text-xs font-mono text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500/60 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                {lang === "en" ? "Project Scope or Architecture Inquiry" : "نطاق المشروع أو الاستفسار الهندسي"}
              </label>
              <textarea
                required
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder={
                  lang === "en"
                    ? "Describe system requirements, timeline, or collaboration scope..."
                    : "صف متطلبات النظام أو الجدول الزمني أو مجال التعاون..."
                }
                className="w-full bg-white/[0.02] border border-white/[0.08] rounded-xl p-4 text-xs font-mono text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500/60 transition-colors resize-none"
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
              <button
                type="submit"
                disabled={status === "sending"}
                className="px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 text-zinc-950 font-semibold text-xs uppercase tracking-wider font-mono transition-all shadow-md shadow-emerald-500/20 flex items-center gap-2 justify-center cursor-pointer active:scale-95"
              >
                <span className="material-symbols-outlined text-[16px]">
                  {status === "sending" ? "sync" : "send"}
                </span>
                <span>
                  {status === "sending"
                    ? lang === "en"
                      ? "Dispatching..."
                      : "جارٍ الإرسال..."
                    : lang === "en"
                    ? "Dispatch Message"
                    : "إرسال البرقية"}
                </span>
              </button>

              {statusMsg && (
                <div
                  className={`text-xs font-mono ${
                    status === "success" ? "text-emerald-400" : "text-rose-400"
                  }`}
                >
                  {statusMsg}
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </motion.section>
  );
}
