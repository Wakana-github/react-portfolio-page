import React from 'react'
import './Qualification.css'
import certification_image from '../../assets/certificate.png'
import wing_icon_pink from '../../assets/wing_icon_pink.svg'

function Qualification() {
  return (
    <div className="qualification" id="qualification">
      <div className="qualification-container">
        <div className='qualifications-title'>
          <h1 className="title ">QUALIFICATIONS<img className='wing_icon' src={wing_icon_pink} alt=""/></h1>
        </div>
        <div className="qualification-article">
          <p>⎼ Bachelor of Engineering (Civil),  University of the Ryukyus, Japan (2019)</p>
          <p>⎼ CertificateIII Information Technology, Canberra Institute of Technoligy, Australia (2022)</p>
          <p>- CertificateVI Information Technology, Canberra Institute of Technoligy, Australia (2024)</p>
        </div>
        <img id="certification-image" className='certification-image' src={certification_image} alt="Photo" />
         {/* certificate.png created by Canva's AI image generator */}
      </div>

    </div>
  )
}

export default Qualification