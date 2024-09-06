import React from 'react'
import MainCarousel from '../components/MainCarousel/MainCarousel'
import HomeSectionCarousel from '../components/HomeSectionCarousel/HomeSectionCarousel'
import Footer from '../components/FooterComp/Footer'

const HomePage = () => {
  return (
    <div>
        <MainCarousel/>
        <HomeSectionCarousel/>
        <HomeSectionCarousel/>
        <HomeSectionCarousel/>
        <Footer/>
    </div>
  )
}

export default HomePage