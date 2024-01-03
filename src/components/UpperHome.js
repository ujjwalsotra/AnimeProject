import React from 'react'
import site1 from '../utils/aniwatch.png';
import site2 from '../utils/gogoanime.png'
import site3 from '../utils/zoro.png';
import '../styles/UpperHome.css'

const UpperHome = () => {
  return (
    <div className='ot_main'>
    <div>
      <h2 className='headings'>
      Watch your Anime here
      </h2></div>
        
    <a href="https://aniwatch.to/" target="_blank" rel="noreferrer">
       <img className='imgs' src={site1}/>   
       </a>
       <a href="https://ww4.gogoanime2.org/" target="_blank" rel="nonreferrer">
        <img className='imgs' src={site2}/>
        </a> 
       <a href="https://w1.zoro.se/" target="_blank" rel="nonreferrer">
        <img className='imgs' src={site3}/>
        </a> 
    </div>
  )
}

export default UpperHome