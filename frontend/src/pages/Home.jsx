import React from 'react'
import Header from '../components/Header'
import AddBar from '../components/AddBar'
import Restaurant from '../components/Restaurant'
import axios from 'axios';

function Home() {
    
  return (
    <div className='flex justify-center items-center h-screen flex-col '>
        <Header/>
        <AddBar/>
        <div className=''><Restaurant/></div>
    </div>
  )
}

export default Home