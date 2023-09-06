import React from 'react'
import "./Footer.css";
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className='Footer-container'>
        <hr />
        <div className='footer'>
            <div className='social-link'>
                <img src={Github} alt="" />
                <img src={LinkedIn} alt="" />
                <img src={Instagram} alt="" />
            </div>
            <div className='logo-f'>
                <img src= {Logo} alt="" />
            </div>
        </div>
        <div className='blur footer-blur-1'></div>
        <div className='blur footer-blur-2'></div>
    </div>
  )
}

export default Footer