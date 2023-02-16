import { FaInstagram , FaFacebook , FaLinkedin , FaGithub } from "react-icons/all"


export default function Footer() {
  return (
    <footer>
        <div className="wrap">
           <div className="foo_row">
           <a href="#" className="logo">Lovenish</a>
           <div className="menu">
            <a href="#">HOME</a>
            <a href="#">ABOUT</a>
            <a href="#">SERVICE</a>
            <a href="#">SKILLS</a>
            <a href="#">CONTACT</a>
           </div>
           </div>
           <hr />
           <div className="credits">
            <p>Copyright © 2023 || All Rights are Reserved</p>
            <div className="socials">
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaLinkedin /></a>
              <a href="#"><FaGithub /></a>
              </div>
           </div>
        </div>
    </footer>
  )
}
