import React from 'react'
import Pagination from '../Pagination/Pagination'
import { FaEnvelope } from "react-icons/all"

export default function Contact() {
  return (
   <>
      <Pagination page="contact" />
    <section className="contact">
      <h2> <hr /> Contact me <hr /> </h2>
      <div className="wrap">
           <div className="cont_row">
           
           <div className="side_text">
           <h3 className="contact_h">Let's chat. <br /> tell me about your <br /> project.</h3>
           <p>Let's create something together 🌟✨</p>
           <p className='mail'>  <span className="cont_icon">  <FaEnvelope/> </span> lovenish.biz@gmail.com </p>
           </div>

            <form name='contactForms' method='post'>
            <input type="hidden" name="form-name" value="contactForms" />
              <h3>Send me Message !</h3>

              <input type="text" name="name" placeholder='Username *' required />
              <input type="email" name="email" placeholder='E-mail *' required />
              <input type="text" name="subject" placeholder='Subject *' required />

              <h3>Tell me about your project !</h3>

              <textarea name="message" cols="30" rows="7"></textarea>
               
               <input type="submit" value="Submit" className='button' />
            </form>
           </div>
      </div>
    </section>
   </>
  )
}
