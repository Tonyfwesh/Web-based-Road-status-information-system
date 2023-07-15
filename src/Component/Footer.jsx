import React from 'react'
import "../Style/footer.css"

const Footer = () => {
  return (
    <div className='footer'>
      <div className='section1'>
     <h4>ABOUT US</h4>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor a odit officiis similique! Modi,
        deleniti eius laborum eum, 
        temporibus mollitia ad dolor dolores ut saepe hic dicta dolorem, doloremque totam!</p>
         <p className='sec'><span>Office:</span> 33 Fola Osibo Street, diobu milr 1, lorem<br/>             
                 ipsum dolor  Nigeria.</p>
                 <p className='sec'><span>Phone: </span>ipsum, lorem<br/> 
                 <span>Email: </span>info@loremipsum.com
                 </p>           
            
    </div>
    <div className='section2'>
    <h4>QUICK LINKS</h4>
    <p>-Home<br/>
       -About<br/>
       -Contact<br/>
       -Shop<br/>
       -FAQ<br/>
       -Privacy Policy</p>
    </div>
    <div className='section3'>
    <h4>SHOP</h4>
    <p>-Birthday Cake<br/> 
       -Wedding Cake<br/>
       -Cocunut Bread<br/>
       -Sardine Bread<br/>
       -Small Chops<br/>
       -Meatpie<br/>
       -Doughnut</p>
    </div>
    <div className='section4'>
    <h4>SUBSCRIBE TO OUR NEWSLETTER</h4>
    <p>JOIN OUR COMMUNITY<br/>lorem ipsum dolor</p>
    <input placeholder="enter your Email address" style={{fontWeight: "900", width:"310px", height:"70px",
    marginTop: "3%"}}/><br/>
    <button>SUBSCRIBE</button>
    </div>

    </div>
  )
}

export default Footer
