import React from 'react'
import { CCarousel, CCarouselItem, CImage } from '@coreui/react'
import img2 from '../Assets/briyani3.png'
import img3 from '../Assets/briyani7.png'
import img4 from '../Assets/briyani4.png'
export const CarouselWithIndicatorsExample = () => {
  return (
    <CCarousel controls indicators >
      <CCarouselItem style={{marginTop:'0vh'}}>
        <CImage className="d-block w-100"  src={img3}  style={{height:'602px',width:'100px', marginLeft:'60vh'}}alt="slide 1" />
      </CCarouselItem>
      <CCarouselItem>
      <CImage className="d-block w-100"  src={img4}  style={{height:'600px',width:'100px', marginLeft:'60vh'}}alt="slide 1" />
      </CCarouselItem>
      <CCarouselItem>
      <CImage className="d-block w-100"  src={img2}  style={{height:'602px',width:'100px', marginLeft:'60vh'}}alt="slide 1" />
      </CCarouselItem>
    </CCarousel>
  )
}
