import React from 'react'
import './Welcome.css'
import laptop_image from '../../assets/laptop_image.png'
import desktop_image from '../../assets/desktop_image.png'
import phone_image from '../../assets/phone_image.png'


function Welcome() {
  return (
    <div id='welcome-section' className='welcome-section' >
      <div className="welcome-sentense">
        <p id="hello" className='hello'>Hello, welcome to</p>
        <h1 id="hello-name" className='hello-name'>Wakana's</h1>
        <h1 id="hello-title" className='hello-title'>PORTFOLIO</h1>
        <p id="jobtitle" className='jobtitle'>FRONT-END / WEB DEVELOPER</p>
      </div>
      <div className="device-image">
        <div className="device1">
          <img src={laptop_image} alt="laptop-image" />
        </div>
        <div className="device2">
          <img src={phone_image} alt="phone-image" />
        </div>
        <div className="device3">
          <img src={desktop_image} alt="desktop-image" />
        </div>
      </div>
     {/* device images from Loose Drawing:https://loosedrawing.com */}
    </div>
  )
}

export default Welcome