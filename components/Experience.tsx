"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Briefcase, Calendar } from "lucide-react";

const experience = [
  {
    role: "Ethical Hacking Intern",
    company: "Internship Studio",
    location: "Pune, India",
    period: "Jun 2024 – Jul 2024",
    highlights: [
      "Built end-to-end phishing simulation lab to assess human susceptibility to social engineering attacks in a controlled environment.",
      "Implemented Flask-based backend with SQLite logging to capture attack evidence including login attempts, metadata, and interaction timelines.",
      "Conducted multiple simulated attack runs and analyzed success vs failure rates to evaluate user behavior patterns.",
    ],
  },
];

const certs = [
  { name: "Ethical Hacker", issuer: "CISCO Networking Academy", color: "var(--accent)" },
  { name: "SQL", issuer: "Geekster", color: "var(--accent2)" },
  { name: "JavaScript", issuer: "Udemy", color: "var(--accent3)" },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 relative">
      <div className="absolute inset-0 opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 80% 50%, rgba(0,210,255,0.06), transparent 60%)" }} />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-16">
            <span className="text-[var(--accent)] font-['DM_Mono'] text-sm tracking-widest">04.</span>
            <h2 className="text-4xl md:text-5xl font-['Syne'] font-700 text-white">Experience</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-[var(--border)] to-transparent" />
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Experience timeline */}
            <div className="lg:col-span-3 space-y-8">
              {experience.map((exp, i) => (
                <motion.div
                  key={exp.role}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.2 + 0.3 }}
                  className="relative pl-8 border-l border-[var(--border)]"
                >
                  {/* Timeline dot */}
                  <div
                    className="absolute left-0 top-1 w-3 h-3 rounded-full -translate-x-1.5 border-2"
                    style={{ borderColor: "var(--accent)", background: "var(--bg)", boxShadow: "0 0 12px var(--accent)" }}
                  />

                  <div className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] glow-border">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Briefcase size={14} className="text-[var(--accent)]" />
                          <h3 className="font-['Syne'] font-600 text-white">{exp.role}</h3>
                        </div>
                        <p className="text-[var(--accent)] text-sm font-['DM_Mono']">{exp.company}</p>
                        <p className="text-[var(--text-muted)] text-xs font-['DM_Mono']">{exp.location}</p>
                      </div>
                      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[var(--border)] bg-[var(--surface2)]">
                        <Calendar size={11} className="text-[var(--accent)]" />
                        <span className="text-[var(--text-muted)] text-xs font-['DM_Mono']">{exp.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-xs text-[var(--text-muted)] font-['DM_Mono'] leading-relaxed">
                          <span className="text-[var(--accent)] mt-0.5 shrink-0">▸</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}

              {/* Education */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="relative pl-8 border-l border-[var(--border)]"
              >
                <div
                  className="absolute left-0 top-1 w-3 h-3 rounded-full -translate-x-1.5 border-2"
                  style={{ borderColor: "var(--accent2)", background: "var(--bg)", boxShadow: "0 0 12px var(--accent2)" }}
                />
                <div className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                    <div>
                      <h3 className="font-['Syne'] font-600 text-white">B.Tech — AI & Machine Learning</h3>
                      <p className="text-[var(--accent2)] text-sm font-['DM_Mono']">R.V.R & J.C College of Engineering</p>
                      <p className="text-[var(--text-muted)] text-xs font-['DM_Mono']">Guntur, India</p>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[var(--border)] bg-[var(--surface2)]">
                      <Calendar size={11} className="text-[var(--accent2)]" />
                      <span className="text-[var(--text-muted)] text-xs font-['DM_Mono']">2022 – 2026</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Certifications */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 }}
              >
                <h3 className="font-['DM_Mono'] text-xs tracking-widest uppercase text-[var(--text-muted)] mb-6">
                  Certifications
                </h3>
                <div className="space-y-4">
                  {certs.map((c, i) => (
                    <motion.div
                      key={c.name}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: i * 0.15 + 0.6 }}
                      className="group p-5 rounded-xl border border-[var(--border)] bg-[var(--surface)] card-hover"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="p-2 rounded-lg"
                          style={{ background: `${c.color}15`, color: c.color }}
                        >
                          <Award size={18} />
                        </div>
                        <div>
                          <p className="font-['Syne'] font-600 text-white text-sm">{c.name}</p>
                          <p className="text-[var(--text-muted)] text-xs font-['DM_Mono']">{c.issuer}</p>
                        </div>
                      </div>
                      <div
                        className="mt-3 h-0.5 rounded w-0 group-hover:w-full transition-all duration-500"
                        style={{ background: `linear-gradient(90deg, ${c.color}, transparent)` }}
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
