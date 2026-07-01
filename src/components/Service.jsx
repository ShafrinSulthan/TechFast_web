import trusted from "../assets/trusted-bg.jpg";

const Service = () => {
  return (
    <div>
      <section className="about-hero">
        <img src={trusted} alt="About" className="trusted-img" />
        <div className="overlay"></div>
        <div className="about-content">
          <h1>Service</h1>
          <h5> Home <span>•</span>Service</h5>
        </div>
      </section>
    </div>
  )
}

export default Service