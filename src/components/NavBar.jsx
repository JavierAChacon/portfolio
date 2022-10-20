import React from 'react'
import "../styles/navBar.css"

const NavBar = () => {
  return (
    <nav> 
        <ul className='links'>
            <li className='link'><a href="#landPage">Home</a></li>
            {/* <li className='link'><a href="#about">About</a></li> */}
            <li className='link'><a href="#technologies">Technologies</a></li>
            <li className='link'><a href="#">Portfolio</a></li>
            <li className='link'><a href="#">Contact</a></li>
        </ul>
    </nav>
  )
}

export default NavBar