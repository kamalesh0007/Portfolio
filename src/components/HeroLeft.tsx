import React from 'react';
import { ArrowRight, Download, Sparkles, Terminal, Code2 } from 'lucide-react';
import { motion, type Variants } from 'motion/react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './icons/SocialIcons';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const HeroLeft: React.FC = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col justify-center max-w-2xl lg:max-w-xl xl:max-w-2xl py-6 lg:py-10"
    >
      {/* 1. Small Introductory Label */}
      <motion.div variants={itemVariants} className="mb-4 sm:mb-6">
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#116466]/20 border border-[#116466]/50 shadow-inner backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFCB9A] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FFCB9A]"></span>
          </span>
          <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-[#FFCB9A] uppercase">
            {portfolioData.personal.introLabel}
          </span>
          <span className="text-[#D1E8E2]/30 text-xs">|</span>
          <span className="font-mono text-[11px] text-[#D1E8E2]/80 hidden sm:inline-block">
            {portfolioData.personal.statusText}
          </span>
        </div>
      </motion.div>

      {/* 2. Large Typography-based Heading */}
      <motion.div variants={itemVariants} className="mb-5 sm:mb-6">
        <h1 className="font-sans font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#D1E8E2] leading-[1.12]">
          Building Digital Experiences{' '}
          <span className="inline-block relative">
            <span className="bg-gradient-to-r from-[#D1E8E2] via-[#FFCB9A] to-[#116466] bg-clip-text text-transparent">
              with Code & Intelligence.
            </span>
            {/* Subtle decorative underline highlight in warm beige/teal */}
            <span
              className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-[#116466] via-[#D9B08C]/60 to-transparent rounded-full"
              aria-hidden="true"
            />
          </span>
        </h1>
      </motion.div>

      {/* 3. Short Description highlighting AI, Frontend, and Problem-Solving */}
      <motion.div variants={itemVariants} className="mb-8">
        <p className="text-base sm:text-lg text-[#D1E8E2]/85 font-normal leading-relaxed max-w-xl">
          {portfolioData.personal.description}
        </p>
      </motion.div>

      {/* 4. Two CTA Buttons (Staggered appearance & responsive stacking) */}
      <motion.div
        variants={itemVariants}
        className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 mb-8 sm:mb-10"
      >
        {/* Primary CTA: Explore My Work */}
        <a
          href="#projects"
          className="relative group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-sans font-semibold text-sm sm:text-base text-[#D1E8E2] bg-[#116466] hover:bg-[#167e80] shadow-lg shadow-[#116466]/35 hover:shadow-xl hover:shadow-[#116466]/50 border border-[#D1E8E2]/15 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
        >
          <span>Explore My Work</span>
          <ArrowRight className="w-4 h-4 text-[#FFCB9A] group-hover:translate-x-1 transition-transform duration-200" />
        </a>

        {/* Secondary CTA: Download Resume */}
        <a
          href={portfolioData.personal.resumePath}
          download="Kamalesh_Resume.pdf"
          className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-sans font-semibold text-sm sm:text-base text-[#D1E8E2] bg-[#2C3531]/80 hover:bg-[#116466]/20 border border-[#D1E8E2]/25 hover:border-[#FFCB9A]/60 shadow-sm transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 group"
        >
          <Download className="w-4 h-4 text-[#D9B08C] group-hover:text-[#FFCB9A] group-hover:translate-y-0.5 transition-all duration-200" />
          <span className="group-hover:text-[#FFCB9A] transition-colors">Download Resume</span>
        </a>
      </motion.div>

      {/* 5. Social Links (GitHub and LinkedIn) & Status Metrics */}
      <motion.div
        variants={itemVariants}
        className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-[#D1E8E2]/10"
      >
        {/* Social Links */}
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs uppercase tracking-wider text-[#D1E8E2]/60 mr-1">
            Connect:
          </span>
          <a
            href="https://github.com/kamalesh0007"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#2C3531]/90 hover:bg-[#116466]/30 border border-[#D1E8E2]/15 hover:border-[#116466] text-[#D1E8E2] hover:text-[#FFCB9A] transition-all duration-200 text-xs font-mono group"
            aria-label="GitHub Profile"
          >
            <GithubIcon size={16} className="text-[#D1E8E2] group-hover:text-[#FFCB9A] transition-colors" />
            <span>GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/kamalesh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#2C3531]/90 hover:bg-[#116466]/30 border border-[#D1E8E2]/15 hover:border-[#116466] text-[#D1E8E2] hover:text-[#FFCB9A] transition-all duration-200 text-xs font-mono group"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon size={16} className="text-[#D1E8E2] group-hover:text-[#FFCB9A] transition-colors" />
            <span>LinkedIn</span>
          </a>
        </div>

        {/* Micro Engineering Spec */}
        <div className="flex items-center gap-2 text-xs font-mono text-[#D9B08C]/90">
          <span className="h-1.5 w-1.5 rounded-full bg-[#116466]"></span>
          <span>Astro 5 • React 19 • TypeScript</span>
        </div>
      </motion.div>
    </motion.div>
  );
};
