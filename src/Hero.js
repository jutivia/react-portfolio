import React from 'react'
import phoneImg from './images/jumoke.jpeg'
import {useGlobalContext} from './context'
import { Link } from 'react-router-dom';
const Hero = () => {
  const {closeSubmenu}= useGlobalContext();
  
  return <section className='hero' onMouseOver={closeSubmenu}>
    <div className='hero-center'>
    <article className='hero-info'>
 <h1>
   Web developer, tech enthusiast and content creator</h1>
 <p> write a little about yourself here. <br/> Think about it for later </p>
 
 <Link to='/About'><button className='btn'>Learn More </button></Link>
 
    </article>
    <article className='hero-images'>
      <img src={phoneImg} alt='' className='phone-img'/>
    </article>
    
</div>
  </section>
}

export default Hero
