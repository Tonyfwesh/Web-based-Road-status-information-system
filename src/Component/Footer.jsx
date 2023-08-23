import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import "../Style/footer.css"

const Footer = () => {
  const navigate = useNavigate()
  return (
    <div className='footer'>
      <div className='section1'>
     <h4>ABOUT US</h4>
     <p className='wel'>Roadstatusinfo, your comprehensive web-based road status information system. We are thrilled to have you join us on this journey towards effortless navigation and smooth travels. Our system is designed to provide you with real-time updates and comprehensive information about bad road conditions, traffic congestion, and any disruptions that may affect your journey.
  Explore our intuitive features tailored to enhance your road experience in Enugu state!</p>
         <p className='sec'><span>Office: </span> 33 independence layout, odim, Nsukka<br/>             
                 </p>
                 <p className='sec'><span>Phone: </span>08165139116<br/> 
                 <span>Email: </span>anthonyezike10@gmail.com
                 </p>           
            
    </div>
    <div className='section2'>
    <h4 >QUICK LINKS</h4>
    <p  className="navi" onClick={() => {navigate("/")}}>Home<br/></p>
      <p className="navi" onClick={() => {navigate("/About")}}>About <br/></p>
      <p  className="navi" onClick={() => {navigate("/RoadStatus")}}>Road Status<br/></p>
      <p  className="navi" onClick={() => {navigate("/Report")}}>Report Bad Road</p>
     
       
    </div>
    
    <div className='section4'>
    <h4> SUBSCRIBE TO OUR NEWSLETTER </h4>
    <p>JOIN OUR COMMUNITY<br/>lorem ipsum dolor</p>
    <input placeholder="enter your Email address" style={{fontWeight: "300", width:"310px", height:"45px",
    marginTop: "3%"}}/><br/>
    <button>SUBSCRIBE</button>
    </div>

    </div>
  )
}

export default Footer
