import { motion } from "framer-motion";

const GradientMesh = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
    <motion.div
      className="absolute rounded-full"
      style={{
        width: 600,
        height: 600,
        background: "radial-gradient(circle, hsl(42 55% 50%) 0%, transparent 65%)",
        top: "0%",
        left: "-5%",
        filter: "blur(60px)",
        opacity: 0.25,
      }}
      animate={{
        x: [0, 80, -40, 0],
        y: [0, -50, 40, 0],
        scale: [1, 1.2, 0.9, 1],
      }}
      transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute rounded-full"
      style={{
        width: 700,
        height: 700,
        background: "radial-gradient(circle, hsl(217 91% 53%) 0%, transparent 65%)",
        top: "20%",
        right: "-10%",
        filter: "blur(70px)",
        opacity: 0.18,
      }}
      animate={{
        x: [0, -60, 50, 0],
        y: [0, 60, -40, 0],
        scale: [1, 0.85, 1.15, 1],
      }}
      transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute rounded-full"
      style={{
        width: 500,
        height: 500,
        background: "radial-gradient(circle, hsl(42 60% 60%) 0%, transparent 65%)",
        bottom: "-5%",
        left: "25%",
        filter: "blur(60px)",
        opacity: 0.2,
      }}
      animate={{
        x: [0, 50, -60, 0],
        y: [0, -40, 30, 0],
        scale: [1, 1.25, 0.8, 1],
      }}
      transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
    />
  </div>
);

export default GradientMesh;
