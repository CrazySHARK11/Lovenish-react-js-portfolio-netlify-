import { FaInstagram , FaFacebook , FaLinkedin , FaGithub } from "react-icons/all"

export default function Home() {
  return (
    <main className="banner">
      <div className="wrap">

        <div className="ban_con">
          <h1>Hi ! I'M <span>LOVENISH</span> </h1>
          <h3 className="descript">I AM A <span>WEB</span> DEVELOPER </h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.  <br /> Eaque, consequuntur ratione itaque, aliquid libero ipsum ducimuctus quidem.</p>
            <div className="socials">
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaLinkedin /></a>
              <a href="#"><FaGithub /></a>
              </div>
        </div>
      </div>
    </main>
  )
}