import React from 'react'
import './body.css'

export default function Body() {
  return (
    <div className='section'>
        <div className='describe'>
           <h1 className='text'>Rent a <span className='color'>Place</span> away from <span className='color'>Home
        </span> in the <span className='color'>Metaverse</span> </h1>
        <p className='p1tag'>
        we provide you access to luxury and affordable houses in the metaverse, 
        get a chance to turn your 
        imagination to reality at your comfort zone
        
        </p>
        <div className='search'>
            <input className='input1' type='text' placeholder='Search for location'/>
           <button className='btn2'>Search</button>
        </div>
        </div>
      
    </div>
  )
}
