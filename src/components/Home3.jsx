import trusted from "../assets/trusted-bg.jpg";

const Home3 = () => {
  return (
    <div>
         <section className="about-hero">
                <img src={trusted} alt="About" className="trusted-img" />
                <div className="overlay"></div>
                <div className="about-content">
                  <h1>Home 3</h1>
                  <h5> Home <span>•</span>Home 3</h5>
                </div>
              </section>
    </div>
  )
}

export default Home3