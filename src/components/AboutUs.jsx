import trusted from "../assets/trusted-bg.jpg";
import './css/AboutUs.css'

const AboutUs = () => {

  const teamMembers = [
    {
      id: 1,
      name: "Richard Smith",
      role_description: "Richard has a true passion for baking and that’s why he has been our founder and head baker since day one.",
      imgUrl: "https://cutesolution.com/html/techfast/assets/img/team/team-2.jpg"
    },
    {
      id: 2,
      name: "Susan Anderson",
      role_description: "Susan spends most of her time baking and cake decorating as well as heading-abt up the bakery's marketing initiatives.",
      imgUrl: "https://cutesolution.com/html/techfast/assets/img/team/team-3.jpg"
    },
    {
      id: 3,
      name: "Steve Ruffalo",
      role_description: "Steve is our lead cake designer. He has designed beautiful cakes for various occasions including weddings, parties, showers, anniversaries and more.",
      imgUrl: "https://cutesolution.com/html/techfast/assets/img/team/team-4.jpg"
    }
  ];

  return (
    <div>
      <section className="about-hero">
        <img src={trusted} alt="About" className="trusted-img" />
        <div className="overlay"></div>
        <div className="about-content">
          <h1>About Us</h1>
          <h5>
            Home <span>•</span> About Us
          </h5>
        </div>
      </section>
      <section className="container py-5 ">
        <h1 className="heading-abt font-primary text-center pb-5 fw-bold text-primary">OUR TEAM</h1>

        <div className="row m-5">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-center col-lg-4 text-center p-3">
              <img src={member.imgUrl} alt={member.name} className="img-fluid p-3 rounded-circle"/>
              <h3 className="text-uppercase">{member.name}</h3>
              <p className="font-accent text-secondary">{member.role_description}</p>

              <div className="icon">
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-x-twitter"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-google-plus-g"></i>
              </div>
              
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default AboutUs