import About from "../components/about/About";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import Projects from "../components/projects/Projects";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Projects />
    </div>
  )
}

export default LandingPage;