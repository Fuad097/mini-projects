import { Link } from "react-router-dom";
import { BsBoxFill } from "react-icons/bs";

function Navbar() {
  return (
    <>
      <Link className="link" to="/">
        <h2>
          <span>
            <BsBoxFill className="Rotate" color="white" />
          </span>
          Home
        </h2>
      </Link>
      <Link className="link" to="/About">
        <h2>
          <span>
            <BsBoxFill className="Rotate" color="white" />
          </span>
          About
        </h2>
      </Link>
      <Link className="link" to="/Experience">
        <h2>
          <span>
            <BsBoxFill className="Rotate" color="white" />
          </span>
          Experience
        </h2>
      </Link>

      <Link className="link" to="/Projects">
        <h2>
          <span>
            <BsBoxFill className="Rotate" color="white" />
          </span>
          Projects
        </h2>
      </Link>
    </>
  );
}

export default Navbar;
