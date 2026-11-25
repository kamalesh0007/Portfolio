import React, { useState } from 'react';
import { Mail, Check, Copy, Send, Sparkles, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './icons/SocialIcons';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.email || !formState.message) return;

    setIsSubmitting(true);
    // Simulate lightweight client dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // Open mailto link with prefilled subject/body as native fallback
      const subject = encodeURIComponent(`Portfolio Inquiry from ${formState.name || 'Visitor'}`);
      const body = encodeURIComponent(`${formState.message}\n\nSender: ${formState.name} (${formState.email})`);
      window.location.href = `mailto:${portfolioData.personal.email}?subject=${subject}&body=${body}`;
    }, 600);
  };

  return (
    <section id="contact" className="scroll-mt-24 py-28 relative border-t border-[#D1E8E2]/10 overflow-hidden">
      {/* Ambient background glow */}
      <div
        className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#116466]/15 blur-[160px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Contact Narrative & Quick Actions */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#116466]/20 border border-[#116466]/40 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFCB9A]"></span>
              <span className="font-mono text-xs uppercase tracking-widest text-[#FFCB9A]">04 // CONNECT</span>
            </div>

            <h2 className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl text-[#D1E8E2] tracking-tight leading-[1.18] mb-6">
              Let's Build Something Exceptional
            </h2>

            <p className="text-[#D1E8E2]/85 text-base sm:text-lg font-normal leading-relaxed mb-8 max-w-xl">
              I am currently open to exciting frontend architecture roles, applied AI initiatives, and ambitious engineering collaborations. Whether you have a specific question or a high-impact vision, reach out directly.
            </p>

            {/* Email Direct Pill with Copy Button */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#2C3531]/90 border border-[#D1E8E2]/15 shadow-xl mb-8 max-w-md">
              <div className="font-mono text-xs text-[#D9B08C] uppercase tracking-wider mb-2">
                DIRECT INBOX
              </div>
              <div className="flex items-center justify-between gap-3">
                <a
                  href={`mailto:${portfolioData.personal.email}`}
                  className="font-mono text-sm sm:text-base text-[#D1E8E2] hover:text-[#FFCB9A] transition-colors truncate font-medium"
                >
                  {portfolioData.personal.email}
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-[#D1E8E2] bg-[#116466]/30 hover:bg-[#116466] border border-[#116466] transition-all flex-shrink-0 active:scale-95"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#FFCB9A]" />
                      <span className="text-[#FFCB9A]">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#D1E8E2]" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social Links Row */}
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#D1E8E2]/60 mr-1">
                Networks:
              </span>
              <a
                href="https://github.com/kamalesh0007"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#2C3531] border border-[#D1E8E2]/15 hover:border-[#116466] text-[#D1E8E2] hover:text-[#FFCB9A] transition-all text-xs font-mono group"
              >
                <GithubIcon size={16} className="text-[#D1E8E2] group-hover:text-[#FFCB9A] transition-colors" />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/kamalesh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#2C3531] border border-[#D1E8E2]/15 hover:border-[#116466] text-[#D1E8E2] hover:text-[#FFCB9A] transition-all text-xs font-mono group"
              >
                <LinkedinIcon size={16} className="text-[#D1E8E2] group-hover:text-[#FFCB9A] transition-colors" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right: Interactive Inquiry Card */}
          <div className="lg:col-span-6">
            <div className="p-7 sm:p-9 rounded-2xl bg-[#2C3531]/95 border border-[#D1E8E2]/15 shadow-2xl shadow-black/40">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#D1E8E2]/10">
                <div className="flex items-center gap-2 font-mono text-xs text-[#FFCB9A]">
                  <Sparkles className="w-4 h-4 text-[#116466]" />
                  <span>TRANSMIT MESSAGE</span>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[11px] text-[#D9B08C]">
                  <span className="w-2 h-2 rounded-full bg-[#116466] animate-pulse"></span>
                  <span>ONLINE</span>
                </div>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#116466]/40 border border-[#116466] flex items-center justify-center mx-auto text-[#FFCB9A]">
                    <Check className="w-6 h-6 text-[#FFCB9A]" />
                  </div>
                  <h3 className="font-sans font-bold text-xl text-[#D1E8E2]">
                    Message Prepared & Dispatched
                  </h3>
                  <p className="text-sm text-[#D1E8E2]/75 max-w-sm mx-auto">
                    Your email client will open with your pre-filled inquiry. You can also write directly to{' '}
                    <span className="text-[#FFCB9A] font-mono">{portfolioData.personal.email}</span>.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({ name: '', email: '', message: '' });
                    }}
                    className="text-xs font-mono text-[#D9B08C] hover:text-[#FFCB9A] underline pt-2"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block font-mono text-xs text-[#D1E8E2]/80 uppercase tracking-wider mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 rounded-xl bg-[#242c29] border border-[#D1E8E2]/15 text-[#D1E8E2] placeholder-[#D1E8E2]/30 text-sm focus:outline-none focus:border-[#116466] focus:ring-1 focus:ring-[#116466] transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block font-mono text-xs text-[#D1E8E2]/80 uppercase tracking-wider mb-2">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="jane@organization.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#242c29] border border-[#D1E8E2]/15 text-[#D1E8E2] placeholder-[#D1E8E2]/30 text-sm focus:outline-none focus:border-[#116466] focus:ring-1 focus:ring-[#116466] transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-mono text-xs text-[#D1E8E2]/80 uppercase tracking-wider mb-2">
                      Project Vision / Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Tell me about your product, timeline, or engineering challenge..."
                      className="w-full px-4 py-3 rounded-xl bg-[#242c29] border border-[#D1E8E2]/15 text-[#D1E8E2] placeholder-[#D1E8E2]/30 text-sm focus:outline-none focus:border-[#116466] focus:ring-1 focus:ring-[#116466] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-sans font-semibold text-sm text-[#D1E8E2] bg-[#116466] hover:bg-[#167e80] shadow-lg shadow-[#116466]/35 hover:shadow-xl hover:shadow-[#116466]/50 border border-[#D1E8E2]/15 transition-all duration-300 disabled:opacity-50 active:scale-98"
                  >
                    <span>{isSubmitting ? 'Transmitting...' : 'Send Message'}</span>
                    <Send className="w-4 h-4 text-[#FFCB9A]" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
