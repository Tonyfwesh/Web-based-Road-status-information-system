import React from 'react'
import Map from '../Component/Map'
import "../Style/roadstatus.css"
import img1 from "../image/roadsatus2.jpg"

const RoadStatus = () => {
  return (
    <>
      <Map/>
     <div className='header'>
     Bad Road Status
      </div> 
      <div className='grid'>
        <div className='content'
        style={{ backgroundImage: `url(${img1})` }}>
        <h2>Ngwa Road</h2>
        <p>Click for more details</p>
        </div>
        <div className='content'
         style={{ backgroundImage: `url(${img1})` }}>
          <h2>Ngwa Road</h2>
        <p>Click for more details</p>
        </div>
        <div className='content'
         style={{ backgroundImage: `url(${img1})` }}>
          <h2>Ngwa Road</h2>
        <p>Click for more details</p>
          </div>
      </div>
      <div className='header'>
      Road Condition Status
      <p>Tell us about the road condition in your area</p>
      </div> 
      <div className='contain'>
        <div className='btn-wrapper'>
        <button className='link'>Add messge</button>
        </div>
        <p className='mini-text'>Nura Aisha</p>
        <div className='grid2'>
        <div className='rectangle'>
          <p>
          The future of any website depends on its conversion rate.
           If the website is said to be having a
            good conversion rate, then it means they
             are making a good revenue, and if the.
              If the website is said to be having a 
              good conversion rate, then it means they
               are making a good revenue The accompanying
                music video was directed by Xavier Dolan 
                and co-stars Adele and Tristan Wilds. 
                The music video for the song broke the Vevo 
          </p>
         
          </div>
          <div className='timestamp'>22/08/2018 <br/> 01:05pm</div>
        </div>
        <hr/>
        <p className='mini-text'>Anthony Ezike</p>
        <div className='grid2'>
        <div className='rectangle'>
          <p>
          The future of any website depends on its conversion rate.
           If the website is said to be having a
            good conversion rate, then it means they
             are making a good revenue, and if the.
              If the website is said to be having a 
              good conversion rate, then it means they
               are making a good revenue The accompanying
                music video was directed by Xavier Dolan 
                and co-stars Adele and Tristan Wilds. 
                The music video for the song broke the Vevo 
          </p>
         
          </div>
          <div className='timestamp'>22/08/2018 <br/> 01:05pm</div>
        </div>
        <hr/>
        <p className='mini-text'>Nura Aisha</p>
        <div className='grid2'>
        <div className='rectangle'>
          <p>
          The future of any website depends on its conversion rate.
           If the website is said to be having a
            good conversion rate, then it means they
             are making a good revenue, and if the.
              If the website is said to be having a 
              good conversion rate, then it means they
               are making a good revenue The accompanying
                music video was directed by Xavier Dolan 
                and co-stars Adele and Tristan Wilds. 
                The music video for the song broke the Vevo 
          </p>
         
          </div>
          <div className='timestamp'>22/08/2018 <br/> 01:05pm</div>
        </div>
        <hr/>
      </div>

    </>
  )
}

export default RoadStatus
