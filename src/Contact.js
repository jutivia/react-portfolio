import React, {useState} from 'react'
import Navbar from './Navbar'

import Sidebar from './Sidebar'
import Submenu from './Submenu'
import Footer from './Footer'

const Contact =()=>{
    const [name, setName]=useState('')
    const [email, setEmail]=useState('')
    const [msg, setMsg]=useState('')
    let info=[]
    const handleSubmit =(e)=>{
        e.preventDefault();
        
        info.push({name:{name},email:{email},
        msg:{msg}})

        console.log(info)
        setName('');
        setEmail('');
        setMsg('');
    }
    return <>
    <Navbar/>
     <Sidebar/>
     <Submenu/>

    <section className='about-container contact-container'>
    <h1>Get In Touch </h1>
     <p> If you want to get in touch, talk to me about a project collaboration or just say hi, fill up the form below or send an email to <a target="_blank" href="https://mail.google.com/mail/u/0/?tab=km#inbox"><span style={{fontWeight:"bolder", color :'inherit'}}>rukkylaw.tl@gmail.com</span></a></p>

     <form className="myForm" id="forms" method="GET" onSubmit={handleSubmit}>
      
      <input
       type="text" 
       value={name}
       onChange={(e)=>setName(e.target.value)}
        placeholder="Fill with your name" required/>
      
      <input 
      type="email" 
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      placeholder="Enter your email address"
       required />

      <textarea type="text" 
      value={msg}  
      onChange={(e)=>setMsg(e.target.value)}
     placeholder="Write your message"/>
      <button type="submit" id="contacts" className="btn contact-btn">Submit</button>
        </form>

    </section>

     <Footer/>
    
    </>
}

export default Contact