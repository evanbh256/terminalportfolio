import { useState, useEffect } from "react";

interface TaskbarProps {
  openWindows: string[];
  activeWindow: string | null;
  onWindowClick: (windowId: string) => void;
  onStartClick?: () => void;
}

const windowIcons: Record<string, string> = {
  terminal: "./img/icons/icons8-terminal-96.png",
  about: "./img/icons/icons8-find-user-male-96.png",
  works: "./img/icons/icons8-folder-96.png",
  experience: "./img/icons/icons8-project-96.png",
  contact: "./img/icons/icons8-contact-96.png",
};

const windowLabels: Record<string, string> = {
  terminal: "Terminal",
  about: "About",
  works: "Projects",
  experience: "Experience",
  contact: "Contact",
};

export function Taskbar({ openWindows, activeWindow, onWindowClick, onStartClick }: TaskbarProps) {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString([], { month: "short", day: "numeric", year: "numeric" });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 h-12 bg-gray-900/80 backdrop-blur-md border-t border-white/10 z-50 flex items-center px-2 justify-between">
      <div className="flex items-center gap-2 h-full">
        {/* Start Button */}
        <button
          onClick={onStartClick}
          className="h-9 px-2 flex items-center justify-center rounded hover:bg-white/10 transition-colors"
          aria-label="Start Menu"
        >
          <img 
            src="./img/logo.png" 
            alt="Logo" 
            className="w-6 h-6 object-contain drop-shadow-md" 
          />
        </button>

        <div className="w-px h-6 bg-white/10 mx-1" />

        {/* Open Windows */}
        {openWindows.map((win) => {
          const isActive = activeWindow === win;
          const iconSrc = windowIcons[win] || "./img/icons/icons8-folder-96.png";
          return (
            <button
              key={win}
              onClick={() => onWindowClick(win)}
              className={`h-9 px-3 flex items-center gap-2 rounded transition-colors text-sm font-medium ${
                isActive
                  ? "bg-white/20 text-white border-b-2 border-cyan-400"
                  : "hover:bg-white/10 text-gray-300 border-b-2 border-transparent"
              }`}
            >
              <img src={iconSrc} alt={win} className="w-5 h-5 drop-shadow-sm" />
              <span className="hidden sm:inline">{windowLabels[win] || win}</span>
            </button>
          );
        })}
      </div>

      {/* Clock & System Tray */}
      <div className="flex items-center gap-4 px-3 text-gray-300 text-xs font-medium h-9 rounded hover:bg-white/10 transition-colors cursor-default">
        <div className="flex flex-col items-end justify-center">
          <span>{formatTime(time)}</span>
          <span className="text-[10px] text-gray-400">{formatDate(time)}</span>
        </div>
      </div>
    </div>
  );
}
