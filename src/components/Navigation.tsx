import { Linkedin, Mail, Instagram } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export function Navigation({ activeSection, onNavigate }: NavigationProps) {
  const navItems = [
    { id: "home", label: "/home" },
    { id: "about", label: "/about" },
    { id: "works", label: "/works" },
    { id: "experience", label: "/experience" },
    { id: "contact", label: "/contact" },
  ];

  return (
  <aside className="fixed left-0 top-0 h-screen w-64 bg-background/40 backdrop-blur-sm border-r border-green-900/30 p-6 flex flex-col">
  <div className="mb-8 border border-green-900/30 rounded-lg p-4 bg-background/20">
        <div className="flex items-center gap-3 mb-2">
          <ImageWithFallback 
            src="https://github.com/evanbh256.png" 
            alt="Profile" 
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h1 className="text-amber-200">Evan</h1>
            <h2 className="text-amber-200">Bhandari</h2>
          </div>
        </div>
        <p className="text-gray-400 text-xs mt-2">Cyber - Media - Web</p>
      </div>

      <nav className="flex-1 space-y-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`w-full text-left px-4 py-2 rounded-md transition-all font-mono ${
              activeSection === item.id
                ? "bg-green-900/20 text-green-400 border border-green-900/50"
                : "text-gray-400 hover:text-green-400 hover:bg-green-900/10"
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <div className="mt-auto flex gap-3">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 transition-colors"
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-400 hover:text-pink-300 transition-colors"
        >
          <Instagram className="w-5 h-5" />
        </a>
        <a
          href="mailto:contact@example.com"
          className="text-green-400 hover:text-green-300 transition-colors"
        >
          <Mail className="w-5 h-5" />
        </a>
      </div>
    </aside>
  );
}
