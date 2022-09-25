import './Header.css';

const Header = ({subHeading, mainHeading}) => {
  return (
    <div className='header-section'>
      <h5>{subHeading}</h5>
      <h1>{mainHeading}</h1>
    </div>
  )
}

export default Header;