import Header from '../Header/Header';
import './Promo.css';

const Promo = () => {
  return (
    <div className='promo'>
      {/* <p>Promo Video</p>
      <h1>How We Work</h1> */}
      <Header subHeading="Promo Video" mainHeading="How We Work"/>
      <span>Whatever your case is, we will provide high-quality services to solve it.</span>
      <div className="showcase">
        <img src="/img/vidbgwebp.webp" id='main-promo' alt="promo-bg" />
        <img src="/img/promovid.svg" id='play' alt="vid-icon" />
      </div>
    </div>
  )
}

export default Promo;