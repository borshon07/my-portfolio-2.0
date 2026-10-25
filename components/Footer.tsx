"use client";

import React from "react";
import { PERSONAL_INFO } from "@/data/portfolio";
import { ArrowUp, Code2 } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = 2026;

  return (
    <footer className="bg-[#07080c] border-t border-[#1e2233] py-12 text-slate-400 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Wordmark */}
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center">
              <Code2 className="w-3.5 h-3.5" />
            </div>
            <div>
              <span className="font-semibold text-sm text-white">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-slate-400 font-mono block text-[11px]">
                Junior Web Developer • Bangladesh
              </span>
            </div>
          </div>

          {/* Nav links */}
          <nav
            aria-label="Footer Navigation"
            className="flex flex-wrap items-center justify-center gap-5 text-slate-400 text-xs font-medium"
          >
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-white transition-colors">
              Skills
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              Projects
            </a>
            <a href="#experience" className="hover:text-white transition-colors">
              Experience
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
            <a
              href="https://github.com/borshonroy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
          </nav>

          {/* Back to top button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#10121a] border border-[#1e2233] text-slate-300 hover:text-white hover:border-slate-600 transition-colors"
            aria-label="Scroll back to top of page"
          >
            <span className="text-[11px] font-mono">Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="mt-8 pt-8 border-t border-[#1e2233]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-slate-400 text-[11px] font-mono">
          <p>
            © {currentYear} {PERSONAL_INFO.name}. All rights reserved.
          </p>
          <p className="flex items-center justify-center gap-1">
            Built with Next.js App Router, TypeScript &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
