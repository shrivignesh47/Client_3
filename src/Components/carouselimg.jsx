import React from 'react'
import { CCarousel, CCarouselItem, CImage } from '@coreui/react'
import img2 from '../Assets/briyani1.png'
export const CarouselWithIndicatorsExample = () => {
  return (
    <CCarousel controls indicators >
      <CCarouselItem style={{marginTop:'0vh'}}>
        <CImage className="d-block w-100"  src={img2}  style={{height:'602px',width:'100px', marginLeft:'60vh'}}alt="slide 1" />
      </CCarouselItem>
      <CCarouselItem>
      <CImage className="d-block w-100"  src={img2}  style={{height:'632px',width:'auto'}}alt="slide 1" />
      </CCarouselItem>
      <CCarouselItem>
      <CImage className="d-block w-100"  src={img2}  style={{height:'632px',width:'100px'}}alt="slide 1" />
      </CCarouselItem>
    </CCarousel>
  )
}
