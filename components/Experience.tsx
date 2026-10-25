import React from "react";
import SectionHeading from "@/components/UI/SectionHeading";
import { TIMELINE } from "@/data/portfolio";
import { GraduationCap, Code2, GitBranch, MapPin, CheckCircle2 } from "lucide-react";

const TYPE_CONFIG = {
  Education: {
    icon: GraduationCap,
    badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    dotBorder: "border-emerald-500/50 group-hover:border-emerald-400",
    dotIcon: "text-emerald-400",
  },
  "Self-Directed Learning": {
    icon: Code2,
    badge: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    dotBorder: "border-indigo-500/50 group-hover:border-indigo-400",
    dotIcon: "text-indigo-400",
  },
  "Project Milestones": {
    icon: GitBranch,
    badge: "bg-sky-500/10 text-sky-400 border-sky-500/20",
    dotBorder: "border-sky-500/50 group-hover:border-sky-400",
    dotIcon: "text-sky-400",
  },
};

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 border-b border-[#1e2233]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="04 // LEARNING & EXPERIENCE"
          title="Education and self-directed development milestones."
          subtitle="A verified chronological record of my academic coursework, programming journey, and technical milestones."
        />

        <div className="relative border-l border-[#1e2233] ml-3 sm:ml-6 md:ml-8 pl-5 sm:pl-8 space-y-8 sm:space-y-12">
          {TIMELINE.map((item, index) => {
            const config = TYPE_CONFIG[item.type] || TYPE_CONFIG["Self-Directed Learning"];
            const IconComp = config.icon;

            return (
              <div key={index} className="relative group">
                {/* Timeline Node Dot - Centered on border line with -left-3 */}
                <div
                  className={`absolute -left-3 top-2 w-6 h-6 rounded-full bg-[#090a0f] border ${config.dotBorder} flex items-center justify-center transition-all shadow-sm shadow-black/40`}
                >
                  <IconComp className={`w-3 h-3 ${config.dotIcon} group-hover:scale-110 transition-transform`} />
                </div>

                {/* Content Box */}
                <div className="p-5 sm:p-6 rounded-2xl bg-[#10121a] border border-[#1e2233] hover:border-slate-700 transition-colors shadow-sm">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-[#151824] border border-[#1e2233] text-white">
                        {item.period}
                      </span>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${config.badge}`}>
                        {item.type}
                      </span>
                    </div>

                    <span className="inline-flex items-center gap-1 text-xs text-slate-400 font-mono">
                      <MapPin className="w-3 h-3 text-slate-500" />
                      {item.location}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-xl font-bold text-white tracking-tight">
                    {item.title}
                  </h3>

                  <div className="text-xs sm:text-sm text-slate-400 font-medium mt-0.5 mb-3.5">
                    {item.organization}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Highlights list */}
                  <div className="space-y-2 pt-3.5 border-t border-[#1e2233]">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                      Key Highlights &amp; Practice Areas:
                    </span>
                    {item.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-indigo-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
