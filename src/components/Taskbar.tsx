import { useState, useEffect } from "react";
import { Home } from "lucide-react";

// Import icons to ensure Vite bundles them
import terminalIcon from "../assets/icons8-terminal-96.png";
import aboutIcon from "../assets/icons8-find-user-male-96.png";
import worksIcon from "../assets/icons8-folder-96.png";
import competitionsIcon from "../assets/icons8-trophy-96.png";
import experienceIcon from "../assets/icons8-project-96.png";
import contactIcon from "../assets/icons8-contact-96.png";
import logoIcon from "../assets/logo.png";

interface TaskbarProps {
  openWindows: string[];
  activeWindow: string | null;
  onWindowClick: (windowId: string) => void;
  onStartClick?: () => void;
  onNavigateHome?: () => void;
}

const windowIcons: Record<string, string> = {
  terminal: terminalIcon,
  about: aboutIcon,
  works: worksIcon,
  competitions: competitionsIcon,
  experience: experienceIcon,
  contact: contactIcon,
};

const windowLabels: Record<string, string> = {
  terminal: "Terminal",
  about: "About",
  works: "Projects",
  competitions: "Competitions",
  experience: "Experience",
  contact: "Contact",
};

export function Taskbar({ openWindows, activeWindow, onWindowClick, onStartClick, onNavigateHome }: TaskbarProps) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString([], { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="h-[42px] w-full bg-gray-900/80 backdrop-blur-md border-t border-white/10 flex items-center justify-between px-1 z-50 select-none">
      <div className="flex items-center gap-1 h-full overflow-x-auto hide-scrollbar min-w-0 flex-1">
        {/* Start Button */}
        <button
          onClick={onStartClick}
          className="h-9 px-2 flex items-center justify-center rounded hover:bg-white/10 transition-colors cursor-pointer"
          aria-label="Start Menu"
        >
          <img 
            src={logoIcon} 
            alt="Logo" 
            className="w-6 h-6 object-contain drop-shadow-md" 
          />
        </button>

        {/* Home Button */}
        {onNavigateHome && (
          <button
            onClick={onNavigateHome}
            className="h-9 px-3 flex items-center justify-center rounded hover:bg-white/10 transition-colors cursor-pointer text-gray-300 hover:text-white"
            aria-label="Home"
            title="Return to Home"
          >
            <Home size={18} />
          </button>
        )}

        <div className="w-px h-6 bg-white/10 mx-1" />

        {/* Open Windows */}
        {openWindows.map((win) => {
          const isActive = activeWindow === win;
          const iconSrc = windowIcons[win] || worksIcon;
          return (
            <button
              key={win}
              onClick={() => onWindowClick(win)}
              className={`h-9 px-3 flex items-center gap-2 rounded transition-colors text-sm font-medium ${
                isActive 
                  ? "bg-white/10 text-white border-b-2 border-cyan-400" 
                  : "text-gray-400 hover:bg-white/5 hover:text-gray-200"
              }`}
            >
              <img src={iconSrc} alt={win} className="w-5 h-5 drop-shadow-sm" />
              <span className="hidden sm:inline">{windowLabels[win] || win}</span>
            </button>
          );
        })}
      </div>

      {/* System Tray */}
      <div className="flex items-center gap-3 px-3 text-gray-200 text-xs font-mono shrink-0">
        <div className="flex flex-col items-end justify-center">
          <span>{formatTime(time)}</span>
          <span className="hidden md:block text-[10px] text-gray-400">{formatDate(time)}</span>
        </div>
      </div>
    </div>
  );
}
