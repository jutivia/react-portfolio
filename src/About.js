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
                 <h1>About</h1> 
               <p> Hey there... <br/>
            write a few stuff about myself...<br/>
        also insert resume link</p>
              </div> <br/>
              
              <div className="about-works-wrapper" >
                  <div class="another-works-wrapper">
                  <div className="works" id="web">
                    <img src={web} alt=''/>
                      <h3 style={{padding:'5px 10px', color:'black'}}>Web Developer</h3>
                      <p>about it and framewoks</p>
                      </div>
                  <div className="works" id="mobile">
                      <br/>
                    <img src={ios} alt=''/>
                      <h3 style={{padding:'5px 10px', color:'white'}}>Mobile Developer</h3>
                    <p style={{color:'white'}}>about it and framewoks</p>
                  </div>
                  <div className="works" id="content"><br/>
                    <img src={content} style={{height:'20%'}}/>
                    <h3 style={{padding:"0px 10px", color:"black"}}>Content Creator</h3>
                    <p>about it and framewoks</p>
                  </div>
                 </div>
              </div> 
              <br/><br/>
            </div>
            </section>

     <Footer/>
</>
    )
}


export default About
