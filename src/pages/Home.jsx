/*
 * CANOPY EDITORIAL — Home page for Verdant (JSX build).
 * Assembles all section components with organic wave dividers between the
 * cream and forest-dark bands.
 */
import Navbar from "../components/Navbar.jsx";
import WaveDivider from "../components/WaveDivider.jsx";
import Hero from "../components/sections/Hero.jsx";
import Features from "../components/sections/Features.jsx";
import About from "../components/sections/About.jsx";
import Solutions from "../components/sections/Solutions.jsx";
import Statistics from "../components/sections/Statistics.jsx";
import Testimonials from "../components/sections/Testimonials.jsx";
import Cta from "../components/sections/Cta.jsx";
import Contact from "../components/sections/Contact.jsx";
import Footer from "../components/Footer.jsx";

const CREAM = "oklch(0.972 0.012 90)";
const FOREST = "oklch(0.32 0.06 155)";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <WaveDivider position="top" color={CREAM} className="relative z-10 -mt-px" />
        <div className="relative grain">
          <Features />
        </div>
        <WaveDivider position="bottom" color={FOREST} className="relative z-10 -mb-px" />
        <About />
        <WaveDivider position="top" color={CREAM} className="relative z-10 -mt-px" />
        <div className="relative grain">
          <Solutions />
        </div>
        <Statistics />
        <div className="relative grain">
          <Testimonials />
        </div>
        <Cta />
        <div className="relative grain">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
