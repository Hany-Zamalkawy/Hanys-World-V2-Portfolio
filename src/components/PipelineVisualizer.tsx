import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { pipelineNodes } from "../data";
import { uiTranslations } from "../translations";

interface PipelineVisualizerProps {
  lang: "en" | "ar";
}

export default function PipelineVisualizer({ lang }: PipelineVisualizerProps) {
  const t = uiTranslations[lang];
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const activeNode = activeStep !== null ? pipelineNodes[activeStep] : null;

  return (
    <motion.section
      id="architecture"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      <div className="card-surface rounded-2xl p-6 sm:p-8 border border-white/[0.08]">
        {/* Visualizer Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
          <div>
            <div className="text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider">
              {t.pipelineKicker}
            </div>
            <h3 className="text-xl font-bold text-white mt-1">
              {t.pipelineTitle}
            </h3>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{t.zeroDataLoss}</span>
          </div>
        </div>

        {/* 5-Node Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 pt-6 relative">
          {pipelineNodes.map((node, index) => {
            const isSelected = activeStep === index;
            return (
              <motion.div
                key={node.step}
                onClick={() => setActiveStep(isSelected ? null : index)}
                whileHover={{ y: -3 }}
                className={`p-4 rounded-xl border transition-all flex flex-col justify-between group cursor-pointer ${
                  isSelected
                    ? "bg-emerald-950/30 border-emerald-500/60 shadow-lg shadow-emerald-500/10"
                    : "bg-white/[0.02] border-white/[0.06] hover:border-emerald-500/30"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-zinc-400 mb-2">
                    <span className="font-mono text-[10px] text-zinc-400 font-semibold tracking-wider">
                      {node.step}. {lang === "en" ? node.categoryEn : node.categoryAr}
                    </span>
                    <span
                      className={`material-symbols-outlined text-[16px] transition-colors ${
                        isSelected
                          ? "text-emerald-400"
                          : "text-zinc-400 group-hover:text-emerald-400"
                      }`}
                    >
                      {node.icon}
                    </span>
                  </div>
                  <h4 className="font-bold text-sm text-white">
                    {lang === "en" ? node.nameEn : node.nameAr}
                  </h4>
                  <p className="text-xs text-zinc-400 mt-1">
                    {lang === "en" ? node.descriptionEn : node.descriptionAr}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.04] mt-3 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-emerald-400 font-medium">
                    {lang === "en" ? node.metricEn : node.metricAr}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Expandable Node Inspection Panel */}
        <AnimatePresence>
          {activeNode && activeNode.details && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
              <div className="mt-4 p-4 rounded-xl bg-white/[0.02] border border-emerald-500/25 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="font-mono text-[11px] text-emerald-400 uppercase tracking-wider">
                    {activeNode.step}. {lang === "en" ? activeNode.nameEn : activeNode.nameAr} — {activeNode.metricLabel}
                  </div>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {activeNode.details.map((detail, dIdx) => (
                      <span
                        key={dIdx}
                        className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] font-mono text-xs text-zinc-300"
                      >
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
                <button
                  onClick={() => setActiveStep(null)}
                  className="text-xs font-mono text-zinc-400 hover:text-white self-start sm:self-center px-2.5 py-1 rounded border border-white/10 hover:border-white/25 transition-colors cursor-pointer"
                >
                  {lang === "en" ? "Close Spec" : "إغلاق"}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}
