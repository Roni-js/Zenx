import React, { useEffect, useRef } from 'react';

export const BackgroundAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Neural nodes
    const nodeCount = Math.min(Math.floor(width / 32), 48);
    const nodes: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
    }> = [];

    const colors = ['#4F46E5', '#6366F1', '#38BDF8', '#818CF8'];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Connect nodes within proximity (Neural Network Lines)
      const maxDistance = 140;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.14;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(79, 70, 229, ${alpha})`;
            ctx.lineWidth = 0.9;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw and update nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.globalAlpha = 0.35;
        ctx.fill();
        ctx.globalAlpha = 1.0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Subtle code rain vertical column data
  const codeStreams = [
    { text: 'import { WebStudio } from "@zenx/core"', left: '5%', delay: '0s', duration: '22s' },
    { text: 'const app = createProductionApp()', left: '18%', delay: '4s', duration: '26s' },
    { text: 'npm install @zenx/studio', left: '32%', delay: '8s', duration: '24s' },
    { text: 'API.connect({ auth: "jwt" })', left: '48%', delay: '2s', duration: '28s' },
    { text: 'function optimizeVitals()', left: '64%', delay: '6s', duration: '21s' },
    { text: 'deploy({ region: "edge" })', left: '78%', delay: '1s', duration: '25s' },
    { text: 'export default runtime;', left: '90%', delay: '5s', duration: '23s' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      
      {/* Light Tech Grid Overlay */}
      <div className="absolute inset-0 tech-grid opacity-60" />

      {/* Interactive Neural Architecture Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-70" />

      {/* Ambient Gradient Blobs */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gradient-to-br from-[#4F46E5]/10 via-[#818CF8]/10 to-transparent blur-3xl animate-pulse-glow" />
      <div className="absolute top-1/3 -left-32 w-[28rem] h-[28rem] rounded-full bg-gradient-to-tr from-cyan-400/8 via-indigo-300/8 to-transparent blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />
      <div className="absolute -bottom-24 left-1/3 w-96 h-96 rounded-full bg-gradient-to-r from-purple-400/8 to-indigo-500/8 blur-3xl animate-pulse-glow" style={{ animationDelay: '4s' }} />

      {/* Code Rain Effect (Low Opacity Transparent Code Streams) */}
      <div className="absolute inset-0 overflow-hidden select-none">
        {codeStreams.map((stream, idx) => (
          <div
            key={idx}
            className="absolute top-0 font-mono text-[11px] text-[#4F46E5]/18 whitespace-nowrap animate-code-rain pointer-events-none"
            style={{
              left: stream.left,
              animationDelay: stream.delay,
              animationDuration: stream.duration,
            }}
          >
            {stream.text}
          </div>
        ))}
      </div>

    </div>
  );
};
