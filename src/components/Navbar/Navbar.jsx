import { useState } from 'react';
import './Navbar.css';
import {Link } from 'react-scroll';
import { AiOutlineClose } from 'react-icons/ai';
import { FaFacebookF, FaInstagram, FaYoutube, FaBars} from 'react-icons/fa';

const navItems = [
  {
    val: 'Services',
    sectionID: "services"
  }, 
  {
    val: 'About Us',
    sectionID: "about"
  }, 
  {
    val: 'Partners',
    sectionID: "partner"
  },
  {
    val: 'Testimonials',
    sectionID: "testimonies"
  }, 
  {
    val: 'Contacts',
    sectionID: "contact"
  }
];

const Navbar = () => {

  const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);
  return (
  <>
    <div className='header'>
      <div className="logo">
        <img src="/img/logo.svg" alt="logo" />
      </div>
      <div className="navbar">
        <ul className={click ? 'nav-options active' : 'nav-options'} id="navbar">
          {
            navItems.map((item, index) =>(
              <li key={index}><span><Link to={item.sectionID} onClick={closeMobileMenu} spy={true} smooth={true}>0{index + 1}.</Link></span>{item.val}</li>
            ))
          }
        </ul>
        <div className="nav-icons">
          <FaFacebookF  className='icon'  size="25px" color="#1e1e28" fill='#1e1e28' />
          <FaInstagram  className='icon'    size="25px" color="#1e1e28" fill='#1e1e28'/>
          <FaYoutube className='icon'    size="25px" color="#1e1e28" fill='#1e1e28'/>
        </div>
        <div className="toggle mobile-menu" onClick={handleClick}>
					{click ? <AiOutlineClose className="menu-icon" /> : <FaBars className="menu-icon" />}
				</div>
      </div>
    </div>
  </>
  )
}

export default Navbar;