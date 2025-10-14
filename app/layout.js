import { Work_Sans, Sora } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
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
        className={`${workSans.variable} ${sora.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
