import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <div className='testimonials'>
      <div className="testimonials-intro">
        <p>Our Clients</p>
        <h1>Testimonials</h1>
        <span>
          At ELPS, we have a genuine passion for protecting people and for service. 
          Our detective agency employs <strong>highly qualified private investigators</strong> to service the needs of our clients.
        </span>
        <span>
          Though most of our clients prefer to stay <strong>incognito</strong>, we still have some great testimonials you can read here! 
        </span>
      </div>

      <div className="slider">
        <Carousel>
          <div className="slide">
            <img src="/img/mary.webp" alt="mary" />
            <h3>Mary Sanders</h3>
            <p>
            I initially hired Private Investigator conduct background searches for my business when I was starting a new division in New York. 
            He finished all twelve reviews right on schedule! Hire the ELPS team – you won’t be disappointed! 
            </p>
            <h5>January 08, 2020</h5>
          </div>
          <div className="slide">
            <img src="/img/victor.webp" alt="victor" />
            <h3>Victor Manner</h3>
            <p>
            I noticed that one of our employees was acting very strange. He stayed late at the office, shuddered when I approached him from behind, etc. 
            I hired a detective to trace him. It turned out that this employee was engaged in industrial espionage. 
            </p>
            <h5>June 17, 2020</h5>
          </div>
          <div className="slide">
            <img src="/img/sam.webp" alt="sam" />
            <h3>Sam White</h3>
            <p>
            I had never thought I would require the services of a private investigator but recently, I found myself in such a situation. 
            The detective collected the evidence I needed for my divorce quickly, discretely, and really effectively.
            </p>
            <h5>October 28, 2019</h5>
          </div>    
        </Carousel>
      </div>
    </div>
  )
}

export default Testimonials;