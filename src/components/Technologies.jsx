import React from 'react'
import "../styles/technologies.css"


const Technologies = () => {
  return (
    <section className='technologies' id='technologies'>

      <h2>TECHNOLOGIES</h2>

      <div className='cardContainer'>

        <div className='first card'>
          <div className='icon'><i className="fa-brands fa-bootstrap"></i></div>
          <div className='details' id='firstDetails'>
            <h3>Bootstrap</h3>
            <p>
              Bootstrap is the most popular CSS Framework for developing responsive and mobile-first websites.
            </p>
          </div>
        </div>


        <div className='second card'>
          <div className='icon'><i className="fa-brands fa-react"></i></div>
          <div className='details'>
            <h3>React</h3>
            <p>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.</p>
          </div>
        </div>


        <div className='third card'>
          <div className='icon'><i className="fa-brands fa-square-js"></i></div>
          <div className='details'>
            <h3>JavaScript</h3>
            <p>JavaScript is a lightweight, interpreted or just-in-time complied programming language with first-class-functions. It is most well-known as the scripting language for Web Pages.</p>
          </div>
        </div>
      </div>

      <div className='cardContainer' id="secondRow">
        <div className='fourth card'>
          <div className='icon'><i className="fa-brands fa-html5"></i></div>
          <div className='details'>
            <h3>HTML</h3>
            <p> HyperText Markup Language is the most basic building block of the Web. It defines the meaning and structure of web content.</p>
          </div>
        </div>

        <div className='fifth card'>
          <div className='icon'><i className="fa-brands fa-css3"></i></div>
          <div className='details'>
            <h3>CSS</h3>
            <p>Cascading Style Sheets is a stylesheet language used to describe the presentation of a document written in HTML or XML</p>
          </div>
        </div>
      </div>



    </section>
  )
}

export default Technologies