"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import SectionHeading from "@/components/UI/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import { FadeUp } from "@/components/UI/animations";
import { PROJECTS } from "@/data/portfolio";
import { ShieldAlert } from "lucide-react";

const FILTER_OPTIONS = [
  { label: "All Projects", value: "All" },
  { label: "Productivity", value: "Productivity & State Management" },
  { label: "Knowledge Hub", value: "Content & Documentation" },
  { label: "APIs & Climate", value: "API Integration & Real-time UI" },
  { label: "Design System", value: "Design System & Web App" },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filteredProjects =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 md:py-28 border-b border-[#1a1e30]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <SectionHeading
            tag="03 // FEATURED PROJECTS"
            title="Practical web apps built with modern component architectures."
            subtitle="Real projects demonstrating state management, responsive CSS, Next.js routing, and clean code."
          />
        </FadeUp>

        {/* Filter Pills */}
        <FadeUp delay={0.05}>
          <div className="mb-8 sm:mb-10 flex flex-wrap gap-2">
            {FILTER_OPTIONS.map((option) => (
              <motion.button
                key={option.value}
                type="button"
                onClick={() => setActiveFilter(option.value)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className={`relative px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  activeFilter === option.value
                    ? "text-white"
                    : "bg-[#0d0f1a] text-slate-400 hover:text-white border border-[#1a1e30] hover:border-slate-600"
                }`}
              >
                {activeFilter === option.value && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-lg bg-indigo-600 shadow-sm shadow-indigo-600/30"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{option.label}</span>
              </motion.button>
            ))}
          </div>
        </FadeUp>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </div>

        {/* Transparency banner */}
        <FadeUp delay={0.1} className="mt-12 sm:mt-14">
          <div className="p-5 rounded-2xl bg-[#0d0f1a]/80 border border-[#1a1e30] flex items-start gap-3.5">
            <ShieldAlert className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
            <div className="text-xs text-slate-300 leading-relaxed">
              <span className="font-semibold text-white block mb-0.5">
                Verified Project Claims &amp; Honest Presentation:
              </span>
              I have not invented fake commercial deployments or exaggerated metric claims. Projects
              marked with placeholder tags reflect architecture patterns and code drills I build to
              master TypeScript, Next.js App Router, and modern React state flows.
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
