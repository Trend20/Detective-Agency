import Header from '../Header/Header';
import './About.css';

const About = () => {
  return (
    <div className='about'>
      <div className="about-image">
        <img src="/img/about.webp" alt="about" />
      </div>
      <div className="about-description">
        <Header subHeading="About Us" mainHeading="Who We Are" />
        <div className="about-details">
        <p>
          <strong>ELPS Private Detective Agency</strong> is a dynamic team of professionals with over 30 years of 
          investigative experience dedicated to serving the Security & investigation needs of businesses & individuals.
        </p>
        <p>
          We provide our clients with services ranging from criminal defense investigations to covert surveillance.
        </p>
        <p>
          Our agency provides services for law firms, private citizens, insurance companies, the cannabis industry, 
          businesses and corporations throughout the State of Pennsylvania and New Jersey, providing quality results
          in a timely fashion. Our firm is committed to you, our customers, and we pride ourselves on being results-oriented.
        </p>
        <p>
          Our reputation of reliability and integrity with insurance providers, law firms, corporations, business entities, 
          and private individuals makes <strong>ELPS PDA</strong> a competitive agency!
        </p>
        </div>
      </div>
    </div>
  )
}

export default About;