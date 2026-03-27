import { useEffect, useRef } from "react";

interface WaveBackgroundProps {
  variant?: "hero" | "section";
  className?: string;
}

const WaveBackground = ({ variant = "section", className = "" }: WaveBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (!rect) return;
      const dpr = window.devicePixelRatio || 1;
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    const waves = variant === "hero"
      ? [
          { amplitude: 35, wavelength: 800, speed: 0.0004, yOffset: 0.35, color: "hsla(42, 45%, 55%, 0.06)" },
          { amplitude: 25, wavelength: 600, speed: 0.0006, yOffset: 0.45, color: "hsla(42, 50%, 70%, 0.05)" },
          { amplitude: 40, wavelength: 1000, speed: 0.0003, yOffset: 0.55, color: "hsla(220, 13%, 70%, 0.04)" },
          { amplitude: 20, wavelength: 500, speed: 0.0008, yOffset: 0.65, color: "hsla(42, 45%, 55%, 0.035)" },
          { amplitude: 30, wavelength: 700, speed: 0.0005, yOffset: 0.75, color: "hsla(220, 13%, 80%, 0.03)" },
        ]
      : [
          { amplitude: 25, wavelength: 900, speed: 0.0003, yOffset: 0.3, color: "hsla(42, 45%, 55%, 0.04)" },
          { amplitude: 20, wavelength: 700, speed: 0.0005, yOffset: 0.5, color: "hsla(220, 13%, 75%, 0.035)" },
          { amplitude: 30, wavelength: 1100, speed: 0.00025, yOffset: 0.7, color: "hsla(42, 50%, 70%, 0.03)" },
        ];

    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      waves.forEach((wave) => {
        ctx.beginPath();
        ctx.moveTo(0, height);

        for (let x = 0; x <= width; x += 2) {
          const y =
            wave.yOffset * height +
            Math.sin((x / wave.wavelength) * Math.PI * 2 + time * wave.speed) * wave.amplitude +
            Math.sin((x / (wave.wavelength * 0.7)) * Math.PI * 2 + time * wave.speed * 1.3) * (wave.amplitude * 0.4);
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.lineTo(width, height);
        ctx.lineTo(0, height);
        ctx.closePath();
        ctx.fillStyle = wave.color;
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(draw);
    };

    animationRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [variant]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ zIndex: 0 }}
    />
  );
};

export default WaveBackground;
