"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin, Phone } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section label */}
          <div className="flex items-center gap-4 mb-16">
            <span className="text-[var(--accent)] font-['DM_Mono'] text-sm tracking-widest">01.</span>
            <h2 className="text-4xl md:text-5xl font-['Syne'] font-700 text-white">About Me</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-[var(--border)] to-transparent" />
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div className="space-y-6">
              <p className="text-[var(--text-muted)] leading-relaxed text-sm font-['DM_Mono']">
                I'm a final-year{" "}
                <span className="text-[var(--accent)]">AI & Machine Learning</span> student at R.V.R
                and J.C College of Engineering, with a deep passion for the intersection of
                intelligent systems and cybersecurity.
              </p>
              <p className="text-[var(--text-muted)] leading-relaxed text-sm font-['DM_Mono']">
                My journey spans building{" "}
                <span className="text-[var(--accent2)]">vulnerable web apps</span> to understand
                exploitation, crafting{" "}
                <span className="text-[var(--accent3)]">phishing simulation labs</span> for security
                awareness, and diving deep into{" "}
                <span className="text-[var(--accent)]">TryHackMe / HackTheBox</span> challenges to
                sharpen my offensive security skills.
              </p>
              <p className="text-[var(--text-muted)] leading-relaxed text-sm font-['DM_Mono']">
                I'm seeking entry-level roles in{" "}
                <span className="text-white">SOC analysis</span> or{" "}
                <span className="text-white">cybersecurity engineering</span> where I can contribute
                to threat detection and secure system design.
              </p>

              {/* Info chips */}
              <div className="flex flex-wrap gap-3 pt-4">
                {[
                  { icon: <GraduationCap size={14} />, text: "B.Tech AIML – 2022–2026" },
                  { icon: <MapPin size={14} />, text: "Guntur, India" },
                  { icon: <Phone size={14} />, text: "+91 9676781371" },
                ].map(({ icon, text }) => (
                  <div
                    key={text}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--text-muted)] text-xs font-['DM_Mono']"
                  >
                    <span className="text-[var(--accent)]">{icon}</span>
                    {text}
                  </div>
                ))}
              </div>
            </div>

            {/* Visual card */}
            <div className="relative">
              <div className="relative p-8 rounded-2xl border border-[var(--border)] bg-[var(--surface)] glow-border overflow-hidden">
                {/* Corner decorations */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[var(--accent)] rounded-tl-2xl" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[var(--accent)] rounded-br-2xl" />

                <div className="font-['DM_Mono'] text-xs space-y-3">
                  {[
                    { label: "Role", value: "AIML Graduate", color: "var(--accent)" },
                    { label: "Focus", value: "Cybersecurity + AI", color: "var(--accent2)" },
                    { label: "Status", value: "Open to Work ✓", color: "var(--accent3)" },
                    { label: "Platform", value: "TryHackMe", color: "var(--accent)" },
                    { label: "Cert", value: "CISCO Ethical Hacker", color: "var(--accent2)" },
                  ].map(({ label, value, color }, i) => (
                    <motion.div
                      key={label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.1 * i + 0.5 }}
                      className="flex justify-between items-center py-2 border-b border-[var(--border)]"
                    >
                      <span className="text-[var(--text-muted)]">{label}</span>
                      <span style={{ color }}>{value}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Animated background */}
                <div className="absolute inset-0 opacity-5 pointer-events-none"
                  style={{ background: "radial-gradient(circle at 70% 30%, var(--accent), transparent 60%)" }} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
