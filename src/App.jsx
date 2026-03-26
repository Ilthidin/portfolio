import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Achievements from "./components/Achievements";
import Tech from "./components/Tech";
import Contact from "./components/Contact";
import Services from "./components/Services.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Tech />
      <Timeline />
      {/* <Achievements /> */}
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
