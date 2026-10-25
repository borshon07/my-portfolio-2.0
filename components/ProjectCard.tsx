"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { Project } from "@/data/portfolio";
import {
  CheckCircle2,
  AlertCircle,
  Eye,
  Layers,
  CloudSun,
  Kanban,
  FileCode,
  Sparkles,
} from "lucide-react";
import { GithubIcon } from "@/components/UI/Icons";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const [showDemoNotice, setShowDemoNotice] = useState(false);

  const renderPreview = () => {
    switch (project.previewType) {
      case "kanban":
        return (
          <div className="w-full h-48 bg-[#070810] p-3 sm:p-3.5 flex flex-col justify-between relative overflow-hidden select-none">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
              <div className="flex items-center gap-1.5">
                <Kanban className="w-3.5 h-3.5 text-indigo-400" />
                <span className="text-[11px] font-mono text-slate-300 font-semibold">DevTrack / Board</span>
              </div>
              <div className="flex gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400/80" />
                <span className="w-2 h-2 rounded-full bg-amber-400/80" />
                <span className="w-2 h-2 rounded-full bg-rose-400/80" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-1.5 py-2">
              {[
                { label: "Todo", color: "text-slate-400", bg: "", count: "2", items: ["Auth flow", "Dark mode"] },
                { label: "Active", color: "text-indigo-400", bg: "border-[#262c4a]", count: "1", items: ["Kanban flow"] },
                { label: "Done", color: "text-emerald-400", bg: "", count: "3", items: ["Scaffolding"] },
              ].map((col) => (
                <div key={col.label} className={`bg-[#0f1020] rounded-md p-1.5 border border-[#1f2338] ${col.bg} min-w-0`}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className={`text-[9px] font-mono ${col.color}`}>{col.label}</span>
                    <span className="text-[8px] px-1 bg-black/30 text-slate-400 rounded">{col.count}</span>
                  </div>
                  {col.items.map((item) => (
                    <div key={item} className="p-1 bg-[#1a1d2e] rounded border border-white/[0.04] text-[9px] text-slate-300 mb-1 truncate">
                      {item}
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 pt-1 border-t border-white/[0.04]">
              <span>TypeScript + LocalStorage</span>
              <span className="text-emerald-400">Synced ✓</span>
            </div>
          </div>
        );

      case "code":
        return (
          <div className="w-full h-48 bg-[#070810] p-3 sm:p-3.5 flex flex-col justify-between relative overflow-hidden select-none font-mono">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-2 text-[10px]">
              <span className="px-2 py-0.5 bg-[#191d2d] text-indigo-300 rounded border border-indigo-500/20 flex items-center gap-1">
                <FileCode className="w-3 h-3 text-indigo-400" />
                notes-app.tsx
              </span>
              <span className="text-slate-500 text-[9px]">UTF-8 • TSX</span>
            </div>
            <div className="space-y-1 text-[9px] sm:text-[10px] py-1 overflow-x-hidden">
              {[
                // [<><span className="text-sky-400">import</span> {"{ useState }"} <span className="text-indigo-400">from</span> <span className="text-emerald-300">&quot;react&quot;</span>;</>],
                [<><span className="text-sky-400">export function</span> <span className="text-amber-300">TechNotesHub</span>{"() {"}</>],
                [<><span className="pl-3 text-slate-400">const</span> [query, setQuery] = <span className="text-sky-300">useState</span>(<span className="text-emerald-300">&quot;&quot;</span>);</>],
                [<><span className="pl-3 text-indigo-400">return</span> &lt;<span className="text-sky-300">MarkdownViewer</span> filter={"{"} query {"}"} /&gt;;</>],
              ].map((line, i) => (
                <div key={i} className="flex gap-2 text-slate-300">
                  <span className="text-slate-600 w-3 text-right shrink-0">{i + 1}</span>
                  <span className="truncate">{line}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between text-[10px] text-slate-500 pt-1 border-t border-white/[0.04]">
              <span>Search &amp; syntax highlighting</span>
              <span className="text-indigo-400 font-semibold">Ready</span>
            </div>
          </div>
        );

      case "weather":
        return (
          <div className="w-full h-48 bg-[#070810] p-3 sm:p-4 flex flex-col justify-between relative overflow-hidden select-none">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">City Forecast</span>
                <h4 className="text-sm sm:text-base font-bold text-white">Dhaka, Bangladesh</h4>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono">
                <CloudSun className="w-3.5 h-3.5" />
                <span>28°C • Clear</span>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 pt-1">
              {[["Humidity","58%"],["Wind","12 km/h"],["Visibility","9.5 km"],["UV Index","Low (2)"]].map(([label, val]) => (
                <div key={label} className="p-1.5 bg-[#0f1020] rounded border border-white/[0.04] text-center">
                  <span className="text-[8px] sm:text-[9px] font-mono text-slate-400 block">{label}</span>
                  <span className={`text-xs font-semibold ${label === "UV Index" ? "text-emerald-400" : "text-slate-200"}`}>{val}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 pt-1 border-t border-white/[0.04]">
              <span>REST API Integration</span>
              <span className="text-sky-400">Live Fetch</span>
            </div>
          </div>
        );

      default:
        return (
          <div className="w-full h-48 bg-[#070810] p-3 sm:p-4 flex flex-col justify-between relative overflow-hidden select-none">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-indigo-400" />
                <span className="text-xs font-mono font-bold text-white">Next.js App Router Architecture</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Static</span>
            </div>
            <div className="space-y-1.5 py-1">
              {[
                ["/app/layout.tsx","SEO + Fonts","text-indigo-400"],
                ["/components/*","Modular TSX","text-sky-400"],
                ["/data/portfolio.ts","Typed Model","text-amber-400"],
              ].map(([path, label, col]) => (
                <div key={path} className="flex items-center justify-between p-1.5 rounded bg-[#0f1020] border border-white/[0.04] text-[10px]">
                  <span className="text-slate-300 font-mono">{path}</span>
                  <span className={`font-mono ${col}`}>{label}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 pt-1 border-t border-white/[0.04]">
              <span>Zero external UI bloat</span>
              <span className="text-indigo-400">Tailwind CSS</span>
            </div>
          </div>
        );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.09, ease: [0.21, 0.47, 0.32, 0.98] }}
      whileHover={{ y: -5 }}
      className="group rounded-2xl bg-[#0d0f1a] border border-[#1a1e30] hover:border-indigo-500/40 transition-all duration-300 flex flex-col shadow-lg shadow-black/20 h-full overflow-hidden"
    >
      {/* Preview — scales subtly on hover */}
      <div className="overflow-hidden border-b border-[#1a1e30]">
        <motion.div
          whileHover={{ scale: 1.025 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          {renderPreview()}
        </motion.div>
      </div>

      {/* Body */}
      <div className="p-5 sm:p-6 flex flex-col flex-1">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <span className="text-xs font-mono text-indigo-400 font-medium">{project.category}</span>
          {project.isPlaceholderUrl && (
            <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <AlertCircle className="w-3 h-3" />
              Demo / Placeholder
            </span>
          )}
          {project.id === "personal-portfolio-v1" && (
            <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Sparkles className="w-3 h-3" />
              Current Project
            </span>
          )}
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-indigo-200 transition-colors tracking-tight">
          {project.title}
        </h3>
        <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">{project.description}</p>

        <div className="mt-4 space-y-1.5">
          {project.keyFeatures.map((feat, i) => (
            <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
              <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
              <span>{feat}</span>
            </div>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#12151f] text-slate-300 border border-[#1a1e30]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Footer buttons — pushed to bottom */}
        <div className="mt-auto pt-5">
          <div className="pt-4 border-t border-[#1a1e30] flex items-center justify-between gap-3">
            {project.isPlaceholderUrl ? (
              <button
                type="button"
                onClick={() => setShowDemoNotice(!showDemoNotice)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-300/90 hover:text-amber-200 py-1.5 px-3 rounded-lg bg-amber-500/10 border border-amber-500/20 transition-colors"
              >
                <Eye className="w-3.5 h-3.5" />
                Demo (Placeholder)
              </button>
            ) : (
              <a
                href={project.liveUrl}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 py-1.5 px-3 rounded-lg bg-indigo-500/10 border border-indigo-500/20 transition-colors"
              >
                <Eye className="w-3.5 h-3.5" />
                Live Preview
              </a>
            )}

            {project.isPlaceholderUrl ? (
              <button
                type="button"
                onClick={() => setShowDemoNotice(!showDemoNotice)}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-slate-200 py-1.5 px-3 rounded-lg bg-[#12151f] border border-[#1a1e30] transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                Code [Placeholder]
              </button>
            ) : (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-white py-1.5 px-3 rounded-lg bg-[#12151f] border border-[#1a1e30] hover:border-slate-600 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                Source Code
              </a>
            )}
          </div>

          {showDemoNotice && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-3 p-3 rounded-xl bg-amber-950/40 border border-amber-500/30 text-[11px] text-amber-200 flex items-start justify-between gap-2"
            >
              <div>
                <strong className="block font-semibold mb-0.5">Honest Portfolio Notice:</strong>
                Placeholder URLs are clearly labeled so you can evaluate code quality with full trust.
              </div>
              <button
                type="button"
                onClick={() => setShowDemoNotice(false)}
                className="text-amber-400 hover:text-amber-200 font-bold p-1 shrink-0"
                aria-label="Dismiss"
              >
                ✕
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
