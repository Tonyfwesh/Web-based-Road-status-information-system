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
          <NavLink  className="href" exact to="/">HOME</NavLink>
          <NavLink  className="href" to="/About">ABOUT</NavLink>
          <NavLink  className="href" to="/RoadStatus">ROAD STATUS</NavLink>
          <NavLink  className="href" to="/Report">REPORT A BAD ROAD</NavLink>
          <NavLink  className="href" to="/Signin">SIG IN</NavLink>
          <NavLink   to="/Signup"><button className='btn'>SIGN UP</button></NavLink>

        </div>
      </div>
    </div>
  )
}

export default Navbar
