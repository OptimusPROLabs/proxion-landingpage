import { motion } from "framer-motion";

interface TestimonialCardProps {
  text: string;
  name: string;
  image: string;
  featured?: boolean;
}

export function TestimonialCard({ text, name, image, featured }: TestimonialCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={`flex-1 rounded-[32px] p-8 text-center border-[#4E4E4E] border transition-all duration-500 relative flex flex-col items-center justify-center min-h-[280px] ${
        featured
          ? "bg-[#121816]/90 scale-105 z-10 shadow-[0_40px_80px_rgba(0,0,0,0.4)]"
          : "bg-[#0d1210]/60 opacity-60 hover:opacity-100"
      }`}
    >
      {/* Featured Glow */}
      {featured && (
        <div className="absolute inset-0 bg-proxion-green/5 blur-3xl -z-10 rounded-[32px]" />
      )}

      {/* Avatar */}
      <div className={`w-14 h-14 rounded-full overflow-hidden mx-auto mb-6 border-2 transition-all duration-300 ${
        featured ? "border-white/20 scale-110" : "border-white/10"
      }`}>
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Quote */}
      <p className={`text-white/80 leading-relaxed mb-6 font-medium tracking-tight transition-all duration-300 ${
        featured ? "text-sm" : "text-xs"
      }`}>
        {text}
      </p>

      {/* Name */}
      <p className={`text-white font-bold transition-all duration-300 ${
        featured ? "text-sm" : "text-xs"
      }`}>
        {name}
      </p>
    </motion.div>
  );
}
