"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = ["About", "Skills", "Projects", "Experience", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3 backdrop-blur-xl border-b border-[var(--border)]" : "py-6"
      }`}
      style={{ background: scrolled ? "rgba(5,10,14,0.85)" : "transparent" }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#hero" className="font-['Syne'] font-800 text-xl tracking-tight">
          <span className="text-[var(--accent)]">&lt;</span>
          <span className="text-white">SV</span>
          <span className="text-[var(--accent)]">/&gt;</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l, i) => (
            <motion.li
              key={l}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.3 }}
            >
              <a
                href={`#${l.toLowerCase()}`}
                className="text-[var(--text-muted)] hover:text-[var(--accent)] text-sm tracking-widest uppercase transition-colors duration-200 font-['DM_Mono']"
              >
                {l}
              </a>
            </motion.li>
          ))}
          <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
            <a
              href="mailto:velpurisabarinadh@gmail.com"
              className="px-4 py-2 text-sm border border-[var(--accent)] text-[var(--accent)] rounded hover:bg-[var(--accent)] hover:text-black transition-all duration-200 font-['DM_Mono'] tracking-wider"
            >
              Hire me
            </a>
          </motion.li>
        </ul>

        {/* Mobile burger */}
        <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setOpen(!open)}>
          <span className={`block w-6 h-0.5 bg-[var(--accent)] transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[var(--accent)] transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[var(--accent)] transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-[var(--surface)] border-b border-[var(--border)]"
          >
            <ul className="flex flex-col p-6 gap-4">
              {links.map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase()}`}
                    onClick={() => setOpen(false)}
                    className="text-[var(--text-muted)] hover:text-[var(--accent)] text-sm tracking-widest uppercase transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
