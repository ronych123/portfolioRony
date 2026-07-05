import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";
import { WhyWorkWithMe } from "./components/WhyWorkWithMe";
import { WorkProcess } from "./components/WorkProcess";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Inter', -apple-system, sans-serif" }}>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <WhyWorkWithMe />
      <WorkProcess />
      <Testimonials />
      <Contact />
      <Footer />

      <Toaster position="bottom-right" />
    </div>
  );
}
