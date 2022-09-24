import './Navbar.css';
import { FaFacebookF, FaInstagram, FaYoutube} from 'react-icons/fa';

const navItems = ['Services', 'About Us', 'Partners', 'Testimonials', 'Contacts'];

const Navbar = () => {
  return (
    <div className='header'>
      <div className="logo">
        <img src="/img/logo.svg" alt="logo" />
      </div>
      <div className="navbar">
        <ul>
          {
            navItems.map((item, index) =>(
              <li key={index}><span>0{index + 1}.</span>{item}</li>
            ))
          }
        </ul>
        <div className="nav-icons">
          <FaFacebookF  className='icon'  size="20px" color="#1e1e28" fill='#1e1e28' />
          <FaInstagram  className='icon'    size="20px" color="#1e1e28" fill='#1e1e28'/>
          <FaYoutube className='icon'    size="20px" color="#1e1e28" fill='#1e1e28'/>
        </div>
      </div>
    </div>
  )
}

export default Navbar;