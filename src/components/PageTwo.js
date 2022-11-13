import React from 'react'
import './pagetwo.css'
import img1 from '../pic/img1.svg'
import ImgCard from './ImgCard'


export default function PageTwo() {
  return (
    <div>
        <h1 className='heading2'>Inspiration for your next adventure</h1>
        <div className='img-section'>
            <ImgCard img={img1}/>


        </div>
      
    </div>
  )
}
