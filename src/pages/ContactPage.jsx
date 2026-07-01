import React from 'react'
import { Footer } from '../components/Footer'
import trusted from "../assets/trusted-bg.jpg";

const ContactPage = () => {
  return (
    <div>
      <section className="about-hero mb-5">
        <img src={trusted} alt="About" className="trusted-img" />
        <div className="overlay"></div>
        <div className="about-content">
          <h1>Contact</h1>
          <h5> Home <span>•</span>Contact</h5>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ContactPage