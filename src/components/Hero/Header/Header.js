import React from 'react'
import "./Header.css"
import Logo from "../../../assets/logo.png"
import { useState } from "react"
import { Link } from 'react-scroll'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const mobile = window.innerWidth<=768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className='header'>
        <img src={Logo}  className="logo" alt='Logo' />
        {menuOpened === false && mobile === true ? (
          <div className="hamburger" 
          onClick={() => setMenuOpened(true)}
          >
            <RxHamburgerMenu className="bars" />
          </div>
        ): (
          <ul className={menuOpened === false ? "headerMenu":"headerMenu active"}>
            {menuOpened === true && <IoClose className='ham-close' onClick={() => setMenuOpened(false)} />}
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
