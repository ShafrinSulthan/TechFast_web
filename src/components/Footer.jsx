import './css/Footer.css'
import logo2 from '../assets/logo2.png';

export const Footer = () => {
    return (
        
        <footer>
            <div className="footer">
                <section className="contact">
                    <div className="contact-Subscribe">
                        <h2>Sign Up Our Newsletter</h2>
                        <div className="sub-box">
                            <p>We Offer An Informative Monthly Technology Newsletter - Check It Out.</p>
                            <div className="input-subscribe">
                                <input type="email" placeholder="Enter Your Email" />
                                <button className="button-subscribe">Subscribe Now</button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="footer-section">
                    <div className="footer-middle">
                        <div className="ft-1">
                            <img src={logo2} alt="Logo" className="logo" />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti reprehenderit architecto eum laudantium consectetur quod neque deserunt ipsa a nostrum porro mollitia est saepe cupiditate odio, ex maxime eaque assumenda.</p>
                            <div className="scoail-media-icons">
                                <i className="fa-brands fa-facebook icon"></i>
                                <i className="fa-brands fa-twitter icon"></i>
                                <i className="fa-brands fa-youtube icon"></i>
                                <i className="fa-brands fa-linkedin icon"></i>
                            </div>
                        </div>

                        <div className="our-services">
                            <h3>Our Services</h3>
                            <ul>
                                <li><a href="#">Digital Marketing</a></li>
                                <li><a href="#">Web Development</a></li>
                                <li><a href="#">Startup Solutions</a></li>
                                <li><a href="#">SEO Optimization</a></li>
                                <li><a href="#">App Optimization</a></li>
                            </ul>
                        </div>
                        <div className="our-services">
                            <h3>Useful Links</h3>
                            <ul>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Case Study</a></li>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms & Conditions</a></li>
                            </ul>
                        </div>


                        <div className="contact-info">
                            <h3>Contact Info</h3>

                            <ul>
                                <li>
                                    <i className="fa-solid fa-phone"></i>
                                    <div>
                                        <span className="title">Phone</span>
                                        <p>080 707 555-321</p>
                                    </div>
                                </li>

                                <li>
                                    <i className="fa-solid fa-envelope"></i>
                                    <div>
                                        <span className="title">Email</span>
                                        <p>info@techfast.com</p>
                                    </div>
                                </li>

                                <li>
                                    <i className="fa-solid fa-location-dot"></i>
                                    <div>
                                        <span className="title">Address</span>
                                        <p>526 Melrose Street, Water Mill, 11976 New York</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>
                </section>
                <section className="footer-bottom">
                    <div className="footer-content" id="footer-bt">
                        <p> 2026 Techfast- All Rights Reserved.</p>
                        <div className="terms-plicy">
                            <a href="">Terms & Conditions </a><span> | </span>
                            <a href="">Privacy Policy</a>
                        </div>
                    </div>
                </section>
            </div>
        </footer>
    )
}
