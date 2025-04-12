import React, { useState } from 'react'
import './Navbar.css'
import Mobilenav from './Mobilenav/Mobilenav'


function Navbar() {

  const [openMenu,setOpenMenu]=useState(false)

  const toggleMenu=()=>{
    setOpenMenu(!openMenu)
  }
  const menuIcon = openMenu ? 'close' : 'menu';

  return (
    <div>
      <Mobilenav isopen={openMenu} togglemenu={toggleMenu} />

      <nav className='nav-wrapper'>
        <div className='nav-content'>   
            <img className='logo' src="src/components/Navbar/logo-removebg-preview.png" alt="Logo" />
            <ul>
              <li><a className='menu-item' href='#Section'>Home</a></li>
              <li><a className='menu-item' href='#Skills'>Skills</a></li>
              <li><a className='menu-item' href='#Project'>Project</a></li>
              <li><a className='menu-item' href='#Contact'>Contact</a></li>
              <button className='contact-btn' onClick={() => alert('Hire me button clicked!')}>Hire me</button>
            </ul>

            <button className='menu-btn' onClick={toggleMenu}>
              <span className='material-symbols-outlined' style={{ fontSize: "1.8rem" }}>
                {menuIcon}   
              </span>
            </button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar