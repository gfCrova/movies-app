import {Link} from 'react-router-dom'
import { ImGithub } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa6";
import { PiCopyrightThin } from "react-icons/pi";

export const Footer = () => {
  return (
    <footer  className="fixed-bottom d-flex gap-2 justify-content-end align-items-end text-light m-2">
      <p className="m-0 me-2 fw-bold">
          <PiCopyrightThin /> Gian Franco Crova
        </p>
        <div className="d-flex gap-2 align-items-center">
          <Link to="https://www.github.com/gfCrova">
            <ImGithub size={30} className="text-light" />
          </Link>
          <Link to="https://www.linkedin.com/in/gian-crova/">
            <FaLinkedin size={35} className="text-light" />
          </Link>
        </div>
    </footer>
  )
}
