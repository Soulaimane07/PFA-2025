import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Services from './Services'
import Footer from './Footer'
import LastBox from './LastBox'
import Box1 from './Box1'
import Box2 from './Box2'

function LandingPage() {
  return (
    <div>
       <Navbar/>
       <Header/>
       <Services />
       <Box1 />
       <Box2 />
       <LastBox />
       <Footer />
    </div>
  )
}

export default LandingPage