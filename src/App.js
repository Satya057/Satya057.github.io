import "bootstrap/dist/css/bootstrap.min.css";
import { Navbaar } from "./components/Navbaar"; // Navbar file
import Experience from "./components/Experience"; // Experience file


import "./App.css";
import { About } from "./components/About";
import Skills from "./components/Skills";
import { Projects } from "./components/Projects";
import Contact from "./components/Contact";
// import { Navbaar } from "./components/Navbaar";
import { MyCarousal } from "./components/my-carousal/my-carousal.component";
import { Title } from "./components/title-message/title-message.component";
import { Footer } from "./components/footer/Footer";
import { ThemeDay } from "./components/ThemeDay";
import { GitStats } from "./components/GitStats";
// import Experience from './components/Experience';


function App() {
  return (
    <div className="App">
      <MyCarousal />

      
      <Title />
      <Navbaar />
      <About />
      {/* <Experience /> */}
      <Skills />
      {/* <Experience /> */}
      <Projects />
      <GitStats/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
