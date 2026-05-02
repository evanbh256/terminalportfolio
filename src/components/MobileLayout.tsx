import { useState, useEffect } from "react";
import { Hero } from "./Hero";
import { About } from "./About";
import { Works } from "./Works";
import { Competitions } from "./Competitions";
import { Experience } from "./Experience";
import { Contact } from "./Contact";
import { Neofetch } from "./Neofetch";

import terminalIcon from "../assets/icons8-terminal-96.png";
import aboutIcon from "../assets/icons8-find-user-male-96.png";
import worksIcon from "../assets/icons8-folder-96.png";
import competitionsIcon from "../assets/icons8-trophy-96.png";
import experienceIcon from "../assets/icons8-project-96.png";
import contactIcon from "../assets/icons8-contact-96.png";
import logoIcon from "../assets/logo.png";

const SECTIONS = [
  { id: "terminal", label: "Terminal", icon: terminalIcon },
  { id: "about",    label: "About",    icon: aboutIcon },
  { id: "works",    label: "Projects", icon: worksIcon },
  { id: "competitions", label: "Compete", icon: competitionsIcon },
  { id: "experience",   label: "Exp",   icon: experienceIcon },
  { id: "contact",  label: "Contact",  icon: contactIcon },
];

function SectionContent({ id, onNavigate }: { id: string; onNavigate: (s: string) => void }) {
  switch (id) {
    case "terminal":     return <Hero onNavigate={onNavigate} />;
    case "about":        return <About />;
    case "works":        return <Works />;
    case "competitions": return <Competitions />;
    case "experience":   return <Experience />;
    case "contact":      return <Contact />;
    default:             return <Hero onNavigate={onNavigate} />;
  }
}

interface MobileLayoutProps {
  showNeofetch: boolean;
  setShowNeofetch: (v: boolean) => void;
}

export function MobileLayout({ showNeofetch, setShowNeofetch }: MobileLayoutProps) {
  const [active, setActive] = useState("terminal");
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const formatTime = (d: Date) =>
    d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  const handleNavigate = (section: string) => {
    if (section === "home") return;
    setActive(section);
  };

  const activeSection = SECTIONS.find((s) => s.id === active) ?? SECTIONS[0];

  return (
    <div className="fixed inset-0 flex flex-col bg-[#001E26] overflow-hidden">
      {/* ── Top bar ── */}
      <div className="h-11 shrink-0 flex items-center justify-between px-4 bg-gray-900/80 backdrop-blur-md border-b border-white/10 z-50 select-none">
        <button
          onClick={() => setShowNeofetch(true)}
          className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
          aria-label="Open neofetch"
        >
          <img src={logoIcon} alt="logo" className="w-6 h-6 object-contain drop-shadow" />
          <span className="text-gray-300 text-xs font-mono font-semibold tracking-wide">
            evan@portfolio
          </span>
        </button>

        <span className="text-gray-400 text-xs font-mono">{formatTime(time)}</span>
      </div>

      {/* ── Content area ── */}
      <div className="flex-1 overflow-y-auto custom-scrollbar bg-[#1e1e1e]">
        {/* Section title bar */}
        <div className="sticky top-0 z-10 h-9 flex items-center px-4 bg-[#2b2d30] border-b border-[#1e1e1e]">
          <span className="text-gray-300 text-xs font-mono font-semibold tracking-wide truncate">
            evan@portfolio:~/{active === "terminal" ? "" : active}$
          </span>
        </div>

        {/* Section body */}
        <div className="p-4 font-mono text-sm min-h-full">
          <SectionContent id={active} onNavigate={handleNavigate} />
        </div>
      </div>

      {/* ── Bottom nav ── */}
      <nav className="shrink-0 h-16 bg-gray-900/90 backdrop-blur-md border-t border-white/10 flex items-center justify-around px-1 z-50 select-none">
        {SECTIONS.map((s) => {
          const isActive = active === s.id;
          return (
            <button
              key={s.id}
              onClick={() => setActive(s.id)}
              aria-label={s.label}
              className={`flex flex-col items-center justify-center gap-0.5 w-12 h-12 rounded-lg transition-all duration-150
                ${isActive
                  ? "bg-white/10 scale-105"
                  : "hover:bg-white/5 active:scale-95"
                }`}
            >
              <img
                src={s.icon}
                alt={s.label}
                className={`w-6 h-6 drop-shadow transition-all ${isActive ? "opacity-100" : "opacity-60"}`}
              />
              <span
                className={`text-[9px] font-mono font-medium transition-colors leading-tight
                  ${isActive ? "text-cyan-400" : "text-gray-500"}`}
              >
                {s.label}
              </span>
              {isActive && (
                <span className="absolute bottom-2 w-1 h-1 rounded-full bg-cyan-400" />
              )}
            </button>
          );
        })}
      </nav>

      {/* Neofetch modal */}
      {showNeofetch && <Neofetch onClose={() => setShowNeofetch(false)} />}
    </div>
  );
}
