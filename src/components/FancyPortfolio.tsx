import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Hero } from "./Hero";
import { About } from "./About";
import { Works } from "./Works";
import { Competitions } from "./Competitions";
import { Experience } from "./Experience";
import { Contact } from "./Contact";
import { Window } from "./Window";
import { DesktopIcon } from "./DesktopIcon";
import { Taskbar } from "./Taskbar";
import { Neofetch } from "./Neofetch";
import { MobileLayout } from "./MobileLayout";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return isMobile;
}

// Import icons to ensure Vite bundles them with hashes
import terminalIcon from "../assets/icons8-terminal-96.png";
import aboutIcon from "../assets/icons8-find-user-male-96.png";
import worksIcon from "../assets/icons8-folder-96.png";
import competitionsIcon from "../assets/icons8-trophy-96.png";
import experienceIcon from "../assets/icons8-project-96.png";
import contactIcon from "../assets/icons8-contact-96.png";
import resumeIcon from "../assets/icons8-paper-96.png";

export function FancyPortfolio() {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const [openWindows, setOpenWindows] = useState<string[]>(["terminal"]);
  const [minimizedWindows, setMinimizedWindows] = useState<string[]>([]);
  const [activeWindow, setActiveWindow] = useState<string | null>("terminal");
  const [showNeofetch, setShowNeofetch] = useState(false);

  // On mobile, render a completely different layout
  if (isMobile) {
    return (
      <div className="relative">
        <button 
          onClick={() => navigate('/')}
          className="absolute top-4 right-4 z-50 bg-black/50 text-white px-3 py-1 rounded-md text-sm border border-white/20"
        >
          Home
        </button>
        <MobileLayout showNeofetch={showNeofetch} setShowNeofetch={setShowNeofetch} />
      </div>
    );
  }

  const handleOpenResume = () => {
    window.open("./EvanBhandari-Web.pdf", "_blank");
  };

  const handleOpenWindow = (section: string) => {
    if (section === "home") {
      navigate('/');
      return;
    }
    if (section === "resume") {
      handleOpenResume();
      return;
    }
    setOpenWindows(prev => {
      const without = prev.filter(w => w !== section);
      return [...without, section];
    });
    setMinimizedWindows(prev => prev.filter((w) => w !== section));
    setActiveWindow(section);
  };

  const handleCloseWindow = (section: string) => {
    setOpenWindows(prev => {
      const next = prev.filter((w) => w !== section);
      if (activeWindow === section) {
        setActiveWindow(next.length > 0 ? next[next.length - 1] : null);
      }
      return next;
    });
    setMinimizedWindows(prev => prev.filter((w) => w !== section));
  };

  const handleMinimizeWindow = (section: string) => {
    setMinimizedWindows(prev => {
      if (!prev.includes(section)) return [...prev, section];
      return prev;
    });
    if (activeWindow === section) {
      const available = openWindows.filter(w => w !== section && !minimizedWindows.includes(w));
      setActiveWindow(available.length > 0 ? available[available.length - 1] : null);
    }
  };

  const handleWindowClick = (section: string) => {
    setMinimizedWindows(prev => prev.filter(w => w !== section));
    setOpenWindows(prev => {
      if (prev[prev.length - 1] === section) return prev;
      const without = prev.filter(w => w !== section);
      return [...without, section];
    });
    setActiveWindow(section);
  };

  const toggleWindow = (section: string) => {
    if (activeWindow === section && !minimizedWindows.includes(section)) {
      handleMinimizeWindow(section);
    } else {
      handleWindowClick(section);
    }
  };

  const getWindowTitle = (section: string) => {
    const titles: { [key: string]: string } = {
      terminal: "evan@portfolio:~$",
      about: "evan@portfolio:~/about$",
      works: "evan@portfolio:~/projects$",
      competitions: "evan@portfolio:~/competitions$",
      experience: "evan@portfolio:~/experience$",
      contact: "evan@portfolio:~/contact$",
    };
    return titles[section] || "";
  };

  return (
    <div className="h-screen w-screen techy-background overflow-hidden relative flex flex-col select-none">     
      <main className="flex-1 relative z-10 p-4 pt-8" onClick={() => setActiveWindow(null)}>
        <div className="flex flex-col flex-wrap gap-4 max-h-[calc(100vh-100px)] w-fit" onClick={(e) => e.stopPropagation()}>
          <DesktopIcon iconSrc={terminalIcon} label="Terminal" onClick={() => handleOpenWindow("terminal")} />
          <DesktopIcon iconSrc={aboutIcon} label="About Me" onClick={() => handleOpenWindow("about")} />
          <DesktopIcon iconSrc={worksIcon} label="Projects" onClick={() => handleOpenWindow("works")} />
          <DesktopIcon iconSrc={competitionsIcon} label="Competitions" onClick={() => handleOpenWindow("competitions")} />
          <DesktopIcon iconSrc={experienceIcon} label="Experience" onClick={() => handleOpenWindow("experience")} />
          <DesktopIcon iconSrc={contactIcon} label="Contact" onClick={() => handleOpenWindow("contact")} />
          <DesktopIcon iconSrc={resumeIcon} label="Resume" onClick={() => handleOpenWindow("resume")} />
        </div>
      </main>

      {openWindows.includes("terminal") && (
        <Window
          id="terminal"
          title={getWindowTitle("terminal")}
          onClose={() => handleCloseWindow("terminal")}
          onMinimize={() => handleMinimizeWindow("terminal")}
          onClick={() => handleWindowClick("terminal")}
          isActive={activeWindow === "terminal"}
          isMinimized={minimizedWindows.includes("terminal")}
          zIndex={30 + openWindows.indexOf("terminal")}
          defaultWidth="w-[95%] max-w-4xl"
          defaultHeight="h-[60vh]"
        >
          <Hero onNavigate={handleOpenWindow} />
        </Window>
      )}
      {openWindows.includes("about") && (
        <Window
          id="about"
          title={getWindowTitle("about")}
          onClose={() => handleCloseWindow("about")}
          onMinimize={() => handleMinimizeWindow("about")}
          onClick={() => handleWindowClick("about")}
          isActive={activeWindow === "about"}
          isMinimized={minimizedWindows.includes("about")}
          zIndex={30 + openWindows.indexOf("about")}
        >
          <About />
        </Window>
      )}
      {openWindows.includes("works") && (
        <Window
          id="works"
          title={getWindowTitle("works")}
          onClose={() => handleCloseWindow("works")}
          onMinimize={() => handleMinimizeWindow("works")}
          onClick={() => handleWindowClick("works")}
          isActive={activeWindow === "works"}
          isMinimized={minimizedWindows.includes("works")}
          zIndex={30 + openWindows.indexOf("works")}
        >
          <Works />
        </Window>
      )}
      {openWindows.includes("competitions") && (
        <Window
          id="competitions"
          title={getWindowTitle("competitions")}
          onClose={() => handleCloseWindow("competitions")}
          onMinimize={() => handleMinimizeWindow("competitions")}
          onClick={() => handleWindowClick("competitions")}
          isActive={activeWindow === "competitions"}
          isMinimized={minimizedWindows.includes("competitions")}
          zIndex={30 + openWindows.indexOf("competitions")}
        >
          <Competitions />
        </Window>
      )}
      {openWindows.includes("experience") && (
        <Window
          id="experience"
          title={getWindowTitle("experience")}
          onClose={() => handleCloseWindow("experience")}
          onMinimize={() => handleMinimizeWindow("experience")}
          onClick={() => handleWindowClick("experience")}
          isActive={activeWindow === "experience"}
          isMinimized={minimizedWindows.includes("experience")}
          zIndex={30 + openWindows.indexOf("experience")}
        >
          <Experience />
        </Window>
      )}
      {openWindows.includes("contact") && (
        <Window
          id="contact"
          title={getWindowTitle("contact")}
          onClose={() => handleCloseWindow("contact")}
          onMinimize={() => handleMinimizeWindow("contact")}
          onClick={() => handleWindowClick("contact")}
          isActive={activeWindow === "contact"}
          isMinimized={minimizedWindows.includes("contact")}
          zIndex={30 + openWindows.indexOf("contact")}
        >
          <Contact />
        </Window>
      )}

      <Taskbar 
        openWindows={openWindows} 
        activeWindow={activeWindow} 
        onWindowClick={toggleWindow}
        onStartClick={() => setShowNeofetch(true)}
        onNavigateHome={() => navigate('/')}
      />
      {showNeofetch && <Neofetch onClose={() => setShowNeofetch(false)} />}
    </div>
  );
}
