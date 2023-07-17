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
          <div className='input-feild'>
          <label for="name">Surname:</label><br/>
           <input type='text' placeholder='Surname'></input>
           <br/>
           <label for="name">First Name:</label><br/>
           <input type='text' placeholder='First Name'></input>
           <br/>
           <label for="name">Other Names:</label><br/>
           <input type='text' placeholder='Other Name'></input>
           <br/>
           <label for="email">E-mail:</label><br/>
           <input type='email' placeholder='E-mail'></input>
          </div>
          
          </div>
        </form>
        </div>      
    </div>
  )
}

export default Report
