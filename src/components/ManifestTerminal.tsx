import { useState, useRef, useEffect, type KeyboardEvent } from "react";
import { motion } from "framer-motion";
import { Profile } from "../types";
import { terminalAudio } from "../utils/terminalAudio";

interface ManifestTerminalProps {
  profile: Profile;
  lang: "en" | "ar";
}

interface CommandHistoryEntry {
  command: string;
  output: string;
}

const TOTAL_MANIFEST_LINES = 11;

export default function ManifestTerminal({ profile, lang }: ManifestTerminalProps) {
  const [copied, setCopied] = useState(false);
  const [muted, setMuted] = useState(() => terminalAudio.isMuted());
  const [visibleLines, setVisibleLines] = useState<number>(TOTAL_MANIFEST_LINES);
  const [isReplaying, setIsReplaying] = useState(false);
  const [commandInput, setCommandInput] = useState("");
  const [commandHistory, setCommandHistory] = useState<CommandHistoryEntry[]>([]);
  const [promptFocused, setPromptFocused] = useState(false);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const replayTimersRef = useRef<number[]>([]);

  const manifestCode = `// System Architecture & Engineering Profile
import { SoftwareEngineer, DataArchitect } from '@core/manifest';

export const engineerProfile = {
  name: "Moustafa Hany Azab",
  alias: "Hany Zamlkawy",
  location: "Alexandria, Egypt",
  phone: "01228494191",
  discipline: "${profile.role}",
  education: "Aboukir High Institutes (BIS, 2025–2029) · The University of Tokyo (GCI Data Science & AI, 2026) · Victoria College",
  affiliations: ["FlyRank AI", "DEPI", "NTI", "ITIDA Gigs", "PathLine", "iCareer", "IBM", "eYouth"],
  mindset: "Clean, deterministic architecture where business logic merges with high-throughput engineering.",
  statement:
    "${profile.bio}"
};`;

  const clearReplayTimers = () => {
    replayTimersRef.current.forEach((id) => window.clearTimeout(id));
    replayTimersRef.current = [];
  };

  useEffect(() => {
    return () => clearReplayTimers();
  }, []);

  const handleToggleMute = () => {
    const nextMuted = !muted;
    terminalAudio.setMuted(nextMuted);
    setMuted(nextMuted);
    if (!nextMuted) {
      terminalAudio.playKeyClick("soft");
    }
  };

  const handleReplayManifest = () => {
    clearReplayTimers();
    setIsReplaying(true);
    setVisibleLines(0);
    terminalAudio.playReturnKey();

    for (let i = 1; i <= TOTAL_MANIFEST_LINES; i++) {
      const delay = i * 95;
      const timerId = window.setTimeout(() => {
        setVisibleLines(i);
        if (i < TOTAL_MANIFEST_LINES) {
          terminalAudio.playKeyClick("soft");
        } else {
          terminalAudio.playReturnKey();
          setIsReplaying(false);
        }
      }, delay);
      replayTimersRef.current.push(timerId);
    }
  };

  const handleCopy = () => {
    terminalAudio.playConfirmTick();
    navigator.clipboard.writeText(manifestCode).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleLineInteract = () => {
    terminalAudio.playKeyClick("soft");
    inputRef.current?.focus();
  };

  const executeCommand = (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;

    if (cmd === "clear") {
      setCommandHistory([]);
      return;
    }

    if (cmd === "cat" || cmd === "cat system_manifest.ts" || cmd === "replay") {
      handleReplayManifest();
      return;
    }

    let output = "";
    switch (cmd) {
      case "help":
        output =
          lang === "en"
            ? "Available commands: whoami, stack, cat, clear, contact"
            : "الأوامر المتاحة: whoami, stack, cat, clear, contact";
        break;
      case "whoami":
        output = `${profile.name} [${profile.alias || "Hany Zamlkawy"}] — ${profile.role}`;
        break;
      case "stack":
        output = "TypeScript · React 19 · Next.js · Python 3.12 · FastAPI · PostgreSQL · DuckDB · Polars · GCP · Docker";
        break;
      case "contact":
        output = "Alexandria, Egypt | +201228494191 | moustfahany5@gmail.com | github.com/Hany-Zamalkawy";
        break;
      default:
        output =
          lang === "en"
            ? `zsh: command not found: ${cmd}. Try 'help'.`
            : `الأمر غير معروف: ${cmd}. جرّب 'help'.`;
        break;
    }

    setCommandHistory((prev) => [...prev.slice(-3), { command: raw.trim(), output }]);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      terminalAudio.playReturnKey();
      executeCommand(commandInput);
      setCommandInput("");
      return;
    }

    if (
      e.key === "Backspace" ||
      e.key === "Delete" ||
      e.key === " " ||
      e.key.length === 1
    ) {
      terminalAudio.playKeyClick("normal");
    }
  };

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="space-y-4"
    >
      {/* Terminal Prompt Bar */}
      <div className="flex items-center justify-between text-xs font-mono">
        <button
          type="button"
          onClick={handleReplayManifest}
          className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors cursor-pointer group"
          title={lang === "en" ? "Replay manifest stream" : "إعادة تشغيل كتابة الملف"}
        >
          <span className="text-emerald-400 font-semibold">hany@workstation</span>
          <span>:</span>
          <span className="text-teal-300">~</span>
          <span className="text-zinc-200 group-hover:text-emerald-300 transition-colors">
            $ cat system_manifest.ts
          </span>
        </button>
        <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>{lang === "en" ? "ENVIRONMENT: ACTIVE" : "البيئة: نشطة وجاهزة"}</span>
        </div>
      </div>

      {/* Terminal Window */}
      <div
        onClick={() => inputRef.current?.focus()}
        className="rounded-2xl border border-white/10 bg-[#0a0e17] shadow-2xl overflow-hidden font-mono text-xs sm:text-sm cursor-text"
      >
        {/* Titlebar */}
        <div
          onClick={(e) => e.stopPropagation()}
          className="px-4 py-3 bg-[#0d131f] border-b border-white/[0.07] flex items-center justify-between select-none cursor-default"
        >
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          </div>

          <span className="text-zinc-400 text-xs font-mono hidden sm:inline">
            hany_profile.ts — Executive Developer Manifest [TypeScript]
          </span>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Muted Lo-Fi Sound Toggle */}
            <button
              type="button"
              onClick={handleToggleMute}
              className={`px-2 py-1 rounded border text-[11px] font-mono flex items-center gap-1 transition-colors cursor-pointer ${
                muted
                  ? "bg-white/[0.03] border-white/[0.06] text-zinc-500 hover:text-zinc-300"
                  : "bg-emerald-500/10 border-emerald-500/25 text-emerald-400 hover:bg-emerald-500/20"
              }`}
              title={
                muted
                  ? lang === "en"
                    ? "Enable muted terminal typing audio"
                    : "تفعيل صوت الكتابة الخافت"
                  : lang === "en"
                  ? "Mute terminal typing audio"
                  : "كتم صوت الكتابة"
              }
              aria-label="Toggle terminal typing sound"
            >
              <span className="material-symbols-outlined text-[13px]">
                {muted ? "volume_off" : "volume_up"}
              </span>
              <span className="hidden md:inline">
                {muted ? (lang === "en" ? "Muted" : "صامت") : (lang === "en" ? "SFX" : "صوت")}
              </span>
            </button>

            {/* Replay Stream Button */}
            <button
              type="button"
              onClick={handleReplayManifest}
              disabled={isReplaying}
              className="px-2 py-1 rounded bg-white/[0.05] hover:bg-white/[0.1] disabled:opacity-50 text-zinc-300 hover:text-white text-[11px] font-mono flex items-center gap-1 transition-colors cursor-pointer"
              title={lang === "en" ? "Replay typing sequence" : "إعادة تشغيل الكتابة"}
            >
              <span className={`material-symbols-outlined text-[13px] ${isReplaying ? "animate-spin" : ""}`}>
                {isReplaying ? "sync" : "play_arrow"}
              </span>
              <span className="hidden md:inline">
                {lang === "en" ? "Replay" : "إعادة"}
              </span>
            </button>

            {/* Copy Button */}
            <button
              type="button"
              onClick={handleCopy}
              className="px-2.5 py-1 rounded bg-white/[0.05] hover:bg-white/[0.1] text-zinc-300 hover:text-white text-[11px] font-mono flex items-center gap-1 transition-colors cursor-pointer"
              title="Copy Manifest"
            >
              <span className="material-symbols-outlined text-[13px]">
                {copied ? "check" : "content_copy"}
              </span>
              <span>{copied ? (lang === "en" ? "Copied" : "تم النسخ") : (lang === "en" ? "Copy" : "نسخ")}</span>
            </button>

            <span className="text-zinc-500 text-xs hidden sm:inline">UTF-8</span>
          </div>
        </div>

        {/* Code Body */}
        <div className="p-6 sm:p-8 leading-relaxed space-y-2 text-zinc-300 overflow-x-auto">
          {visibleLines >= 1 && (
            <div onClick={handleLineInteract} className="hover:bg-white/[0.02] rounded px-1 -mx-1 transition-colors">
              <span className="syn-comment">
                {lang === "en" ? "// System Architecture & Engineering Profile" : "// البنية المعمارية للنظام وملف المهندس"}
              </span>
            </div>
          )}

          {visibleLines >= 2 && (
            <div onClick={handleLineInteract} className="hover:bg-white/[0.02] rounded px-1 -mx-1 transition-colors">
              <span className="syn-kw">import</span> {"{ "}<span className="syn-var">SoftwareEngineer</span>, <span className="syn-var">DataArchitect</span>{" } "}
              <span className="syn-kw">from</span> <span className="syn-str">'@core/manifest'</span>;
            </div>
          )}

          {visibleLines >= 3 && (
            <div onClick={handleLineInteract} className="pt-2 hover:bg-white/[0.02] rounded px-1 -mx-1 transition-colors">
              <span className="syn-kw">export const</span> <span className="syn-var">engineerProfile</span> = {"{"}
            </div>
          )}

          {visibleLines >= 4 && (
            <div onClick={handleLineInteract} className="ltr:pl-6 rtl:pr-6 hover:bg-white/[0.02] rounded transition-colors">
              <span className="syn-prop">name</span>: <span className="syn-str">"Moustafa Hany Azab"</span>,
            </div>
          )}

          {visibleLines >= 5 && (
            <div onClick={handleLineInteract} className="ltr:pl-6 rtl:pr-6 hover:bg-white/[0.02] rounded transition-colors">
              <span className="syn-prop">alias</span>: <span className="syn-str">"Hany Zamlkawy"</span>,
            </div>
          )}

          {visibleLines >= 6 && (
            <div onClick={handleLineInteract} className="ltr:pl-6 rtl:pr-6 hover:bg-white/[0.02] rounded transition-colors">
              <span className="syn-prop">discipline</span>: <span className="syn-str">"{profile.role}"</span>,
            </div>
          )}

          {visibleLines >= 7 && (
            <div onClick={handleLineInteract} className="ltr:pl-6 rtl:pr-6 hover:bg-white/[0.02] rounded transition-colors">
              <span className="syn-prop">location</span>: <span className="syn-str">"{profile.location || "Alexandria, Egypt"}"</span>,{" "}
              <span className="syn-prop">phone</span>: <span className="syn-str">"{profile.phone || "01228494191"}"</span>,
            </div>
          )}

          {visibleLines >= 7 && (
            <div onClick={handleLineInteract} className="ltr:pl-6 rtl:pr-6 hover:bg-white/[0.02] rounded transition-colors">
              <span className="syn-prop">education</span>: <span className="syn-str">"Aboukir High Institutes (BIS) · The University of Tokyo (GCI World) · Victoria College"</span>,
            </div>
          )}

          {visibleLines >= 8 && (
            <div onClick={handleLineInteract} className="ltr:pl-6 rtl:pr-6 hover:bg-white/[0.02] rounded transition-colors">
              <span className="syn-prop">affiliations</span>: [
              <span className="syn-str">"FlyRank AI"</span>, <span className="syn-str">"DEPI"</span>, <span className="syn-str">"NTI"</span>, <span className="syn-str">"ITIDA Gigs"</span>, <span className="syn-str">"PathLine"</span>, <span className="syn-str">"iCareer"</span>, <span className="syn-str">"IBM"</span>
              ],
            </div>
          )}

          {visibleLines >= 9 && (
            <div onClick={handleLineInteract} className="ltr:pl-6 rtl:pr-6 pt-1 hover:bg-white/[0.02] rounded transition-colors">
              <span className="syn-prop">mindset</span>: <span className="syn-str">"Clean, deterministic architecture where business logic merges with high-throughput engineering."</span>,
            </div>
          )}

          {visibleLines >= 10 && (
            <div onClick={handleLineInteract} className="ltr:pl-6 rtl:pr-6 pt-1 hover:bg-white/[0.02] rounded transition-colors">
              <span className="syn-prop">statement</span>:{" "}
              <span className="text-emerald-300/90 leading-normal block ltr:pl-3 rtl:pr-3 ltr:border-l-2 rtl:border-r-2 border-emerald-500/40 my-2">
                "{profile.bio}"
              </span>
            </div>
          )}

          {visibleLines >= 11 && (
            <div onClick={handleLineInteract} className="hover:bg-white/[0.02] rounded px-1 -mx-1 transition-colors">
              {"};"}
            </div>
          )}

          {/* Command Execution Output History */}
          {commandHistory.length > 0 && (
            <div className="pt-3 space-y-2 border-t border-white/[0.05]">
              {commandHistory.map((entry, idx) => (
                <div key={idx} className="space-y-0.5">
                  <div className="text-emerald-400 flex items-center gap-2">
                    <span>&gt;</span>
                    <span className="text-zinc-200">{entry.command}</span>
                  </div>
                  <div className="text-zinc-400 ltr:pl-4 rtl:pr-4 text-xs">
                    {entry.output}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Interactive Shell Input Prompt */}
          <div className="pt-2 flex items-center gap-2 text-emerald-400">
            <span className="shrink-0">&gt;</span>
            <div className="relative flex-1 flex items-center">
              <input
                ref={inputRef}
                type="text"
                value={commandInput}
                onChange={(e) => setCommandInput(e.target.value)}
                onKeyDown={handleKeyDown}
                onFocus={() => setPromptFocused(true)}
                onBlur={() => setPromptFocused(false)}
                placeholder={
                  lang === "en"
                    ? "type a command (help, whoami, stack, cat)..."
                    : "اكتب أمراً (help, whoami, stack, cat)..."
                }
                aria-label="Interactive manifest terminal command input"
                className="w-full bg-transparent border-none outline-none text-zinc-200 placeholder:text-zinc-600 font-mono text-xs sm:text-sm caret-emerald-400"
              />
              {!promptFocused && !commandInput && (
                <span className="w-2 h-4 bg-emerald-400 inline-block animate-pulse pointer-events-none shrink-0" />
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
