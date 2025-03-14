import React from 'react'
import "./Programs.css";
import rightArrow from "../../assets/rightArrow.png";
import {programsData} from "../../data/programsData";

const Programs = () => {
  return (
    <div className='Programs' id="Programs">
        {/* header */}
        <div className='programs-header'>
            <span className='stroke-text'>Explore our</span>
            <span>Programs</span>
            <span className='stroke-text'>to shape you</span>
        </div>
        <div className='program-categories' >
            {programsData.map((program) => (
                <div className='category' key={program.heading}>
                    {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    <div className='join-now'>
                        <span>Join Now</span>
                        <img alt="right arrow" src={rightArrow} />
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Programs