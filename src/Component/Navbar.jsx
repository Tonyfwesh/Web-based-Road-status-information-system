import React from 'react'
import "../Style/style.css"
import {NavLink} from "react-router-dom"

const Navbar = () => {
  return (
    <div>
      <div className='nav-bar'>
        <div className='head-text'>
        <NavLink  style={{textDecoration:"none", color:"white",fontSize:"25px"}}  exact to="#">RoadStatusInfo</NavLink>
        </div>
        <div className='nav-menu'>
          <NavLink  className="href" exact to="/">Home</NavLink>
          <NavLink  className="href" to="/About">About</NavLink>
          <NavLink  className="href" to="/RoadStatus">Road Status</NavLink>
          <NavLink  className="href" to="/Report">Report A Bad Road</NavLink>
          <NavLink  className="href" to="/Signin">Sign In</NavLink>
          <NavLink   to="/Signup"><button className='btn'>Sign Up</button></NavLink>

        </div>
      </div>
    </div>
  )
}

export default Navbar
