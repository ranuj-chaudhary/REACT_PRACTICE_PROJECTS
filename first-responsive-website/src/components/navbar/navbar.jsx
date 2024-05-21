import React from 'react'
import './navbar.css'
import { RiMenu3Line,  RiCloseLine } from "react-icons/ri";
const navbar = () => {
  return (
    <div className='gpt__navbar'>
      <div className='gpt__navbar-links'>
        <div className="gpt__navbar-links_logo">
          <img src="" alt="" />
        </div>
        <RiMenu3Line size={18} color="white" 
            className="menu-icon" />
        <RiCloseLine  size={18} color="white" 
            className="menu-icon"  />
      </div>
    
    </div>
  )
}

export default navbar

