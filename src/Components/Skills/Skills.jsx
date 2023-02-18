import React from 'react'
import Pagination from '../Pagination/Pagination'
import Skillcard from './Skillcard'
import { RiHtml5Fill , ImGit , SiSass , SiCss3 , FaBootstrap , SiTailwindcss ,  SiAdobephotoshop , SiJavascript , RiReactjsLine } from "react-icons/all";

export default function Skills() {
  return (
    <>
    <Pagination page="skills" />
  <section className="skills">
    <div className="wrap">
      <h2> <hr /> Skills <hr /> </h2>
      <p>These are some skills that I aquired to build websites with all those amazing features . I have a strong understanding of the fundamentals and how to use them for my of these skills mentioned below   </p>
   
   <h3>For development</h3>

   <div className="skill_row">
      <Skillcard name="HTML" icon={<RiHtml5Fill color='ff6f00' />} />
      <Skillcard name="CSS" icon={<SiCss3 color="blue" />} />
      <Skillcard name="JS" icon={<SiJavascript color='yellow'  />} />
   </div>

   <h3>Libraries and Frameworks</h3>

    <div className="skill_row">
    <Skillcard name="REACT JS" icon={<RiReactjsLine color='cyan' />} />
    <Skillcard name="TAILWIND CSS" icon={<SiTailwindcss color='cyan' />} />
    <Skillcard name="BOOTSTRAP" icon={<FaBootstrap color='#300044' />} />
    </div>
   
    <h3>For Efficient and quality design </h3>

    <div className="skill_row">
    <Skillcard name="PHOTOSHOP" icon={<SiAdobephotoshop color='darkblue' />} />
    <Skillcard name="SASS" icon={<SiSass color='pink' />} />
    </div>

    <h3>Version Control</h3>

    <div className="skill_row">
    
    <Skillcard name="GIT" icon={<ImGit color='ff6f00' />} />

    </div>
   
   
    </div>
  </section>
 </>
  )
}
