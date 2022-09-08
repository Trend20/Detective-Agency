import './Hero.css';

const heroBottom =[
  {
    heading: 'Reliability',
    description: 'Former law enforcement and intelligence members work here.'
  },
  {
    heading: 'Privacy',
    description: 'We keep nothing. We give all copies of photos and videos.'
  },
  {
    heading: 'Transparency',
    description: 'Our picing is transparent and cost-effective for all case sizes.'
  },
  {
    heading: 'Efficiency',
    description: 'We bring each case to its logical conclusion and provide a report.'
  }
]
const Hero = () => {
  return (
    <div className='hero'>
      <hr />
      <p>Confidentiality and reliability are our strong points.</p>
      <h1>Detective Agency.</h1>
      <div className="hero-links">
        <button id='contact'>Contact us</button>
        <button id='practice'>Practice areas</button>
      </div>
      <div className="bottom-section">
          {
            heroBottom.map((item, index) =>(
              <div className='section-item' key={index}>
                <h3><span>0{index + 1}.</span>{item.heading}</h3>
                <p>{item.description}</p>
              </div>
            ))
          }
      </div>
    </div>
  )
}

export default Hero;