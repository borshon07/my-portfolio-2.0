"use client";

import React from "react";
import { motion } from "motion/react";
import SectionHeading from "@/components/UI/SectionHeading";
import { FadeUp, StaggerContainer, staggerItem } from "@/components/UI/animations";
import { SKILL_CATEGORIES } from "@/data/portfolio";
import { ShieldCheck, Flame, BookMarked, Terminal } from "lucide-react";

const LEVEL_CONFIG = {
  "Core Foundation": {
    badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    leftBorder: "border-l-emerald-500/60",
    icon: ShieldCheck,
    label: "Core Foundation",
  },
  "Actively Building": {
    badge: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    leftBorder: "border-l-indigo-500/60",
    icon: Flame,
    label: "Actively Building",
  },
  "Current Learning Focus": {
    badge: "bg-sky-500/10 text-sky-400 border-sky-500/20",
    leftBorder: "border-l-sky-500/60",
    icon: BookMarked,
    label: "Current Learning Focus",
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 border-b border-[#1a1e30]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <SectionHeading
            tag="02 // TECHNICAL SKILLS"
            title="Practical technologies I work with and learn daily."
            subtitle="Honest proficiency levels based on hands-on project experience, daily practice, and academic study."
          />
        </FadeUp>

        {/* Legend */}
        <FadeUp delay={0.05}>
          <div className="mb-8 sm:mb-10 flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono">
            <span className="text-slate-400 font-medium">Proficiency:</span>
            {Object.values(LEVEL_CONFIG).map((cfg) => {
              const Icon = cfg.icon;
              return (
                <span
                  key={cfg.label}
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border ${cfg.badge}`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {cfg.label}
                </span>
              );
            })}
          </div>
        </FadeUp>

        {/* Categories */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch"
          staggerChildren={0.12}
        >
          {SKILL_CATEGORIES.map((category) => (
            <motion.div
              key={category.title}
              variants={staggerItem}
              whileHover={{ y: -3, borderColor: "rgba(99,102,241,0.3)" }}
              className="rounded-2xl bg-[#0d0f1a] border border-[#1a1e30] p-6 flex flex-col cursor-default transition-colors"
            >
              <div className="pb-4 border-b border-[#1a1e30] mb-6">
                <h3 className="text-lg font-bold text-white tracking-tight">{category.title}</h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">{category.description}</p>
              </div>

              <div className="space-y-3.5 flex-1">
                {category.skills.map((skill) => {
                  const cfg = LEVEL_CONFIG[skill.level];
                  const IconComp = cfg.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      whileHover={{ x: 2 }}
                      className={`p-3.5 rounded-xl bg-[#12151f]/70 border border-[#1a1e30] border-l-2 ${cfg.leftBorder} cursor-default transition-transform`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="text-sm font-semibold text-white">{skill.name}</span>
                        <span
                          className={`inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-full border ${cfg.badge}`}
                        >
                          <IconComp className="w-3 h-3" />
                          {cfg.label}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">{skill.note}</p>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-6 pt-4 border-t border-[#1a1e30]/60 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <span>Verified learning claim</span>
                <span className="text-indigo-400 font-medium">✓ Hands-on</span>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>

        {/* Commitment Banner */}
        <FadeUp delay={0.1} className="mt-12">
          <div className="p-5 sm:p-6 rounded-2xl bg-[#0d0f1a]/80 border border-[#1a1e30] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
                <Terminal className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Committed to Clean Code Standards</h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Semantic HTML5, strict TypeScript, modular components, and clean Git commits.
                </p>
              </div>
            </div>
            <a
              href="https://github.com/borshonroy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono font-medium text-indigo-400 hover:text-indigo-300 underline underline-offset-4 shrink-0 transition-colors"
            >
              Inspect code on GitHub →
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
