import React, { useState } from 'react'
import "../Style/style.css"
import {NavLink, useNavigate} from "react-router-dom"
import { useAuth } from '../context/AuthContext'


const Navbar = () => {

  const [error, setError] = useState("")
  const {currentUser, logout} = useAuth()
  const navigate = useNavigate()

  async function handleLogout(){
    setError("")
    try{
      await logout()
      navigate("/Signin")
    } catch{
      setError("failed to logout")
    }
  }
  return (

   
    <>
      <div className='nav-bar'>
        <div className='head-text'>
        <NavLink  style={{textDecoration:"none", color:"white",fontSize:"25px"}}  exact to="#">RoadStatusInfo</NavLink>
        </div>
        <div className='nav-menu'>
          <NavLink  className="href" exact to="/">HOME</NavLink>
          <NavLink  className="href" to="/About">ABOUT</NavLink>
          <NavLink  className="href" to="/RoadStatus">ROAD STATUS</NavLink>
          <NavLink  className="href" to="/Report">REPORT A BAD ROAD</NavLink>
          <div>{currentUser.email}</div>
          <NavLink   to="/Signup" style={{fontweight: "bold"}}>
            <button onClick={handleLogout} className='btn'>Logout</button></NavLink>

        </div>
      </div>
    </>
  )
}

export default Navbar
