import React , {useEffect} from 'react'
import "aos/dist/aos.css"
import { BiCheckCircle } from "react-icons/all"
import AOS from 'aos';
import sub from "../../assets/developer.svg"

export default function About() {

  useEffect(()=>{
    AOS.init({
      duration: 500,
      delay: 500,
      disable : "mobile",
     });
  },[])

  return (
    <section className='about'>
     <div className="wrap">
     <h2> <hr /> About <hr /> </h2> 
    
    <div className="ab_con">
       
       <div className="about-description" data-aos="fade-up">
        <h3>Lets do some awesome things !</h3>
        <p> My name is Lovenish and I am a passionate Front-end developer . I can build amazing websites professional looking website for a business which will include modern functionality which can make a website faster , user friendly and help you to give your business an identity </p>
   <ul>
    <li><BiCheckCircle /> Responsivness </li>
     <li><BiCheckCircle /> Modern Funtionalities</li>
     <li><BiCheckCircle /> Fast Performance</li>
     <li><BiCheckCircle /> High Quality image</li>
   </ul>

       </div>

      <img src={sub} className="sub_img" width="400" data-aos="fade-left" alt="subject" />
    </div>

     </div>
    </section>
  )
}
