import { motion } from "framer-motion";

const rays = [
  { angle: -20, left: "5%", width: 250, delay: 0 },
  { angle: -10, left: "30%", width: 200, delay: 2 },
  { angle: -25, left: "55%", width: 220, delay: 1 },
  { angle: -15, left: "80%", width: 180, delay: 3 },
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
          background: `linear-gradient(180deg, hsla(42, 50%, 55%, 0.15) 0%, transparent 55%)`,
          transform: `rotate(${ray.angle}deg)`,
          transformOrigin: "top center",
          filter: "blur(25px)",
        }}
        animate={{
          opacity: [0, 1, 0.5, 1, 0],
          x: [0, 30, -15, 20, 0],
        }}
        transition={{
          duration: 14 + i * 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: ray.delay,
        }}
      />
    ))}
    <motion.div
      className="absolute rounded-full"
      style={{
        width: 400,
        height: 400,
        background: "radial-gradient(circle, hsla(217, 91%, 53%, 0.15) 0%, transparent 65%)",
        top: "15%",
        right: "10%",
        filter: "blur(50px)",
      }}
      animate={{
        scale: [1, 1.3, 0.9, 1],
        opacity: [0.7, 1, 0.5, 0.7],
      }}
      transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
    />
  </div>
);

export default LightRays;
