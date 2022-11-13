import React from 'react'
import './App.css';
import Heading from './components/Heading';
import Body from './components/Body';
import MidFooter from './components/MidFooter';
import PageTwo from './components/PageTwo';


export default function App() {
  return (
    <div className='App'>
  <Heading/>
  <Body/>
  <MidFooter/>
  <PageTwo/>
      
    </div>
  )
}
