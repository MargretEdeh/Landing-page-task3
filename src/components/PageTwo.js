import React from 'react'
import './pagetwo.css'
import img1 from '../pic/img1.svg'
import pics2 from '../pic/pics2.svg'
import pics3 from '../pic/pics3.svg'
import pics4 from '../pic/pics4.svg'
import pics5 from '../pic/pics5.svg'
import pics6 from '../pic/pics6.svg'
import pics7 from '../pic/pics7.svg'
import pics8 from '../pic/pics8.svg'
import ImgCard from './ImgCard'


export default function PageTwo() {
  return (
    <div>
        <h1 className='heading2'>Inspiration for your next adventure</h1>
        <div className='img-section'>
            <ImgCard img={img1}/>
            <ImgCard img={pics2}/>
            <ImgCard img={pics3}/>
            <ImgCard img={pics4}/>
            <ImgCard img={pics5}/>
            <ImgCard img={pics6}/>
            <ImgCard img={pics7}/>
            <ImgCard img={pics8}/>

        </div>
    </div>
  )
}
