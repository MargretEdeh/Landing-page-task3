import React from 'react'
import Vector from './Vector.svg'
import './pagetwo.css'
import facebook from './facebook.svg'
import insta from './insta.svg'
import twitter from './twitter.svg'

export default function Footer() {
  return (
    <div className='footer2'>
        <div className='foot-section'>
        <div className='foot-one'>
            <img className='logo-small' src={Vector} alt="logo"/>
            <h1 className='meta-icon'>Metabnb</h1>
        </div>
        <div className='foot'>
           <img src={facebook} alt='logo' className='social-icon'/>
           <img src={insta} alt='logo' className='social-icon'/>
           <img src={twitter} alt='logo' className='social-icon'/>
           {/* <img src={facebook} alt='logo' className='social-icon'/> */}
        </div>
        <div className='foot'>
        <p>@ 2022 Metabnb</p>
        </div>

        </div>
       <div className='foot-section' >
        <h2>community</h2>
        <p className='p-down'>NFT</p>
        <p className='p-down' >Tokens</p>
        <p className='p-down' >Landlords</p>
        <p className='p-down' >Discord</p>
       </div>
      <div className='foot-section'>
        <h2>Places</h2>
        <p className='p-down'>Castle</p>
        <p className='p-down'>Farms</p>
        <p className='p-down'>Beach</p>
        <p className='p-down'>Learn more</p>
      </div>
      <div className='foot-section'>
        <h2>About us</h2>
      <p className='p-down'>Road map</p>
      <p className='p-down'>Creators</p>
      <p className='p-down'>Career</p>
      <p className='p-down'>Contact us</p>

      </div>
    </div>
  )
}
