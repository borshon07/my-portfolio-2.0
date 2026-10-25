"use client";

import React from "react";
import { motion } from "motion/react";
import SectionHeading from "@/components/UI/SectionHeading";
import { FadeUp, StaggerContainer, staggerItem } from "@/components/UI/animations";
import { CORE_VALUES, PERSONAL_INFO } from "@/data/portfolio";
import { BookOpen, Code, Layout, Users, GraduationCap, Compass, Sparkles, Download } from "lucide-react";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  "book-open": BookOpen,
  code: Code,
  layout: Layout,
  users: Users,
};

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 border-b border-[#1a1e30]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <SectionHeading
            tag="01 // ABOUT ME"
            title="Student of Computer Science, practitioner of modern web design."
            subtitle="A realistic look into my academic foundation, web development journey, and what drives my work."
          />
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Narrative Column */}
          <StaggerContainer className="lg:col-span-7 space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed">
            <motion.p variants={staggerItem}>
              I am currently studying{" "}
              <strong className="text-white font-medium">Computer Science &amp; Technology</strong>{" "}
              in Bangladesh. My formal studies provide me with a solid understanding of fundamental
              computing principles, logic design, data structures, and relational databases.
            </motion.p>

            <motion.p variants={staggerItem}>
              Alongside coursework, I dove into web development out of pure fascination with turning
              code into tactile, responsive interfaces. I started with raw{" "}
              <strong className="text-white font-medium">HTML, CSS, and vanilla JavaScript</strong>,
              then embraced component architecture with{" "}
              <span className="text-indigo-300 font-medium">React</span>, fullstack concepts via{" "}
              <span className="text-sky-300 font-medium">Next.js App Router</span>, and
              compile-time confidence through{" "}
              <span className="text-indigo-300 font-medium">TypeScript</span>.
            </motion.p>

            {/* Objective callout */}
            <motion.div
              variants={staggerItem}
              className="p-5 rounded-2xl bg-indigo-950/20 border border-indigo-500/20 text-sm text-slate-300 space-y-2"
            >
              <div className="flex items-center gap-2 text-indigo-400 font-semibold text-xs uppercase tracking-wider font-mono">
                <Compass className="w-4 h-4" />
                Current Focus &amp; Objective
              </div>
              <p className="leading-relaxed">
                Actively seeking{" "}
                <strong className="text-white">
                  internships, junior frontend developer roles, or freelance opportunities
                </strong>
                . I bring honesty, coachability, a strong work ethic, and genuine eagerness to grow
                with experienced engineers.
              </p>
            </motion.div>
          </StaggerContainer>

          {/* Quick Background Card */}
          <FadeUp delay={0.15} className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-[#0d0f1a] border border-[#1a1e30]">
              <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-indigo-400" />
                Quick Background
              </h3>
              <dl className="space-y-3.5 text-sm divide-y divide-[#1a1e30]">
                {[
                  ["Education", "Computer Science & Technology Student"],
                  ["Location", "Bangladesh (GMT+6)"],
                  ["Work Preference", "Remote / Hybrid / On-site"],
                  ["Current Focus", "Next.js App Router & TypeScript"],
                  ["Version Control", "Git & GitHub Daily"],
                ].map(([dt, dd]) => (
                  <div
                    key={dt}
                    className="pt-3 first:pt-0 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4"
                  >
                    <dt className="text-slate-400 text-xs sm:text-sm shrink-0">{dt}</dt>
                    <dd className="text-slate-200 font-medium text-xs sm:text-sm sm:text-right">{dd}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Download CV Banner */}
            <div className="p-5 rounded-2xl bg-[#0d0f1a] border border-[#1a1e30] flex items-center justify-between gap-4">
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-white">Full Curriculum Vitae</span>
                <span className="text-[11px] text-slate-400">PDF format • Updated 2025</span>
              </div>
              <motion.a
                href={PERSONAL_INFO.resumeUrl || "/resume.pdf"}
                download="Borshon_Roy_Resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl transition-colors shadow-sm shadow-indigo-600/25 shrink-0"
              >
                <Download className="w-3.5 h-3.5" />
                Download CV
              </motion.a>
            </div>

            <div className="p-4 rounded-2xl bg-indigo-950/20 border border-indigo-500/20 text-xs text-indigo-200/90 leading-relaxed">
              <span className="font-semibold text-indigo-300 block mb-1">A Note on Transparency:</span>
              I do not claim senior mastery. I am an enthusiastic, disciplined student who writes
              clean code and builds with genuine passion.
            </div>
          </FadeUp>
        </div>

        {/* Core Values */}
        <FadeUp delay={0.1} className="mt-14 sm:mt-16 pt-10 border-t border-[#1a1e30]">
          <h3 className="text-lg font-bold text-white mb-6">Core Principles in My Work</h3>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CORE_VALUES.map((val) => {
              const IconComp = ICON_MAP[val.icon] || Sparkles;
              return (
                <motion.div
                  key={val.title}
                  variants={staggerItem}
                  whileHover={{ y: -4, borderColor: "rgba(99,102,241,0.4)" }}
                  className="p-5 rounded-xl bg-[#0d0f1a]/80 border border-[#1a1e30] cursor-default transition-colors flex flex-col"
                >
                  <div className="w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mb-3">
                    <IconComp className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-2">{val.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{val.description}</p>
                </motion.div>
              );
            })}
          </StaggerContainer>
        </FadeUp>
      </div>
    </section>
  );
}
