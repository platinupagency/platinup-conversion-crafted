import { motion } from "framer-motion";

interface BlobConfig {
  size: number;
  color: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  blur: number;
  opacity: number;
  animate: { x: number[]; y: number[]; scale: number[] };
  duration: number;
}

interface GradientMeshProps {
  variant?: "hero" | "stats" | "pricing" | "cta";
}

const variants: Record<string, BlobConfig[]> = {
  hero: [
    { size: 600, color: "hsl(42 55% 50%)", top: "0%", left: "-5%", blur: 60, opacity: 0.25, animate: { x: [0, 80, -40, 0], y: [0, -50, 40, 0], scale: [1, 1.2, 0.9, 1] }, duration: 20 },
    { size: 700, color: "hsl(217 91% 53%)", top: "20%", right: "-10%", blur: 70, opacity: 0.18, animate: { x: [0, -60, 50, 0], y: [0, 60, -40, 0], scale: [1, 0.85, 1.15, 1] }, duration: 25 },
    { size: 500, color: "hsl(42 60% 60%)", bottom: "-5%", left: "25%", blur: 60, opacity: 0.2, animate: { x: [0, 50, -60, 0], y: [0, -40, 30, 0], scale: [1, 1.25, 0.8, 1] }, duration: 22 },
  ],
  stats: [
    { size: 550, color: "hsl(217 91% 53%)", top: "-10%", right: "10%", blur: 65, opacity: 0.2, animate: { x: [0, -70, 30, 0], y: [0, 40, -50, 0], scale: [1, 1.1, 0.85, 1] }, duration: 24 },
    { size: 450, color: "hsl(42 55% 50%)", bottom: "0%", left: "-8%", blur: 55, opacity: 0.22, animate: { x: [0, 60, -30, 0], y: [0, -30, 50, 0], scale: [1, 0.9, 1.2, 1] }, duration: 19 },
    { size: 350, color: "hsl(42 60% 60%)", top: "40%", right: "-5%", blur: 50, opacity: 0.15, animate: { x: [0, -40, 55, 0], y: [0, 35, -25, 0], scale: [1, 1.15, 0.9, 1] }, duration: 21 },
  ],
  pricing: [
    { size: 500, color: "hsl(42 60% 60%)", top: "5%", right: "-8%", blur: 60, opacity: 0.23, animate: { x: [0, -55, 40, 0], y: [0, -45, 35, 0], scale: [1, 1.15, 0.88, 1] }, duration: 23 },
    { size: 600, color: "hsl(217 91% 53%)", bottom: "-10%", left: "5%", blur: 70, opacity: 0.16, animate: { x: [0, 45, -60, 0], y: [0, 55, -30, 0], scale: [1, 0.88, 1.18, 1] }, duration: 26 },
    { size: 400, color: "hsl(42 55% 50%)", top: "50%", left: "50%", blur: 55, opacity: 0.18, animate: { x: [0, -35, 50, 0], y: [0, -50, 25, 0], scale: [1, 1.2, 0.85, 1] }, duration: 18 },
  ],
  cta: [
    { size: 650, color: "hsl(42 55% 50%)", top: "-15%", left: "40%", blur: 65, opacity: 0.22, animate: { x: [0, -50, 65, 0], y: [0, 45, -35, 0], scale: [1, 0.9, 1.15, 1] }, duration: 21 },
    { size: 480, color: "hsl(217 91% 53%)", bottom: "5%", left: "-10%", blur: 60, opacity: 0.17, animate: { x: [0, 70, -35, 0], y: [0, -40, 55, 0], scale: [1, 1.2, 0.85, 1] }, duration: 27 },
    { size: 380, color: "hsl(42 60% 60%)", top: "30%", right: "5%", blur: 50, opacity: 0.2, animate: { x: [0, 40, -55, 0], y: [0, -55, 30, 0], scale: [1, 1.1, 0.92, 1] }, duration: 20 },
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
            top: blob.top,
            bottom: blob.bottom,
            left: blob.left,
            right: blob.right,
            filter: `blur(${blob.blur}px)`,
            opacity: blob.opacity,
          }}
          animate={blob.animate}
          transition={{ duration: blob.duration, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
};

export default GradientMesh;
