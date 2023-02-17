import { useState , useEffect } from "react"
import { Link } from "react-router-dom"
 
export default function Header() {

    const[stick , setStick] = useState('')

    useEffect(()=>{
      window.onscroll = () =>{
        window.scrollY > 10 ? setStick("sticked") : setStick("")
      }
    },[])

  return (
    <header className={stick}>
        <div className="wrap">
            <nav>
                <a href="#" className="logo">
                    Lovenish <span>.</span>
                </a>

                <div className="menu">
                    <Link to="/"> HOME </Link>
                    <Link to="/service"> SERVICE </Link>
                    <Link to="/skills"> SKILLS</Link>
                    <Link to="/contact"> CONTACT </Link>
                </div>
            </nav>
        </div>
    </header>
  )
}
