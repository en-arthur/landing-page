import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AppDemo from '@/components/AppDemo';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Download from '@/components/Download';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <AppDemo />
        <Features />
        <HowItWorks />
        <Download />
      </main>
      <Footer />
    </div>
  );
}
