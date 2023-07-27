import './Form.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Form = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_w5yc41m', 'template_7c8gtie', form.current, 'ZTetKz5UKuuA_C8xJ')
        .then((result) => {
            console.log(result.text);
            console.log("Mail sent Successfully")
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <form ref={form} onSubmit={sendEmail}>
    <label>Name</label>
    <input type="text" name="Your Name" />
    <label>Email</label>
    <input type="email" name="Email" />
    <label>Message</label>
    <textarea rows="6" name="message" />
    <input type="submit" value="Send" className='btn' />
  </form>
      
   
  )
}

export default Form
