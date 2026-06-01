import React from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Code2,
  ExternalLink,
  GitBranch,
  Globe2,
  LockKeyhole,
  Mail,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  Users,
  Zap,
} from "lucide-react";
import "./index.css";

const contacts = {
  x: "https://x.com/ThisisLemuel",
  telegram: "https://t.me/shiller_xxx",
  email: "mailto:Ibrahimmmurtala1234@gmail.com",
  dashboard: "https://dashboard.coinhunterai.com",
};

const stats = [
  { label: "Live Web3 Product", value: "1+" },
  { label: "Community Proof", value: "1.3K+" },
  { label: "Private Repos", value: "Multiple" },
  { label: "Main Focus", value: "AI × Web3" },
];

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "TailwindCSS",
  "Node.js",
  "API Integration",
  "Web3 Dashboards",
  "Solana",
  "Wallet Integration",
  "Blockchain Analytics",
  "AI Agents",
  "LLM Integration",
  "Telegram Bots",
  "Community Raiding",
  "Community Moderation",
  "Deployment",
  "Private Repo Work",
  "Startup Execution",
];

const projects = [
  {
    title: "CoinHunter AI",
    tag: "Featured Build",
    role: "Full-Stack Web3 Developer",
    link: "https://dashboard.coinhunterai.com",
    description:
      "CoinHunter AI is an AI-powered blockchain intelligence dashboard built to discover, analyze, and track crypto opportunities across Web3 ecosystems.",
    points: [
      "Built and maintained responsive dashboard interfaces.",
      "Worked on AI-assisted token discovery workflows.",
      "Supported blockchain analytics and product-side tooling.",
      "Handled Telegram bot and community infrastructure around the ecosystem.",
      "Worked from private repositories because the logic is confidential.",
    ],
  },
  {
    title: "Spirit AI / $SPRT",
    tag: "Ecosystem Work",
    role: "Web Developer & Technical Contributor",
    link: "https://t.me/SPRT_TEAM",
    description:
      "Technical and ecosystem-side involvement for an AI-focused Web3 project connected to agent orchestration, crypto community systems, and tooling.",
    points: [
      "Supported technical and community-side operations.",
      "Worked inside a Web3 startup environment.",
      "Provided contributor-level support for ecosystem growth.",
      "Maintained confidentiality around internal project materials.",
    ],
  },
];

const proofCards = [
  {
    icon: Globe2,
    title: "Live Website",
    text: "The CoinHunter AI dashboard is publicly accessible and shows real shipped product work.",
  },
  {
    icon: Users,
    title: "Community Evidence",
    text: "Telegram screenshots show ecosystem presence, moderator access, and active Web3 communities.",
  },
  {
    icon: GitBranch,
    title: "GitHub Activity",
    text: "Development history includes CoinHunter-related builds, analysis tools, and private production repos.",
  },
  {
    icon: LockKeyhole,
    title: "Private Repositories",
    text: "Repos are private due to confidential code, client logic, AI workflows, and production-sensitive infrastructure.",
  },
];

