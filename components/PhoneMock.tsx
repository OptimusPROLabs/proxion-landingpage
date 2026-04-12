import { motion } from "framer-motion";

export function PhoneMock() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="relative w-[370px] h-[800px] bg-proxion-dark rounded-[52px] border-8 border-white/10 shadow-[0_60px_120px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col p-4 shrink-0"
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/50 pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex justify-between items-center mt-4 px-4 mb-6">
        <div className="flex items-center gap-2">
          <div className="flex -space-x-2">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-400 to-cyan-300 border-2 border-proxion-dark flex items-center justify-center text-[10px]">🌐</div>
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-orange-400 to-yellow-600 border-2 border-proxion-dark flex items-center justify-center text-[10px]">₿</div>
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-700 border-2 border-proxion-dark flex items-center justify-center text-[10px]">◎</div>
          </div>
          <span className="text-[#ccc] text-xs font-semibold tracking-wide">72FS_WSCL</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-7 h-7 rounded-full bg-[#e74c3c] flex items-center justify-center font-bold text-xs text-white shadow-lg">I</div>
          <span className="text-white/50 text-xs font-medium">lareel ∨</span>
        </div>
      </div>

      {/* Wallet Selector */}
      <div className="relative z-10 flex justify-center mb-6">
        <div className="bg-[#1e2420] rounded-full py-1.5 px-5 flex items-center gap-2 border border-white/5 shadow-inner">
          <div className="w-4 h-4 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 shadow-lg" />
          <span className="text-[#bbb] text-xs font-medium">USD wallet</span>
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
            <path d="M1 1L5 5L9 1" stroke="#bbb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Balance */}
      <div className="relative z-10 text-center mb-8">
        <p className="text-[#666] text-[10px] tracking-[0.14em] font-bold uppercase mb-2">Available Balance</p>
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-white text-4xl font-bold tracking-tight">$481,296.89</span>
          <span className="text-[#555] text-lg font-medium">◎</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="relative z-10 grid grid-cols-3 gap-3 px-2 mb-8">
        {[
          { icon: "↗", label: "Send" },
          { icon: "↙", label: "Receive" },
          { icon: "+", label: "Buy" }
        ].map((action) => (
          <div key={action.label} className="bg-[#1c2220] rounded-2xl py-4 flex flex-col items-center gap-2 border border-white/5 hover:bg-white/5 transition-colors cursor-pointer">
            <span className="text-white text-xl font-light">{action.icon}</span>
            <span className="text-[#bbb] text-[11px] font-medium">{action.label}</span>
          </div>
        ))}
      </div>

      {/* Assets Card */}
      <div className="relative z-10 bg-gradient-to-br from-[#00cc96] via-[#00aa78] to-[#00916a] rounded-3xl p-5 mb-6 shadow-2xl">
        <div className="flex justify-between items-center mb-4">
          <span className="text-white/80 text-[10px] font-bold tracking-widest uppercase">MY ASSETS</span>
          <div className="flex gap-1.5">
            <div className="w-5 h-4 bg-white/20 rounded flex items-center justify-center text-[10px] font-bold text-white">+</div>
            <div className="w-7 h-4 bg-black/25 rounded flex items-center justify-center text-[9px] font-bold text-white/70 tracking-widest">···</div>
          </div>
        </div>
        {[
          { name: "↑", amount: "1,623 1GE.00" },
          { name: "V", amount: "00.42S1748" },
          { name: "Ł Litetoin", amount: "2,317.05" }
        ].map((asset, i) => (
          <div key={i} className={`flex justify-between items-center py-2.5 ${i > 0 ? "border-t border-white/15" : ""}`}>
            <span className="text-white/90 text-sm font-medium">{asset.name}</span>
            <span className="text-white text-sm font-bold tracking-tight">{asset.amount}</span>
          </div>
        ))}
      </div>

      {/* Transactions */}
      <div className="relative z-10 px-4">
        <p className="text-white/50 text-[10px] font-bold uppercase mb-4 tracking-wider">Transactions</p>
        {[
          { icon: "🟠", name: "DogeCoin", sub: "Poconned", amount: "625.118 ALDO", subAmount: "WB22.. ASYO" },
          { icon: "🟣", name: "Solana", sub: "Solana", amount: "314,880 ALDO", subAmount: "own Wallet" }
        ].map((tx, i) => (
          <div key={i} className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-lg shadow-inner">{tx.icon}</div>
              <div>
                <p className="text-white text-[13px] font-bold tracking-tight">{tx.name}</p>
                <p className="text-white/40 text-[11px] font-medium">{tx.sub}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-white text-[13px] font-bold tracking-tight">{tx.amount}</p>
              <p className="text-white/40 text-[11px] font-medium uppercase">{tx.subAmount}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Bar */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-8 bg-black/40 backdrop-blur-2xl border border-white/10 px-6 py-2.5 rounded-full z-20 shadow-2xl shadow-black/50">
        <div className="text-[#00e5aa] text-lg font-bold drop-shadow-[0_0_8px_rgba(0,229,170,0.5)] cursor-pointer">📊</div>
        <div className="text-white/30 text-lg cursor-pointer hover:text-white/60 transition-colors">📁</div>
        <div className="text-white/30 text-lg cursor-pointer hover:text-white/60 transition-colors">⚙️</div>
        <div className="text-white/30 text-lg cursor-pointer hover:text-white/60 transition-colors">👤</div>
      </div>
    </motion.div>
  );
}
