import React from 'react'
import './Herostyle.css'
 import mypix from '../Assets/mypix.jpg'


const Hero = () => {
  return (
    <>
    <section id='Home'className='hero section'>
  
    <div className='hero-container flex-row'>

         <div className='left-hero'>
          <h1>FRONT-END DEVELOPER</h1>          
           <p>Hi, I'm <span>Ifeoma Obodozie</span>. A passionate and motivated 
            individual based in Lagos, Nigeria
            seeking position to gain practical experience and contribute to frontend development projects.
           </p>

           
           <a href ="mailto:ifeoma.jib@gmail.com"><button>Hire Me</button></a>

         </div>

         <div className='right-hero flex-row'>
          
          <img src ={mypix}alt='myPicture'/>
         </div>
 
    </div>

    {/* <div className='h-down'>
      <h4>Tech Stack</h4>
      
      <div className='skills'>
        <img src={html} alt ='HTML icon'/>
        <img src={css} alt ='CSS icon'/>
        <img src={JS} alt ='JS icon'/>
        <img src={react} alt ='REACT icon'/>
        <img src={github} alt ='Github icon'/>
      </div>
      </div>  */}
      


    </section>
    </>
  )
}

export default Hero