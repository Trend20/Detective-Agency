import Header from '../Header/Header';
import './Consultation.css';

const Consultation = () => {
  return (
    <div className='consultation'>
      <Header subHeading="Contact us" mainHeading="Need an incognito consultation?" />
      <span>Leave your email or write to us at <a href="detective@email.com">detective@email.com</a></span>
      <form>
        <input type="text" placeholder='Name' />
        <input type="email" placeholder='Email' />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default Consultation;