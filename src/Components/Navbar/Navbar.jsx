import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../Assets/Logo.png'

export default function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-md p-3 mt-3">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img src={Logo} alt="Digital-Logo" loading='lazy'/>
        </NavLink>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav ms-auto mt-2 mt-lg-0 text-center">
            <li className="nav-item">
              <NavLink className="nav-link home" activeclassname="active" to="/">Home</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" activeclassname="active" to="/about">About</NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink className="nav-link" activeclassname="active" to="/services">Services</NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink className="nav-link" activeclassname="active" to="/projects">Projects</NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink className="nav-link" activeclassname="active" to="/blog">Blog</NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink className="nav-link" activeclassname="active" to="/contacts">Contact</NavLink>
            </li>

            <li className="nav-item">
              <button className="btn rounded-pill nav-button text-white">Let's Talk</button>
            </li>

          </ul>
        </div>
      </div>
    </nav>
    
    </>
  )
}
