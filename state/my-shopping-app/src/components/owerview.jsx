import About from "../pages/About";
import Navbar from "./Navbar";
import { FaGithub } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";

function Owerview() {
  return (
    <div className="container">
      <div className="section1">
        <h1>Fuad Mahmudov</h1>
        <h2>Junior Front-End-Developer</h2>
        <p>
          I build pixel-perfect, engaging, and accessible digital experiences.
        </p>
        <Navbar />
        <div className="social-apps">
          <a href="">
            <FaGithub />
          </a>
          <a href="">
            <LuInstagram />
          </a>
          <a href="">
            <FaLinkedin />
          </a>
          <a href="">
            <RiTwitterXFill />
          </a>
        </div>
      </div>
      <About />
    </div>
  );
}

export default Owerview;
