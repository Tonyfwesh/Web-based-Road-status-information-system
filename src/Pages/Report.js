import React from 'react'
import "../Style/badroad.css"

const Report = () => {
  return (
    <div className='holder'>
      <div className='formbox'>
        <h1>Report a Bad Road</h1>
        <h6>Kindly report a  Road you consider bad. We shall attend to your feedback as soon as possible.</h6>
        <form>
          <div className='input-group'>
          <label for="name">Surname:</label>
           <input type='text' placeholder='Surname'></input>
          
           <label for="name">First Name:</label>
           <input type='text' placeholder='First Name'></input>
           
           <label for="name">Other Names:</label>
           <input type='text' placeholder='Other Name'></input>
           
           <label for="email">E-mail:</label>
           <input type='email' placeholder='E-mail'></input>
         
           <label for="email">Phonenumber:</label>
           <input type='digit' placeholder='Phonenumber'></input>
           
           <label for="state">State:</label>
           <input type='text' placeholder='Enugu'></input>
           
           <label for="city">City:</label>
           <input type='text' placeholder='Please select'></input>
           
           <label for="location">Address of bad road:</label>
           <input type='text' placeholder=' '></input>
         
           <label for="badroad">HOW WOULD YOU rate THE STATE OF THE ROAD:</label>
           <input type='option' placeholder=' '></input>
           
           <label for="badroad">DESCRIBE THE bad ROAD:</label>
           <textarea type='text' placeholder='Please type our description here '></textarea>
          
          </div>
        </form>
        </div>      
    </div>
  )
}

export default Report
