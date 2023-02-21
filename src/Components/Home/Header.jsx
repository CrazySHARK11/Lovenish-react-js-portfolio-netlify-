import { useState , useEffect } from "react"
import { Link } from "react-router-dom"
import { RiMenuFill , RiCloseFill } from 'react-icons/all';
 
export default function Header() {

    const[stick , setStick] = useState('')
    const[active , setActive] = useState(false)

    useEffect(()=>{
      window.onscroll = () =>{
        window.scrollY > 10 ? setStick("sticked") : setStick("");
        setActive(false);
      }
    },[])
  return (
    <header className={stick && stick}>
        <div className="wrap">
            <nav>
                <a href="#" className="logo">
                    Lovenish<span>.</span>
                </a>

                <div className={`menu ${ active ? "active" : ""}`}>
                    <Link onClick={()=>{ window.scrollTo(0 , 0); setActive(false)}} to="/"> HOME </Link>
                    <Link onClick={()=>{ window.scrollTo(0 , 0); setActive(false)}} to="/service"> SERVICE </Link>
                    <Link onClick={()=>{ window.scrollTo(0 , 0); setActive(false)}} to="/skills"> SKILLS</Link>
                    <Link onClick={()=>{ window.scrollTo(0 , 0); setActive(false)}} to="/contact"> CONTACT </Link>
                </div>

               { active ?  <RiCloseFill className="menu-btn" size={"2em"} onClick={()=>setActive(!active)} /> : <RiMenuFill className="menu-btn" size={"2em"} onClick={()=>setActive(!active)} /> }
            </nav>
        </div>
    </header>
  )
}
