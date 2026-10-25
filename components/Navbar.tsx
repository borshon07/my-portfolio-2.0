"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight, Code2, Download } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio";
import { ThemeToggle } from "@/components/UI/ThemeToggle";

const NAV_LINKS = [
  { label: "About", href: "#about", id: "about" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const scrollPos = window.scrollY + 120;
      const sections = NAV_LINKS.map((l) => document.getElementById(l.id));
      for (let i = sections.length - 1; i >= 0; i--) {
        const s = sections[i];
        if (s && s.offsetTop <= scrollPos) {
          setActiveSection(NAV_LINKS[i].id);
          return;
        }
      }
      if (window.scrollY < 200) setActiveSection("");
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [mobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -72, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#080910]/90 backdrop-blur-md border-b border-[#1a1e30] py-3 shadow-xl shadow-black/40"
            : "bg-transparent py-4 sm:py-5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Wordmark */}
            <Link
              href="/"
              className="group flex items-center gap-2.5 focus-visible:ring-2 focus-visible:ring-indigo-400 rounded-lg p-1"
              aria-label="Borshon Roy – Home"
            >
              <motion.div
                whileHover={{ scale: 1.08, rotate: 5 }}
                className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500/20 to-sky-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:border-indigo-400 transition-colors"
              >
                <Code2 className="w-4 h-4" />
              </motion.div>
              <div className="flex flex-col">
                <span className="font-semibold text-sm sm:text-base tracking-tight text-white flex items-center gap-2">
                  {PERSONAL_INFO.name}
                  <span
                    className="inline-block w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]"
                    title="Available for opportunities"
                  />
                </span>
                <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">
                  Junior Web Developer
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav
              className="hidden md:flex items-center gap-1 bg-[#0d0f1a]/90 border border-[#1a1e30] rounded-full p-1 shadow-inner backdrop-blur-md"
              aria-label="Main Navigation"
            >
              {NAV_LINKS.map((link) => {
                const active = activeSection === link.id;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`relative px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 ${
                      active
                        ? "text-white"
                        : "text-slate-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-white/10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </a>
                );
              })}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-2.5">
              {/* Resume Download */}
              <motion.a
                href={PERSONAL_INFO.resumeUrl || "/resume.pdf"}
                download="Borshon_Roy_Resume.pdf"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-medium text-slate-300 hover:text-white bg-[#0d0f1a] hover:bg-[#12151f] border border-[#1a1e30] hover:border-slate-600 rounded-lg transition-colors shadow-sm"
                title="Download Borshon's Resume"
              >
                <Download className="w-3.5 h-3.5 text-indigo-400" />
                Resume
              </motion.a>

              {/* Get in Touch CTA */}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors shadow-sm shadow-indigo-600/30"
              >
                Get in Touch
                <ArrowUpRight className="w-3.5 h-3.5" />
              </motion.a>

              {/* Theme Toggle */}
              <ThemeToggle />
            </div>

            {/* Mobile Actions */}
            <div className="flex md:hidden items-center gap-2">
              <ThemeToggle />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 border border-transparent hover:border-[#1a1e30] transition-colors"
                aria-label="Open navigation"
                aria-expanded={mobileMenuOpen}
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            />
            {/* Panel */}
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Navigation"
              className="fixed right-0 top-0 bottom-0 w-72 max-w-[85vw] bg-[#080910] border-l border-[#1a1e30] z-50 md:hidden flex flex-col"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-[#1a1e30]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <span className="font-semibold text-sm text-white">{PERSONAL_INFO.name}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 border border-transparent hover:border-[#1a1e30] transition-colors"
                  aria-label="Close navigation"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Nav links */}
              <div className="flex-1 px-4 py-6 overflow-y-auto">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 px-2 mb-3 block">
                  Navigation
                </span>
                <div className="flex flex-col gap-1">
                  {NAV_LINKS.map((link, i) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06 + 0.1, duration: 0.3 }}
                      className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium transition-all border ${
                        activeSection === link.id
                          ? "text-white bg-indigo-600/10 border-indigo-500/30"
                          : "text-slate-300 hover:text-white border-transparent hover:bg-white/5"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="w-4 h-4 text-slate-500" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="px-4 pb-8 pt-4 border-t border-[#1a1e30] flex flex-col gap-2.5">
                <a
                  href={PERSONAL_INFO.resumeUrl || "/resume.pdf"}
                  download="Borshon_Roy_Resume.pdf"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-slate-200 bg-[#0d0f1a] hover:bg-[#12151f] border border-[#1a1e30] rounded-xl transition-colors"
                >
                  <Download className="w-4 h-4 text-indigo-400" />
                  Download Resume / CV
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl transition-colors shadow-md shadow-indigo-600/20"
                >
                  Contact Borshon
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <div className="text-center pt-1">
                  <span className="text-xs font-mono text-emerald-400">● {PERSONAL_INFO.status}</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
