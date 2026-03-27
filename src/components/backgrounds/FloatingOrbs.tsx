import { motion } from "framer-motion";

const orbs = [
  { size: 180, x: "15%", y: "20%", color: "hsl(42 45% 55%)", delay: 0 },
  { size: 120, x: "70%", y: "15%", color: "hsl(217 91% 53%)", delay: 2 },
  { size: 90, x: "80%", y: "65%", color: "hsl(42 50% 70%)", delay: 4 },
  { size: 140, x: "35%", y: "70%", color: "hsl(220 13% 70%)", delay: 1 },
  { size: 60, x: "55%", y: "40%", color: "hsl(42 45% 55%)", delay: 3 },
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
          background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
          filter: "blur(40px)",
          opacity: 0.06,
        }}
        animate={{
          y: [0, -20, 15, -10, 0],
          x: [0, 10, -15, 8, 0],
          opacity: [0.06, 0.09, 0.05, 0.08, 0.06],
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
