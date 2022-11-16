import React from 'react'
import { NavLink } from 'react-router-dom'
import './place.css'
import { IoMdClose } from "react-icons/io";

// import { 
// BiMenuAltRight
//  } from "react-icons/bi";
// // BiMenuAltRight

export default function MobileMenu({toggle ,showModal}) {
  return (
    <div className='mobile-nav'>
 <IoMdClose onClick={toggle} className='menuu2' /> 

      <ul>
      <li className='li1' ><NavLink onClick={toggle} to='/' className='nav-link'> Home</NavLink> </li>
     <li className='li1' > <NavLink onClick={toggle} to='/place' className='nav-link'>Place to Stay</NavLink></li>
     <li className='li1' > <NavLink className='nav-link'>NFTs</NavLink></li>
      <li className='li1' > <NavLink className='nav-link'>Community</NavLink></li>
      <li  className='li1'>
      <button  onClick={showModal} className='btn2'> Connect wallet</button>
      </li>
      </ul>

    </div>
  )
}
