import React from 'react'
import "../styles/header.css"
const Header = () => {
  return (
    <div className='header'>
        <div className='comp'>
        <span>Home</span>
        <span>About Us</span>
        <span>Pages</span>
        <span>Blog</span>
        <span>My Dashboard</span>
        <span>Contact us</span>
        <div className='btn'>
        <span><button type="button" class="btn btn-danger">Submit a Job</button></span>
        <span><button type="button" class="btn btn-info">Create Resume</button></span></div>
        </div>
      
    </div>
  )
}

export default Header
