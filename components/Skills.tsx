"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillGroups = [
  {
    category: "Languages",
    color: "var(--accent)",
    skills: ["Python", "JavaScript", "SQL"],
  },
  {
    category: "Security Tools",
    color: "var(--accent2)",
    skills: ["Kali Linux", "Nmap", "Wireshark", "Burp Suite", "Metasploit", "Splunk", "OWASP ZAP"],
  },
  {
    category: "Frameworks",
    color: "var(--accent3)",
    skills: ["OWASP Top 10", "PTES", "Flask", "SQLite"],
  },
  {
    category: "Networking",
    color: "var(--accent)",
    skills: ["TCP/IP", "OSI Model", "HTTP/HTTPS", "DNS", "Subnetting", "Ports & Protocols"],
  },
  {
    category: "Platforms",
    color: "var(--accent2)",
    skills: ["TryHackMe", "HackTheBox", "Windows", "Linux"],
  },
  {
    category: "Concepts",
    color: "var(--accent3)",
    skills: ["Vulnerability Assessment", "Phishing Simulation", "Web App Security", "Reconnaissance", "Social Engineering"],
  },
];

const proficiencies = [
  { label: "Python / Security Scripting", pct: 80 },
  { label: "Networking & Protocols", pct: 75 },
  { label: "Web App Penetration Testing", pct: 70 },
  { label: "OSINT & Reconnaissance", pct: 72 },
  { label: "AI/ML Fundamentals", pct: 85 },
];

function SkillBar({ label, pct, delay }: { label: string; pct: number; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between text-xs font-['DM_Mono']">
        <span className="text-[var(--text-muted)]">{label}</span>
        <span className="text-[var(--accent)]">{pct}%</span>
      </div>
      <div className="h-1.5 w-full rounded-full bg-[var(--surface2)] overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${pct}%` } : {}}
          transition={{ duration: 1.2, delay, ease: [0.4, 0, 0.2, 1] }}
          className="h-full rounded-full"
          style={{ background: "linear-gradient(90deg, var(--accent), var(--accent2))" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 relative">
      <div className="absolute inset-0 opacity-30 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(124,58,237,0.08), transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-16">
            <span className="text-[var(--accent)] font-['DM_Mono'] text-sm tracking-widest">02.</span>
            <h2 className="text-4xl md:text-5xl font-['Syne'] font-700 text-white">Tech Stack</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-[var(--border)] to-transparent" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Skill tags */}
            <div className="space-y-8">
              {skillGroups.map((group, gi) => (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: gi * 0.1 + 0.2 }}
                >
                  <h3
                    className="text-xs font-['DM_Mono'] tracking-widest uppercase mb-3"
                    style={{ color: group.color }}
                  >
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((s) => (
                      <span
                        key={s}
                        className="tag card-hover cursor-default"
                        style={{
                          background: `${group.color}10`,
                          borderColor: `${group.color}30`,
                          color: group.color,
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Proficiency bars */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="space-y-6 p-8 rounded-2xl border border-[var(--border)] bg-[var(--surface)]"
            >
              <h3 className="text-sm font-['DM_Mono'] text-[var(--text-muted)] tracking-widest uppercase mb-8">
                Proficiency
              </h3>
              {proficiencies.map(({ label, pct }, i) => (
                <SkillBar key={label} label={label} pct={pct} delay={i * 0.15 + 0.5} />
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
