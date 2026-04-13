import { Logo } from "./Logo";
import { motion } from "framer-motion";

interface NavbarProps {
  onContactClick?: () => void;
}

export function Navbar({ onContactClick }: NavbarProps) {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative z-50 w-full flex items-center justify-between px-6 md:px-12 py-6"
    >
      <div className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer">
        <Logo />
      </div>

      <div className="hidden md:flex items-center gap-10">
        <a href="#" className="text-white/60 hover:text-white transition-all duration-300 text-sm font-semibold tracking-wide">Home</a>
        <button className="flex items-center gap-1 text-white/60 hover:text-white transition-all duration-300 text-sm font-semibold tracking-wide bg-transparent border-0 cursor-pointer group">
          Features
        </button>
        <a href="#" className="text-white/60 hover:text-white transition-all duration-300 text-sm font-semibold tracking-wide">Whitepaper</a>
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onContactClick}
        className="bg-white text-black font-bold text-sm px-6 py-2.5 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-xl shadow-white/10"
      >
        Contact Us
      </motion.button>
    </motion.nav>
  );
}
