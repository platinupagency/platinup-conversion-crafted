import { motion } from "framer-motion";

interface BlobConfig {
  size: number;
  color: string;
  startX: string;
  startY: string;
  blur: number;
  opacity: number;
  path: { x: number[]; y: number[] };
  scale: number[];
  duration: number;
}

interface GradientMeshProps {
  variant?: "hero" | "stats" | "pricing" | "cta";
}

const variants: Record<string, BlobConfig[]> = {
  hero: [
    { size: 600, color: "hsl(12 70% 55%)", startX: "-5%", startY: "0%", blur: 65, opacity: 0.18, path: { x: [0, 300, 500, 200, -100, 0], y: [0, 150, -50, 300, 100, 0] }, scale: [1, 1.15, 0.9, 1.1, 0.95, 1], duration: 35 },
    { size: 700, color: "hsl(30 25% 70%)", startX: "70%", startY: "10%", blur: 75, opacity: 0.14, path: { x: [0, -400, -200, 100, -300, 0], y: [0, 200, 400, 100, -100, 0] }, scale: [1, 0.85, 1.1, 0.9, 1.15, 1], duration: 40 },
    { size: 500, color: "hsl(16 65% 62%)", startX: "30%", startY: "60%", blur: 60, opacity: 0.15, path: { x: [0, -200, 300, -100, 200, 0], y: [0, -300, -100, -200, 50, 0] }, scale: [1, 1.2, 0.85, 1.1, 0.9, 1], duration: 38 },
    { size: 350, color: "hsl(25 30% 75%)", startX: "50%", startY: "-5%", blur: 50, opacity: 0.1, path: { x: [0, -150, 250, -200, 100, 0], y: [0, 250, 150, 350, 50, 0] }, scale: [1, 1.1, 0.92, 1.05, 0.88, 1], duration: 28 },
    { size: 280, color: "hsl(12 60% 58%)", startX: "85%", startY: "55%", blur: 45, opacity: 0.12, path: { x: [0, -350, -150, -400, -100, 0], y: [0, -200, 50, -150, -250, 0] }, scale: [1, 0.9, 1.15, 0.88, 1.08, 1], duration: 32 },
  ],
  stats: [
    { size: 550, color: "hsl(16 65% 62%)", startX: "80%", startY: "-10%", blur: 65, opacity: 0.16, path: { x: [0, -500, -300, 100, -200, 0], y: [0, 200, 350, 150, -50, 0] }, scale: [1, 1.1, 0.85, 1.05, 0.9, 1], duration: 32 },
    { size: 450, color: "hsl(12 70% 55%)", startX: "-10%", startY: "50%", blur: 55, opacity: 0.18, path: { x: [0, 400, 250, 500, 150, 0], y: [0, -200, 100, -100, -250, 0] }, scale: [1, 0.9, 1.2, 0.88, 1.1, 1], duration: 36 },
    { size: 350, color: "hsl(30 25% 70%)", startX: "40%", startY: "20%", blur: 50, opacity: 0.12, path: { x: [0, 200, -150, 300, -200, 0], y: [0, 250, 100, -150, 200, 0] }, scale: [1, 1.15, 0.9, 1.05, 0.92, 1], duration: 30 },
    { size: 280, color: "hsl(12 60% 58%)", startX: "60%", startY: "65%", blur: 45, opacity: 0.14, path: { x: [0, -250, 100, -350, 50, 0], y: [0, -250, -100, -200, -300, 0] }, scale: [1, 1.18, 0.85, 1.1, 0.9, 1], duration: 29 },
  ],
  pricing: [
    { size: 500, color: "hsl(12 70% 55%)", startX: "75%", startY: "5%", blur: 60, opacity: 0.17, path: { x: [0, -350, -500, -200, 100, 0], y: [0, 150, 300, 200, -50, 0] }, scale: [1, 1.15, 0.88, 1.1, 0.93, 1], duration: 34 },
    { size: 600, color: "hsl(30 25% 70%)", startX: "5%", startY: "60%", blur: 70, opacity: 0.13, path: { x: [0, 300, 450, 200, 500, 0], y: [0, -250, -100, -300, -50, 0] }, scale: [1, 0.88, 1.18, 0.92, 1.05, 1], duration: 42 },
    { size: 400, color: "hsl(16 65% 62%)", startX: "50%", startY: "30%", blur: 55, opacity: 0.15, path: { x: [0, -200, 250, -300, 150, 0], y: [0, -200, 150, 100, -250, 0] }, scale: [1, 1.2, 0.85, 1.08, 0.9, 1], duration: 37 },
    { size: 280, color: "hsl(25 30% 75%)", startX: "35%", startY: "75%", blur: 42, opacity: 0.1, path: { x: [0, 200, -100, 300, -150, 0], y: [0, -300, -150, -250, -50, 0] }, scale: [1, 1.15, 0.9, 1.05, 0.92, 1], duration: 28 },
  ],
  cta: [
    { size: 650, color: "hsl(12 70% 55%)", startX: "40%", startY: "-15%", blur: 65, opacity: 0.16, path: { x: [0, -300, 200, -400, 100, 0], y: [0, 300, 200, 350, 100, 0] }, scale: [1, 0.9, 1.15, 0.88, 1.1, 1], duration: 33 },
    { size: 480, color: "hsl(30 25% 70%)", startX: "-10%", startY: "40%", blur: 60, opacity: 0.13, path: { x: [0, 500, 300, 450, 200, 0], y: [0, -150, 100, -200, 50, 0] }, scale: [1, 1.2, 0.85, 1.1, 0.92, 1], duration: 39 },
    { size: 380, color: "hsl(16 65% 62%)", startX: "60%", startY: "70%", blur: 50, opacity: 0.15, path: { x: [0, -250, 150, -100, 300, 0], y: [0, -300, -150, -250, -50, 0] }, scale: [1, 1.1, 0.92, 1.15, 0.88, 1], duration: 31 },
    { size: 260, color: "hsl(25 30% 75%)", startX: "20%", startY: "10%", blur: 40, opacity: 0.09, path: { x: [0, 300, 100, 350, 200, 0], y: [0, 250, 350, 100, 300, 0] }, scale: [1, 1.18, 0.85, 1.1, 0.92, 1], duration: 27 },
  ],
};

const GradientMesh = ({ variant = "hero" }: GradientMeshProps) => {
  const blobs = variants[variant] || variants.hero;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: blob.size,
            height: blob.size,
            background: `radial-gradient(circle, ${blob.color} 0%, transparent 65%)`,
            left: blob.startX,
            top: blob.startY,
            filter: `blur(${blob.blur}px)`,
            opacity: blob.opacity,
          }}
          animate={{
            x: blob.path.x,
            y: blob.path.y,
            scale: blob.scale,
          }}
          transition={{ duration: blob.duration, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
};

export default GradientMesh;
