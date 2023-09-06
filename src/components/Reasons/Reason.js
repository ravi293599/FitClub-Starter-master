import React from 'react'
import "./Reason.css"
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import tick from "../../assets/tick.png";
import nike from "../../assets/nike.png";
import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";

const Reason = () => {
  return (
    <div className='Reasons' id='Reasons'>
      <div className='left-r'>
        <img src= {image1} alt="" />
        <img src= {image2} alt="" />
        <img src= {image3} alt="" />
        <img src= {image4} alt="" />
      </div>
      <div className='right-r'>
        <span>some reasons</span>
        <div>
          <span className='stroke-text'>Why</span>
          <span> choose us?</span>
        </div>
        <div className='details-r'>
          <div>
            <img src = {tick} alt="" />
            <span>Over 140+ expert coachs</span>
          </div>
          <div>
            <img src = {tick} alt="" />
            <span>train smarter and faster then before</span>
          </div>
          <div>
            <img src = {tick} alt="" />
            <span>one free program for new member</span>
          </div>
          <div>
            <img src = {tick} alt="" />
            <span>Reliable partners</span>
          </div>
        </div>
        <span className='partnerTitle'>
          our partners
        </span>
        <div className='partners'>
          <img src={nb} alt=""/>
          <img src={adidas} alt=""/>
          <img src={nike} alt=""/>
        </div>
      </div>
    </div>
  )
}

export default Reason