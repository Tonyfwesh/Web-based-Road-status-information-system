import React from 'react'
import Slider from "react-slick";
import "../Style/slider.css"
import { carouselData } from '../data/carouselData';

var settings = {
    dots: true,
    infinite: true,
    speed: 6500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoPlaySpeed:5000,
    fade:true
    
  };
const Homeslide = () => {
  
  return (
    <div className='container'>
       <Slider {...settings} className='slide'>
    
        {carouselData.map((item, index) => (
          <div key={index} className='setwidth'>
        <div className='slide-details' style={{backgroundImage:`url(${item.url})`}}>
          <div className='homeslide-text'>
          <h1>{item.text}</h1>
          <h3>{item.subtext}</h3>
          </div>
          </div>


          </div>
        ))}
        
       {/* <h1>Welcome to RoadStatusInfo!</h1>
         <h3>Your go-to source for up-to-date road status information in Enugu state. Stay informed about traffic conditions, road closures, and even report a bad road. Start exploring with RoadStatusInfo!</h3>
      </div>
      <div className='slide-details2'>
      <h1>Check Road Status</h1>
      <h3>Stay informed about real-time traffic updates, road closures, and accidents. Plan your routes efficiently with RoadStatusInfo.</h3>
      </div>
      <div className='slide-details3'>
      <h1>Report a Bad Rod</h1>
      <h3>Help us enhance road quality and safety by reporting  potholes, damaged signs, or other road concerns with RoadStatusInfo.</h3> */}
     
      
    </Slider>
    </div>
  )
}

export default Homeslide
