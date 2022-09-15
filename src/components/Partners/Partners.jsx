import './Partners.css'

const statsArray = [
  {
    val: 878,
    desc: 'Cases solved in 2019'
  },
  {
    val: 17,
    desc: 'Detectives'
  },
  {
    val: 10,
    desc: 'Labs around the world'
  },
  {
    val: 96,
    desc: 'Successful outcomes'
  },
  {
    val: 20,
    desc: 'Clients contact us every week'
  }
]

const Partners = () => {
  return (
    <div className='partners'>
      <div className="partners-description">
        <p>Numbers</p>
        <h1>We're Proud of</h1>
        <p>
          Our mission is to provide outstanding and reliable professional <strong>private investigation services</strong> anywhere in the world. 
          We work around the clock to report our findings in a timely and accountable manner. 
        </p>
      </div>
      <div className="partners-stats">
        <div className="stat">
          <h3>878</h3>
          <hr />
          <p>Cases solved in 2019</p>
        </div>
        <div className="stat">
          <h3>17+</h3>
          <hr />
          <p>Detectives</p>
        </div>
        <div className="stat">
          <h3>10</h3>
          <hr />
          <p>Labs around the world</p>
        </div>
        <div className="stat">
          <h3>96%</h3>
          <hr />
          <p>Successful outcomes</p>
        </div>
        <div className="stat">
          <h3>20</h3>
          <hr />
          <p>Clients contact us every week</p>
        </div>
      </div>
    </div>
  )
}

export default Partners;