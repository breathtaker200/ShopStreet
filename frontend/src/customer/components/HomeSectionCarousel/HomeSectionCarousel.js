import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import HomeCard from '../HomeSectionCard/HomeCard'

const HomeSectionCarousel = () => {

    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5 },
    };
    const items=[1,1,1,1,1,1].map((item)=><HomeCard/>)
  return (
    <div className='relative lg:px-6 mb-5'>
      <div className='relative p-5 z-50'>
      <AliceCarousel
      mouseTracking
      items={items}
      disableButtonsControls
      responsive={responsive}
    />
      </div>
    </div>
  )
}

export default HomeSectionCarousel
