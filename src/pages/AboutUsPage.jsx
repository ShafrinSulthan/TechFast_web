import React from 'react'
import AboutUs from '../components/AboutUs'
import { Technical } from '../components/Technical'
import { OurClients } from '../components/OurClients'
import { Footer } from '../components/Footer'

const AboutUsPage = () => {
  return (
    <div>
        <AboutUs/>
        <Technical />
        <OurClients />
        <Footer></Footer>
    </div>
  )
}

export default AboutUsPage