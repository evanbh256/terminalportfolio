import { X, Maximize2, Minimize2 } from "lucide-react";
import { useState, useEffect } from "react";

interface WindowProps {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}

export function Window({ title, onClose, children }: WindowProps) {
  const [isMaximized, setIsMaximized] = useState(false);

  // Handle ESC key to close window
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <div className={`fixed frosty-window rounded-lg overflow-hidden ${
      isMaximized 
        ? "inset-4" 
        : "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-4xl max-h-[85vh]"
    } transition-all duration-200 z-50 animate-in fade-in slide-in-from-bottom-4`}>
      {/* Window Header */}
      <div className="bg-gray-900/80 border-b border-green-900/30 px-4 py-2 flex items-center justify-between">
        <span className="text-green-400 text-sm font-mono">{title}</span>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsMaximized(!isMaximized)}
            className="text-gray-400 hover:text-green-400 transition-colors p-1 hover:bg-green-900/20 rounded"
            aria-label={isMaximized ? "Restore" : "Maximize"}
          >
            {isMaximized ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
          </button>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-red-400 transition-colors p-1 hover:bg-red-900/20 rounded"
            aria-label="Close"
          >
            <X size={16} />
          </button>
        </div>
      </div>

      {/* Window Content */}
      <div className="overflow-y-auto max-h-[calc(85vh-40px)] p-6 custom-scrollbar">
        {children}
      </div>
    </div>
  );
}
