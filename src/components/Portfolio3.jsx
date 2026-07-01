import trusted from "../assets/trusted-bg.jpg";

const Portfolio3 = () => {
  return (
    <div>
      <section className="about-hero">
        <img src={trusted} alt="About" className="trusted-img" />
        <div className="overlay"></div>
        <div className="about-content">
          <h1>Portfolio 3</h1>
          <h5> Home <span>•</span>Portolio 3</h5>
        </div>
      </section>
    </div>
  )
}

export default Portfolio3