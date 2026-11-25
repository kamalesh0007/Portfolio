export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  href: string;
  label: string;
}

export interface TechHighlight {
  label: string;
  value: string;
  tag: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  description: string;
  skills: { name: string; tag?: string }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
  metrics: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
}

export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  description: string;
  highlights: string[];
}

export const portfolioData = {
  personal: {
    name: "Kamalesh",
    fullName: "Kamalesh",
    role: "Frontend Engineer & AI Specialist",
    email: "kamalesh3847@gmail.com",
    introLabel: "HELLO, I'M KAMALESH",
    headlineMain: "Building Digital Experiences",
    headlineAccent: "with Code & Intelligence.",
    description:
      "Frontend architect and AI enthusiast crafting high-performance, accessible web ecosystems. Bridging intricate engineering principles with intuitive user interfaces through modern TypeScript, modern component architecture, and intelligent workflows.",
    resumePath: "/resume.pdf",
    location: "Available Worldwide / Remote",
    statusText: "AVAILABLE FOR PROJECTS & ROLES",
  },
  navigation: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ] as NavItem[],
  socials: [
    {
      name: "GitHub",
      href: "https://github.com/kamalesh0007",
      label: "github.com/kamalesh0007",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/kamalesh",
      label: "linkedin.com/in/kamalesh",
    },
  ] as SocialLink[],
  highlights: [
    { label: "Architecture", value: "Frontend & UI Systems", tag: "React • Astro" },
    { label: "Intelligence", value: "AI Integration & LLMs", tag: "Agentic UI" },
    { label: "Excellence", value: "100% Core Web Vitals", tag: "Performance" },
  ] as TechHighlight[],
  about: {
    title: "Engineering with Purpose, Precision & Intelligence",
    lead: "I build modern web software where robust system architecture meets human-centered design. My approach centers on crafting performant, accessible digital products powered by modern frontend engines and applied AI capabilities.",
    paragraphs: [
      "With a strong foundation in computer science and modern frontend paradigms, I focus on solving complex interface challenges. I believe the best user interfaces are not merely visually stunning—they are blazing fast, accessible by default, and engineered to endure scaling demands.",
      "Lately, my focus has converged on combining cutting-edge LLM pipelines with tactile web interfaces: building conversational streaming surfaces, agentic developer tooling, and automated workflows that simplify how people interact with intelligent systems."
    ],
    principles: [
      {
        title: "Tactile Performance",
        description: "Zero unnecessary re-renders, sub-50ms interaction latencies, and 100/100 Core Web Vitals.",
        tag: "Speed"
      },
      {
        title: "Intelligent Workflows",
        description: "Harnessing LLMs and generative agents to turn complex multi-step processes into intuitive actions.",
        tag: "AI Systems"
      },
      {
        title: "Clean Modular Design",
        description: "Reusable component systems and strict TypeScript typing for maintainable, scalable codebases.",
        tag: "Architecture"
      }
    ],
    stats: [
      { value: "100%", label: "Core Web Vitals", subtext: "Zero layout shifts" },
      { value: "< 50ms", label: "Edge Latency", subtext: "Global fast responses" },
      { value: "AAA", label: "Accessibility", subtext: "Inclusive by design" },
      { value: "Type-Safe", label: "Code Rigor", subtext: "Strict TypeScript" }
    ]
  },
  skillCategories: [
    {
      title: "Frontend Architecture",
      iconName: "Code2",
      description: "Crafting resilient, maintainable web applications with modern component frameworks.",
      skills: [
        { name: "React 19 / Next.js", tag: "Primary" },
        { name: "Astro", tag: "Islands" },
        { name: "TypeScript", tag: "Strict" },
        { name: "Tailwind CSS v4", tag: "Utility" },
        { name: "State Architecture", tag: "Zustand/Redux" },
        { name: "Motion & UI Animations", tag: "Tactile" }
      ]
    },
    {
      title: "AI & Intelligence",
      iconName: "Cpu",
      description: "Integrating Large Language Models and intelligent capabilities into user surfaces.",
      skills: [
        { name: "LLM Prompt Engineering", tag: "Agents" },
        { name: "Streaming UI & Inference", tag: "Real-time" },
        { name: "Vector Search & RAG", tag: "Embeddings" },
        { name: "Function Calling", tag: "Tool Use" },
        { name: "AI Agent Workflows", tag: "Autonomous" },
        { name: "Neural Interface Design", tag: "UX" }
      ]
    },
    {
      title: "Performance & Systems",
      iconName: "Zap",
      description: "Optimizing browser rendering, network payloads, and Core Web Vitals metrics.",
      skills: [
        { name: "Core Web Vitals (LCP, CLS, INP)", tag: "100/100" },
        { name: "Islands Architecture", tag: "Selective Hydration" },
        { name: "Bundle Optimization & Tree-Shaking", tag: "Lean" },
        { name: "Edge Computing & CDN", tag: "Global" },
        { name: "Accessibility (WCAG AAA)", tag: "Inclusive" },
        { name: "Semantic HTML & SEO", tag: "Standard" }
      ]
    },
    {
      title: "Tooling & Ecosystem",
      iconName: "Terminal",
      description: "Modern developer workflow tools, version control, and continuous integration.",
      skills: [
        { name: "Git & GitHub Workflows", tag: "VCS" },
        { name: "Vite & Turbopack", tag: "Build" },
        { name: "Linux & Shell Scripting", tag: "CLI" },
        { name: "Docker Containerization", tag: "Env" },
        { name: "REST & GraphQL APIs", tag: "Networking" },
        { name: "CI / CD Deployment", tag: "Automation" }
      ]
    }
  ] as SkillCategory[],
  projects: [
    {
      id: "neural-canvas",
      title: "NeuralCanvas",
      subtitle: "Autonomous Agentic UI Studio",
      description:
        "An experimental streaming LLM workspace that combines natural language multi-agent prompts with live component rendering and reactive state orchestration.",
      techStack: ["Astro 5", "React 19", "TypeScript", "Tailwind CSS", "Streaming LLM"],
      metrics: ["< 15ms First Token", "Zero Cumulative Shift", "Interactive Canvas"],
      githubUrl: "https://github.com/kamalesh0007/Portfolio",
      featured: true
    },
    {
      id: "nexus-design-system",
      title: "Nexus Design System",
      subtitle: "High-Density Enterprise Component Kit",
      description:
        "A modular, headless component library built for developer consoles and data-intensive dashboards with automated WCAG AAA contrast verification.",
      techStack: ["React 19", "TypeScript", "Tailwind CSS", "Radix UI", "Motion"],
      metrics: ["100% Keyboard Accessible", "Under 12kB Gzipped", "40+ Components"],
      githubUrl: "https://github.com/kamalesh0007",
      featured: true
    },
    {
      id: "pulse-vitals-engine",
      title: "Pulse Vitals Engine",
      subtitle: "Real-Time Telemetry & Performance SDK",
      description:
        "A minimal client-side monitoring script and visualization dashboard tracking real-world user interactions, layout shifts, and TTFB latencies on edge.",
      techStack: ["TypeScript", "Web Vitals API", "Astro", "Chart.js"],
      metrics: ["1.4kB Runtime Footprint", "0ms Main-Thread Blocking", "100 Lighthouse"],
      githubUrl: "https://github.com/kamalesh0007",
      featured: true
    }
  ] as ProjectItem[],
  codeSnippet: {
    filename: "kamalesh.ai / architecture.ts",
    lines: [
      { num: "01", text: "interface EngineerProfile {", type: "keyword" },
      { num: "02", text: "  name: \"Kamalesh\";", type: "property" },
      { num: "03", text: "  focus: [\"Frontend Systems\", \"AI Interfaces\"];", type: "property" },
      { num: "04", text: "  coreStack: [\"Astro\", \"React\", \"TypeScript\", \"Tailwind\"];", type: "property" },
      { num: "05", text: "  aiIntegration: [\"LLM Agents\", \"Neural UI\", \"Vector RAG\"];", type: "property" },
      { num: "06", text: "  mission: \"Deliver seamless, intelligent digital products\";", type: "property" },
      { num: "07", text: "}", type: "keyword" },
    ],
    telemetry: {
      status: "SYSTEM READY",
      engine: "React 19 + Astro Island",
      performance: "100 / 100 Lighthouse",
      latency: "12ms edge response",
    },
  },
};
