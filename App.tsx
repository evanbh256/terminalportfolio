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
      works: "evan@portfolio:~/works$",
      experience: "evan@portfolio:~/experience$",
      contact: "evan@portfolio:~/contact$",
    };
    return titles[section] || "";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-green-950 overflow-hidden">
      {/* Main Content */}
      <main className="px-6 md:px-12">
        <Hero onNavigate={handleOpenWindow} />
      </main>

      {/* Overlay for open windows */}
      {openWindows.length > 0 && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" />
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
      <footer className="px-6 md:px-12 py-8">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-gray-500 text-sm font-mono">
            © 2025 Evan Bhandari. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
