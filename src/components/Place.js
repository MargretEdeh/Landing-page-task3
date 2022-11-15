import React from 'react'
import './place.css'
import Footer from './Footer'
import img1 from '../pic/img1.svg'
import pics2 from '../pic/pics2.svg'
import pics3 from '../pic/pics3.svg'
import pics4 from '../pic/pics4.svg'
import pics5 from '../pic/pics5.svg'
import pics6 from '../pic/pics6.svg'
import pics7 from '../pic/pics7.svg'
import pics8 from '../pic/pics8.svg'
import ImgCard from './ImgCard'


function Place() {
  return (
    <div >
      <div className='list-style'>
        <ul className='list-style'>
            <li>Restaurant</li>
            <li>Cottage</li>
            <li>Castle</li>
            <li>Fantscy city</li>
            <li>Beach</li>
            <li>Carbins</li>
            <li>Off-grid</li>
            <li>Farm</li>
            <li><button className='btn4'>Location </button></li>

        </ul>
      </div>

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
        <Footer/>
    </div>
  )
}

export default Place
