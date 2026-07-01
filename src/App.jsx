import React from 'react'
import { useState } from 'react'
import './App.css'

import HomePage from './pages/HomePage'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import ContactPage from './pages/ContactPage'
import Navbar from './components/Navbar'
import AboutUsPage from './pages/AboutUsPage'
import Pages from './components/Pages'
import BlogPage from './pages/BlogPage'
import Home1 from './components/home1'
import Home2 from './components/Home2'
import Home3 from './components/Home3'
import Service from './components/Service'
import ServiceDetails from './components/ServiceDetails'
import Portfolio1 from './components/Portfolio1'
import Portfolio2 from './components/Portfolio2'
import Portfolio3 from './components/portfolio3'
function App (){
  const [count, setCount] = useState(0)
  return (
    <>
<BrowserRouter>

        <Navbar/>

        <Routes>
            <Route path='/' element={<HomePage></HomePage>}/>
            <Route path='/contact' element={<ContactPage/>}/>
            <Route path='/about' element={<AboutUsPage/>}/>
            <Route path='/pages' element={<Pages/>}/>
            <Route path='/blog' element = {<BlogPage/>}/>
            <Route path='/home1' element = {<Home1/>}/>
            <Route path='/home2' element = {<Home2/>}/>
            <Route path='/home3' element = {<Home3/>}/>
            <Route path='/service' element = {<Service/>}/>
            <Route path='/service-details' element = {<ServiceDetails/>}/>
            <Route path="/portfolio1" element={<Portfolio1 />} />
            <Route path='/portfolio2' element = {<Portfolio2/>}/>
            <Route path='/portfolio3' element = {<Portfolio3/>}/>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App