import React, {useState, useRef} from 'react'
// import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import cookies from "universal-cookie"
import { useAuth } from "../context/AuthContext";


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
   
      <div className="flex w-full h-screen ">
    
     
      <div className='bg-white w-3/5  flex flex-col justify-center items-center m-0 p-0'>
        <h1 className='text-4xl text-blue-800 font-bold mt-5'>Create account</h1>
        <p className='text-blue-800 pt-2 text-sm'>Embark on Memorable Tours Across the world </p>
        {/* {currentUser.email} */}
        {error && <div className="bg-red-500 w-[500px] h-12 justify-center 
        font-bold my-4 flex items-center text-white">{error}</div>}
        <form onSubmit={HandleSubmit}>
        <div className='flex flex-col gap-3'>
          <label className='text-xl text-black'>Email</label>
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

          <button disabled={loading} type='submit' className='w-[500px] hover:bg-gray-900 h-12 bg-black text-white text-lg rounded-xl mt-6'>Register</button>
        </div>
        </form>
        <p className='pt-2 text-lg w-[500px]   text-blue-800'>Already have an account?
         <span className='cursor-pointer text-black'><Link to="/Login">Login</Link></span></p>
        
       
        <p  className='mt-0 text-lg text-black hover:bg-blue-950 w-[500px]  h-14 flex justify-center items-center cursor-pointer hover:rounded-xl'> 
        {/* <FcGoogle className='text-2xl'/> */}
        &nbsp;&nbsp;Sign Up With Google</p>
      {/* <button onClick={logout}>logout</button> */}
      </div>
      <div className="w-2/5 bg-center bg-cover object-cover h-full"
      style={{backgroundImage: `url("https://cdn.pixabay.com/photo/2014/06/06/09/36/sydney-opera-house-363244_1280.jpg")`}}>
      </div>
      </div>

   

    </>
  )
}

export default Signup