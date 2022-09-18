import './Contacts.css';

const Contacts = () => {
  return (
    <div className='contacts'>
      <form>
        <input type="text" placeholder='Enter your full name'/>
        <input type="tel"  placeholder='Enter your phone number'/>
        <input type="email"  placeholder='Enter your e-mail'/>
        <textarea name="message" id="message" cols="10" rows="7" placeholder='Your Message'></textarea>
        <button type="submit">Send</button>
      </form>

      <div className="contact-description">
        <p>Request</p>
        <h1>Contacts</h1>
        <span>
          If you have any questions or want to schedule a meeting with our private investigator, fill out the form, please.
        </span>
        <span>
          We guarantee the confidentiality of everything that you tell us during a personal conversation. 
          The consultation <strong>does not oblige you</strong> to order our services, we will destroy all the materials after the consultation.
        </span>
        <div className="details">
          <div className="detail">
            <h3>Address</h3>
            <span>
              <p>77-29 81st St, Queens, NY 11385, USA</p>
            </span>
          </div>
          <div className="detail">
            <h3>Hours</h3>
            <span>
              <p>Monday - Saturday: <strong> 11 AM - 9 PM</strong></p>
              <p>Sunday: <strong>11 AM - 7 PM</strong></p>
            </span>
          </div>
          <div className="detail">
            <h3>Contact</h3>
            <span>
              <p>+1 (234) 567 89 00</p>
              <p>detective@email.com</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts;