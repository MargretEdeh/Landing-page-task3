import React from 'react'
import './place.css'
import img66 from './img66.svg'
import img69 from './img69.svg'

export default function Modal({showModal}) {
  return (
    <div className='modal-background'>
        <div className='box'> 
        <div className='top'>
            <h1>Connect wallet</h1>
            <h1 onClick={showModal}> X </h1>
        </div>
        <p className='ptag'>Choose your Prefferd Wallet</p>
        
            <button className='btn5'>
          <img src={img66} alt='logo'/>
          <h2 className='h2'>Metamask </h2>
            </button>
            <button className='btn5'>
            <img src={img69} alt='logo'/>
            <h2 className='h2'>WalletConnect </h2>

            </button>
        </div>
      
    </div>
  )
}