function Badge({ children }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-white/70">
      {children}
    </span>
  );
}

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#05050a] text-white">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(236,72,153,0.22),transparent_32%),radial-gradient(circle_at_85%_5%,rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(132,204,22,0.16),transparent_35%)]" />
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20" />

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-6">
        <nav className="flex items-center justify-between rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-lime-300 text-black">
              <Zap className="h-5 w-5" />
            </div>
            <div>
              <p className="font-bold leading-none">Ibrahim Murtala</p>
              <p className="text-xs text-white/45">Web3 POW</p>
            </div>
          </div>
          <a
            href={contacts.email}
            className="hidden rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition hover:bg-lime-200 sm:inline-flex"
          >
            Hire Me
          </a>
        </nav>
      </section>

      <section className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-16 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-lime-300/20 bg-lime-300/10 px-4 py-2 text-sm text-lime-200">
            <Sparkles className="h-4 w-4" />
            Proof of Work • Full Stack Dev • Raider • Moderator
          </div>

          <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
            I'm a Full Stack Developer,
            <span className="bg-gradient-to-r from-lime-300 via-cyan-300 to-pink-400 bg-clip-text text-transparent">
              {" "}Raider & Moderator.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/65 md:text-xl">
            Full-stack developer, community raider, moderator, and Web3 builder — focused on crypto dashboards, blockchain intelligence tools, AI agents, Telegram bots, and product experiences that feel alive.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={contacts.dashboard}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-lime-300 px-6 py-3 font-bold text-black transition hover:bg-lime-200"
            >
              View Live Dashboard
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-6 py-3 font-semibold text-white/80 transition hover:bg-white/10"
            >
              See My Work
            </a>
          </div>

          <div className="mt-10 grid max-w-2xl grid-cols-2 gap-3 md:grid-cols-4">
            {stats.map((item) => (
              <div key={item.label} className="rounded-3xl border border-white/10 bg-white/[0.05] p-4">
                <p className="text-xl font-black text-lime-300">{item.value}</p>
                <p className="mt-1 text-xs text-white/45">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-r from-pink-500/20 via-cyan-400/20 to-lime-300/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] shadow-2xl backdrop-blur-xl">
            <img src="/bio-image.jpg" alt="Ibrahim Murtala bio visual" className="h-80 w-full object-cover" />
            <div className="bg-lime-300 p-7 text-black">
              <p className="text-2xl font-black italic leading-snug">
                “Embrace the future and shine bright like the neon lights around you every day.”
              </p>
              <p className="mt-4 font-bold">@shiller_xxx</p>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-4 md:grid-cols-4">
          {proofCards.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 transition hover:-translate-y-1 hover:bg-white/[0.08]">
              <Icon className="h-8 w-8 text-lime-300" />
              <h3 className="mt-5 text-lg font-black">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="font-bold text-lime-300">Featured Proof</p>
            <h2 className="mt-2 text-4xl font-black md:text-5xl">Real Web3 work</h2>
          </div>
          <p className="max-w-xl text-white/55">
            My old Telegram account was deleted, so this POW focuses on live product proof, screenshots, private repo evidence, and clear technical positioning.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <div key={project.title} className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 backdrop-blur-xl">
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <Badge>{project.tag}</Badge>
                  <h3 className="mt-5 text-3xl font-black">{project.title}</h3>
                  <p className="mt-1 font-semibold text-cyan-300">{project.role}</p>
                </div>
                <a href={project.link} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 p-3 transition hover:bg-white/10">
                  <ExternalLink className="h-5 w-5" />
                </a>
              </div>
              <p className="leading-relaxed text-white/60">{project.description}</p>
              <div className="mt-6 space-y-3">
                {project.points.map((point) => (
                  <div key={point} className="flex gap-3 rounded-2xl border border-white/10 bg-black/20 p-4 text-white/65">
                    <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-lime-300" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto grid max-w-7xl gap-6 px-6 py-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-8">
          <Code2 className="h-10 w-10 text-lime-300" />
          <h2 className="mt-5 text-4xl font-black">Stack & skills</h2>
          <p className="mt-4 leading-relaxed text-white/55">
            A practical Web3 stack for building dashboards, AI-powered tools, Telegram systems, and fast startup products.
          </p>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-8">
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <Badge key={skill}>{skill}</Badge>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <div className="grid overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] lg:grid-cols-2">
          <div className="p-8 md:p-12">
            <TerminalSquare className="h-10 w-10 text-cyan-300" />
            <h2 className="mt-5 text-4xl font-black">Private repo explanation</h2>
            <p className="mt-5 leading-relaxed text-white/60">
              Most of my GitHub repositories are private because they contain confidential project code, internal AI workflows, blockchain logic, and client-sensitive infrastructure. For hiring or partnership review, I can provide screenshots, walkthrough videos, live demos, or controlled access where allowed.
            </p>
          </div>
          <div className="border-t border-white/10 bg-black/30 p-8 md:p-12 lg:border-l lg:border-t-0">
            <div className="space-y-4">
              {["Confidential business logic", "Internal AI tooling", "Blockchain analytics systems", "Production-sensitive infrastructure"].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-white/70">
                  <LockKeyhole className="h-5 w-5 text-lime-300" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-20 text-center">
        <div className="mx-auto max-w-3xl">
          <Bot className="mx-auto h-12 w-12 text-lime-300" />
          <h2 className="mt-6 text-4xl font-black md:text-6xl">Need a Web3 builder?</h2>
          <p className="mt-5 text-lg leading-relaxed text-white/60">
            I am available for full-stack Web3 developer roles, AI dashboard builds, blockchain analytics platforms, Telegram automation, community raiding, moderation, and technical contributor positions.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href={contacts.x} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/[0.05] px-6 py-3 font-semibold transition hover:bg-white/10">
              X: @ThisisLemuel
            </a>
            <a href={contacts.telegram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-6 py-3 font-semibold transition hover:bg-white/10">
              <MessageCircle className="h-4 w-4" /> Telegram: @shiller_xxx
            </a>
            <a href={contacts.email} className="inline-flex items-center gap-2 rounded-full bg-lime-300 px-6 py-3 font-bold text-black transition hover:bg-lime-200">
              <Mail className="h-4 w-4" /> Email Me
            </a>
          </div>
          <p className="mt-6 text-sm text-white/40">Discord: @shiller_xxx • Gmail: Ibrahimmmurtala1234@gmail.com</p>
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
