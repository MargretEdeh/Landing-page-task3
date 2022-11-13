import React from 'react'
import group from './group.svg'
import group2 from './group2.svg'
import group3 from './group3.svg'
import './body.css'

export default function MidFooter() {
  return (
    <div>
       <div className='mid-footer'>
     <img  className='img1' src={group2} alt='img'/>
     <img  className='img1' src={group} alt='img'/>
     <img  className='img1' src={group3} alt='img'/>

     </div>
    </div>
  )
}
