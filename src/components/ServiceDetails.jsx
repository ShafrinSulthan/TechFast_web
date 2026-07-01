import trusted from "../assets/trusted-bg.jpg";

const ServiceDetails = () => {
  return (
    <div>
      <section className="about-hero">
        <img src={trusted} alt="About" className="trusted-img" />
        <div className="overlay"></div>
        <div className="about-content">
          <h1>Serive Details</h1>
          <h5> Home <span>•</span>Serive Details</h5>
        </div>
      </section>
    </div>
  )
}

export default ServiceDetails