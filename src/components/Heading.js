import React from 'react'
import metanum from './metanum.svg'
import house from './house.svg'
import { NavLink } from 'react-router-dom'

export default function Heading() {
  return (
    <div className='header'>
    <div>
    <img src={house} alt='logo'/>
        <img src={metanum} alt='logo'/>
    </div>
       
        <div className='links' >
            <ul className='ul-links'>
                <li><NavLink className='nav-link'> Home</NavLink> </li>
                <li> <NavLink className='nav-link'>Place to Stay</NavLink></li>
                <li> <NavLink className='nav-link'>NFTs</NavLink></li>
                <li> <NavLink className='nav-link'>Community</NavLink></li>
            </ul>
        </div>
        <button  className='btn1'> Connect wallet</button>
    </div>
  )
}
