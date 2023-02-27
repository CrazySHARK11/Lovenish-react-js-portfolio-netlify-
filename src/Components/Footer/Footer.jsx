import { FaInstagram , FaFacebook , FaLinkedin , FaGithub } from "react-icons/all"
import { Link } from "react-router-dom"


export default function Footer() {
  return (
    <footer>
        <div className="wrap">
           <div className="foo_row">
           <a href="#" className="logo">Lovenish</a>
           <div className="menu">
           <Link onClick={()=> window.scrollTo(0 , 0)} to="/"> HOME </Link>
                    <Link onClick={()=> window.scrollTo(0 , 0)} to="/service"> SERVICE </Link>
                    <Link onClick={()=> window.scrollTo(0 , 0)} to="/skills"> SKILLS</Link>
                    <Link onClick={()=> window.scrollTo(0 , 0)} to="/contact"> CONTACT </Link>
           </div>
           </div>
           <hr />
           <div className="credits">
            <p>Copyright © 2023 || All Rights are Reserved</p>
            <div className="socials">
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaFacebook /></a>
              <a href="linkedin.com/in/lovenish-k-172136224"><FaLinkedin /></a>
              <a href="https://github.com/CrazySHARK11"><FaGithub /></a>
              </div>
           </div>
        </div>
    </footer>
  )
}
