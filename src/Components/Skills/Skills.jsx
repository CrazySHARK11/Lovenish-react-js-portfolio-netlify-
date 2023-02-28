import React, { useEffect } from 'react'
import Pagination from '../Pagination/Pagination'
import "aos/dist/aos.css"
import Aos from 'aos'
import Skillcard from './Skillcard'
import { RiHtml5Fill , ImGit , SiSass , SiCss3 , FaBootstrap , SiTailwindcss ,  SiAdobephotoshop , SiJavascript , RiReactjsLine } from "react-icons/all";

export default function Skills() {
  useEffect(()=>{
     Aos.init({
      disable : "mobile",
      duration : "500",
      delay : "600",
     })
  },[])

  const Projs = [
    {
      id : 1 ,
      title : "Dark/Light Mode",
      descrip : "This project here is to show you how dark and light mode works ",
      link : "https://crazyshark11.github.io/Darkmode-lightmode/" , 
    },
    {
      id : 2 ,
      title : "E-Com Clone",
      descrip : "A website design for a Ecommerce shop of a clothing brand ",
      link : "https://crazyshark11.github.io/E-commerce-website-/" ,
    },
    {
      id : 3 ,
      title : "Image Gallery",
      descrip : "An online Image viewer for a photographic or modeling portfolio ",
      link : "https://crazyshark11.github.io/Image-gallery-/" ,
    },
    {
      id : 4 ,
      title : "Product Catalog",
      descrip : "For showing different dimentional images of a product or diagram" ,
      link : "https://crazyshark11.github.io/Product-catalog/" ,
    },
    {
      id : 5 ,
      title : "Wheather App",
      descrip : "An API based Wheather app to find the Wheather of a specefic location",
      link : "https://crazyshark11.github.io/Wheather-app/" ,
    },
    {
      id : 6,
      title : "World Search",
      descrip : "An API based app for searching the information of a specefic Country",
      link : "https://crazyshark11.github.io/Country-app/" ,
    },
  ]

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

<section className="My_work">
  <div className="wrap">
    <h2> <hr /> My Projects <hr /> </h2>
    <div className="work_row">
      {
        Projs.map((e)=>{
          return  <div className="proj_card" data-aos="fade-up">
          <h3>{e.title}</h3>
          <p>{e.descrip}</p>
          <hr />
          <a href={`${e.link}`} target="_blank" className="button">Launch</a>
         </div>
        })
      }
    </div>
  </div>
  </section>

 </>
  )
}
