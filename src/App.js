import Nav from "./Component/Nav";
import Hero from "./Component/Hero";
import About from "./Component/About";
import Project from "./Component/Project";
import Skill from "./Component/Skill";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";

const App = () => {
  return (
    <div>
      <Nav/>
      <Hero />
      <About />
      <Project />
      <Skill />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
