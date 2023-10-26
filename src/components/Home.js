
import React from 'react'
import Content from './content/Content'
import './Home.css'
import Navbar from './navbar/Navbar'

export default function Home() {
  return (
    <div className='main'>
          <Navbar/>
          <Content/>
    </div>
  )
}