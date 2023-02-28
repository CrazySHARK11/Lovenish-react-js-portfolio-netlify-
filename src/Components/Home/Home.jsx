import { FaInstagram , FaFacebook , FaLinkedin , FaGithub } from "react-icons/all"
import Imgmain from "../../assets/Me.jpg"

export default function Home() {
  return (
    <main className="banner">
      <div className="wrap">

        <div className="ban_con">
          <h1>Hi ! I'M <span>LOVENISH</span> </h1>
          <h3 className="descript">I AM A <span>WEB</span> DEVELOPER </h3>
            <p>Lets create amazing project that gives <br /> life and identity to a business </p>
            <div className="socials">
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaFacebook /></a>
              <a href="linkedin.com/in/lovenish-k-172136224" target="_blank"><FaLinkedin /></a>
              <a href="https://github.com/CrazySHARK11" target="_blank"><FaGithub /></a>
              </div>
              <img className="subimg" src={Imgmain} width="500" alt="subjectImg" />
        </div>
      </div>
    </main>
  )
}
