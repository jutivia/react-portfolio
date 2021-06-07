import React from 'react'
import sublinks from './data'

const linked= sublinks.find((item)=>{item.page==='Contact'})
const Footer = () => {
    const {links}= linked;
    return (<div className='footer-links'>
     {links.map((linker,index)=>{
         const {url, icon, label}= linker
         return(<article key={index}>
        <div className='footer-sublinks'>
         <a key={index} href={url}>
              {icon}
        {label}</a>
       </div>
         </article>)
  })
  }
</div>
    )
}

export default Footer
