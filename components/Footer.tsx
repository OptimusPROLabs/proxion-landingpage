import { Logo } from "./Logo";
import { motion } from "framer-motion";

export function Footer() {
  const socials = [
    { label: "in", path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z", url: "https://www.linkedin.com/showcase/proxiox/?viewAsMember=true" },
    { label: "t", path: "M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z", url: "https://t.me/optimuspro" },
    { label: "x", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.261 5.635zm-1.161 17.52h1.833L7.084 4.126H5.117z", url: "https://x.com/ProxionWallet" },
  ];

  return (
    <footer className="w-full bg-proxion-dark py-12 px-16 border-t border-white/5 relative z-10 overflow-hidden">
      {/* Decorative Gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-24 bg-proxion-green/5 blur-[120px] rounded-full" />

      <div className="flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
        <div className="flex items-center gap-2 group cursor-pointer transition-opacity duration-300 hover:opacity-80">
          <Logo />
        </div>

        <nav className="flex gap-14">
          {["Home", "Features", "Whitepaper"].map((item) => (
            <motion.a
              key={item}
              href="#"
              whileHover={{ scale: 1.05, color: "#fff" }}
              className="text-white/40 text-[15px] font-semibold hover:text-white transition-all duration-300"
            >
              {item}
            </motion.a>
          ))}
        </nav>

        <div className="flex items-center gap-8">
          {socials.map((social, i) => (
            <motion.a
              key={i}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "var(--color-proxion-green)" }}
              className="text-white/40 transition-all duration-300"
              aria-label={social.label}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d={social.path} />
              </svg>
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}
