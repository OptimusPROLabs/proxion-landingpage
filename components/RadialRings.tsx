import { motion } from "framer-motion";
import Image from "next/image";

interface OrbitingIconProps {
  src: string;
  radius: number;
  // startAngle is the center of the arc, swing is how many degrees it moves left/right
  startAngle: number;
  swing: number;
  duration: number;
  delay: number;
  opacity: number;
}

function OrbitingIcon({ src, radius, startAngle, swing, duration, delay, opacity }: OrbitingIconProps) {
  // We'll animate the angle to make it move along the arc.
  // 180 is far left, 270 is top center, 360 is far right.
  // Clamp the range to [185, 355] so icons never touch the bottom edge where they'd be clipped.
  const angleRange = [
    Math.max(185, startAngle - swing),
    Math.min(355, startAngle + swing),
    Math.max(185, startAngle - swing)
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ 
        opacity: opacity, 
        scale: 1,
        rotate: angleRange 
      }}
      transition={{ 
        opacity: { duration: 0.7, delay },
        scale: { duration: 0.7, delay },
        rotate: { 
          duration, 
          repeat: Infinity, 
          ease: "easeInOut",
          // Add a small random delay to make them feel less synchronized
          delay: delay * 2 
        }
      }}
      className="absolute"
      style={{
        left: "50%",
        top: "100%",
        width: 0,
        height: 0,
        transformOrigin: "0 0", // Rotate around the bottom center pivot
      }}
    >
      <div 
        style={{
          position: "absolute",
          left: -22, // Center the 44px icon
          top: -radius - 22, // Move it up by the ring radius
          width: 44,
          height: 44,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          background: "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          boxShadow: "0 0 15px rgba(255, 255, 255, 0.1)",
          overflow: "hidden"
        }}
      >
        {/* Counter-rotate the inner image so it stays upright */}
        <motion.div
          animate={{ rotate: angleRange.map(a => -a) }}
          transition={{ duration, repeat: Infinity, ease: "easeInOut", delay: delay * 2 }}
          className="relative w-5 h-5 flex items-center justify-center"
        >
          <Image 
            src={src} 
            alt="icon" 
            fill 
            className="object-contain"
            sizes="22px"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export function RadialRings() {
  const rings = [
    { r: 240, opacity: 0.2, strokeWidth: 45 },
    { r: 180, opacity: 0.35, strokeWidth: 35 },
    { r: 120, opacity: 0.55, strokeWidth: 25 },
  ];

  // Distribute icons across all rings with larger, more noticeable swings
  const floatingIcons = [
    { src: "/Frame.svg", radius: 240, startAngle: 220, swing: 30, duration: 15, delay: 0.2, opacity: 0.7 },
    { src: "/Unity--Streamline-Simple-Icons.svg", radius: 180, startAngle: 260, swing: 40, duration: 12, delay: 0.4, opacity: 0.8 },
    { src: "/Vector.svg", radius: 180, startAngle: 320, swing: 35, duration: 18, delay: 0.6, opacity: 0.6 },
    { src: "/Rundeck--Streamline-Simple-Icons.png", radius: 120, startAngle: 270, swing: 45, duration: 10, delay: 0.8, opacity: 0.7 },
    { src: "/currency-bitcoin-fill.png", radius: 120, startAngle: 230, swing: 25, duration: 14, delay: 1.0, opacity: 0.8 },
    { src: "/Unity--Streamline-Simple-Icons.svg", radius: 240, startAngle: 340, swing: 15, duration: 20, delay: 1.2, opacity: 0.6 },
  ];

  return (
    <div className="relative w-full h-[360px] flex items-end justify-center overflow-visible">
      {/* Enhanced Background Radial Glow */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 w-[550px] h-[350px] bg-proxion-green/10 blur-[130px] rounded-full pointer-events-none" />

      {/* SVG Arcs */}
      <svg
        viewBox="0 0 500 360"
        className="absolute bottom-0 w-full h-full pointer-events-none"
      >
        <defs>
          <radialGradient id="arcGlowVisible" cx="50%" cy="100%" r="100%">
            <stop offset="0%" stopColor="var(--color-proxion-green)" stopOpacity="0.6" />
            <stop offset="50%" stopColor="var(--color-proxion-green)" stopOpacity="0.25" />
            <stop offset="100%" stopColor="var(--color-proxion-green)" stopOpacity="0" />
          </radialGradient>
          
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {rings.map((ring, i) => (
          <motion.circle
            key={i}
            cx="250"
            cy="350"
            r={ring.r}
            fill="none"
            stroke="url(#arcGlowVisible)"
            strokeWidth={ring.strokeWidth}
            opacity={ring.opacity}
            filter="url(#glow)"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: ring.opacity, scale: 1 }}
            transition={{ duration: 1.2, delay: i * 0.15 }}
          />
        ))}
      </svg>

      {/* Floating Icons - Clamped orbital paths */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-visible">
        {floatingIcons.map((icon, i) => (
          <OrbitingIcon key={i} {...icon} />
        ))}
      </div>

      {/* Middle Icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: 1, 
          scale: [1, 1.05, 1],
        }}
        transition={{ 
          opacity: { duration: 0.5, delay: 1.2 },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          type: "spring", 
          damping: 12, 
          delay: 1.2 
        }}
        className="relative z-20 mb-8 w-16 h-14 flex items-center justify-center overflow-visible"
      >
        <div className="absolute inset-0 bg-proxion-green/20 blur-xl rounded-full scale-150" />
        
        <div className="relative w-14 h-14 bg-white/[0.05] backdrop-blur-md rounded-full border-2 border-proxion-green/40 flex items-center justify-center shadow-[0_0_40px_rgba(0,229,170,0.4)] overflow-hidden p-2">
          <Image 
            src="/prologo.png" 
            alt="center logo" 
            fill 
            className="object-contain scale-90"
            priority
          />
        </div>
      </motion.div>
    </div>
  );
}
