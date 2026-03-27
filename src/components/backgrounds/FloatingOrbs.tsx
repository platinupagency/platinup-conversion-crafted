import { motion } from "framer-motion";

const orbs = [
  { size: 220, x: "10%", y: "15%", color: "hsl(42 55% 50%)", delay: 0 },
  { size: 160, x: "65%", y: "10%", color: "hsl(217 91% 53%)", delay: 2 },
  { size: 120, x: "75%", y: "60%", color: "hsl(42 60% 60%)", delay: 4 },
  { size: 180, x: "30%", y: "65%", color: "hsl(220 20% 65%)", delay: 1 },
  { size: 100, x: "50%", y: "35%", color: "hsl(42 55% 50%)", delay: 3 },
];

const FloatingOrbs = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
    {orbs.map((orb, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full"
        style={{
          width: orb.size,
          height: orb.size,
          left: orb.x,
          top: orb.y,
          background: `radial-gradient(circle, ${orb.color} 0%, transparent 65%)`,
          filter: "blur(30px)",
        }}
        animate={{
          y: [0, -25, 20, -15, 0],
          x: [0, 15, -20, 10, 0],
          opacity: [0.2, 0.35, 0.15, 0.3, 0.2],
        }}
        transition={{
          duration: 12 + i * 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: orb.delay,
        }}
      />
    ))}
  </div>
);

export default FloatingOrbs;
