import React , {useState} from 'react'
import metanum from './metanum.svg'
import house from './house.svg'
import Modal from './Modal'
import './place.css'
import { IoMdClose } from "react-icons/io";
import { NavLink } from 'react-router-dom'
import MobileMenu from './MobileMenu';
import { 
  BiMenuAltRight
   } from "react-icons/bi";
  // BiMenuAltRight

export default function Heading() {
  const [menu , setMenu] = useState(false)
  const [modal , setModal]= useState(false)
  const toggle = ()=>{ setMenu(!menu)}
  const showModal = ()=>{
    setModal(!modal)
  }
  const MenuTag= <BiMenuAltRight onClick={toggle} className='menuu'/>
  const Cancel =  <IoMdClose onClick={toggle} className='menuu2' /> 
  return (
    <div className='header'>
      <div className='header2'>
    <div>
    <img src={house} alt='logo'/>
        <img src={metanum} alt='logo'/>
    </div>
       
        <div className='links' >
            <ul className='ul-links'>
                <li><NavLink  to='/' end className='nav-link'> Home</NavLink> </li>
                <li> <NavLink to='/place' className='nav-link'>Place to Stay</NavLink></li>
                <li> <NavLink className='nav-link'>NFTs</NavLink></li>
                <li> <NavLink className='nav-link'>Community</NavLink></li>
            </ul>
        </div>
    
       
        {menu ? Cancel: MenuTag}
         {menu && 
         <MobileMenu  toggle={toggle} showModal={showModal} />
}
       </div>
        <button onClick={showModal} className='btn1'> Connect wallet</button>
        {modal && 
        <Modal showModal={showModal} />
        }
    </div>
  )
}
