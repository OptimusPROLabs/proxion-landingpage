import { Logo } from "./Logo";
import { motion } from "framer-motion";

export function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative z-50 w-full flex items-center justify-between px-8 md:px-16 py-8"
    >
      <div className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer">
        <Logo />
      </div>

      <div className="hidden md:flex items-center gap-14">
        <a href="#" className="text-white/60 hover:text-white transition-all duration-300 text-[15px] font-semibold tracking-wide">Home</a>
        <button className="flex items-center gap-1 text-white/60 hover:text-white transition-all duration-300 text-[15px] font-semibold tracking-wide bg-transparent border-0 cursor-pointer group">
          Features
        </button>
        <a href="#" className="text-white/60 hover:text-white transition-all duration-300 text-[15px] font-semibold tracking-wide">Whitepaper</a>
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-white text-black font-bold text-[15px] px-8 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-xl shadow-white/10"
      >
        Contact Us
      </motion.button>
    </motion.nav>
  );
}
