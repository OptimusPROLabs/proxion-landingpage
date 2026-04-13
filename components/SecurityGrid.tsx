import { motion } from "framer-motion";

export function SecurityGrid() {
  return (
    <div className="relative flex items-center justify-center py-8 sm:py-10 px-2 sm:px-4">
      {/* Background Teal Glow - softer and centered */}
      <div className="absolute inset-0 bg-[#00e5aa]/5 blur-[80px] rounded-full pointer-events-none" />

      {/* Grid Container with Mask for Fading */}
      <div 
        className="relative z-10"
        style={{
          maskImage: 'radial-gradient(circle, black 40%, transparent 95%)',
          WebkitMaskImage: 'radial-gradient(circle, black 40%, transparent 95%)',
        }}
      >
        <div className="grid grid-cols-6 gap-2.5">
          {Array.from({ length: 18 }, (_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.02 }}
              className="w-9 h-12 sm:w-10 sm:h-14 md:w-12 md:h-16 rounded-xl bg-[#005c4b] border border-[#00e5aa]/10"
            />
          ))}
        </div>

        {/* Concentric Circles - Centered on grid */}
        {/* Outer Circle */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[190px] h-[190px] sm:w-[220px] sm:h-[220px] md:w-[240px] md:h-[240px] rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-[2px] z-20 pointer-events-none" 
        />

        {/* Middle Circle */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[125px] h-[125px] sm:w-[145px] sm:h-[145px] md:w-[160px] md:h-[160px] rounded-full border border-white/10 bg-white/[0.05] backdrop-blur-[4px] z-30 pointer-events-none" 
        />

        {/* Inner Circle with Lock */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[72px] h-[72px] sm:w-[82px] sm:h-[82px] md:w-[90px] md:h-[90px] rounded-full border border-white/20 bg-white/[0.08] backdrop-blur-[6px] z-40 flex items-center justify-center shadow-[0_0_30px_rgba(0,229,170,0.1)] pointer-events-none"
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="white" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="relative z-50 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
          >
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        </div>
      </div>
    </div>
  );
}
