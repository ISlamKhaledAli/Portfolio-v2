import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />

      {/* Background Gradient Orbs for global atmosphere */}
      <div
        style={{
          position: "fixed",
          top: "-20%",
          left: "-10%",
          width: "50vw",
          height: "50vw",
          background:
            "radial-gradient(circle, rgba(112,0,255,0.15) 0%, rgba(0,0,0,0) 70%)",
          zIndex: -1,
          pointerEvents: "none",
        }}
      ></div>
      <div
        style={{
          position: "fixed",
          bottom: "-20%",
          right: "-10%",
          width: "50vw",
          height: "50vw",
          background:
            "radial-gradient(circle, rgba(0,243,255,0.1) 0%, rgba(0,0,0,0) 70%)",
          zIndex: -1,
          pointerEvents: "none",
        }}
      ></div>
    </div>
  );
}

export default App;
