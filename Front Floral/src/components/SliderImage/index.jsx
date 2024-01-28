import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./style.scss"

function SliderImage() {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <>
    <div className="slider">
          <Slider {...settings}>
          <div className='photo'>
          <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/sl1-967x725.jpg" alt="" />
          <div className="text">
            <p>Floral</p>
            <h1>Excellent bouquets for you</h1>
          </div>
          </div>
          <div className='photo'>
          <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/sl7.jpg" alt="" />
          <div className="text">
            <p>Floral</p>
            <h1>Excellent bouquets for you</h1>
          </div>
          </div>
          <div className='photo'>
          <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/sl4.jpg" alt="" />
          <div className="text">
            <p>Floral</p>
            <h1>Excellent bouquets for you</h1>
          </div>
          </div>
      
        </Slider>
    </div>
   
    
    </>
  )
}

export default SliderImage