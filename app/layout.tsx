import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Proxion — The wallet that understands you",
  description: "An intelligent, secure wallet designed for how people actually interact with the digital world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sora.variable}`}>
      <body className="font-sans antialiased bg-[#020606] text-white">
        {children}
      </body>
    </html>
  );
}
