import React from 'react'
import './project.css'
import Singlecard  from './Singlecard'
import app from '../../Assets/app.jpg'
import project1 from '../../Assets/project1.png'
import project2 from '../../Assets/project2.png'

const Projects = () => {
  return (
    <>
      <section className='project section flex-row'id='Projects'>
      <h1>My Works</h1>
      <div className="card-container">
      <div className="cards">
      <Singlecard
           projectName ="Shopping Website" 
           cardImg ={project1}
           stack1 ="HTML" stack2="CSS"  stack3="Vanilla Js"
           cardDesc="A simple shopping site built using HTML, CSS, and JavaScript.
           Implemented responsive design principles to ensure optimal user experience on various devices. And also 
           utilized local storage to store and retrieve items in the shopping cart. " 
           projectUrl =" https://ifeomablessing.github.io/shoppingcart/"/>

          <Singlecard
          projectName ="Restaurant Website"
          cardImg ={project2}
          stack1 ="HTML" stack2="CSS" stack3="Vanilla Js"
          cardDesc ="This is a restaurant website built using HTML, CSS, and JavaScript.
          Utilized local storage to store and retrieve items in the user's cart.
          Integrated interactive features, such as menu filtering and dynamic content updates."
          projectUrl ="https://ifeomablessing.github.io/foodweb/"/>


          <Singlecard
          projectName ="Weather App"
          cardImg ={app}
          stack1 ="HTML" stack2="CSS" stack3="JavaScript" stack4 ="API"
          cardDesc ="This is a simple weather App built uisng HTML, CSS and a 
          weather API designed to provide users with current weather information forma specified
          location."
          projectUrl ="https://ifeomablessing.github.io/weatherApp/"/>

         
      
            </div>
            </div>
      </section>
    </>
  )
}

export default Projects