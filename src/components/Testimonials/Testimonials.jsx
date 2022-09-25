import Header from '../Header/Header';
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Testimonials.css';

const Testimonials = () => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='testimonials'>
      <div className="testimonials-intro">
        <Header subHeading="Our Clients" mainHeading="Testimonials" />
        <span>
          At ELPS, we have a genuine passion for protecting people and for service. 
          Our detective agency employs <strong>highly qualified private investigators</strong> to service the needs of our clients.
        </span>
        <span>
          Though most of our clients prefer to stay <strong>incognito</strong>, we still have some great testimonials you can read here! 
        </span>
      </div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item className='c-item'>
          <img 
            className="d-block w-100"
            src="/img/sam.webp" 
            alt="sam" />
          <Carousel.Caption className='c-caption'>
            <h3>Mary Sanders</h3>
            <p>
            I initially hired Private Investigator conduct background searches for my business when I was starting a new division in New York. 
            He finished all twelve reviews right on schedule! Hire the ELPS team – you won’t be disappointed! 
            </p>
            <h5>January 08, 2020</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='c-item'>
          <img 
            className="d-block w-100"
            src="/img/victor.webp" 
            alt="victor" />

          <Carousel.Caption className='c-caption'>
            <h3>Victor Manner</h3>
            <p>
            I noticed that one of our employees was acting very strange. He stayed late at the office, shuddered when I approached him from behind, etc. 
            I hired a detective to trace him. It turned out that this employee was engaged in industrial espionage. 
            </p>
            <h5>June 17, 2020</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='c-item'>
        <img
            className="d-block w-100"
            src="/img/sam.webp"
            alt="sam"
          />
          <Carousel.Caption className='c-caption'>
            <h3>Sam White</h3>
            <p>
            I had never thought I would require the services of a private investigator but recently, I found myself in such a situation. 
            The detective collected the evidence I needed for my divorce quickly, discretely, and really effectively.
            </p>
            <h5>October 28, 2019</h5>
          </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Testimonials;