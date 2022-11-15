import React from 'react'
import { Route ,Routes } from 'react-router-dom';
import './App.css';
import Heading from './components/Heading';
import Home from './Home';
import Place from './components/Place';



export default function App() {
  return (
    <div className='App'>
  <Heading/>
 <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/place' element={<Place/>}/>
 </Routes>
      
    </div>
  )
}
