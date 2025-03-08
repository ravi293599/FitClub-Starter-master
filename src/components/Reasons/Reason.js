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
        <img src= {image1} alt="reason1" />
        <img src= {image2} alt="reason2" />
        <img src= {image3} alt="reason3" />
        <img src= {image4} alt="reason4" />
        <img src= {image1} alt="reason1" />
        <img src= {image2} alt="reason2" />
        <img src= {image3} alt="reason3" />
        <img src= {image4} alt="reason4" />
      </div>
      <div className='right-r'>
        <span>some reasons</span>
        <div>
          <span className='stroke-text'>Why</span>
          <span> choose us?</span>
        </div>
        <div className='details-r'>
          <div>
            <img src = {tick} alt="tick" />
            <img src = {tick} alt="tick" />
            <span>Over 140+ expert coachs</span>
          </div>
          <div>
            <img src = {tick} alt="tick" />
            <span>train smarter and faster then before</span>
          </div>
          <div>
            <img src = {tick} alt="tick" />
            <img src = {tick} alt="tick" />
            <span>one free program for new member</span>
          </div>
          <div>
            <img src = {tick} alt="tick" />
            <img src = {tick} alt="tick" />
            <span>Reliable partners</span>
          </div>
        </div>
        <span className='partnerTitle'>
          our partners
        </span>
        <div className='partners'>
          <img src={nb} alt="nb"/>
          <img src={adidas} alt="addidas"/>
          <img src={nike} alt="nike"/>
        </div>
      </div>
    </div>
  )
}

export default Reason
