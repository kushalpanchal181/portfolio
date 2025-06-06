import { useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Internships from "./components/Internships.jsx";
import ThreeScene from "./components/ThreeScene.jsx";

export default function App() {
  // Smooth scroll effect
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section id="hero">
          <Hero />
          {/* 3D canvas container with fixed height */}
          <div className="w-full h-96 mt-6">
            <ThreeScene />
          </div>
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="internships">
          <Internships />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  );
}
