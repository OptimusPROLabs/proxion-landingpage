import { Logo } from "./Logo";
import { motion } from "framer-motion";

interface AICardProps {
  message: string;
  reply: string;
  className?: string;
  style?: React.CSSProperties;
}

export function AICard({ message, reply, className, style }: AICardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`glass rounded-3xl p-5 shadow-2xl max-w-[280px] z-20 ${className}`}
      style={style}
    >
      <div className="flex items-center gap-2 mb-3">
        <div className="w-6 h-6 bg-white/10 rounded-lg flex items-center justify-center">
          <Logo size={12} />
        </div>
        <span className="text-white font-semibold text-sm">Proxion AI</span>
      </div>
      <p className="text-white/60 text-xs leading-relaxed mb-4">{message}</p>
      <div className="flex justify-end mb-2">
        <div className="bg-white/5 rounded-2xl rounded-tr-none p-3 max-w-[85%]">
          <p className="text-white/80 text-[11px] font-medium leading-relaxed">{reply}</p>
        </div>
      </div>
      <p className="text-white/30 text-[10px] italic">Thinking ....</p>
    </motion.div>
  );
}
