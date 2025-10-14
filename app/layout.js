import { DM_Sans, Outfit } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "InitFlow - AI-Powered App Builder",
  description: "Build mobile apps with AI in minutes. Download InitFlow for Windows, Linux, and macOS. No-code app development made simple.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${outfit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
