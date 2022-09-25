import './Services.css';

const services=[
  {
    title: "Background Checks",
    description: "Do you have doubts about the applicant's honesty? We will do a full check!",
    icon: "/img/checks.svg"
  },
  {
    title: "Criminal Investigations",
    description: "Our detectives can conduct their own investigation to help the police.",
    icon: "/img/investigation.svg"
  },
  {
    title: "Infidelity",
    description: "Do you think your spouse is cheating on you? If yes, we'll find it out.",
    icon: "/img/infidelity.svg"
  },
  {
    title: "Tracing",
    description: "Tracing may be needed in different cases. Whatever your case is, we'll do our work.",
    icon: "/img/tracing.svg"
  },
  {
    title: "Custody",
    description: "We help collect all the necessary evidence in complicated custody cases.",
    icon: "/img/custody.svg"
  },
  {
    title: "Forensics",
    description: "Collecting evidence, studying it in our laboratory, conducting tests, etc.",
    icon: "/img/forensics.svg"
  }
]

const Services = () => {
  return (
    <div className='services'>
      <p>What we do</p>
      <h1>Our Practice Areas</h1>
      <div className="details-container">
        {
          services.map((service, index) =>(
            <div className="service">
               <img src={service.icon} alt="" />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
            </div>
          ))
         }
      </div>
    </div>
  )
}

export default Services;