import React from 'react'

import Header from '../components/Header'
import { OurServices } from '../components/OurServices'
import { CountSection } from '../components/CountSection'
import { Freaturs } from '../components/Freaturs'
import { Pricing } from '../components/Pricing'
import { Technical } from '../components/Technical'
import { OurClients } from '../components/OurClients'
import { Footer } from '../components/Footer'

const HomePage = () => {
    return (
        <div>
            <Header/>
            <OurServices />
            <CountSection />
            <Freaturs />
            <Pricing />
            <Technical />
            <OurClients />
            <Footer></Footer>
        </div>
    )
}

export default HomePage