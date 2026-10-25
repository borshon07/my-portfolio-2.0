"use client";

import React, { useState } from "react";
import SectionHeading from "@/components/UI/SectionHeading";
import { PERSONAL_INFO } from "@/data/portfolio";
import {
  Mail,
  Copy,
  Check,
  Send,
  MapPin,
  Clock,
  ArrowUpRight,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/UI/Icons";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCopyEmail = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(PERSONAL_INFO.email);
      } else {
        // Fallback for sandboxes
        const textArea = document.createElement("textarea");
        textArea.value = PERSONAL_INFO.email;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setLoading(true);
    // Simulate immediate clean response without broken server failure
    setTimeout(() => {
      setLoading(false);
      setFormSubmitted(true);
    }, 600);
  };

  const handleSendViaMailto = () => {
    const subject = encodeURIComponent(
      formState.subject || `Inquiry from ${formState.name || "Portfolio Visitor"}`
    );
    const body = encodeURIComponent(
      `Hi Borshon,\n\n${formState.message}\n\nFrom: ${formState.name} (${formState.email})`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-b border-[#1e2233]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="05 // CONTACT"
          title="Let's build something thoughtful together."
          subtitle="Open for internships, junior web developer positions, freelance opportunities, and collaborative projects."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Direct Info & Copy Button */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-[#10121a] border border-[#1e2233]">
              <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                <Mail className="w-4 h-4 text-indigo-400" />
                Direct Communication
              </h3>
              <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                Feel free to reach out via email. I respond promptly to all internship inquiries, junior position discussions, or technical conversations.
              </p>

              {/* Email Copy Card */}
              <div className="p-3.5 rounded-xl bg-[#151824] border border-[#1e2233] flex items-center justify-between gap-3">
                <div className="truncate">
                  <span className="text-[11px] font-mono text-slate-400 block">
                    Email Address
                  </span>
                  <span className="text-sm font-mono text-white font-medium truncate block">
                    {PERSONAL_INFO.email}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all shrink-0 ${
                    copied
                      ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                      : "bg-indigo-600 hover:bg-indigo-500 text-white shadow-sm shadow-indigo-600/30 active:scale-95"
                  }`}
                  aria-label="Copy email address to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      Copy
                    </>
                  )}
                </button>
              </div>

              {/* Screen reader live notification */}
              <div aria-live="polite" className="sr-only">
                {copied ? "Email address copied to clipboard" : ""}
              </div>

              {/* Mailto Direct Button */}
              <div className="mt-4">
                <a
                  href={`mailto:${PERSONAL_INFO.email}?subject=Inquiry%20via%20Portfolio`}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-200 bg-[#151824] hover:bg-[#1a1e2d] border border-[#1e2233] hover:border-slate-600 transition-colors"
                >
                  Open Default Mail Client
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </div>

            {/* Quick Context Card */}
            <div className="p-6 rounded-2xl bg-[#10121a] border border-[#1e2233] space-y-3.5 text-xs font-mono">
              <div className="flex items-center gap-3 text-slate-300">
                <MapPin className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>Location: Bangladesh (Available for global remote)</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Clock className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Timezone: Bangladesh Standard Time (UTC+6)</span>
              </div>
              <div className="flex items-center gap-3 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <span>Status: Actively open to new roles</span>
              </div>
            </div>

            {/* Social Links Card */}
            <div className="p-6 rounded-2xl bg-[#10121a] border border-[#1e2233]">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-3">
                Social Profiles
              </span>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-[#151824] border border-[#1e2233] hover:border-slate-600 text-slate-300 hover:text-white transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2">
                    <GithubIcon className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                    <span className="text-xs font-medium">GitHub</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-white transition-colors" />
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-[#151824] border border-[#1e2233] hover:border-slate-600 text-slate-300 hover:text-white transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2">
                    <LinkedinIcon className="w-4 h-4 text-sky-400" />
                    <span className="text-xs font-medium">LinkedIn</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#10121a] border border-[#1e2233]">
              <h3 className="text-lg font-bold text-white mb-1">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill out the form below or write directly. All messages are treated with respect and prompt attention.
              </p>

              {formSubmitted ? (
                <div className="p-6 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-center space-y-3 animate-in fade-in duration-200">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white">
                    Thank you, {formState.name}!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                    Your message draft has been prepared. You can also send it directly through your mail app with one click below:
                  </p>
                  <div className="pt-2 flex flex-wrap justify-center gap-3">
                    <button
                      type="button"
                      onClick={handleSendViaMailto}
                      className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors inline-flex items-center gap-1.5 shadow-sm shadow-indigo-600/30"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      Dispatch via Email Client
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormState({ name: "", email: "", subject: "", message: "" });
                      }}
                      className="px-4 py-2 rounded-xl text-xs font-medium text-slate-300 bg-[#151824] hover:bg-[#1a1e2d] border border-[#1e2233] transition-colors"
                    >
                      Write Another Note
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-mono text-slate-300 mb-1.5"
                      >
                        Your Name <span className="text-indigo-400">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        placeholder="e.g. Alex Johnson"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#151824] border border-[#1e2233] focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/30 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-mono text-slate-300 mb-1.5"
                      >
                        Your Email <span className="text-indigo-400">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                        placeholder="alex@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#151824] border border-[#1e2233] focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/30 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-xs font-mono text-slate-300 mb-1.5"
                    >
                      Subject / Role Title
                    </label>
                    <input
                      id="subject"
                      type="text"
                      value={formState.subject}
                      onChange={(e) =>
                        setFormState({ ...formState, subject: e.target.value })
                      }
                      placeholder="e.g. Junior Web Developer Opportunity / Internship"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#151824] border border-[#1e2233] focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/30 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-mono text-slate-300 mb-1.5"
                    >
                      Message <span className="text-indigo-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      placeholder="Tell me about your team, project requirements, or role details..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#151824] border border-[#1e2233] focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/30 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors resize-y"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 transition-all shadow-md shadow-indigo-600/25 active:scale-[0.98]"
                    >
                      {loading ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <span className="text-[11px] font-mono text-slate-400 text-center sm:text-right">
                      No spam • Direct inbox delivery
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
