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
