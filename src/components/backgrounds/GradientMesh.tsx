import { motion } from "framer-motion";

const GradientMesh = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
    <motion.div
      className="absolute w-[500px] h-[500px] rounded-full opacity-[0.07]"
      style={{
        background: "radial-gradient(circle, hsl(42 45% 55%) 0%, transparent 70%)",
        top: "10%",
        left: "5%",
        filter: "blur(80px)",
      }}
      animate={{
        x: [0, 60, -30, 0],
        y: [0, -40, 30, 0],
        scale: [1, 1.15, 0.95, 1],
      }}
      transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute w-[600px] h-[600px] rounded-full opacity-[0.05]"
      style={{
        background: "radial-gradient(circle, hsl(217 91% 53%) 0%, transparent 70%)",
        top: "30%",
        right: "-5%",
        filter: "blur(100px)",
      }}
      animate={{
        x: [0, -50, 40, 0],
        y: [0, 50, -30, 0],
        scale: [1, 0.9, 1.1, 1],
      }}
      transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute w-[400px] h-[400px] rounded-full opacity-[0.04]"
      style={{
        background: "radial-gradient(circle, hsl(42 50% 70%) 0%, transparent 70%)",
        bottom: "5%",
        left: "30%",
        filter: "blur(90px)",
      }}
      animate={{
        x: [0, 40, -50, 0],
        y: [0, -30, 20, 0],
        scale: [1, 1.2, 0.85, 1],
      }}
      transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
    />
  </div>
);

export default GradientMesh;
