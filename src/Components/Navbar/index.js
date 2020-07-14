import React from 'react'
import './style.css'
import {FaBars} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const Navbar=()=>{
    return(
        <nav className="navbar navbar-expand-lg mt-3">
  <NavLink className="navbar-brand" to='/'>Renewables & Technologies</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon">
        <FaBars color='white' />
    </span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav  ml-auto">
      <NavLink className="nav-item nav-link mr-5" to='/'>Home <span class="sr-only">(current)</span></NavLink>
      <NavLink className="nav-item nav-link mr-5" to='/services'>Services</NavLink>
      <NavLink className="nav-item nav-link mr-5" to='/about'>About</NavLink>
    </div>
  </div>
</nav>
    )
}

export default Navbar