import trusted from "../assets/trusted-bg.jpg";

const Pages = () => {
  return (
    <div>
      <section className="about-hero">
        <img src={trusted} alt="About" className="trusted-img" />
        <div className="overlay"></div>
        <div className="about-content">
          <h1>Page</h1>
          <h5> Home <span>•</span>Page</h5>
        </div>
      </section>
    </div>
  )
}

export default Pages