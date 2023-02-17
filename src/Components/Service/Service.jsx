import Pagination from '../Pagination/Pagination'
import Servcard from './Servcard'
import "aos/dist/aos.css"
import { BiMobile , BsGear , CgSmile } from "react-icons/all"
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
        <p>As a professional in my field, I offer a wide range of services that cater to the needs of my clients. I have honed my skills in various areas given below . I strive to deliver high quality services for my client and deliver a high quality product .</p>

        <div className="serv_card_row" data-aos="fade-up">
        <Servcard 
            count="01"
            icon={<BiMobile />}
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
            icon={<CgSmile />}
           name="User Friendly"
           description = "User friendly tour of website to give a clear message to the visitor about business"
           />
           

        </div>

      </div>
    </section>
 </>
  )
}
