import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import { slideInLeft, fadeIn } from 'react-animations'
import Radium, {StyleRoot} from 'radium';

const Home = () => {
const [s2, setS2] = useState(false);
const [s3, setS3] = useState(false);
const [s4, setS4] = useState(false);
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
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn'),
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
},[])
    return (<StyleRoot>
    <div className='home-body' style={styles.fadeIn}>
      <Link to='/Home'>
         <div className='home-name' >
           <h1 style={styles.slideInLeft1}>Hello. </h1>
     {s2 &&  <h1 style={styles.slideInLeft2}> I am </h1> }
      {s3 && <h1 style={styles.slideInLeft3}>Olajumoke </h1>}
     {s4 &&  <h1 style={styles.slideInLeft4}>Boladale-Lawal</h1>}
       </div>
      <div className='stage'>  
      <div className='tap-link box'>
        <p >Tap anywhere to continue </p>
        </div>
        </div>
        
        </Link>
    </div>
    </StyleRoot>)
}

export default Home
