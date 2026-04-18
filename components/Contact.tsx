"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Link, GitFork, Phone, ArrowRight } from "lucide-react";

const contactLinks = [
  {
    icon: <Mail size={20} />,
    label: "Email",
    value: "velpurisabarinadh@gmail.com",
    href: "mailto:velpurisabarinadh@gmail.com",
    color: "var(--accent)",
  },
  {
    icon: <Phone size={20} />,
    label: "Phone",
    value: "+91 9676781371",
    href: "tel:+919676781371",
    color: "var(--accent2)",
  },
  {
    icon: <Link size={20} />,
    label: "LinkedIn",
    value: "velpuri-shabarinadh",
    href: "https://linkedin.com/in/velpuri-shabarinadh-575954242/",
    color: "var(--accent3)",
  },
  {
    icon: <GitFork size={20} />,
    label: "GitHub",
    value: "shabarinadh-velpuri",
    href: "https://github.com/shabarinadh-velpuri ",
    color: "var(--accent)",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 relative">
      <div className="absolute inset-0 opacity-30 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(0,210,255,0.08), transparent 60%)" }} />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[var(--border)]" />
            <span className="text-[var(--accent)] font-['DM_Mono'] text-sm tracking-widest">05.</span>
            <h2 className="text-4xl md:text-5xl font-['Syne'] font-700 text-white">Get In Touch</h2>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[var(--border)]" />
          </div>

          <p className="text-[var(--text-muted)] text-sm font-['DM_Mono'] max-w-xl mx-auto leading-relaxed">
            I'm actively looking for entry-level opportunities in{" "}
            <span className="text-[var(--accent)]">SOC Analysis</span> and{" "}
            <span className="text-[var(--accent2)]">Cybersecurity Engineering</span>. Whether you have
            a question or just want to say hi, my inbox is always open.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {contactLinks.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 + 0.3 }}
              className="group flex items-center gap-4 p-5 rounded-xl border border-[var(--border)] bg-[var(--surface)] card-hover"
            >
              <div
                className="p-3 rounded-lg shrink-0 transition-all duration-300 group-hover:scale-110"
                style={{ background: `${c.color}15`, color: c.color }}
              >
                {c.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[var(--text-muted)] text-xs font-['DM_Mono'] tracking-wider uppercase">{c.label}</p>
                <p className="text-white text-sm font-['DM_Mono'] truncate">{c.value}</p>
              </div>
              <ArrowRight
                size={16}
                className="shrink-0 text-[var(--text-muted)] group-hover:translate-x-1 transition-transform duration-200"
                style={{ color: c.color }}
              />
            </motion.a>
          ))}
        </div>

        {/* Big CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center mt-16"
        >
          <a
            href="mailto:velpurisabarinadh@gmail.com"
            className="inline-flex items-center gap-3 px-10 py-4 font-['Syne'] font-600 text-black rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,210,255,0.4)]"
            style={{ background: "linear-gradient(135deg, var(--accent), var(--accent2))" }}
          >
            <Mail size={18} />
            Say Hello
          </a>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="mt-24 border-t border-[var(--border)] pt-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[var(--text-muted)] text-xs font-['DM_Mono']">
            © 2024 Shabarinadh Velpuri. Crafted with care.
          </p>
          <p className="text-[var(--text-muted)] text-xs font-['DM_Mono']">
            <span className="text-[var(--accent)]">∞</span> Built with Next.js + Tailwind + Framer Motion
          </p>
        </div>
      </div>
    </section>
  );
}
