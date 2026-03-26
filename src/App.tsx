import { useState } from "react";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Works } from "./components/Works";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { Window } from "./components/Window";

export default function App() {
  const [openWindows, setOpenWindows] = useState<string[]>([]);

  const handleOpenWindow = (section: string) => {
    if (section === "home") {
      // Close all windows when navigating home
      setOpenWindows([]);
      return;
    }
    // Add window if not already open
    if (!openWindows.includes(section)) {
      setOpenWindows([...openWindows, section]);
    }
  };

  const handleCloseWindow = (section: string) => {
    setOpenWindows(openWindows.filter((w) => w !== section));
  };

  const getWindowTitle = (section: string) => {
    const titles: { [key: string]: string } = {
      about: "evan@portfolio:~/about$",
      works: "evan@portfolio:~/projects$",
      experience: "evan@portfolio:~/experience$",
      contact: "evan@portfolio:~/contact$",
    };
    return titles[section] || "";
  };

  return (
    <div className="min-h-screen techy-background overflow-hidden relative flex flex-col">
      {/* Main Content */}
      <main className="px-6 md:px-12 relative z-20 flex-1 flex flex-col">
        <Hero onNavigate={handleOpenWindow} />
      </main>

      {/* Overlay for open windows */}
      {openWindows.length > 0 && (
  <div className="fixed inset-0 bg-background/50 backdrop-blur-sm z-30" />
      )}

      {/* Windows */}
      {openWindows.includes("about") && (
        <Window title={getWindowTitle("about")} onClose={() => handleCloseWindow("about")}>
          <About />
        </Window>
      )}
      {openWindows.includes("works") && (
        <Window title={getWindowTitle("works")} onClose={() => handleCloseWindow("works")}>
          <Works />
        </Window>
      )}
      {openWindows.includes("experience") && (
        <Window title={getWindowTitle("experience")} onClose={() => handleCloseWindow("experience")}>
          <Experience />
        </Window>
      )}
      {openWindows.includes("contact") && (
        <Window title={getWindowTitle("contact")} onClose={() => handleCloseWindow("contact")}>
          <Contact />
        </Window>
      )}

      {/* Footer */}
      <footer className="px-6 md:px-12 py-3 relative z-20 flex-shrink-0">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-gray-300 text-xs font-mono">
           © {new Date().getFullYear()} Evan Bhandari. Fully Vibe-Coded.
          </p>
        </div>
      </footer>
    </div>
  );
}
