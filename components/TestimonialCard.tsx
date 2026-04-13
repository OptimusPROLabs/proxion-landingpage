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
      className={`flex-1 w-full rounded-[20px] p-3 sm:p-6 text-center border-[#4E4E4E] border transition-all duration-500 relative flex flex-col items-center justify-center h-[190px] sm:h-auto min-h-[190px] sm:min-h-[240px] overflow-hidden ${
        featured
          ? "bg-[#121816]/90 md:scale-105 z-10 shadow-[0_30px_60px_rgba(0,0,0,0.4)]"
          : "bg-[#0d1210]/60 opacity-60 hover:opacity-100"
      }`}
    >
      {/* Featured Glow */}
      {featured && (
        <div className="absolute inset-0 bg-proxion-green/5 blur-2xl -z-10 rounded-[20px]" />
      )}

      {/* Avatar */}
      <div className={`w-9 h-9 sm:w-12 sm:h-12 rounded-full overflow-hidden mx-auto mb-2.5 sm:mb-4 border-2 transition-all duration-300 ${
        featured ? "border-white/20 scale-110" : "border-white/10"
      }`}>
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Quote */}
      <p className="text-white/80 leading-relaxed mb-2.5 sm:mb-4 font-medium tracking-tight transition-all duration-300 text-[10px] sm:text-xs overflow-hidden">
        {text}
      </p>

      {/* Name */}
      <p className="text-white font-bold transition-all duration-300 text-[10px] sm:text-xs">
        {name}
      </p>
    </motion.div>
  );
}
