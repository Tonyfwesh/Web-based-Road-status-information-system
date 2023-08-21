import React, {useState, useRef} from 'react'
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate} from 'react-router-dom';
import { auth, googleProvider} from "../config/firebase"
// import cookies from "universal-cookie"
import { useAuth } from "../context/AuthContext";
// import { Alert } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.css';
import "../Style/signin.css"

const Signin = () => {
    
     const [error, setError] = useState("")
     const [loading, setLoading]= useState(false)

    const emailRef = useRef()
    const passwordRef = useRef()
    const {login} = useAuth()

    const navigate = useNavigate()


  async function HandleSubmit(e){
    e.preventDefault()
  
     try{
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      navigate("/")
     } catch(err){
      setError("Failed to sign in")
      
     }

    setLoading(false)
  }
  
   
  return (
    <>
   
      <div className="display">
    
     
      <div className='holderr'>
        <h1 className='headtext'>sign in</h1>
        <p className='htext2'>Please enter your details to login </p>
        {/* {currentUser.email} */}
        {error && <div className="error">{error}</div>}
        <form onSubmit={HandleSubmit}>
        <div className='column'>
          <label className='text1'>Email</label>
          <input type="email"
           placeholder="e.g example123@example.com"
           
           required
           ref={emailRef}
            className='text-black w-[500px] border-blue-800 text-lg pl-2 h-12 border rounded-xl  bg-transparent' />
          
          <label className='pword'>Password</label>
          <input type="password"
           placeholder="*******"
           ref={passwordRef}
            className='text-black w-[500px] border-blue-800 text-lg pl-2 h-12 border rounded-xl  bg-transparent' />
          
          
          <button disabled={loading} type='submit' className='login'>
            Login</button>
        </div>
        </form>
        <div className='flex w-[500px] justify-between items-center text-lg pt-4 pb-4'>
        <p className='htext3'>Don't have an account yet?
         <span className='cursor-pointer text-black'><Link to="/SIgnup"> Register</Link></span></p>
         <p className='cursor-pointer text-red-500 hover:text-red-700 underline'>
          <Link to= "/signup" >forgot password</Link></p>
         </div>
       
        <p  className='google'>
           <FcGoogle className='text-2xl'/>
           Continue With Google</p>
      {/* <button onClick={logout}>logout</button> */}
      </div>
      
      </div>

   

    </>
  )
}

export default Signin