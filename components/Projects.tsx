"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Shield, Bot, Cpu } from "lucide-react";

const projects = [
  {
    id: "01",
    title: "OWASP Vulnerable Web App Lab",
    description:
      "A deliberately vulnerable Flask application simulating real-world attack scenarios. Identified and exploited SQL Injection, XSS, IDOR, Broken Authentication, and File Upload vulnerabilities using Burp Suite.",
    tags: ["Burp Suite", "Kali Linux", "OWASP ZAP", "Flask", "Python"],
    highlights: [
      "SQL Injection & XSS exploitation",
      "Session hijacking & HTTP manipulation",
      "Secure patches: parameterized queries, password hashing",
    ],
    icon: <Shield size={24} />,
    color: "var(--accent)",
    gradient: "from-[rgba(0,210,255,0.1)] to-transparent",
  },
  {
    id: "02",
    title: "AI Chatbot Assistant",
    description:
      "A personal assistant chatbot leveraging the ChatGPT API for natural language processing, capable of conversational interaction, query answering, and task assistance.",
    tags: ["Python", "ChatGPT API", "NLP", "REST API"],
    highlights: [
      "Natural language conversational AI",
      "Query answering & information retrieval",
      "Virtual assistant simulation",
    ],
    icon: <Bot size={24} />,
    color: "var(--accent2)",
    gradient: "from-[rgba(124,58,237,0.1)] to-transparent",
  },
  {
    id: "03",
    title: "Robotic Bionic Hand",
    description:
      "Final year project: A robotic bionic hand capable of mimicking human finger movements using flex sensors and servo motors with wireless Arduino communication.",
    tags: ["Arduino", "Flex Sensors", "Servo Motors", "Wireless Comms", "Embedded C"],
    highlights: [
      "Real-time finger movement mirroring",
      "Wireless Arduino Nano + Uno R3 bridge",
      "Basic gripping action prototype",
    ],
    icon: <Cpu size={24} />,
    color: "var(--accent3)",
    gradient: "from-[rgba(6,255,165,0.1)] to-transparent",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-16">
            <span className="text-[var(--accent)] font-['DM_Mono'] text-sm tracking-widest">03.</span>
            <h2 className="text-4xl md:text-5xl font-['Syne'] font-700 text-white">Projects</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-[var(--border)] to-transparent" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15 + 0.2, duration: 0.7 }}
                className="group relative p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] card-hover overflow-hidden"
              >
                {/* BG gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Corner accent */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 rounded-tl-2xl transition-all duration-300 group-hover:w-10 group-hover:h-10"
                  style={{ borderColor: p.color }} />

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="p-2.5 rounded-lg border"
                      style={{ color: p.color, borderColor: `${p.color}30`, background: `${p.color}10` }}
                    >
                      {p.icon}
                    </div>
                    <span className="font-['DM_Mono'] text-xs text-[var(--text-muted)]">{p.id}</span>
                  </div>

                  <h3 className="font-['Syne'] font-600 text-lg text-white mb-3 leading-tight">
                    {p.title}
                  </h3>

                  <p className="text-[var(--text-muted)] text-xs leading-relaxed mb-5 font-['DM_Mono']">
                    {p.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-1.5 mb-5">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-xs text-[var(--text-muted)] font-['DM_Mono']">
                        <span style={{ color: p.color }} className="mt-0.5 shrink-0">▸</span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] px-2 py-0.5 rounded border font-['DM_Mono']"
                        style={{ color: p.color, borderColor: `${p.color}25`, background: `${p.color}08` }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
