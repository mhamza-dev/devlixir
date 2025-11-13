import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import WhyRezon from "@/components/WhyRezon";
import TechStack from "@/components/TechStack";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <div>
      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <Services />
        <About />
        <WhyRezon />
        <TechStack />
        <ContactCTA />
      </main>
    </div>
  );
}
