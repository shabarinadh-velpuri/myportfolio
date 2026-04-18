"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { GitFork, Link, Mail, Terminal, Shield, Brain } from "lucide-react";

const roles = [
  "AI/ML Engineer",
  "Cybersecurity Enthusiast",
  "Ethical Hacker",
  "SOC Analyst (Aspiring)",
];

function TypeWriter({ texts }: { texts: string[] }) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = texts[index];
    let timer: ReturnType<typeof setTimeout>;
    if (!deleting && displayed.length < target.length) {
      timer = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === target.length) {
      timer = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timer = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % texts.length);
    }
    return () => clearTimeout(timer);
  }, [displayed, deleting, index, texts]);

  return (
    <span className="text-[var(--accent)]">
      {displayed}
      <span className="cursor-blink">|</span>
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden"
    >
      {/* Scan line effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="scan-line absolute w-full h-px opacity-10"
          style={{ background: "linear-gradient(90deg, transparent, var(--accent), transparent)" }}
        />
      </div>

      {/* Ambient blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] opacity-10"
        style={{ background: "radial-gradient(circle, var(--accent), transparent)" }} />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full blur-[100px] opacity-10"
        style={{ background: "radial-gradient(circle, var(--accent2), transparent)" }} />

      {/* Floating icons */}
      <div className="absolute top-20 right-20 opacity-20 spin-slow">
        <Brain size={80} strokeWidth={0.5} className="text-[var(--accent)]" />
      </div>
      <div className="absolute bottom-32 left-16 opacity-15" style={{ animation: "float 6s ease-in-out infinite" }}>
        <Shield size={60} strokeWidth={0.5} className="text-[var(--accent2)]" />
      </div>
      <div className="absolute top-1/3 right-10 opacity-15" style={{ animation: "float 8s ease-in-out infinite 2s" }}>
        <Terminal size={40} strokeWidth={0.5} className="text-[var(--accent3)]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-[var(--border)] bg-[var(--surface)]"
        >
          <span className="w-2 h-2 rounded-full bg-[var(--accent3)]" style={{ boxShadow: "0 0 8px var(--accent3)", animation: "pulse-glow 2s ease-in-out infinite" }} />
          <span className="text-xs text-[var(--text-muted)] tracking-widest uppercase font-['DM_Mono']">
            Available for Opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-['Syne'] font-800 leading-none mb-4 tracking-tight"
        >
          <span className="block text-white">Shabarinadh</span>
          <span className="block gradient-text">Velpuri</span>
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-xl md:text-2xl font-['DM_Mono'] mb-8 h-8"
        >
          <TypeWriter texts={roles} />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="max-w-2xl mx-auto text-[var(--text-muted)] text-sm md:text-base leading-relaxed mb-10 font-['DM_Mono']"
        >
          AIML graduate bridging the gap between{" "}
          <span className="text-[var(--accent)]">artificial intelligence</span> and{" "}
          <span className="text-[var(--accent2)]">cybersecurity</span>. Passionate about threat
          detection, ethical hacking, and building secure intelligent systems.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="flex flex-wrap gap-4 justify-center mb-14"
        >
          <a
            href="#projects"
            className="px-8 py-3 font-['Syne'] font-600 text-sm tracking-wider text-black rounded transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,210,255,0.4)]"
            style={{ background: "linear-gradient(135deg, var(--accent), var(--accent2))" }}
          >
            View Projects
          </a>
          <a
            href="mailto:velpurisabarinadh@gmail.com"
            className="px-8 py-3 font-['Syne'] text-sm tracking-wider text-[var(--accent)] rounded border border-[var(--accent)] hover:bg-[rgba(0,210,255,0.08)] transition-all duration-300"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center gap-6"
        >
          {[
            { href: "https://linkedin.com/in/velpuri-shabarinadh-575954242/", icon: <Link size={20} />, label: "LinkedIn" },
            { href: "https://github.com/enemy143", icon: <GitFork size={20} />, label: "GitHub" },
            { href: "mailto:velpurisabarinadh@gmail.com", icon: <Mail size={20} />, label: "Email" },
          ].map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="p-3 rounded-lg border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all duration-200 hover:shadow-[0_0_20px_rgba(0,210,255,0.2)]"
            >
              {icon}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-[var(--text-muted)] tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-8 bg-gradient-to-b from-[var(--accent)] to-transparent"
        />
      </motion.div>
    </section>
  );
}
