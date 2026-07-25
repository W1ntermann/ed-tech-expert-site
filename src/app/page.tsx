import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Checklist } from "@/components/landing/Checklist";
import { About } from "@/components/landing/About";
import { FlagshipBridge } from "@/components/landing/FlagshipBridge";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-bg-light">
      <Header />
      <main>
        <Hero />
        <Checklist />
        <About />
        <FlagshipBridge />
      </main>
      <Footer />
    </div>
  );
}