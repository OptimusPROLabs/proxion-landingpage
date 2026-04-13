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
const waitlistId = "waitlist";

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

  const scrollToWaitlist = () => {
    const el = document.getElementById(waitlistId);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="bg-[#020606] text-white overflow-x-hidden min-h-screen">
      {/* SECTION 1 — HERO */}
      <section className="relative min-h-[80vh] flex flex-col items-center hero-gradient overflow-hidden pb-12">
        <Navbar onContactClick={scrollToWaitlist} />

        <div className="relative z-10 flex flex-col items-center text-center mt-12 px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 mb-8 px-4 py-2 rounded-full glass"
          >
            <AvatarStack />
            <span className="text-white/70 text-xs font-medium">Join 14k+ founding community</span>
          </motion.div>

          <h1 className="text-4xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            <span className="text-white/60">The wallet that</span><br />
            <span className="text-white">understand you!</span>
          </h1>

          <p className="text-white/40 text-lg max-w-md mb-10 leading-relaxed">
            An intelligent, secure wallet designed for how people actually interact with the digital world
          </p>

          <button
            onClick={scrollToWaitlist}
            className="bg-[#00e5aa] text-black font-bold px-10 py-4 rounded-full text-sm shadow-[0_0_20px_rgba(0,229,170,0.2)] hover:scale-105 transition-transform"
          >
            Get early access
          </button>

          <div className="relative mt-12 w-full flex justify-center h-[380px] sm:h-[500px] md:h-[600px] lg:h-[850px] items-center">
            <div className="relative scale-[0.4] sm:scale-[0.55] md:scale-[0.75] lg:scale-100 transition-transform duration-500 origin-center flex items-center justify-center shrink-0">
              <PhoneMock />
              
              <AICard
                message="I noticed your collateral ratio on Aave just dipped to 1.15. Would you like me to calculate how much $USD you need to deposit to reach a safe 1.5"
                reply="Yes, please. Also, check if I have enough in my main wall..."
                className="absolute left-[-260px] top-[180px] lg:left-[-380px] lg:top-[220px] scale-[0.9] lg:scale-100"
              />
              
              <AICard
                message="Uniswap (UNI) just posted a vote regarding fee tier changes. It ends in 6 hours"
                reply="Give me the TL;DR. How does this affect my liquidity pools?"
                className="absolute right-[-260px] top-[-20px] lg:right-[-380px] lg:top-[80px] scale-[0.9] lg:scale-100"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — BENTO */}
      <section className="px-6 md:px-12 py-20 bg-[#020606]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-[#09100f]/80 border border-[#4E4E4E] rounded-[32px] p-6 sm:p-8 md:p-10 flex flex-col min-h-[320px] sm:min-h-[360px] md:min-h-[400px] relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Private by default</h3>
                <p className="text-white/40 text-xs sm:text-sm max-w-[280px] mb-6 sm:mb-8 leading-relaxed">By connecting via your wallet, you maintain total anonymity while staying connected</p>
              </div>
              <div className="absolute inset-x-0 bottom-0 flex justify-center scale-[0.65] sm:scale-[0.75] md:scale-90 origin-bottom">
                <RadialRings />
              </div>
            </div>
            
            <div className="bg-[#09100f]/80 border border-[#4E4E4E] rounded-[32px] p-6 sm:p-8 md:p-10 flex flex-col min-h-[320px] sm:min-h-[360px] md:min-h-[400px]">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Security Built In</h3>
              <p className="text-white/40 text-xs sm:text-sm max-w-[340px] mb-6 sm:mb-8 leading-relaxed">We've eliminated the vulnerabilities of traditional messaging. By using end-to-end encryption and wallet-based authentication.</p>
              <div className="mt-auto scale-[0.75] sm:scale-[0.85] md:scale-90 origin-bottom-left">
                <SecurityGrid />
              </div>
            </div>
          </div>

          <div className="bg-[#09100f]/40 border-0 md:border md:border-[#4E4E4E] rounded-none sm:rounded-[36px] -mx-6 sm:mx-0 px-0 py-6 sm:p-8 md:p-10 mt-10 md:mt-12">
            <div className="testimonial-marquee">
              <div className="testimonial-marquee-track gap-3 sm:gap-6 items-stretch pb-4">
                <div className="w-[140px] sm:w-[220px] md:w-[260px] lg:w-[300px] shrink-0">
                  <TestimonialCard
                    text="Using Proxion for wallet-to-wallet messaging feels much more secure. I can negotiate trades directly with other owners knowing the identity"
                    name="Michael Johnson"
                    image="/icons-real-faces/Ellipse 6724.svg"
                  />
                </div>
                <div className="w-[140px] sm:w-[220px] md:w-[260px] lg:w-[300px] shrink-0">
                  <TestimonialCard
                    featured
                    text="Proxion turns web3 from stressful and confusing into calm and intentional. I highly recommended the app."
                    name="Emily Roberts"
                    image="/icons-real-faces/Ellipse 6721.svg"
                  />
                </div>
                <div className="w-[140px] sm:w-[220px] md:w-[260px] lg:w-[300px] shrink-0">
                  <TestimonialCard
                    text="It's the first time Web3 has actually felt real-time without me having to refresh a browser tab all day."
                    name="David Chen"
                    image="/icons-real-faces/Ellipse 6723.svg"
                  />
                </div>

                <div className="w-[140px] sm:w-[220px] md:w-[260px] lg:w-[300px] shrink-0">
                  <TestimonialCard
                    text="Using Proxion for wallet-to-wallet messaging feels much more secure. I can negotiate trades directly with other owners knowing the identity"
                    name="Michael Johnson"
                    image="/icons-real-faces/Ellipse 6724.svg"
                  />
                </div>
                <div className="w-[140px] sm:w-[220px] md:w-[260px] lg:w-[300px] shrink-0">
                  <TestimonialCard
                    featured
                    text="Proxion turns web3 from stressful and confusing into calm and intentional. I highly recommended the app."
                    name="Emily Roberts"
                    image="/icons-real-faces/Ellipse 6721.svg"
                  />
                </div>
                <div className="w-[140px] sm:w-[220px] md:w-[260px] lg:w-[300px] shrink-0">
                  <TestimonialCard
                    text="It's the first time Web3 has actually felt real-time without me having to refresh a browser tab all day."
                    name="David Chen"
                    image="/icons-real-faces/Ellipse 6723.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — COMING SOON */}
      <section id={waitlistId} className="relative min-h-[80vh] flex flex-col items-center justify-center bg-[#020606] py-20 scroll-mt-24">
        <div className="text-center mb-16 px-4">
          <h2 className="text-4xl md:text-7xl font-bold tracking-tight mb-6">
            <span className="text-white/40">Proxion is </span>
            <span className="text-white">Coming!</span>
          </h2>
          <p className="text-white/30 text-lg font-medium">Join the waiting list to get early access</p>
        </div>

        <div className="w-full max-w-[360px] sm:max-w-xl flex flex-col sm:flex-row p-2 rounded-2xl sm:rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-3xl mx-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 bg-transparent px-5 py-3.5 sm:px-6 sm:py-4 outline-none text-white text-sm sm:text-base placeholder:text-white/30"
          />
          <button
            onClick={handleSubmit}
            disabled={status === "loading" || status === "success"}
            className="bg-[#00e5aa] text-black font-bold px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl sm:rounded-full text-sm hover:opacity-90 transition-opacity disabled:opacity-60 mt-2 sm:mt-0"
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
