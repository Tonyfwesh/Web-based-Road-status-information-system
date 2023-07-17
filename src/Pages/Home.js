import React from 'react'
import Homeslide from '../Component/Homeslide'
import "../Style/home.css"

const Home = () => {
  return (
    <div className="container">
      <Homeslide/>
      <div className='welcometext'>
  <h1 >Welcome to RoadStatusInfo!</h1>
  <h6> Your comprehensive web-based road status information system. We are thrilled to have you join us on this journey towards effortless navigation and smooth travels. Our system is designed to provide you with real-time updates and comprehensive information about road conditions, traffic congestion, and any disruptions like bad roads that may affect your journey
  With our user-friendly interface, you can easily access up-to-date road status information, plan your routes more efficiently, and make informed decisions to avoid any inconveniences. Stay ahead of the traffic, bypass construction zones, and minimize delays by relying on our reliable and accurate road status updates.
  Explore our intuitive features tailored to enhance your road experience in Enugu state. Thank you for choosing RoadStatusInfo. We look forward to providing you with exceptional service and assisting you in reaching your destination hassle-free. Sign up to get started!
  </h6>
  </div>

  <h1 className='service'>Our Services</h1>
  <h2 className='header'>Road Status</h2>
      <div className='flexbox'>
<div className='text'>

  <h6>At RoadStatusInfo, We understand the importance of staying informed when it comes to your daily commute, road trips, or travel plans and that's exactly why we've created RoadStatusInfo, your go-to destination for all things road-related in Enugu State.
     <br/>With RoadStatusInfo, you'll have access to road information whether you're a driver, traveler, or just curious about road conditions. You can Stay informed about the current real-time conditions of roads and even report bad roads which would help keep the roads safe and avoid traffic congestions and accidents. 
    <br/> Our user-friendly interface and intuitive map visualization make it easy to navigate, explore the road status information you need, plan your routes efficiently and make informed decisions all with the help of RoadStatusInfo. Sign up and start exploring the latest road status information  now!</h6>
</div>

<div className='img'
// data-aos="fade-left"
// data-aos-easing="ease-out-cubic"
// data-aos-duration="2000"
>
</div>
</div>



 <h1 className='header'>Report Bad Road</h1>
<div className='flexbox2'>
<div className='img1'
data-aos="fade-right"
data-aos-easing="ease-out-cubic"
data-aos-duration="2000"
>
</div>
<div className='text2'>

  <h6>At RoadStatusInfo, we believe in the power of community engagement to enhance our road networks. Our 'Report a Bad Road' feature allows you to contribute valuable information about road conditions, hazards, or issues in your area. We understand that encountering potholes, uneven surfaces, or other road problems can be frustrating and potentially hazardous  but with your active participation, we can collectively work towards improving road quality and safety.
By utilizing this feature, you can easily notify authorities, fellow commuters, and our team about any road-related concerns you come across as your input matters.

<br/>To report a bad road, simply provide details about the location, issue, and any relevant information through our user-friendly interface. You can even attach photos or additional notes to provide a comprehensive description.

<br/>Join RoadStatusInfo today and actively participate in creating a better road infrastructure. Your input matters, and together, we can foster a more efficient and enjoyable commuting experience for all road users. Let's improve our roads, one report at a time!</h6>
    </div>
    </div>
  
    <div className='message'>
<h1>Register with RoadStatusInfo today!</h1>
<h6>Dont miss out on this opportunity, join our growing community today and enjoy the benefits of seamless <br/>connectivity and real-time acess access to rod status information in Enugu state.</h6>
<button className='bttn' >SIGN IN</button>

</div>

    </div>
  )
}

export default Home
