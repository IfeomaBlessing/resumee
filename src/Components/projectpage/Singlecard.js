import React from 'react'
import Cimg from '../../Assets/cimage.webp'
import Pro1 from '../../Assets/pro1.png'


const Singlecard = (props) => {
  return (
     <div className='card-box'>

    <div className='card'>

    <div className='front'>
    <img src= {props.cardImg} alt='pro1'/>
          <div className='front-content flex-row'>
          <p>{props.projectName}</p>
        <div className='techStack'>
            <span>{props.stack1}</span>
            <span>{props.stack2}</span>
            <span>{props.stack3}</span>
            <span>{props.stack4}</span>
        </div>
          </div>
    </div>

    <article className='back'>
    <p>{props.cardDesc}</p>
  
  <a href={props.projectUrl} target="_blank" rel="noreferrer"><button>View Project</button></a>
    </article>

  </div>
  </div>

  )
}

export default Singlecard