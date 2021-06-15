import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import Typist from 'react-typist'

const HomePage = () =>{
const [s2, setS2] =useState(false);
useEffect(()=>{
  setTimeout(()=>{
    setS2(true)
  },21550)
})
    return (<Link to='/Home'>
         <div className='home-body'>
      
      
        <div className='frontPage'>
         <div className='home-name' >
           <Typist avgTypingDelay={80} cursor={{show:false}}>
          <span><span style={{color:'grey'}}>&#60;</span>body<span style={{color:'grey'}}>&#62;</span></span></Typist>
         <br/>
         <br/> 
          <br/>
         <br/>
         <br/>
         <Typist avgTypingDelay={80} cursor={{show:false}} >
           <Typist.Delay ms={1500} />
         <span style={{marginLeft:'2.5rem'}}><span style={{color:'grey'}}>&#60;</span>h1<span style={{color:'grey'}}>&#62;</span></span>
         </Typist>
          <br/>
          <Typist cursor={{show:false}} avgTypingDelay={80} >
         <Typist.Delay ms={3600} />
      <h1 >Hi,<br/> 
      <Typist.Delay ms={600} />    
     I'm Ju&#768;mo&#768;ke&#769;<br/>
      <Typist.Delay ms={500} />
        I design user interfaces
        <Typist.Backspace count={22} delay={300}/>
        <Typist.Delay ms={600} />
        build and design responsive web
        <Typist.Backspace count={33} delay={400}/>
        <Typist.Delay ms={700} />
        Front-End Developer.
        </h1>
         <br/>
         <br/>
         </Typist>
         <Typist cursor={{show:false}} avgTypingDelay={80} >
           <Typist.Delay ms={2250}/>
         <span style={{marginLeft:'2.5rem'}}><span style={{color:'grey'}}>&#60;/</span>h1<span style={{color:'grey'}}>&#62;</span></span></Typist>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
      
         <Typist cursor={{show:false}} avgTypingDelay={80} >
           <Typist.Delay ms={900}/>
          <span><span style={{color:'grey'}}>&#60;/</span>body<span style={{color:'grey'}}>&#62;</span></span>
         </Typist>
       </div>
       </div>
       
    {s2 && <div className='stage'>  
      <div className='tap-link box'>
        <p >Tap anywhere to continue </p>
        </div>
        </div>}

         </div>
        </Link>
)
}

export default HomePage 
