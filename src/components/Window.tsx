import { X, Maximize2, Minimize2, Minus } from "lucide-react";
import { useState, useEffect } from "react";
import { Rnd } from "react-rnd";

interface WindowProps {
  id: string;
  title: string;
  onClose: () => void;
  onMinimize: () => void;
  onClick: () => void;
  isActive: boolean;
  isMinimized: boolean;
  children: React.ReactNode;
  defaultWidth?: string;
  defaultHeight?: string;
  zIndex?: number;
}

export function Window({ 
  id,
  title, 
  onClose, 
  onMinimize,
  onClick,
  isActive,
  isMinimized,
  children,
  zIndex
}: WindowProps) {
  const [isMaximized, setIsMaximized] = useState(false);

  // Default size logic
  const initWidth = Math.min(800, window.innerWidth * 0.9);
  const initHeight = Math.min(600, window.innerHeight * 0.8);
  const initX = (window.innerWidth - initWidth) / 2 + (Math.random() * 40 - 20);
  const initY = (window.innerHeight - initHeight) / 2 + (Math.random() * 40 - 20);

  const [size, setSize] = useState<{ width: string | number; height: string | number }>({ width: initWidth, height: initHeight });
  const [position, setPosition] = useState({ x: initX, y: initY });

  // Handle ESC key to close window
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isActive) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose, isActive]);

  if (isMinimized) return null;

  return (
    <Rnd
      size={isMaximized ? { width: '100%', height: 'calc(100% - 48px)' } : size}
      position={isMaximized ? { x: 0, y: 0 } : position}
      onDragStop={(e, d) => {
        if (!isMaximized) setPosition({ x: d.x, y: d.y });
      }}
      onResizeStop={(e, direction, ref, delta, position) => {
        if (!isMaximized) {
          setSize({ width: ref.style.width, height: ref.style.height });
          setPosition(position);
        }
      }}
      disableDragging={isMaximized}
      enableResizing={!isMaximized}
      bounds="window"
      dragHandleClassName="window-handle"
      style={{ zIndex: zIndex !== undefined ? zIndex : (isActive ? 40 : 30), position: 'absolute' }}
      className={`rounded-xl overflow-hidden shadow-2xl border border-gray-700 bg-[#1e1e1e] text-gray-200 transition-opacity animate-in fade-in zoom-in-95 duration-200`}
      onClick={onClick}
      minWidth={300}
      minHeight={200}
    >
      {/* Window Header */}
      <div 
        className={`window-handle absolute top-0 left-0 right-0 h-[42px] bg-[#2b2d30] border-b border-[#1e1e1e] px-4 flex items-center justify-between cursor-default transition-colors select-none z-10 ${isActive ? 'opacity-100' : 'opacity-90'}`}
        onDoubleClick={() => setIsMaximized(!isMaximized)}
      >
        <div className="flex items-center gap-2">
          <span className="text-gray-300 text-xs font-semibold tracking-wide font-sans">{title}</span>
        </div>
        
        {/* Window Controls (Linux Style) */}
        <div className="flex items-center gap-3 window-controls">
          <button
            onClick={(e) => { e.stopPropagation(); onMinimize(); }}
            className="text-gray-400 hover:text-white transition-colors flex items-center justify-center w-5 h-5 rounded-full hover:bg-white/10"
            aria-label="Minimize"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <Minus size={14} strokeWidth={2.5} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); setIsMaximized(!isMaximized); }}
            className="text-gray-400 hover:text-white transition-colors flex items-center justify-center w-5 h-5 rounded-full hover:bg-white/10"
            aria-label={isMaximized ? "Restore" : "Maximize"}
            onMouseDown={(e) => e.stopPropagation()}
          >
            {isMaximized ? <Minimize2 size={12} strokeWidth={2.5} /> : <Maximize2 size={12} strokeWidth={2.5} />}
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); onClose(); }}
            className="text-gray-400 hover:text-white transition-colors flex items-center justify-center w-5 h-5 rounded-full hover:bg-red-500 hover:text-white"
            aria-label="Close"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <X size={14} strokeWidth={2.5} />
          </button>
        </div>
      </div>

      {/* Window Content */}
      <div
        className={`absolute top-[42px] left-0 right-0 bottom-0 overflow-y-auto p-6 custom-scrollbar bg-[#1e1e1e] focus:outline-none ${!isActive && 'opacity-90 grayscale-[20%]'}`}
        contentEditable={id !== "terminal" ? "true" : "false"}
        suppressContentEditableWarning={true}
        spellCheck="false"
      >
        {children}
      </div>    </Rnd>
  );
}
