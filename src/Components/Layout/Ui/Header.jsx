import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
function Header() {
  const[showMenu,setShow]=useState(false)
  const handleHamburg=()=>{
    setShow(!showMenu)
  }
  return (
    <header>
      <div className="container">
        <div className="grid navbar-grid">
          <div className="logo">
            <NavLink to="/"><h2>Country</h2></NavLink>
          </div>
          <nav className={showMenu?'mobile':'desktop'}>
            <ul>
              <li>
                <NavLink to="/" onClick={()=>setShow(false)}>Home</NavLink>
              </li>
              <li>
                <NavLink to="/about" onClick={()=>setShow(false)}>About</NavLink>
              </li>
              <li>
                <NavLink to="/country" onClick={()=>setShow(false)}>Country</NavLink>
              </li>
              <li>
                <NavLink to="/contact" onClick={()=>setShow(false)}>Contact</NavLink>
              </li>
            </ul>
          
          </nav>
            <div className="hamburg">
            <GiHamburgerMenu  size={30} color='white' onClick={handleHamburg}/>
          </div>
          
        </div>
      </div>
    </header>
  )
}

export default Header
