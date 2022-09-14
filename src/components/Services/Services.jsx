import './Services.css';

const Services = () => {
  return (
    <div className='services'>
      <p>What we do</p>
      <h1>Our Practice Areas</h1>
      <div className="details-container">
        <div className="service">
          <img src="/img/checks.svg" alt="checks" />
          <h3>Background Checks</h3>
          <p>Do you have doubts about the applicant's honesty? We will do a full check!</p>
        </div>
        <div className="service">
          <img src="/img/investigation.svg" alt="investigations" />
          <h3>Criminal Investigations</h3>
          <p>Our detectives can conduct their own investigation to help the police.</p>
        </div>
        <div className="service">
          <img src="/img/infidelity.svg" alt="infidelity" />
          <h3>Infidelity</h3>
          <p>Do you think your spouse is cheating on you? If yes, we'll find it out.</p>
        </div>
        <div className="service">
          <img src="/img/tracing.svg" alt="tracing" />
          <h3>Tracing</h3>
          <p>Tracing may be needed in different cases. Whatever your case is, we'll do our work.</p>
        </div>
        <div className="service">
          <img src="/img/custody.svg" alt="custody" />
          <h3>Custody</h3>
          <p>We help collect all the necessary evidence in complicated custody cases.</p>
        </div>
        <div className="service">
          <img src="/img/forensics.svg" alt="forensics" />
          <h3>Forensics</h3>
          <p>Collecting evidence, studying it in our laboratory, conducting tests, etc.</p>
        </div>
      </div>
    </div>
  )
}

export default Services;