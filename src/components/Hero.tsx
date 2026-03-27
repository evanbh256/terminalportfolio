import { useState, useRef, useEffect } from "react";
import { Instagram, Linkedin, Github } from "lucide-react";

interface HeroProps {
  onNavigate: (section: string) => void;
}

interface HistoryEntry {
  command: string;
  output: React.ReactNode;
}

export function Hero({ onNavigate }: HeroProps) {
  const [input, setInput] = useState("");
  
  const handleInitialDirectoryClick = (dir: string) => {
    onNavigate(dir);
  };
  const [history, setHistory] = useState<HistoryEntry[]>([
    {
      command: "whoami",
      output: (
        <div className="text-gray-300 mt-1 ml-2">
          <div className="mb-2">Hi, I'm Evan Bhandari!</div>
          <div>a self-motivated cyber enthusiast looking to grow, develop, and learn.</div>
        </div>
      ),
    },
    {
      command: "ls -la",
      output: (
        <div className="text-gray-300 mt-1 ml-2">
          <div className="space-y-1">
            <div className="flex items-center gap-3">
              <span className="text-blue-400">drwxr-xr-x</span>
              <span className="text-cyan-400">./</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-blue-400">drwxr-xr-x</span>
              <button
                onClick={() => handleInitialDirectoryClick("about")}
                className="text-cyan-400 hover:text-cyan-300 hover:underline cursor-pointer transition-colors"
              >
                about/
              </button>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-blue-400">drwxr-xr-x</span>
              <button
                onClick={() => handleInitialDirectoryClick("works")}
                className="text-cyan-400 hover:text-cyan-300 hover:underline cursor-pointer transition-colors"
              >
                projects/
              </button>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-blue-400">drwxr-xr-x</span>
              <button
                onClick={() => handleInitialDirectoryClick("experience")}
                className="text-cyan-400 hover:text-cyan-300 hover:underline cursor-pointer transition-colors"
              >
                experience/
              </button>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-blue-400">drwxr-xr-x</span>
              <button
                onClick={() => handleInitialDirectoryClick("contact")}
                className="text-cyan-400 hover:text-cyan-300 hover:underline cursor-pointer transition-colors"
              >
                contact/
              </button>
            </div>
          </div>
          <div className="mt-3 text-gray-800 text-sm italic bg-yellow-200 px-2 py-1 rounded inline-block">
            Enter "help" to see a list of commands
          </div>
        </div>
      ),
    },
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    let output: React.ReactNode = null;

    if (trimmedCmd === "help") {
      output = (
        <div className="text-gray-300 mt-1 ml-2">
          <div>Available commands:</div>
          <div className="ml-2 mt-1 space-y-1">
            <div><span className="text-green-400">whoami</span> - Display information about me</div>
            <div><span className="text-green-400">ls</span> - List available sections</div>
            <div><span className="text-green-400">cd [section]</span> - Navigate to a section (about/projects/experience/contact)</div>
            <div><span className="text-green-400">uname -a</span> - Print system information</div>
            <div><span className="text-green-400">clear</span> - Clear the terminal</div>
            <div><span className="text-green-400">help</span> - Show this help message</div>
          </div>
        </div>
      );
    } else if (trimmedCmd === "whoami") {
      output = (
        <div className="text-gray-300 mt-1 ml-2">
          <div className="mb-2">Hi, I'm Evan Bhandari!</div>
          <div>a self-motivated cyber enthusiast looking to grow, develop, and learn.</div>
        </div>
      );
    } else if (trimmedCmd === "ls" || trimmedCmd === "ls -la" || trimmedCmd === "ls -l") {
      const handleDirectoryClick = (dir: string) => {
        setTimeout(() => {
          handleCommand(`cd ${dir}`);
          setInput("");
        }, 0);
      };

      output = (
        <div className="text-gray-300 mt-1 ml-2">
          <div className="space-y-1">
            <div className="flex items-center gap-3">
              <span className="text-blue-400">drwxr-xr-x</span>
              <span className="text-cyan-400">./</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-blue-400">drwxr-xr-x</span>
              <button
                onClick={() => handleDirectoryClick("about")}
                className="text-cyan-400 hover:text-cyan-300 hover:underline cursor-pointer transition-colors"
              >
                about/
              </button>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-blue-400">drwxr-xr-x</span>
              <button
                onClick={() => handleDirectoryClick("works")}
                className="text-cyan-400 hover:text-cyan-300 hover:underline cursor-pointer transition-colors"
              >
                projects/
              </button>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-blue-400">drwxr-xr-x</span>
              <button
                onClick={() => handleDirectoryClick("experience")}
                className="text-cyan-400 hover:text-cyan-300 hover:underline cursor-pointer transition-colors"
              >
                experience/
              </button>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-blue-400">drwxr-xr-x</span>
              <button
                onClick={() => handleDirectoryClick("contact")}
                className="text-cyan-400 hover:text-cyan-300 hover:underline cursor-pointer transition-colors"
              >
                contact/
              </button>
            </div>
          </div>
        </div>
      );
    } else if (trimmedCmd === "uname -a" || trimmedCmd === "uname") {
      const currentDate = new Date();
      output = (
        <div className="text-gray-300 mt-1 ml-2 space-y-1">
          <div className="text-cyan-400">Portfolio OS 2.0.25 #evanbh256</div>
          <div>Node: <span className="text-green-400">evanbh256</span></div>
          <div>Kernel: Linux 6.9.0-portfolio x86_64</div>
          <div>Host: <span className="text-yellow-400">127.0.0.1</span></div>
          <div>Uptime: {Math.floor((currentDate.getTime() - new Date(currentDate.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24))} days</div>
          <div>Shell: bash 5.2.26</div>
          <div className="text-purple-400 mt-2 font-bold">☕ Powered by Coffee</div>
                        <div className="text-yellow-400">
              Idea by{" "}
              <a
                href="https://smaranpokharel.com.np"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                smaranpokharel.com.np
              </a>!
            </div>
        </div>
      );
    } else if (trimmedCmd.startsWith("cd ")) {
      const section = trimmedCmd.substring(3).trim().replace("/", "");
      const validSections = ["about", "works", "experience", "contact", "home"];
      
      if (validSections.includes(section)) {
        onNavigate(section);
        if (section === "home") {
          output = (
            <div className="text-gray-300 mt-1 ml-2">
              Closing all windows...
            </div>
          );
        } else {
          output = (
            <div className="text-gray-300 mt-1 ml-2">
              Opening {section}/ window...
            </div>
          );
        }
      } else if (section === ".." || section === "") {
        onNavigate("home");
        output = (
          <div className="text-gray-300 mt-1 ml-2">
            Closing all windows...
          </div>
        );
      } else {
        output = (
          <div className="text-red-400 mt-1 ml-2">
            bash: cd: {section}: No such directory
          </div>
        );
      }
    } else if (trimmedCmd === "clear") {
      setHistory([]);
      return;
    } else if (trimmedCmd === "") {
      return;
    } else {
      output = (
        <div className="text-red-400 mt-1 ml-2">
          bash: {cmd}: command not found. Type 'help' for available commands.
        </div>
      );
    }

    setHistory([...history, { command: cmd, output }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      handleCommand(input);
      setInput("");
    }
  };

  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  return (
    <section id="home" className="flex items-center justify-center flex-1">
      <div className="max-w-4xl w-full">
        {/* Terminal Window */}
  <div className="frosty-window rounded-lg overflow-hidden shadow-2xl">
          {/* Terminal Header */}
          <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/60 px-4 py-2.5 flex items-center justify-between gap-2 border-b border-white/10">
            <span className="text-gray-400 text-xs font-mono">evan@portfolio:~$</span>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/evan_256/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-3 h-3" />
              </a>
              <a
                href="https://www.linkedin.com/in/evan-bhandari-aa7b19218/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-3 h-3" />
              </a>
              <a
                href="https://github.com/evanbh256"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-3 h-3" />
              </a>
            </div>
          </div>
          
          {/* Terminal Body */}
          <div 
            ref={terminalRef}
            onClick={handleTerminalClick}
            className="p-3 font-mono text-xs max-h-[55vh] overflow-y-auto cursor-text"
          >
            {/* Command History */}
            {history.map((entry, index) => (
              <div key={index} className="mb-2">
                <div className="text-green-400">
                  <span className="text-yellow-200">evan@portfolio</span>
                  <span className="text-gray-400">:</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-gray-400">$ </span>
                  <span>{entry.command}</span>
                </div>
                {entry.output}
              </div>
            ))}

            {/* Input Line */}
            <form onSubmit={handleSubmit} className="flex items-center text-green-400">
              <span className="text-yellow-200">evan@portfolio</span>
              <span className="text-gray-400">:</span>
              <span className="text-blue-400">~</span>
              <span className="text-gray-400">$ </span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none text-green-400 ml-1"
                autoFocus
                spellCheck={false}
              />

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
