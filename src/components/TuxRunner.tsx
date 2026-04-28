import { useEffect, useRef, useState, useCallback } from "react";
import { X } from "lucide-react";

// Site palette
const TEAL_BG     = "#001E26";     // --background
const TEAL_PANEL  = "#053542";     // frosty-window-2 base (no alpha for canvas)
const TEAL_ACCENT = "#0891b2";     // cyan-600 — accent
const TEAL_DIM    = "#0c3b4a";     // header bar
const CYAN_GLOW   = "#22d3ee";     // cyan-400
const AMBER_TXT   = "#fde68a";     // amber-200 (matches headings across site)

interface TuxRunnerProps {
  onClose: () => void;
}

const CANVAS_WIDTH = 700;
const CANVAS_HEIGHT = 220;
const GROUND_Y = 170;
const TUX_X = 80;
const TUX_W = 36;
const TUX_H = 44;
const GRAVITY = 0.55;
const JUMP_VY = -13;

interface Obstacle {
  x: number;
  w: number;
  h: number;
  type: "pipe" | "wall" | "server";
}

interface Cloud {
  x: number;
  y: number;
  w: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  color: string;
}

function drawTux(ctx: CanvasRenderingContext2D, x: number, y: number, frame: number, dead: boolean) {
  const bodyY = y;

  if (dead) {
    // Dead Tux - tilted X eyes
    ctx.save();
    ctx.translate(x + TUX_W / 2, bodyY + TUX_H / 2);
    ctx.rotate(0.3);
    ctx.translate(-(x + TUX_W / 2), -(bodyY + TUX_H / 2));
  }

  // Body (black)
  ctx.fillStyle = "#1a1a1a";
  ctx.beginPath();
  ctx.ellipse(x + TUX_W / 2, bodyY + TUX_H / 2 + 4, TUX_W / 2, TUX_H / 2, 0, 0, Math.PI * 2);
  ctx.fill();

  // White belly
  ctx.fillStyle = "#e8e8e8";
  ctx.beginPath();
  ctx.ellipse(x + TUX_W / 2, bodyY + TUX_H / 2 + 8, TUX_W / 3, TUX_H / 3, 0, 0, Math.PI * 2);
  ctx.fill();

  // Head (black)
  ctx.fillStyle = "#1a1a1a";
  ctx.beginPath();
  ctx.arc(x + TUX_W / 2, bodyY + 12, 14, 0, Math.PI * 2);
  ctx.fill();

  // White face
  ctx.fillStyle = "#e0e0e0";
  ctx.beginPath();
  ctx.ellipse(x + TUX_W / 2, bodyY + 14, 9, 10, 0, 0, Math.PI * 2);
  ctx.fill();

  if (dead) {
    // X eyes
    ctx.strokeStyle = "#ff4444";
    ctx.lineWidth = 2;
    [[x + TUX_W / 2 - 6, bodyY + 8], [x + TUX_W / 2 + 6, bodyY + 8]].forEach(([ex, ey]) => {
      ctx.beginPath(); ctx.moveTo(ex - 3, ey - 3); ctx.lineTo(ex + 3, ey + 3); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(ex + 3, ey - 3); ctx.lineTo(ex - 3, ey + 3); ctx.stroke();
    });
    ctx.restore();
  } else {
    // Normal eyes
    ctx.fillStyle = "#111";
    ctx.beginPath(); ctx.arc(x + TUX_W / 2 - 4, bodyY + 10, 2.5, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(x + TUX_W / 2 + 4, bodyY + 10, 2.5, 0, Math.PI * 2); ctx.fill();
    // Eye shine
    ctx.fillStyle = "white";
    ctx.beginPath(); ctx.arc(x + TUX_W / 2 - 3, bodyY + 9, 1, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(x + TUX_W / 2 + 5, bodyY + 9, 1, 0, Math.PI * 2); ctx.fill();
  }

  // Beak (orange)
  ctx.fillStyle = "#ff9500";
  ctx.beginPath();
  ctx.moveTo(x + TUX_W / 2 - 4, bodyY + 15);
  ctx.lineTo(x + TUX_W / 2 + 4, bodyY + 15);
  ctx.lineTo(x + TUX_W / 2, bodyY + 20);
  ctx.fill();

  // Feet (alternating walk animation)
  const footOffset = Math.sin(frame * 0.3) * 4;
  ctx.fillStyle = "#ff9500";
  ctx.beginPath();
  ctx.ellipse(x + TUX_W / 2 - 8, GROUND_Y + footOffset, 7, 4, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.ellipse(x + TUX_W / 2 + 8, GROUND_Y - footOffset, 7, 4, 0, 0, Math.PI * 2);
  ctx.fill();
}

function drawPipe(ctx: CanvasRenderingContext2D, obs: Obstacle) {
  // Firewall obstacle — cyan/teal to match site
  const gradient = ctx.createLinearGradient(obs.x, 0, obs.x + obs.w, 0);
  gradient.addColorStop(0, "#0891b2");
  gradient.addColorStop(0.5, "#0e7490");
  gradient.addColorStop(1, "#155e75");
  ctx.fillStyle = gradient;
  ctx.fillRect(obs.x, GROUND_Y - obs.h, obs.w, obs.h);

  // Cap
  ctx.fillStyle = "#22d3ee";
  ctx.fillRect(obs.x - 3, GROUND_Y - obs.h, obs.w + 6, 10);

  // Detail lines
  ctx.strokeStyle = "#155e75";
  ctx.lineWidth = 1;
  for (let i = 10; i < obs.h; i += 14) {
    ctx.beginPath();
    ctx.moveTo(obs.x + 4, GROUND_Y - obs.h + i);
    ctx.lineTo(obs.x + obs.w - 4, GROUND_Y - obs.h + i);
    ctx.stroke();
  }

  // Blinking LED — amber to match site headings
  const blink = Math.floor(Date.now() / 400) % 2 === 0;
  ctx.fillStyle = blink ? AMBER_TXT : "#78350f";
  ctx.beginPath();
  ctx.arc(obs.x + obs.w - 8, GROUND_Y - obs.h + 6, 3, 0, Math.PI * 2);
  ctx.fill();
}

function drawCloud(ctx: CanvasRenderingContext2D, cloud: Cloud) {
  ctx.fillStyle = "rgba(14, 116, 144, 0.08)";  // cyan-700 tint
  ctx.beginPath();
  ctx.arc(cloud.x, cloud.y, cloud.w / 2, 0, Math.PI * 2);
  ctx.arc(cloud.x + cloud.w * 0.3, cloud.y - 8, cloud.w / 3, 0, Math.PI * 2);
  ctx.arc(cloud.x - cloud.w * 0.25, cloud.y - 5, cloud.w / 4, 0, Math.PI * 2);
  ctx.fill();
}

export function TuxRunner({ onClose }: TuxRunnerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gameStateRef = useRef({
    tuxY: GROUND_Y - TUX_H,
    tuxVY: 0,
    onGround: true,
    frame: 0,
    score: 0,
    speed: 4,
    obstacles: [] as Obstacle[],
    clouds: [
      { x: 200, y: 50, w: 80 },
      { x: 500, y: 35, w: 60 },
      { x: 650, y: 65, w: 50 },
    ] as Cloud[],
    particles: [] as Particle[],
    nextObstacle: 200,
    running: false,
    dead: false,
    highScore: 0,
    justStarted: true,
  });

  const [displayScore, setDisplayScore] = useState(0);
  const [gameState, setGameState] = useState<"idle" | "running" | "dead">("idle");
  const animRef = useRef<number>(0);

  const spawnParticles = useCallback((x: number, y: number) => {
    const colors = [CYAN_GLOW, "#67e8f9", "#a5f3fc", AMBER_TXT, "#f87171"];
    for (let i = 0; i < 12; i++) {
      gameStateRef.current.particles.push({
        x, y,
        vx: (Math.random() - 0.5) * 8,
        vy: (Math.random() - 0.5) * 8 - 3,
        life: 1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
  }, []);

  const jump = useCallback(() => {
    const gs = gameStateRef.current;
    if (gs.dead) return;
    if (!gs.running) {
      gs.running = true;
      gs.justStarted = false;
      setGameState("running");
      return;
    }
    if (gs.onGround) {
      gs.tuxVY = JUMP_VY;
      gs.onGround = false;
    }
  }, []);

  const reset = useCallback(() => {
    const gs = gameStateRef.current;
    if (gs.score > gs.highScore) gs.highScore = gs.score;
    gs.tuxY = GROUND_Y - TUX_H;
    gs.tuxVY = 0;
    gs.onGround = true;
    gs.frame = 0;
    gs.score = 0;
    gs.speed = 4;
    gs.obstacles = [];
    gs.particles = [];
    gs.nextObstacle = 200;
    gs.running = false;
    gs.dead = false;
    gs.justStarted = true;
    setDisplayScore(0);
    setGameState("idle");
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const loop = () => {
      const gs = gameStateRef.current;
      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

      // Background — site's #001E26 deep teal-black
      const bg = ctx.createLinearGradient(0, 0, 0, CANVAS_HEIGHT);
      bg.addColorStop(0, TEAL_BG);
      bg.addColorStop(1, "#001218");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

      // Scrolling grid lines — subtle teal
      const gridOffset = (gs.frame * 2) % 40;
      ctx.strokeStyle = "rgba(8, 145, 178, 0.06)";
      ctx.lineWidth = 1;
      for (let x = -gridOffset; x < CANVAS_WIDTH; x += 40) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, CANVAS_HEIGHT); ctx.stroke();
      }

      // Clouds
      gs.clouds.forEach(c => {
        drawCloud(ctx, c);
        if (gs.running) c.x -= gs.speed * 0.3;
        if (c.x < -150) c.x = CANVAS_WIDTH + 100;
      });

      // Ground fill — teal panel color
      const groundGrad = ctx.createLinearGradient(0, GROUND_Y, 0, CANVAS_HEIGHT);
      groundGrad.addColorStop(0, TEAL_ACCENT);
      groundGrad.addColorStop(0.12, TEAL_DIM);
      groundGrad.addColorStop(1, "#000d12");
      ctx.fillStyle = groundGrad;
      ctx.fillRect(0, GROUND_Y, CANVAS_WIDTH, CANVAS_HEIGHT - GROUND_Y);

      // Ground line — cyan glow
      ctx.strokeStyle = CYAN_GLOW;
      ctx.lineWidth = 2;
      ctx.shadowColor = CYAN_GLOW;
      ctx.shadowBlur = 8;
      ctx.beginPath();
      ctx.moveTo(0, GROUND_Y);
      ctx.lineTo(CANVAS_WIDTH, GROUND_Y);
      ctx.stroke();
      ctx.shadowBlur = 0;

      if (gs.running && !gs.dead) {
        // Physics
        gs.tuxVY += GRAVITY;
        gs.tuxY += gs.tuxVY;

        if (gs.tuxY >= GROUND_Y - TUX_H) {
          gs.tuxY = GROUND_Y - TUX_H;
          gs.tuxVY = 0;
          gs.onGround = true;
        }

        gs.frame++;
        gs.score++;
        // Smooth continuous ramp: starts at 4, reaches ~12 by score 2000, caps at 18
        gs.speed = Math.min(18, 4 + (gs.score / 180));

        // Spawn obstacles — gap shrinks as speed increases
        gs.nextObstacle--;
        if (gs.nextObstacle <= 0) {
          const h = 30 + Math.random() * 55;
          gs.obstacles.push({ x: CANVAS_WIDTH, w: 22, h, type: "pipe" });
          // Gap decreases with score but never gets too punishing
          gs.nextObstacle = Math.max(45, 90 + Math.random() * 80 - gs.score / 60);
        }

        // Move & cull obstacles
        gs.obstacles = gs.obstacles.filter(o => {
          o.x -= gs.speed;
          return o.x > -o.w - 20;
        });

        // Collision detection (slightly shrunk hitbox for fairness)
        const tx = TUX_X + 6, ty = gs.tuxY + 6, tw = TUX_W - 12, th = TUX_H - 10;
        for (const obs of gs.obstacles) {
          const ox = obs.x + 3, oy = GROUND_Y - obs.h, ow = obs.w - 6, oh = obs.h;
          if (tx < ox + ow && tx + tw > ox && ty < oy + oh && ty + th > oy) {
            gs.dead = true;
            spawnParticles(TUX_X + TUX_W / 2, gs.tuxY + TUX_H / 2);
            setGameState("dead");
            break;
          }
        }

        setDisplayScore(Math.floor(gs.score / 5));
      }

      // Draw obstacles
      gs.obstacles.forEach(obs => drawPipe(ctx, obs));

      // Draw Tux
      drawTux(ctx, TUX_X, gs.tuxY, gs.frame, gs.dead);

      // Particles
      gs.particles = gs.particles.filter(p => {
        p.x += p.vx; p.y += p.vy; p.vy += 0.3; p.life -= 0.04;
        ctx.globalAlpha = p.life;
        ctx.fillStyle = p.color;
        ctx.beginPath(); ctx.arc(p.x, p.y, 3, 0, Math.PI * 2); ctx.fill();
        ctx.globalAlpha = 1;
        return p.life > 0;
      });

      // Score display — cyan to match site accents
      ctx.fillStyle = CYAN_GLOW;
      ctx.font = "bold 14px 'Courier New', monospace";
      ctx.textAlign = "right";
      ctx.shadowColor = CYAN_GLOW;
      ctx.shadowBlur = 8;
      ctx.fillText(`SCORE: ${Math.floor(gameStateRef.current.score / 5).toString().padStart(5, "0")}`, CANVAS_WIDTH - 16, 28);
      if (gameStateRef.current.highScore > 0) {
        ctx.fillStyle = AMBER_TXT;
        ctx.shadowColor = AMBER_TXT;
        ctx.fillText(`BEST:  ${Math.floor(gameStateRef.current.highScore / 5).toString().padStart(5, "0")}`, CANVAS_WIDTH - 16, 46);
      }
      ctx.shadowBlur = 0;
      ctx.textAlign = "left";

      // Idle splash
      if (gs.justStarted || !gs.running) {
        ctx.fillStyle = "rgba(0,18,24,0.65)";
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        ctx.fillStyle = AMBER_TXT;
        ctx.font = "bold 22px 'Courier New', monospace";
        ctx.textAlign = "center";
        ctx.shadowColor = CYAN_GLOW;
        ctx.shadowBlur = 14;
        ctx.fillText("🐧  TUX RUNNER", CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 - 20);
        ctx.shadowBlur = 0;
        ctx.font = "14px 'Courier New', monospace";
        ctx.fillStyle = "#94a3b8";
        ctx.fillText("Press SPACE or click to start", CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 + 12);
        ctx.textAlign = "left";
      }

      animRef.current = requestAnimationFrame(loop);
    };

    animRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animRef.current);
  }, [spawnParticles]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.code === "Space" || e.code === "ArrowUp") {
        e.preventDefault();
        if (gameStateRef.current.dead) reset();
        else jump();
      }
      if (e.code === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [jump, reset, onClose]);

  const handleCanvasClick = () => {
    if (gameStateRef.current.dead) reset();
    else jump();
  };

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center"
      style={{ background: "rgba(0,18,24,0.75)", backdropFilter: "blur(6px)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="relative rounded-xl overflow-hidden shadow-2xl"
        style={{
          background: "#053542b4",
          border: "1px solid rgba(255,255,255,0.06)",
          boxShadow: "0 8px 40px rgba(0,0,0,0.7), 0 0 40px rgba(34,211,238,0.08)",
          backdropFilter: "blur(8px)",
        }}
      >
        {/* Title bar — matches Window.tsx header */}
        <div
          className="flex items-center justify-between px-4 py-2 border-b select-none"
          style={{ background: "#0c3b4a", borderColor: "rgba(255,255,255,0.06)" }}
        >
          <div className="flex items-center gap-2">
            <span className="text-lg">🐧</span>
            <span className="font-mono text-sm font-bold tracking-wider" style={{ color: AMBER_TXT }}>TUX RUNNER</span>
            <span className="font-mono text-xs ml-2 text-gray-500">// easter egg</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs" style={{ color: CYAN_GLOW }}>
              SCORE: {displayScore.toString().padStart(5, "0")}
            </span>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-red-400 transition-colors rounded-full hover:bg-white/10 p-1"
            >
              <X size={14} />
            </button>
          </div>
        </div>

        {/* Canvas */}
        <div className="relative">
          <canvas
            ref={canvasRef}
            width={CANVAS_WIDTH}
            height={CANVAS_HEIGHT}
            onClick={handleCanvasClick}
            className="block cursor-pointer"
          />

          {/* Dead overlay */}
          {gameState === "dead" && (
            <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ background: "rgba(0,18,24,0.75)", backdropFilter: "blur(2px)" }}>
              <div className="text-4xl mb-2">💀</div>
              <p className="font-mono font-bold text-lg mb-1 text-red-400">GAME OVER</p>
              <p className="font-mono text-sm mb-4 text-gray-400">Score: {displayScore}</p>
              <button
                onClick={reset}
                className="px-6 py-2 font-mono text-sm rounded-lg transition-colors"
                style={{
                  background: "rgba(8,145,178,0.15)",
                  border: `1px solid ${TEAL_ACCENT}`,
                  color: CYAN_GLOW,
                }}
                onMouseEnter={e => (e.currentTarget.style.background = "rgba(8,145,178,0.28)")}
                onMouseLeave={e => (e.currentTarget.style.background = "rgba(8,145,178,0.15)")}
              >
                [ RESPAWN ]
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        <div
          className="px-4 py-2 border-t flex items-center justify-between"
          style={{ background: "#0c3b4a", borderColor: "rgba(255,255,255,0.06)" }}
        >
          <span className="font-mono text-xs text-gray-500">SPACE / CLICK to jump  ·  ESC to close</span>
          <span className="font-mono text-xs text-gray-600">avoid the firewalls 🔥</span>
        </div>
      </div>
    </div>
  );
}
