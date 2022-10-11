import React from 'react'
import "../styles/landPage.css"
import perfil from '../assets/images/red.jpg'


const LandPage = () => {
  return (
    <div className='tittlePage'>

      <div className='tittle'>
        <div className='text'>
          <div className='name'>
            <span>I'm Javier Chacon a</span>
          </div>
          <h1>Front-End <br /> Developer</h1>
        </div>

        <div className="buttons">
          <ul className='listButtons'>
            <li><a className="buttonText" href="https://github.com/JavierAChacon"><i className="fa-brands fa-github" aria-hidden="true"></i></a></li>
            <li><a className="buttonText" href="https://www.linkedin.com/in/javier-a-chacon/"><i className="fa-brands fa-linkedin-in" aria-hidden="true"></i></a></li>
          </ul>
        </div>

      </div>

      <div className='imagen'><img src={perfil} alt="" /></div>

    </div>
  )
}

export default LandPage