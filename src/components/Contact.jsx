import React from 'react'
import { useForm } from 'react-hook-form'
import "../styles/contact.css"
import blue from "../assets/images/blue.png"


const Contact = () => {
  
  const {register,handleSubmit}= useForm()

  const submit = (data) => {
    alert("Enviado")
    console.log(data)
  }
  
  return (
    <div className='contact' id='contact'>
      
      <div className='contacth'>
        <h2>CONTACT</h2>
        <div className="buttons">
          <ul className='listButtons'>
            <li><a className="buttonText" id="contactText" href="https://github.com/JavierAChacon"><i className="fa-brands fa-github" aria-hidden="true"></i></a></li>
            <li><a className="buttonText" id="contactText" href="https://www.linkedin.com/in/javier-a-chacon/"><i className="fa-brands fa-linkedin-in" aria-hidden="true"></i></a></li>
            <li><a className="buttonText" id="contactText" href="mailto:alejandro.chr@outlook.es"><i className="fa-solid fa-envelope" aria-hidden="true"></i></a></li>
          </ul>
        </div>
      </div>
      
      
      
      <form onSubmit={handleSubmit(submit)}>

        <div className='fullName'>
          <label htmlFor="name"><i className="fi fi-sr-user"></i></label>
          <input 
          type="text"
          id="name"
          placeholder='Name'
          {...register('name')}/>
        
          <label htmlFor="lastName"></label>
          <input
          type="text"
          id="lastName" 
          placeholder='Last Name'
          {...register('lastName')}/>
        </div>

        <div className='email'>
          <label htmlFor="email"><i className="fi fi-sr-envelope"></i></label>
          <input 
          type="text"
          id='email'
          placeholder='Email'
          {...register('email')} />
        </div>
        <div className="input">
          <input type="submit" value="Submit"/>
        </div>
        
      </form>
      <div>
        <img src={blue} alt="" />
      </div>
      
    </div>
  )
}

export default Contact