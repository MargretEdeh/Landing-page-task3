import React from 'react'
import './pagetwo.css'
// import frame1 from './frame1.svg'
import img9 from './img9.svg'
import img7 from './img7.svg'
import img8 from './img8.svg'

export default function PageThree() {
  return (
    <div className='p-three'>
        <div className='text3'>
            <h1 className='h1tag' >Metabnb NFTs</h1>
            <p className='p2-tag'>Discover our NFT gift cards collection. 
            Loyal customers gets amazing gift cards which are traded as NFTs. 
            These NFTs gives our cutomer access to loads of our exclusive services.</p>
           <button className='btn3'>Learn more</button>
        </div>
        {/* <img src={frame1} alt='design img'/> */}
        <div className='picture' >
        <img className='img9' src={img9} alt='design' />
        <img src={img7} className='img7' alt='design' />
          <img className='img8' src={img8} alt='design' />


          

        </div>
      
    </div>
  )
}
