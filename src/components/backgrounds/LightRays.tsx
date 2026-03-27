import { motion } from "framer-motion";

const rays = [
  { angle: -25, left: "10%", width: 200, delay: 0 },
  { angle: -15, left: "35%", width: 150, delay: 3 },
  { angle: -30, left: "60%", width: 180, delay: 1.5 },
  { angle: -20, left: "85%", width: 120, delay: 4 },
];

const LightRays = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
    {rays.map((ray, i) => (
      <motion.div
        key={i}
        className="absolute top-0 h-full"
        style={{
          left: ray.left,
          width: ray.width,
          background: `linear-gradient(180deg, hsla(42, 45%, 55%, 0.04) 0%, transparent 60%)`,
          transform: `rotate(${ray.angle}deg)`,
          transformOrigin: "top center",
          filter: "blur(30px)",
        }}
        animate={{
          opacity: [0, 0.6, 0.3, 0.8, 0],
          x: [0, 20, -10, 15, 0],
        }}
        transition={{
          duration: 15 + i * 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: ray.delay,
        }}
      />
    ))}
    {/* Subtle flare */}
    <motion.div
      className="absolute w-[300px] h-[300px] rounded-full"
      style={{
        background: "radial-gradient(circle, hsla(217, 91%, 53%, 0.04) 0%, transparent 70%)",
        top: "20%",
        right: "15%",
        filter: "blur(60px)",
      }}
      animate={{
        scale: [1, 1.3, 0.9, 1],
        opacity: [0.5, 1, 0.4, 0.5],
      }}
      transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
    />
  </div>
);

export default LightRays;
