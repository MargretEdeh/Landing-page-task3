import React from 'react'
import './pagetwo.css'
import star from './star.svg'

export default function ImgCard(props) {
  return (
    <div className='img-card'>
    <img src={props.img} alt='img' className='img3'/>
    <div className='text2' >
        <div className='first-p'>
        <p>Desert King</p>
        <p className='strong'> 1MBT per night</p>
        </div>
        <div className='first-p'>
        <p>2345km away</p>
        <p className='p2' >available for 2weeks stay</p>
        </div>
        <img src={star} alt='stars' className='stars' />
       
    </div>
    </div>
  )
}
