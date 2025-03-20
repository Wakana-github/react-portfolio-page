import React from 'react'
import {useState} from 'react';
import { useForm} from "react-hook-form"
import './Contact.css'
import linkedin_logo from '../../assets/LI-In-Bug.png'
import github_logo from '../../assets/github-mark.png'
import wing_icon_pink from '../../assets/wing_icon_pink.svg'



    // code from web3forms.com -- create react home
function Contact() {
    const { register, handleSubmit, watch, formState: {errors} } = useForm();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [lastSubmitTime, setLastSubmitTime] = useState(0);
    const NAME_REGEX = /^[a-zA-Z\s]+$/;
    const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;


    //escape HTML tag
    const sanitiseInput = (input) => {
        if (typeof input !== 'string') return input;
        return input
            .replace(/</g, "&lt;")  
            .replace(/>/g, "&gt;")
            .trim();
    };


    const onSubmit = async (data) => {

        const currentTime = Date.now();

        // Check if less than 30 seconds have passed since the last submission
        if (currentTime - lastSubmitTime < 30000) {
            alert('You are sending messages too quickly. Please wait a moment and try again.');
            return;
        }
        else{

            setIsSubmitting(true);
            

            const sanitisedData = {
                name: sanitiseInput(data.name),
                email: sanitiseInput(data.email),
                message: sanitiseInput(data.message),
                access_key: "16fbf32a-48a6-479b-a56c-a0718b930c65"
            };
            const json = JSON.stringify(sanitisedData);

           try{
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
                    setLastSubmitTime(currentTime); // Update last submission time
                    }
            } catch (error) {
                alert('An error occurred while submitting the form. Please try again later.');
            }

            setIsSubmitting(false);
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
       
                <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
                    <label className='form-heading' htmlFor="name">Your Name:</label>
                    <input 
                        {...register('name', { 
                            required: "Name is required.", 
                            pattern: { value: NAME_REGEX, message: "Name can only contain letters and spaces." } 
                            })
                        } 
                    type="text" placeholder="Enter your name" />
                        {errors.name && (<span className='errormsg'>{errors.name.message}</span>)}

                    <label className='form-heading' htmlFor="email">Your Email:</label>
                    <input  {...register('email', { 
                            required: "Email is required.", 
                            pattern: { value: EMAIL_REGEX, message: "Invalid email address." } 
                        })}  
                    type="email" placeholder='Enter your email' />
                    {errors.email && (<span className='errormsg'>{errors.email.message}</span>)}

                    <label className='form-heading' htmlFor="textbox">Write your message:</label>
                    <textarea {...register('message', { required: true })}  rows='8' placeholder='Enter your message'></textarea>
                    {errors.message && (<span className='errormsg'>message is required</span>)}

                    <button type='submit' className='contact-submit' disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting...' : 'Submit now'}
                    </button>
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