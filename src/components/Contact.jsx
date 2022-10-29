import React, {useRef} from 'react'
import "../styles/contact.css"
import blue from "../assets/images/blue.png"
import emailjs from '@emailjs/browser'


const Contact = () => {
  
  const form = useRef()

  const sendEmail = (e) => {
    alert("Sent")
    
    e.preventDefault()

    emailjs.sendForm("service_u5utxho","template_eapn6lv", form.current, 'bbzU9_ScCc1Siyz06')
      .then((result) => {
          console.log(result.text)
      }, (error) => {
          console.log(error.text)
      })
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
      
      

      <form ref={form} onSubmit={sendEmail}>

        <div className='fullName'>
          <label htmlFor="name"><i className="fi fi-sr-user"></i></label>
          <input 
          type="text"
          name="user_name"
          id="name"
          placeholder='Name'
          />
        </div>

        <div className='email'>
          <label htmlFor="email"><i className="fi fi-sr-envelope"></i></label>
          <input 
          name="user_email"
          type="text"
          id='email'
          placeholder='Email'
        />
        </div>

        <div className='message'>
          <label htmlFor="message"><i className="fa-solid fa-message"></i></label>
          <textarea placeholder='Write your message' name="message" id="message" cols="30" rows="10"></textarea>
        </div>
        <div className="input">
          <input type="submit" value="Send"/>
        </div>
        
      </form>
      <div>
        <img src={blue} alt="" />
      </div>
      
    </div>
  )
}

export default Contact