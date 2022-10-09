import React from 'react'
import "../styles/navBar.css"

const NavBar = () => {
  return (
    <nav className='container'>
        <div className='logo'>
            <p>Javier</p>
        </div>
        
        <ul className='links'>
            <li className='link'>Home</li>
            <li className='link'>About me</li>
            <li className='link'>Abilities</li>
            <li className='link'>Portfolio</li>
            <li className='link'>Contact</li>
        </ul>
    </nav>
  )
}

export default NavBar