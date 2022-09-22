import './Footer.css';

import { FaFacebookF, FaInstagram, FaYoutube} from 'react-icons/fa';

const navItems = ['Services', 'About Us', 'Partners', 'Testimonials', 'Contacts'];

const Footer = () => {
  return (
    <div className='footer'>
      <div className="top-footer-content">
        <div className="footer-logo">
          <img src="/img/logo.svg" alt="logo" />
        </div>
        <div className="footer-nav">
          <ul>
            {
                navItems.map((item, index) =>(
                <li key={index}><span>0{index + 1}.</span>{item}</li>
                ))
            }
          </ul>
          <div className="footer-icons">
            <FaFacebookF className='icon' />
            <FaInstagram className='icon' />
            <FaYoutube className='icon' />
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="footer-text">
          <p>© Created by DevEnock</p>
          <p>All rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer;