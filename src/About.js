import React from 'react'
import Navbar from './Navbar'

import Sidebar from './Sidebar'
import Submenu from './Submenu'
import Footer from './Footer'
import web  from './images/icons8-web-100.png'
import ios from './images/icons8-ios-development-80 (1).png'
import content from './images/icons8-content-100.png'

const About = () => {
    
    return (<>
     <Navbar/>
     <Sidebar/>
     <Submenu/>

<section className= "about-container">
            <div id="about-wrapper">
               <div id="about-intro-wrapper">
                 <h1>About Me</h1> 
               <p style={{width:'80%'}}> Hey there... <br/>
            I am a chemical engineering graduate and a self taught Front End Developer who loves to write codes and bring beautiful UI/UX designs to life .<br/>Here's a link to my <a href='https://1drv.ms/b/s!Aq1iV8JUPrUEgWiBPAjJSCgV2Don' style={{color:'inherit', fontWeight:'bold'}}> resume </a>
        </p>
              </div> <br/>
              
              <div className="about-works-wrapper" >
                  <div class="another-works-wrapper">
                  <div className="works" id="mobile">
                    <img src={web} alt=''/>
                      <h3 style={{padding:'5px 10px', color:'white'}}>Web Developer</h3>
                      <p style={{color:'white'}}>I enjoy creating easy to use, responsive,and dynamic websites with very fast load times and lag free interactions.</p>
                      </div>
                  <div className="works" id="web"><br/>
                    <img src={content} style={{height:'20%', color:'white'}}/>
                    <h3 style={{padding:'5px 10px', color:'black', }}>Content Creator</h3>
                    <p >I enjoy creating contents that connects brands or entities to its prospective audience. it includes copywriting, designing custom UI/UX for company websites, etc.</p>
                  </div>
                 </div>
              </div> 
              <br/><br/>
            </div>
             <Footer/>
            </section>

    
</>
    )
}


export default About
