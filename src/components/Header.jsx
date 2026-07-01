import "./css/Header.css";

const Header = () => {
  return (
    <header className="web-pg">
      <div className="hero-section">
        
        <div className="heronic">
          <h3 className="heading">IT SOLUTIONS & TECHNOLOGY SERVICES</h3>
          
          <h1 className="sub-heading">
            Web Design, Develop, Implement & <span className="highlight-text">IT Solutions</span>
          </h1>
          
          <p className="heading-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua, magna aliqua. ipsum is simply dummy text 
            of the printing.
          </p>
          
          <div className="btn-container">
            <button className="button-secondary">Learn More</button>
            <button className="button-primary">Our Services</button>
          </div>
        </div>

        <div className="hero-image-container">
          <img 
            src="https://cutesolution.com/html/techfast/assets/img/home-font.png" 
            alt="Hero Illustration" 
            className="hero-img"
          />
        </div>

      </div>
    </header>
  );
};

export default Header;