"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { AvatarStack } from "@/components/AvatarStack";
import { PhoneMock } from "@/components/PhoneMock";
import { AICard } from "@/components/AICard";
import { RadialRings } from "@/components/RadialRings";
import { SecurityGrid } from "@/components/SecurityGrid";
import { TestimonialCard } from "@/components/TestimonialCard";
import { Footer } from "@/components/Footer";



export default function ProxionPage() {
  const [email, setEmail] = useState("");
const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

const handleSubmit = async () => {
  if (!email || !email.includes("@")) return;

  setStatus("loading");

  try {
    const res = await fetch("https://formspree.io/f/xlgarbba", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ email }),
    });

    if (res.ok) {
      setStatus("success");
      setEmail("");
    } else {
      setStatus("error");
    }
  } catch {
    setStatus("error");
  }
};

  return (
    <main className="bg-[#020606] text-white overflow-x-hidden min-h-screen">
      {/* SECTION 1 — HERO */}
      <section className="relative min-h-screen flex flex-col items-center hero-gradient overflow-hidden">
        <Navbar />

        <div className="relative z-10 flex flex-col items-center text-center mt-12 px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 mb-10 px-5 py-2 rounded-full glass"
          >
            <AvatarStack />
            <span className="text-white/70 text-sm font-medium">Join 14k+ founding community</span>
          </motion.div>

          <h1 className="text-[64px] md:text-[88px] font-bold tracking-tight leading-[1.05] mb-8">
            <span className="text-white/60">The wallet that</span><br />
            <span className="text-white">understand you!</span>
          </h1>

          <p className="text-white/40 text-xl max-w-md mb-12 leading-relaxed">
            An intelligent, secure wallet designed for how people actually interact with the digital world
          </p>

          <button className="bg-[#00e5aa] text-black font-bold px-12 py-5 rounded-full text-base shadow-[0_0_30px_rgba(0,229,170,0.3)] hover:scale-105 transition-transform">
            Get early access
          </button>

          <div className="relative mt-28 w-full flex justify-center">
            <PhoneMock />
            
            <AICard
              message="I noticed your collateral ratio on Aave just dipped to 1.15. Would you like me to calculate how much $USD you need to deposit to reach a safe 1.5"
              reply="Yes, please. Also, check if I have enough in my main wall..."
              style={{ position: 'absolute', left: 'calc(50% - 440px)', top: '240px', width: '280px' }}
            />
            
            <AICard
              message="Uniswap (UNI) just posted a vote regarding fee tier changes. It ends in 6 hours"
              reply="Give me the TL;DR. How does this affect my liquidity pools?"
              style={{ position: 'absolute', right: 'calc(50% - 440px)', top: '100px', width: '280px' }}
            />
          </div>
        </div>
      </section>

      {/* SECTION 2 — BENTO */}
      <section className="px-8 md:px-20 py-32 bg-[#020606]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-[#09100f]/80 border border-[#4E4E4E] rounded-[40px] p-12 flex flex-col min-h-[480px] relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-5">Private by default</h3>
                <p className="text-white/40 text-base max-w-[320px] mb-12 leading-relaxed">By connecting via your wallet, you maintain total anonymity while staying connected</p>
              </div>
              <div className="absolute inset-x-0 bottom-0 flex justify-center">
                <RadialRings />
              </div>
            </div>
            
            <div className="bg-[#09100f]/80 border border-[#4E4E4E] rounded-[40px] p-12 flex flex-col min-h-[480px]">
              <h3 className="text-3xl font-bold mb-5">Security Built In</h3>
              <p className="text-white/40 text-base max-w-[380px] mb-12 leading-relaxed">We've eliminated the vulnerabilities of traditional messaging. By using end-to-end encryption and wallet-based authentication.</p>
              <div className="mt-auto">
                <SecurityGrid />
              </div>
            </div>
          </div>

          <div className="bg-[#09100f]/40 border border-[#4E4E4E] rounded-[48px] p-16 mt-16">
            <div className="flex flex-col md:flex-row gap-10 items-stretch">
              <TestimonialCard
                text="Using Proxion for wallet-to-wallet messaging feels much more secure. I can negotiate trades directly with other owners knowing the identity"
                name="Michael Johnson"
                image="/icons-real-faces/Ellipse 6724.svg"
              />
              <TestimonialCard
                featured
                text="Proxion turns web3 from stressful and confusing into calm and intentional. I highly recommended the app."
                name="Emily Roberts"
                image="/icons-real-faces/Ellipse 6721.svg"
              />
              <TestimonialCard
                text="It's the first time Web3 has actually felt real-time without me having to refresh a browser tab all day."
                name="David Chen"
                image="/icons-real-faces/Ellipse 6723.svg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — COMING SOON */}
{/* SECTION 3 — COMING SOON */}
<section className="relative min-h-screen flex flex-col items-center justify-center bg-[#020606]">
        <div className="text-center mb-20 px-4">
          <h2 className="text-[64px] md:text-[96px] font-bold tracking-tight mb-8">
            <span className="text-white/40">Proxion is </span>
            <span className="text-white">Coming!</span>
          </h2>
          <p className="text-white/30 text-xl font-medium">Join the waiting list to get early access</p>
        </div>

        <div className="w-full max-w-2xl flex p-2.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-3xl">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 bg-transparent px-8 py-5 outline-none text-white text-lg placeholder:text-white/30"
          />
          <button
            onClick={handleSubmit}
            disabled={status === "loading" || status === "success"}
            className="bg-[#00e5aa] text-black font-bold px-12 py-5 rounded-full text-base hover:opacity-90 transition-opacity disabled:opacity-60"
          >
            {status === "loading" ? "Submitting..." : status === "success" ? "You're in! ✓" : "Get early access"}
          </button>
        </div>

        {status === "error" && (
          <p className="mt-4 text-red-400 text-sm">Something went wrong. Please try again.</p>
        )}
        {status === "success" && (
          <p className="mt-4 text-[#00e5aa] text-sm">You're on the list — we'll be in touch!</p>
        )}

        <Footer />
      </section>
    </main>
  );
}
