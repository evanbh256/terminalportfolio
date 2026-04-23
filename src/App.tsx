import { useState } from "react";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Works } from "./components/Works";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { Window } from "./components/Window";
import { DesktopIcon } from "./components/DesktopIcon";
import { Taskbar } from "./components/Taskbar";

// Import icons to ensure Vite bundles them with hashes
import terminalIcon from "./assets/icons8-terminal-96.png";
import aboutIcon from "./assets/icons8-find-user-male-96.png";
import worksIcon from "./assets/icons8-folder-96.png";
import experienceIcon from "./assets/icons8-project-96.png";
import contactIcon from "./assets/icons8-contact-96.png";

export default function App() {
  const [openWindows, setOpenWindows] = useState<string[]>(["terminal"]);
  const [minimizedWindows, setMinimizedWindows] = useState<string[]>([]);
  const [activeWindow, setActiveWindow] = useState<string | null>("terminal");

  const handleOpenWindow = (section: string) => {
    if (section === "home") return;
    if (!openWindows.includes(section)) {
      setOpenWindows([...openWindows, section]);
    }
    if (minimizedWindows.includes(section)) {
      setMinimizedWindows(minimizedWindows.filter((w) => w !== section));
    }
    setActiveWindow(section);
  };

  const handleCloseWindow = (section: string) => {
    setOpenWindows(openWindows.filter((w) => w !== section));
    setMinimizedWindows(minimizedWindows.filter((w) => w !== section));
    if (activeWindow === section) {
      const remaining = openWindows.filter((w) => w !== section);
      setActiveWindow(remaining.length > 0 ? remaining[remaining.length - 1] : null);
    }
  };

  const handleMinimizeWindow = (section: string) => {
    if (!minimizedWindows.includes(section)) {
      setMinimizedWindows([...minimizedWindows, section]);
    }
    if (activeWindow === section) {
      const available = openWindows.filter(w => w !== section && !minimizedWindows.includes(w));
      setActiveWindow(available.length > 0 ? available[available.length - 1] : null);
    }
  };

  const handleWindowClick = (section: string) => {
    if (minimizedWindows.includes(section)) {
      setMinimizedWindows(minimizedWindows.filter(w => w !== section));
    }
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
          <DesktopIcon iconSrc={experienceIcon} label="Experience" onClick={() => handleOpenWindow("experience")} />
          <DesktopIcon iconSrc={contactIcon} label="Contact" onClick={() => handleOpenWindow("contact")} />
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
        >
          <Works />
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
        >
          <Contact />
        </Window>
      )}

      <Taskbar
        openWindows={openWindows}
        activeWindow={activeWindow}
        onWindowClick={toggleWindow}
      />
    </div>
  );
}
