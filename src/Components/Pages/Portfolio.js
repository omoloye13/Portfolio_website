import { Routes, Route} from "react-router-dom";
import Home from '../Home';
import About from '../About';
import Navbar from '../Navbar';
import Resume from '../Resume';
import Stacks from '../Stacks';
import Project from '../Project';
import Contact from "../Contact";


const Portfolio = () => {
    return (
        <>
          {/* <Navbar/> */}
          <Navbar />
            <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
      <About />
      <Resume />
      <Stacks />
      <Project />
      <Contact />
        </>
      );
}
 
export default Portfolio;