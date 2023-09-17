import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Miku from '../utils/miku.jpg'
import '../styles/navbar.css'

const Navbar = () => {
    const[infield,setInfield]=useState('');
    let navigate=useNavigate();
    const handleClick = () => {
      console.log(infield);
      navigate('/Char',{state:{name:infield}});
    }
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
            <div>

            <input
            type='search'
            placeholder='search gif'
            value={infield}
            onChange={(e)=>{setInfield(e.target.value)}}
            />
            <button className='navbutton' onClick={handleClick} type='button'>Bankai</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar