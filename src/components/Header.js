import React from 'react'
import Navbar from './Navbar'



const Header = () => {

  let greetings = "Welcome to Summoners Rift"

  return (
    <>

      <Navbar />
      <h1 className='header'> {greetings} </h1> 
    </>
  )
}

export default Header
