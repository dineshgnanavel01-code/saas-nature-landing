/*
 * CANOPY EDITORIAL — App root. Single-page Verdant landing.
 */
import { useEffect } from "react";
import Home from "./pages/Home.jsx";

/** Global scroll-reveal: adds .reveal-visible to .reveal elements on sight. */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function App() {
  useReveal();
  return <Home />;
}
