import React from 'react'
import "./Testimonials.css"
import {testimonialsData} from "../../data/testimonialsData";
import { useState } from 'react';
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png"
import {motion} from "framer-motion"

const Testimonials = () => {
  const transition = {type: "spring", duration: 3};
  const [selected, setSelected] = useState(0);
  const tLength = testimonialsData.length;
  return (
    <div className='Testimonials' id="Testimonials">
        <div className='left-t'>
            <span>Testimonials</span>
            <span className='stroke-text'>why us</span>
            <span>say about us</span>
            <motion.span
              key={selected}
              initial={{opacity: 0, x: -100}}
              animate={{opacity: 1, x: 0}}
              exit={{opacity: 0, x: 100}}
              transition={transition}
            >
              {testimonialsData[selected].review}
            </motion.span>
            <span>
              <span style={{color: 'var(--orange)'}}>
                {testimonialsData[selected].name}
              </span>{" "}
              - {testimonialsData[selected].status}
            </span>
        </div>
        <div className='right-t'>
          <motion.div
            initial={{opacity: 0, x: -100}}
            transition={{...transition, duration: 2}}
            whileInView={{opacity: 1, x: 0}}
          ></motion.div>
          <motion.div
            initial={{opacity: 0, x: 100}}
            transition={{...transition, duration: 2}}
            whileInView={{opacity: 1, x: 0}}
          ></motion.div>
          <motion.img
          key={selected}
          initial={{opacity: 0, x: 100}}
          animate={{opacity: 1, x: 0}}
          exit={{opacity: 0, x: -100}}
          transition={transition}
          src= {testimonialsData[selected].image} alt="user" />

          <div className='arrows'>
            <img alt="left arrow" src= {leftArrow} onClick = {() => {
              selected === 0?setSelected(tLength-1):
              setSelected((prev) => prev - 1)
            }} />
            <img alt='right arrow' src= {rightArrow} onClick = {() => {
              selected === tLength - 1?setSelected(0):setSelected((prev) => prev + 1);
            }} />
          </div>
        </div>
    </div>
  )
}

export default Testimonials
