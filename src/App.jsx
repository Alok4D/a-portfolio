import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Project from "./components/Project/Project";
import Services from "./components/Services/Services";
import Skill from "./components/Skill/Skill";
import Testimonial from "./components/Testimonial/Testimonial";

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <About />
      <Services />
      <Skill />
      <Project />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
