import React from 'react'
import './Footer.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import {useState, useRef} from 'react'



function Footer({menu, setMenu}) {

  return (

 

    <div className='footer'>
      <hr />
      <ul className="subNav">
        <li>
          <AnchorLink key='welcome' offset={50} className='subNav-list' href="#welcome-section" onClick={() => setMenu('welcome')}>welcome</AnchorLink>
        </li>
        <li>
          <AnchorLink key='about-me' offset={50} className='subNav-list' href="#about-me" onClick={() => setMenu('about')}>about me</AnchorLink>
        </li>
        <li>
          <AnchorLink key='qualification' offset={50} className='subNav-list' href="#qualification" onClick={() => setMenu('qualification')}>qualification</AnchorLink>
        </li>
        <li>
          <AnchorLink key='skills' offset={50} className='subNav-list' href="#skills" onClick={() => setMenu('skills')}>skills</AnchorLink>
        </li>
        <li>
          <AnchorLink key='projects' offset={50} className='subNav-list' href="#projects" onClick={() => setMenu('projects')}>my work</AnchorLink>
        </li>
        <li>
          <AnchorLink key='contact' offset={50} className='subNav-list' href="#contact" onClick={() => setMenu('contact')}>contact</AnchorLink>
        </li>
      </ul>
      <div className="contents-right">
        <p>@2025 Wakana Gushi. All Rights Resereved</p>
      </div>
  </div>

  )
}

export default Footer