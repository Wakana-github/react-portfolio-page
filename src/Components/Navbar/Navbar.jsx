import React from 'react'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {useState, useRef} from 'react'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
import wing_icon_pink from '../../assets/wing_icon_pink.svg'

function Navbar({menu, setMenu}) {

  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = '0';
  }
  const closeMenu = () => {
    menuRef.current.style.right = '-350px';
  }

  return (
    <div className='navbar'> 
      <img src={menu_open} onClick = {openMenu} alt="" className = 'nav-mob-open' />
    
        <ul ref={menuRef} className = 'nav-menu'>
          <img src={menu_close} onClick = {closeMenu} alt="" className='nav-mob-close' />

          <li><AnchorLink key='welcome' className='anchor-link' href='#welcome-section' onClick={() => setMenu('welcome')}>welcome</AnchorLink>{menu==='welcome'? <img src={wing_icon_pink} alt =''/>:<></>}</li>
          <li><AnchorLink key='about-me' className='anchor-link' offset={50}  href='#about-me' onClick={() => setMenu('about')}>about me</AnchorLink>{menu==='about'? <img src={wing_icon_pink} alt =''/>:<></>}</li>
          <li><AnchorLink key='qualification' className='anchor-link' offset={50}  href='#qualification' onClick={() => setMenu('qualification')}>qualification</AnchorLink>{menu==='qualification'? <img src={wing_icon_pink} alt =''/>:<></>}</li>
          <li><AnchorLink key='skills' className='anchor-link' offset={50}  href='#skills' onClick={() => setMenu('skills')}>skills</AnchorLink>{menu==='skills'? <img src={wing_icon_pink} alt =''/>:<></>}</li>
          <li><AnchorLink key='projects' className='anchor-link' offset={50}  href='#projects' onClick={() => setMenu('projects')}>my work</AnchorLink>{menu==='projects'? <img src={wing_icon_pink} alt =''/>:<></>}</li>
          <li><AnchorLink key='contact' className='anchor-link' offset={50}  href='#contact' onClick={() => setMenu('contact')}>contact</AnchorLink>{menu==='contact'? <img src={wing_icon_pink} alt =''/>:<></>}</li>
        </ul>
    </div>
  )
}

export default Navbar