import React from 'react'
import './about.css'
import wakana_image from '../../assets/wakana_image.jpg'
import wing_icon_pink from '../../assets/wing_icon_pink.svg'

function About() {
  return (
    <div className="about-me" id="about-me">
      <div className="about-container">
        <div className="about-title">
          <h1 className="title"id="about-title">A LITTLE<br />ABOUT ME</h1>
          <img src={wing_icon_pink} alt=""/>
        </div>
        <div className='about-sentense'>
          <p>
            Hi there! I am a web developer with a Certificate IV in Information Technology from the Canberra Institute of Technology. During my studies, I gained knowledge in a wide range of web and application development technologies, such as front-end website development, database management, and system development using Object-Oriented languages.
            <br /><br />I had worked as a Civil Engineering consultant in Japan after graduating with a Bachelor’s degree in Civil Engineering, and have decided to pursue a new career in Web Application / Software Development in Australia.
          </p>
          <div className='contact-button'>contact</div>
        </div>
          
        <div className=" my-photo-wrapper">
          <img id="my-photo" className='my-photo' src={wakana_image} alt="Photo" />
          {/* wakana-image.jpg created by Cartoon Face app */}
        </div>
      </div>
    </div>
  )
}

export default About