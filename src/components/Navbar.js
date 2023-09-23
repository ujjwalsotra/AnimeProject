import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Miku from '../utils/miku.jpg'
import '../styles/navbar.css'

const Navbar = () => {
   
  return (
    <div className='mainnav'>
        <div className='logodiv'>
            <img src={Miku} alt="logo" className='logoimg'/>
        </div>
        <div className='navlist'>
            <Link to='/' className='link'>Home</Link>
            <Link to='/Waifu'className='link'>Waifus</Link>
            <Link to='/Most'className='link'>Most Popular</Link>
            <Link to='/WatchCart'className='link'>Watch Cart</Link>
            <Link to='/Char' className='link'>Random generator</Link>
        </div>
    </div>
  )
}

export default Navbar