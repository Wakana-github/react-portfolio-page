import React from 'react'
import './Contact.css'
import linkedin_logo from '../../assets/LI-In-Bug.png'
import github_logo from '../../assets/github-mark.png'
import mail_icon from '../../assets/mail_icon.png'
import wing_icon_pink from '../../assets/wing_icon_pink.svg'


function Contact() {

    // code from web3forms.com -- create react home
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "16fbf32a-48a6-479b-a56c-a0718b930c65");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
      };



  return (
    <div id='contact' className='contact-form'>
        <div>
            <h1 className="title contact-form-title">CONTACT FORM<img className='wing_icon' src={wing_icon_pink} alt=""/></h1>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <p>Have you got a question?
                <br/>Please send me a message.</p>

                <div className="contact-details">
                    <div className="contact-detail">
                        {/* <img src={mail_icon} alt="" /> <p>greatestackdev@gmail.com</p>                     */}
                    </div>
                    <div className="contact-detail">
                        {/* <img src={call_icon} alt="" /> <p>+772-825-524</p> */}
                    </div>
                    <div className="contact-detail">
                        {/* <img src={location_icon} alt="" /> <p>CA, unidet States</p> */}
                    </div>
                </div>

        
                <form onSubmit={onSubmit} className="contact-form">
                    <label className='form-heading' htmlFor="name">Your Name:</label>
                    <input type="text" placeholder="Enter your name" name='name' />
                    <label className='form-heading' htmlFor="email">Your Email:</label>
                    <input type="email" placeholder='Enter your email' name='email'/>
                    <label className='form-heading' htmlFor="textbox">Write your message:</label>
                    <textarea name='message' rows='8' placeholder='Enter your message'></textarea>
                    <button type='submit' className='contact-submit'>Submit now</button>
                </form>
            </div>
            <div className="contact-right">
                <h1>Get in touch</h1>
                <ul className='icons'>
                    <li>
                    <a href="https://www.linkedin.com/in/wakanagushi" className="Linkedin" target="_blank"><img src={linkedin_logo} alt="Linkedin"/></a>
                    </li>
                    <li>
                    <a href="https://github.com/Wakana-github" className="Github" target="_blank"><img src={github_logo} alt="Github"/></a>
                    </li>
                </ul>
            </div>

        
        </div>
        

    </div>
  )
}

export default Contact