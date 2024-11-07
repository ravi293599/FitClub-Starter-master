import React from 'react'
import "./Header.css"
import Logo from "../../../assets/logo.png"
import Bars from "../../../assets/bars.png"
import { useState } from "react"
import { Link } from 'react-scroll'

const Header = () => {
  const mobile = window.innerWidth<=768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className='header'>
        <img src={Logo} className="logo" alt="Logo" />
        {menuOpened === false && mobile === true ? (
          <div style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px"
          }}
          onClick={() => setMenuOpened(true)}
          >
            <img src = {Bars} alt="Bars" alt="Bar" style={{width: '1.5rem', height: '1.5rem'}} />
          </div>
        ): (
          <ul className='headerMenu'>
          <li><Link
          onClick={() => setMenuOpened(false)}
          to="Home"
          span={true}
          smooth={true}
          >Home</Link></li>
          <li><Link
          onClick={() => setMenuOpened(false)}
          to="Programs"
          span={true}
          smooth={true}
          >Programs</Link></li>
          <li><Link
          onClick={() => setMenuOpened(false)}
          to="Reasons"
          span={true}
          smooth={true}
          >Why us</Link></li>
          <li><Link
          onClick={() => setMenuOpened(false)}
          to="Plans"
          span={true}
          smooth={true}
          >Plans</Link></li>
          <li><Link
          onClick={() => setMenuOpened(false)}
          to="Testimonials"
          span={true}
          smooth={true}
          >Testimonials</Link></li>
        </ul>
        )}
        
    </div>
  )
}

export default Header
