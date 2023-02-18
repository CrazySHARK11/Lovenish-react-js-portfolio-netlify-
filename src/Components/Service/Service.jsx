import Pagination from '../Pagination/Pagination'
import Servcard from './Servcard'
import "aos/dist/aos.css"
import { BsPhone , BsLightningCharge , BsGear , BsEmojiSmile , BsBox , BsBrush } from "react-icons/all"
import { useEffect } from 'react'
import Aos from 'aos'

export default function Service() {
  useEffect(()=>{
    Aos.init({
      duration: 500,
      delay: 500,
      disable : "mobile",
     });
  },[])

  return (
 <>
  <Pagination page="Service" />
    <section className="service">
      <div className="wrap">
        <h2 className='serv_h'> <hr /> Services <hr /> </h2>
        <p>As a professional web developer in my field, I offer a wide range of services that cater to the needs of my clients. I have honed my skills in this field of making a beauifull website  identity . I strive to deliver high quality services for my client and deliver a high quality product .</p>

        <div className="serv_card_row" data-aos="fade-up">
        <Servcard 
            count="01"
            icon={<BsPhone />}
           name="Responsive design"
           description = "Expertised in making a website responsive for mobile and tablet users which also helps in SEO "
           />

         <Servcard 
            count="02"
            icon={<BsGear />}
           name="Modern Funtionality"
           description = " Modern Functionalities which helps a website becomes faster and more apelling   "
           />

         <Servcard 
            count="03"
            icon={<BsEmojiSmile />}
           name="User Friendly"
           description = "User friendly tour of website to give a clear message to the visitor about business"
           />

<Servcard 
            count="04"
            icon={<BsLightningCharge />}
           name="Fast Experience"
           description = " Creating fast experience for your website navigation and interactions "
           />

<Servcard 
            count="05"
            icon={<BsBox />}
             name="Quality Assets"
           description = "Assets that are high in quality and lighter in weight which makes a website faster "
           />

<Servcard 
            count="06"
          icon={<BsBrush />}
           name="Professional Design "
           description = "User friendly tour of website to give a clear message to the visitor about business"
           />
           

        </div>

      </div>
    </section>
 </>
  )
}
