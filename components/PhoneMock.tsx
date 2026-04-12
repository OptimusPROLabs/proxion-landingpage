import { motion } from "framer-motion";

const assets = [
  { symbol: "₿", name: "Bitcoin",  amount: "1.6251 BTC" },
  { symbol: "Ξ", name: "Ethereum", amount: "12.4251 ETH" },
  { symbol: "Ł", name: "Litecoin", amount: "2,317.05 LTC" },
];

const CARD_H = 64;
const PEEK   = 48;

function AssetsCard() {
  const stackH = CARD_H + (assets.length - 1) * PEEK;

  return (
    <div className="relative z-10 px-1 mb-4">
      <div
        style={{
          background: "linear-gradient(148deg,#1fd1a8 0%,#0fa87a 52%,#0b8f67 100%)",
          borderRadius: 24,
          padding: "20px 20px 0 20px",
          boxShadow: "0 16px 48px rgba(15,168,120,0.35)",
          overflow: "hidden",
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
          <span style={{ fontFamily: "monospace", fontWeight: 800, fontSize: "0.72rem", letterSpacing: "0.2em", color: "rgba(255,255,255,0.9)" }}>
            MY ASSETS
          </span>
          <div style={{ display: "flex", gap: 6 }}>
            <button style={{ width: 44, height: 26, borderRadius: 16, background: "rgba(255,255,255,0.95)", border: "none", fontSize: "1rem", fontWeight: 700, color: "#0a6644", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>+</button>
            <button style={{ width: 48, height: 26, borderRadius: 16, background: "rgba(0,0,0,0.4)", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 3 }}>
              {[0,1,2].map(i => <span key={i} style={{ width: 4, height: 4, borderRadius: "50%", background: "rgba(255,255,255,0.8)", display: "inline-block" }} />)}
            </button>
          </div>
        </div>

        {/* Stacked cards */}
        <div style={{ position: "relative", height: stackH }}>
          {assets.map((asset, i) => {
            const fromTop = assets.length - 1 - i;
            const sx      = 1 - fromTop * 0.05;
            const bottom  = i * PEEK;
            const bg = i === 2
              ? "rgba(220,252,242,0.97)"
              : i === 1
              ? "rgba(160,232,212,0.76)"
              : "rgba(100,205,180,0.46)";
            const textColor = i === 2 ? "#0b2c1e" : "rgba(255,255,255,0.92)";
            const iconBg    = i === 2 ? "rgba(11,44,30,0.10)" : "rgba(255,255,255,0.18)";

            return (
              <div
                key={asset.name}
                style={{
                  position: "absolute",
                  bottom,
                  left: 0,
                  right: 0,
                  height: CARD_H,
                  borderRadius: 16,
                  background: bg,
                  backdropFilter: "blur(8px)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "0 18px",
                  transform: `scaleX(${sx})`,
                  transformOrigin: "center bottom",
                  zIndex: i + 1,
                  color: textColor,
                  boxShadow: i === 2 ? "0 6px 20px rgba(0,0,0,0.14)" : "0 2px 8px rgba(0,0,0,0.10)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ width: 32, height: 32, borderRadius: "50%", background: iconBg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.9rem", fontWeight: 600 }}>
                    {asset.symbol}
                  </span>
                  <span style={{ fontSize: "0.82rem", fontWeight: 600 }}>{asset.name}</span>
                </div>
                <span style={{ fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.04em" }}>{asset.amount}</span>
              </div>
            );
          })}
        </div>
        <div style={{ height: 18 }} />
      </div>
    </div>
  );
}

function NavIcons() {
  const icons = [
    {
      active: true,
      svg: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="12" width="4" height="9" rx="1"/>
          <rect x="10" y="7" width="4" height="14" rx="1"/>
          <rect x="17" y="3" width="4" height="18" rx="1"/>
        </svg>
      ),
    },
    {
      active: false,
      svg: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z"/>
        </svg>
      ),
    },
    {
      active: false,
      svg: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9"/>
          <path d="M8 12h8M14 9l3 3-3 3"/>
        </svg>
      ),
    },
    {
      active: false,
      svg: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="4"/>
          <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
        </svg>
      ),
    },
  ];

  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-7 bg-black/40 backdrop-blur-2xl border border-white/10 px-6 py-3 rounded-full z-20 shadow-2xl shadow-black/50">
      {icons.map((icon, i) => (
        <div
          key={i}
          style={{
            color: icon.active ? "#00e5aa" : "rgba(255,255,255,0.3)",
            filter: icon.active ? "drop-shadow(0 0 6px rgba(0,229,170,0.6))" : "none",
            cursor: "pointer",
            transition: "color 0.2s, filter 0.2s",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {icon.svg}
        </div>
      ))}
    </div>
  );
}

export function PhoneMock() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="relative w-[370px] h-[800px] bg-proxion-dark rounded-[52px] border-8 border-white/10 shadow-[0_60px_120px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col p-4 shrink-0"
    >
      {/* Dark overlay */}
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
      <div className="relative z-10 grid grid-cols-3 gap-3 px-2 mb-6">
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

      {/* Stacked Assets Card */}
      <AssetsCard />

      {/* Transactions */}
      <div className="relative z-10 px-4">
        <p className="text-white/50 text-[10px] font-bold uppercase mb-4 tracking-wider">Transactions</p>
        {[
          {
            icon: "🟠",
            name: "DogeCoin",
            sub: "Received",
            amount: "+ 625.118 DOGE",
            subAmount: "WB22..ASYO",
            positive: true,
          },
          {
            icon: "🟣",
            name: "Solana",
            sub: "Own Wallet",
            amount: "314,880 SOL",
            subAmount: "Own Wallet",
            positive: false,
          },
        ].map((tx, i) => (
          <div key={i} className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-lg shadow-inner">
                {tx.icon}
              </div>
              <div>
                <p className="text-white text-[13px] font-bold tracking-tight">{tx.name}</p>
                <p className="text-white/40 text-[11px] font-medium">{tx.sub}</p>
              </div>
            </div>
            <div className="text-right">
              <p
                className="text-[13px] font-bold tracking-tight"
                style={{ color: tx.positive ? "#00e5aa" : "white" }}
              >
                {tx.amount}
              </p>
              <p className="text-white/40 text-[11px] font-medium uppercase">{tx.subAmount}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Nav Bar */}
      <NavIcons />
    </motion.div>
  );
}