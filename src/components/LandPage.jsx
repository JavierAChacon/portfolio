import React from 'react'
import "../styles/landPage.css"
import perfil from '../assets/images/red.jpg'


const LandPage = () => {
  return (
    <div className='tittlePage'>
      
      <div className='tittle'>
        <div className='name'>
          <span>I'm Javier Chacon a</span>
        </div>
        
        <h1>Front-End <br/> Developer</h1>

      </div>

      <div className='imagen'><img  src={perfil} alt="" /></div>
    </div>
  )
}

export default LandPage