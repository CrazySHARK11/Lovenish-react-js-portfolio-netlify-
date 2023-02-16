import { useState , useEffect } from "react"

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
                    <a href="#"> HOME </a>
                    <a href="#"> ABOUT</a>
                    <a href="#"> SERVICE </a>
                    <a href="#"> SKILLS</a>
                    <a href="#"> CONTACT </a>
                </div>
            </nav>
        </div>
    </header>
  )
}
