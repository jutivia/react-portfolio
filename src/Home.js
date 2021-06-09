import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import { slideInLeft, fadeIn, zoomIn } from 'react-animations'
import Radium, {StyleRoot} from 'radium';
import juju from './images/cropped juju.jpg';

const Home = () => {
const [s2, setS2] = useState(false);
const [s3, setS3] = useState(false);
const [s4, setS4] = useState(false);
const [s5, setS5] = useState(false);
const [s6, setS6] = useState(false);
  const styles = {
  slideInLeft1: {
    animationDuration: '1s',
    animationName: Radium.keyframes( slideInLeft,'slideInleft'),
    
    
  },
  slideInLeft2: {
    
    animationDuration: '1s',
    animationName: Radium.keyframes( slideInLeft, 'slideInLeft'),
    
  
    
  },
  slideInLeft3: {
    animationDuration: '1s',
    animationName: Radium.keyframes( slideInLeft, 'slideInLeft'),
    
  },
   slideInLeft4: {
    animationDuration: '1s',
    animationName: Radium.keyframes( slideInLeft, 'slideInLeft'),
    
  },
  fadeIn: {
    animation: 'x 2s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn'),
  },
  zoomIn: {
    animation: 'x 1.5s',
    animationName: Radium.keyframes(zoomIn, 'zoomIn'),
  },
  
}

useEffect(()=>{
setTimeout(()=>{
  setS2(true)
},1000)

setTimeout(()=>{
  setS3(true)
},2000)

setTimeout(()=>{
  setS4(true)
},3000)
setTimeout(()=>{
  setS5(true)
},3500)
setTimeout(()=>{
  setS6(true)
},5500)


},[])
    return (<StyleRoot>
    <div className='home-body' style={styles.fadeIn}>
      <Link to='/Home'>
        <div className='frontPage'>
         <div className='home-name' >
           <h2 style={styles.slideInLeft1}>Hi, </h2>
     {s2 &&  <h1 style={styles.slideInLeft2}> I'm Jumoke.</h1> }
      {s3 && <h1 style={styles.slideInLeft3}>I design and build </h1>}
     {s4 &&  <h1 style={styles.slideInLeft4}>user interfaces</h1>}
       </div>
      {s5 && <img src={juju} alt='juju' className='home-picture' style={styles.fadeIn} />}
       </div>
    {s6 && <div className='stage'>  
      <div className='tap-link box'>
        <p >Tap anywhere to continue </p>
        </div>
        </div>}
        
        </Link>
    </div>
    </StyleRoot>)
}

export default Home
