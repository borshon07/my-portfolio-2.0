"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import {
  ArrowDown,
  Mail,
  ArrowUpRight,
  MapPin,
  GraduationCap,
  Layers,
  Compass,
  Download,
  Code2,
  Sparkles,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/UI/Icons";
import { PERSONAL_INFO } from "@/data/portfolio";

/* ─── Framer/Motion Variants ─────────────────────────────────────── */
const heroContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

const cubicEase: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];
const linearEase: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: cubicEase },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.55, ease: linearEase },
  },
};

/* ─── Interactive Mouse Spotlight ─────────────────────────────────── */
function Spotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty("--spotlight-x", `${x}%`);
      el.style.setProperty("--spotlight-y", `${y}%`);
    };

    window.addEventListener("mousemove", update);
    return () => window.removeEventListener("mousemove", update);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0"
      style={{
        background:
          "radial-gradient(650px circle at var(--spotlight-x, 50%) var(--spotlight-y, 25%), rgba(99,102,241,0.09), transparent 65%)",
      }}
    />
  );
}

/* ─── Ambient Glow ────────────────────────────────────────────────── */
function AmbientGlow() {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[420px] w-[720px] rounded-full bg-indigo-600/12 blur-[110px] opacity-70"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 right-4 h-[320px] w-[320px] rounded-full bg-sky-500/8 blur-[90px] opacity-50"
      />
    </>
  );
}

