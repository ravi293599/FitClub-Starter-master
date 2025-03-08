import React from 'react'
import "./Plans.css"
import {plansData} from "../data/plansData"
import whiteTick from "../assets/whiteTick.png";

const Plans = () => {
  return (
    <div className='plans-container' id="Plans">
        <div className='blur plans-blur-1'></div>
        <div className='blur plans-blur-2'></div>
        <div className='programs-header'>
            <span className='stroke-text'>ready to start</span>
            <span>your Journey</span>
            <span className='stroke-text'>Now with us</span>
        </div>
        {/* plans card */}
        <div className='plans'>
            {plansData.map((plan, i) => (
                <div className='plan' key = {i}>
                    {plan.icon}
                    <span>{plan.name}</span>
                    <span>$ {plan.price}</span>

                    <div className='features'>
                        {plan.features.map((feature ,i) => (
                            <div className="feature" key={i}>
                                <img src = {whiteTick} alt = "whiteTick" />
                                <span>{feature}</span>
                            </div>
                        ))}
                    </div>
                    <div>
                        <span>See more benefits -&gt;</span>
                    </div>
                    <button className='btn'>Join Now</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Plans