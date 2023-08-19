import React, {useState, useRef} from 'react'
// import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import cookies from "universal-cookie"
import { useAuth } from "../context/AuthContext";
import "../Style/signup.css"

const Signup = () => {
    
     const [error, setError] = useState("")
     const [loading, setLoading]= useState(false)

    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()
    const {signup} = useAuth()

    const navigate = useNavigate()


  async function HandleSubmit(e){
    e.preventDefault()
    
    if(passwordRef.current.value !== confirmPasswordRef.current.value){
      return setError("password do not match")
    }

     try{
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      navigate("/Login")
     } catch(err){
      setError("Failed to create account")
      console.error(err)
     }

    setLoading(false)
  }
  
   
  return (
    <>
   
      <div className="display1">
    
     
      <div className='holderrr'>
        <h1 className='headtextt'>Create account</h1>
        <p className='htextt2'>Please fill in your details to register </p>
        {/* {currentUser.email} */}
        {error && <div className="bg-red-500 w-[500px] h-12 justify-center 
        font-bold my-4 flex items-center text-white">{error}</div>}
        <form onSubmit={HandleSubmit}>
        <div className='columnn'>
          
          <label className='textt1'>Surname</label>
          <input type="etext" placeholder="surname" ></input>

          <label className='textt1'>firstname</label>
          <input type="etext" placeholder="surname" ></input>

          <label className='textt1'>username</label>
          <input type="etext" placeholder="surname" ></input>

          <label className='textt1'>Gender</label>
          <select>
           <option value=""> </option>
            <option value="">Male</option>
            <option value="">Female</option>
           </select>

           <label className='textt1'>Email</label>
          <input type="email"
           placeholder="e.g example123@example.com"
           
           
           required
           ref={emailRef}
            className='text-black w-[500px] border-blue-800 text-lg pl-2 h-12 border   bg-transparent' />
          
          <label className='text-xl text-black'>Password</label>
          <input type="password"
           placeholder="*********"
           ref={passwordRef}
            className='text-black w-[500px] border-blue-800 text-lg pl-2 h-12 border rounded-xl  bg-transparent' />
          
          <label className='text-xl text-black'>Confirm Password</label>
          <input type='password'
           placeholder='*********' 
           ref={confirmPasswordRef}
           required
           className='text-black w-[500px] h-12 text-lg pl-2 border rounded-xl border-blue-800 bg-transparent' />

          <button disabled={loading} type='submit' className='register'>Register</button>
        </div>
        </form>
        <p className='htextt3'>Already have an account?
         <span className='htextt3'><Link to="/signin">Login</Link></span></p>
        
       
        <p  className='googlee'> 
        {/* <FcGoogle className='text-2xl'/> */}
        &nbsp;&nbsp;Sign Up With Google</p>
      {/* <button onClick={logout}>logout</button> */}
      </div>
      
      </div>
    



   

    </>
  )
}

export default Signup