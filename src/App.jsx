import React from 'react'
import Welcome from './Components/welcome/Welcome'
import Navbar from './Components/Navbar/Navbar'
import Skills from './Components/Skills/Skills'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import About from './Components/About/About'
import Qualification from './Components/Qualification/qualification'
import {useState, useRef} from 'react'


function App() {
   const [menu, setMenu] = useState("welcome");

  return (
    <div>
      <Navbar menu={menu} setMenu={setMenu}/>
      <Welcome />
      <About />
      <Qualification />
      <Skills />
      <Projects />
      <Contact />
      <Footer menu={menu} setMenu={setMenu}/>
    </div>
  )
}

export default App