/* ─── Hero Component ──────────────────────────────────────────────── */
export default function Hero() {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center pt-24 pb-16 sm:pt-32 sm:pb-24 overflow-hidden border-b border-[#1a1e30]">
      <AmbientGlow />
      <Spotlight />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Intro & Call to Actions */}
          <motion.div
            variants={heroContainer}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Status pill */}
            <motion.div variants={fadeUp}>
              <span className="inline-flex flex-wrap items-center gap-2 sm:gap-2.5 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-xs font-mono text-slate-300 mb-6 sm:mb-8 shadow-sm backdrop-blur-sm">
                <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                  </span>
                  Available for Internships &amp; Junior Roles
                </span>
                <span className="text-slate-600 hidden sm:inline">•</span>
                <span className="flex items-center gap-1 text-slate-400">
                  <MapPin className="w-3 h-3" />
                  {PERSONAL_INFO.location}
                </span>
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-[3.65rem] font-extrabold tracking-tight text-white leading-[1.12]"
            >
              Building thoughtful{" "}
              <br className="hidden sm:inline" />
              <span className="text-gradient">experiences for the web.</span>
            </motion.h1>

            {/* Subline */}
            <motion.p
              variants={fadeUp}
              className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl"
            >
              Hi, I&apos;m{" "}
              <span className="text-white font-semibold">{PERSONAL_INFO.name}</span>. A Computer
              Science &amp; Technology student and Junior Web Developer in Bangladesh — crafting
              clean, accessible, and responsive UIs with{" "}
              <span className="text-indigo-400 font-medium">React</span>,{" "}
              <span className="text-sky-400 font-medium">Next.js</span>,{" "}
              <span className="text-indigo-400 font-medium">TypeScript</span>, and{" "}
              <span className="text-sky-400 font-medium">Tailwind CSS</span>.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3 sm:gap-4 w-full"
            >
              {/* Primary View Projects */}
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="btn-glow inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-600/25 transition-all"
              >
                View Projects
                <ArrowDown className="w-4 h-4" />
              </motion.a>

              {/* Download CV Option */}
              <motion.a
                href={PERSONAL_INFO.resumeUrl || "/resume.pdf"}
                download="Borshon_Roy_Resume.pdf"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl text-sm font-semibold text-slate-200 bg-[#0d0f1a] hover:bg-[#12151f] border border-[#1a1e30] hover:border-slate-500 transition-all shadow-sm group"
                title="Download Borshon's Resume / CV"
              >
                <Download className="w-4 h-4 text-indigo-400 group-hover:translate-y-0.5 transition-transform" />
                Download CV
              </motion.a>

              {/* Contact Me CTA */}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl text-sm font-semibold text-slate-300 hover:text-white bg-[#0d0f1a] hover:bg-[#12151f] border border-[#1a1e30] hover:border-slate-500 transition-all shadow-sm"
              >
                Contact Me
                <ArrowUpRight className="w-4 h-4 text-slate-400" />
              </motion.a>

              {/* Social icons */}
              <div className="flex items-center gap-2 pl-1 sm:pl-3 sm:border-l sm:border-[#1a1e30] mt-1 sm:mt-0">
                {[
                  {
                    href: PERSONAL_INFO.github,
                    icon: <GithubIcon className="w-4 h-4" />,
                    label: "GitHub",
                  },
                  {
                    href: PERSONAL_INFO.linkedin,
                    icon: <LinkedinIcon className="w-4 h-4" />,
                    label: "LinkedIn",
                  },
                  {
                    href: `mailto:${PERSONAL_INFO.email}`,
                    icon: <Mail className="w-4 h-4" />,
                    label: "Email",
                  },
                ].map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target={s.label !== "Email" ? "_blank" : undefined}
                    rel={s.label !== "Email" ? "noopener noreferrer" : undefined}
                    whileHover={{ scale: 1.12, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2.5 rounded-xl text-slate-400 hover:text-white bg-[#0d0f1a] hover:bg-[#12151f] border border-[#1a1e30] hover:border-slate-600 transition-colors shadow-sm"
                    aria-label={s.label}
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Hero Profile Image & Interactive Tech Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-5 flex justify-center lg:justify-end relative"
          >
            <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
              {/* Backlight / Glow effect */}
              <div
                aria-hidden
                className="absolute inset-0 -m-3 rounded-3xl bg-gradient-to-tr from-indigo-500/20 via-sky-500/15 to-purple-500/20 blur-2xl opacity-70 transform rotate-1"
              />

              {/* Main Portrait Frame */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative rounded-3xl p-2 bg-gradient-to-b from-[#1a1e30] via-[#0d0f1a] to-[#080910] border border-[#2a3048] shadow-2xl overflow-hidden group"
              >
                {/* Photo Container */}
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#0d0f1a]">
                  {!imageError ? (
                    <Image
                      src={PERSONAL_INFO.avatarUrl || "/profile.jpg"}
                      alt={PERSONAL_INFO.name}
                      width={480}
                      height={480}
                      priority
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    /* Fallback avatar if custom image is missing */
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-indigo-950/40 via-[#0d0f1a] to-[#080910] text-center">
                      <div className="w-20 h-20 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-3 shadow-lg">
                        <Code2 className="w-10 h-10" />
                      </div>
                      <span className="text-xl font-bold text-white tracking-tight">
                        {PERSONAL_INFO.name}
                      </span>
                      <span className="text-xs text-indigo-300 font-mono mt-1">
                        Place your photo in public/profile.jpg
                      </span>
                    </div>
                  )}

                  {/* Inner subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080910]/80 via-transparent to-transparent pointer-events-none" />

                  {/* Name badge inside photo */}
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-[#080910]/80 backdrop-blur-md border border-white/10 flex items-center justify-between pointer-events-none">
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-white tracking-tight">
                        {PERSONAL_INFO.name}
                      </span>
                      <span className="text-[10px] font-mono text-slate-300">
                        {PERSONAL_INFO.role}
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Online
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge 1: Top-Right (Stack) */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0, y: [0, -6, 0] }}
                transition={{
                  opacity: { delay: 0.5, duration: 0.4 },
                  y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 },
                }}
                className="absolute -top-4 -right-4 sm:-right-6 p-2.5 sm:p-3 rounded-2xl bg-[#0d0f1a]/90 backdrop-blur-md border border-[#2a3048] shadow-xl flex items-center gap-2.5 pointer-events-none"
              >
                <div className="w-8 h-8 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                    Tech Stack
                  </span>
                  <span className="text-xs font-bold text-white">Next.js &amp; TypeScript</span>
                </div>
              </motion.div>

              {/* Floating Badge 2: Bottom-Left (CS Student) */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0, y: [0, 6, 0] }}
                transition={{
                  opacity: { delay: 0.6, duration: 0.4 },
                  y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
                }}
                className="absolute -bottom-4 -left-4 sm:-left-6 p-2.5 sm:p-3 rounded-2xl bg-[#0d0f1a]/90 backdrop-blur-md border border-[#2a3048] shadow-xl flex items-center gap-2.5 pointer-events-none"
              >
                <div className="w-8 h-8 rounded-xl bg-sky-500/20 border border-sky-500/30 flex items-center justify-center text-sky-400">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                    Academics
                  </span>
                  <span className="text-xs font-bold text-white">CS &amp; Technology</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Credibility strip */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.75 }}
          className="mt-14 sm:mt-20 md:mt-24 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-[#1a1e30]"
        >
          {[
            {
              icon: <GraduationCap className="w-4 h-4 text-indigo-400" />,
              label: "Academic Foundation",
              title: "Computer Science & Technology",
              desc: "Algorithms, systems & software principles",
            },
            {
              icon: <Layers className="w-4 h-4 text-sky-400" />,
              label: "Primary Focus",
              title: "Modern Frontend & Web Apps",
              desc: "Type-safe, dynamic UIs with React & Next.js",
            },
            {
              icon: <Compass className="w-4 h-4 text-emerald-400" />,
              label: "Professional Goal",
              title: "Internships & Junior Roles",
              desc: "Learning from senior engineers, shipping quality code",
            },
          ].map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85 + i * 0.1, duration: 0.45, ease: cubicEase }}
              whileHover={{ y: -3, borderColor: "rgba(99,102,241,0.35)" }}
              className="p-4 sm:p-5 rounded-xl bg-[#0d0f1a]/80 border border-[#1a1e30] cursor-default transition-all shadow-sm"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                  {card.label}
                </span>
                {card.icon}
              </div>
              <span className="text-sm font-semibold text-white block">{card.title}</span>
              <span className="text-xs text-slate-400 mt-1.5 block">{card.desc}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
