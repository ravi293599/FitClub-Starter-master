import React, { useRef } from 'react'
import "./Join.css"
import emailjs from "@emailjs/browser";

const Join = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dje7t1l', 'template_z4cxf3l', form.current, 'ckHrbAsB1_o_KBkjL')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className='Join' id = "join-us">
        <div className='left-j'>
          <hr />
            <div>
                <span className='stroke-text'>Ready to</span>
                <span>Level up</span>
            </div>
            <div>
                <span>Your Body</span>
                <span className='stroke-text'>With Us?</span>
            </div>
        </div>
        <div className='right-j'>
          <form ref={form} className='email-container' onSubmit={sendEmail}>
            <input type= "email" name="user_email" placeholder="Enter your email address" />
            <button className='btn btn-j'>Join Now</button>
          </form>
        </div>
    </div>
  )
}

export default Join