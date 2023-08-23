import React, {useState, useEffect} from 'react'
import Map from '../Component/Map'
import "../Style/roadstatus.css"
import img1 from "../image/roadsatus2.jpg"
import { Navigate } from 'react-router-dom'
import {useAuth} from "../context/AuthContext"
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import axios from 'axios'
import { db } from '../config/firebase';
import { collection, getDocs, addDoc } from "firebase/firestore"

const RoadStatus = () => {

  const [newName, setNewName] = useState("")
  const [newReview, setNewReview] = useState("")
  const [users, setUsers] = useState([])

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersColectionRef)
      setUsers(data.docs.map((docs) => ({ ...docs.data(), id: docs.id })))
    }
    getUsers()
  }, [])

  const usersColectionRef = collection(db, "review")

  const createUser = async () => {
    await addDoc(usersColectionRef, { name: newName, email: newReview })


  }


  const {currentUser} = useAuth()
  if (!currentUser) {
    return <Navigate to="/Login" />
  }


  

  
  return (
    <>
    <Navbar/>
     {/* /<div className='header'>
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
          </div> */}
          <div className='header'>
      Tffic Flow Condition Status
      <p>Find out the trafffic condition in your area</p>
      </div> 
      <div className='mapstatus'>
<h1>GET AHEAD OF TRAFFIC JAMS!</h1>
<h6>Beat the traffic and stay ahead of delays! Get access to real-time traffic updates and ensure a smooth journey. 
  Don't let congestion catch you off guard. Plan your route with the latest traffic status at your fingertips. </h6>
<button className='bttn'> <a className= "omo" href="https://road-status-traffic.w3spaces.com/traffic.html">View Traffic Status</a></button>

</div>

      <div className='header'>
      Road Condition Status
      <p>Tell us about the road condition in your area</p>
      </div> 
      <div>
      <input type='text' className='ccomment'
       onChange={(e) => { setNewName(e.target.value) }}
       placeholder='Enter your username'/>
      <label for="commentt" className='commentt'></label>
           <textarea 
            onChange={(e) => { setNewReview(e.target.value) }}
           className='typee' type='text' placeholder='Please type your current road cndition here '
           ></textarea>
           <button className='link'onClick={createUser}>Add messge</button>
           </div>

           {users.map((user, index) => (
              <div key={index} className=' contain'>
              <p className='mini-text'>{user.name}</p>
              <div className='rectangle'>
                <p className='chat'>
               {user.email}
                </p>
                
                </div>
                <hr/>
                </div>
              ))}
     

      
<Footer/>
    </>
  )
}

export default RoadStatus
