import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Sparkles, Terminal, Cpu, Check, Activity, Code2, Layers, Zap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const HeroVisual: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [activeTab, setActiveTab] = useState<'architecture' | 'telemetry'>('architecture');

  // Floating animation configuration
  const floatAnimation1 = shouldReduceMotion
    ? {}
    : {
        y: [0, -8, 0],
        transition: {
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        },
      };

  const floatAnimation2 = shouldReduceMotion
    ? {}
    : {
        y: [0, 8, 0],
        transition: {
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.5,
        },
      };

  const rotateAnimation = shouldReduceMotion
    ? {}
    : {
        rotate: 360,
        transition: {
          duration: 60,
          repeat: Infinity,
          ease: 'linear',
        },
      };

  return (
    <div className="relative w-full max-w-lg lg:max-w-none flex items-center justify-center p-2 sm:p-6 lg:p-8">
      {/* Background Ambient Radial Glows */}
      <div
        className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-[#116466]/20 blur-3xl pointer-events-none -top-10 -right-10"
        aria-hidden="true"
      />
      <div
        className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-[#D1E8E2]/5 blur-3xl pointer-events-none -bottom-10 -left-10"
        aria-hidden="true"
      />

      {/* Abstract Concentric Geometric Accent Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <motion.div
          animate={rotateAnimation}
          className="w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] rounded-full border border-dashed border-[#116466]/30 opacity-70"
          aria-hidden="true"
        />
        <div
          className="absolute w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] rounded-full border border-dotted border-[#D9B08C]/20 opacity-50"
          aria-hidden="true"
        />
      </div>

      {/* Technical Coordinate Markers */}
      <div className="absolute top-2 left-4 font-mono text-[10px] text-[#D1E8E2]/30 select-none hidden sm:block">
        [ENG_SYS::ACTIVE]
      </div>
      <div className="absolute top-2 right-4 font-mono text-[10px] text-[#D1E8E2]/30 select-none hidden sm:block">
        [NEURAL_UI::v2.4]
      </div>
      <div className="absolute bottom-2 left-4 font-mono text-[10px] text-[#D1E8E2]/30 select-none hidden sm:block">
        [LATENCY::12MS]
      </div>
      <div className="absolute bottom-2 right-4 font-mono text-[10px] text-[#D1E8E2]/30 select-none hidden sm:block">
        [PERF::100/100]
      </div>

      {/* MAIN CODE & ARCHITECTURE TERMINAL WINDOW */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-md sm:max-w-lg rounded-2xl bg-[#2C3531]/90 backdrop-blur-xl border border-[#D1E8E2]/15 shadow-2xl shadow-black/50 overflow-hidden"
      >
        {/* Terminal Header Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#242c29]/90 border-b border-[#D1E8E2]/10">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#FFCB9A]/80 border border-[#FFCB9A]/40 inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#D9B08C]/80 border border-[#D9B08C]/40 inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#116466] border border-[#116466]/40 inline-block" />
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-[#D1E8E2]/80 bg-[#2C3531] px-3 py-1 rounded-md border border-[#D1E8E2]/10">
            <Code2 className="w-3.5 h-3.5 text-[#116466]" />
            <span className="text-[#D1E8E2]/90 font-medium">architecture.config.ts</span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#116466] animate-pulse" />
            <span className="font-mono text-[10px] text-[#FFCB9A] hidden sm:inline-block">LIVE</span>
          </div>
        </div>

        {/* Tab switcher: Code view / Telemetry */}
        <div className="flex items-center px-4 pt-2.5 bg-[#2C3531]/50 border-b border-[#D1E8E2]/5 text-xs font-mono">
          <button
            type="button"
            onClick={() => setActiveTab('architecture')}
            className={`pb-2 px-2.5 transition-colors border-b-2 flex items-center gap-1.5 ${
              activeTab === 'architecture'
                ? 'border-[#116466] text-[#FFCB9A] font-medium'
                : 'border-transparent text-[#D1E8E2]/50 hover:text-[#D1E8E2]/80'
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-[#116466]" />
            <span>Architecture</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('telemetry')}
            className={`pb-2 px-2.5 transition-colors border-b-2 flex items-center gap-1.5 ${
              activeTab === 'telemetry'
                ? 'border-[#116466] text-[#FFCB9A] font-medium'
                : 'border-transparent text-[#D1E8E2]/50 hover:text-[#D1E8E2]/80'
            }`}
          >
            <Activity className="w-3.5 h-3.5 text-[#D9B08C]" />
            <span>Telemetry</span>
          </button>
        </div>

        {/* Code Content Area */}
        <div className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto min-h-[260px] flex flex-col justify-between">
          {activeTab === 'architecture' ? (
            <div className="space-y-1.5">
              <div className="text-[#D1E8E2]/40 text-[11px] mb-2 select-none">
                // Kamalesh • Fullstack Frontend & AI Engineering Pipeline
              </div>

              <div>
                <span className="text-[#116466] font-semibold">export const </span>
                <span className="text-[#D9B08C]">systemSpecs </span>
                <span className="text-[#D1E8E2]">= </span>
                <span className="text-[#D1E8E2]">{'{'}</span>
              </div>

              <div className="pl-4">
                <span className="text-[#D1E8E2]/70">engineer: </span>
                <span className="text-[#FFCB9A]">"Kamalesh"</span>
                <span className="text-[#D1E8E2]/50">,</span>
              </div>

              <div className="pl-4">
                <span className="text-[#D1E8E2]/70">domain: </span>
                <span className="text-[#D1E8E2]">[</span>
                <span className="text-[#FFCB9A]">"Frontend Architecture"</span>
                <span className="text-[#D1E8E2]/50">, </span>
                <span className="text-[#FFCB9A]">"AI Systems"</span>
                <span className="text-[#D1E8E2]">]</span>
                <span className="text-[#D1E8E2]/50">,</span>
              </div>

              <div className="pl-4">
                <span className="text-[#D1E8E2]/70">techStack: </span>
                <span className="text-[#D1E8E2]">[</span>
                <span className="text-[#D9B08C]">"Astro"</span>
                <span className="text-[#D1E8E2]/50">, </span>
                <span className="text-[#D9B08C]">"React 19"</span>
                <span className="text-[#D1E8E2]/50">, </span>
                <span className="text-[#D9B08C]">"TypeScript"</span>
                <span className="text-[#D1E8E2]">]</span>
                <span className="text-[#D1E8E2]/50">,</span>
              </div>

              <div className="pl-4">
                <span className="text-[#D1E8E2]/70">aiCapabilities: </span>
                <span className="text-[#D1E8E2]">[</span>
                <span className="text-[#116466] font-medium">"LLM Agents"</span>
                <span className="text-[#D1E8E2]/50">, </span>
                <span className="text-[#116466] font-medium">"Neural UI"</span>
                <span className="text-[#D1E8E2]">]</span>
                <span className="text-[#D1E8E2]/50">,</span>
              </div>

              <div className="pl-4">
                <span className="text-[#D1E8E2]/70">status: </span>
                <span className="text-[#FFCB9A]">"Engineered for high performance"</span>
              </div>

              <div>
                <span className="text-[#D1E8E2]">{'}'}</span>
                <span className="text-[#D1E8E2]/50">;</span>
              </div>
            </div>
          ) : (
            <div className="space-y-3 py-1">
              <div className="flex items-center justify-between pb-2 border-b border-[#D1E8E2]/10">
                <span className="text-[#D1E8E2]/70">Lighthouse Performance:</span>
                <span className="text-[#FFCB9A] font-bold">100 / 100</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-[#D1E8E2]/10">
                <span className="text-[#D1E8E2]/70">Cumulative Layout Shift:</span>
                <span className="text-[#116466] font-bold">0.00 (Zero CLS)</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-[#D1E8E2]/10">
                <span className="text-[#D1E8E2]/70">AI Inference Engine:</span>
                <span className="text-[#D9B08C] font-semibold">Active • Streaming UI</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-[#D1E8E2]/10">
                <span className="text-[#D1E8E2]/70">Edge TTFB:</span>
                <span className="text-[#D1E8E2]">12ms Global Edge</span>
              </div>
            </div>
          )}

          {/* Terminal Console Output Bar */}
          <div className="mt-4 pt-3 border-t border-[#D1E8E2]/10 flex items-center justify-between text-[11px] text-[#D1E8E2]/70">
            <div className="flex items-center gap-2">
              <span className="text-[#116466]">➜</span>
              <span className="text-[#D1E8E2]/90">build completed</span>
              <span className="text-[#FFCB9A]">0 errors</span>
              <span className="inline-block w-1.5 h-3 bg-[#FFCB9A] animate-pulse" />
            </div>
            <span className="font-mono text-[#D9B08C]/80 text-[10px]">100% Core Vitals</span>
          </div>
        </div>
      </motion.div>

      {/* FLOATING CARD 1: AI & Neural Intelligence (Top Right) */}
      <motion.div
        animate={floatAnimation1}
        className="absolute -top-4 -right-2 sm:-top-6 sm:-right-4 z-20 hidden xs:flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-[#2C3531]/95 backdrop-blur-md border border-[#116466]/60 shadow-xl shadow-black/40"
      >
        <div className="w-8 h-8 rounded-lg bg-[#116466]/40 flex items-center justify-center text-[#FFCB9A] border border-[#116466]">
          <Cpu className="w-4 h-4 text-[#FFCB9A]" />
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="font-mono text-xs font-semibold text-[#D1E8E2]">AI Neural UI</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#116466] animate-ping" />
          </div>
          <span className="font-mono text-[10px] text-[#D9B08C]">Intelligent Workflows</span>
        </div>
      </motion.div>

      {/* FLOATING CARD 2: Performance Excellence (Bottom Left) */}
      <motion.div
        animate={floatAnimation2}
        className="absolute -bottom-5 -left-2 sm:-bottom-6 sm:-left-4 z-20 hidden xs:flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-[#2C3531]/95 backdrop-blur-md border border-[#D1E8E2]/20 shadow-xl shadow-black/40"
      >
        <div className="w-8 h-8 rounded-lg bg-[#116466]/40 flex items-center justify-center text-[#116466] border border-[#116466]">
          <Check className="w-4 h-4 text-[#D1E8E2]" />
        </div>
        <div className="flex flex-col">
          <span className="font-mono text-xs font-semibold text-[#D1E8E2]">100% Core Web Vitals</span>
          <span className="font-mono text-[10px] text-[#FFCB9A]">Optimized & Accessible</span>
        </div>
      </motion.div>
    </div>
  );
};
