import {  FaTwitter, FaGithub, FaLinkedin, FaReact, FaCss3,  } from 'react-icons/fa';
import { SiGmail , SiJavascript, SiJquery} from 'react-icons/si';
import React from 'react';
const sublinks = [
  {
    page: 'About',
    links: [
      { label:'Web Developer' , icon: '',  },
      { label: 'Content-Creator', icon: '' ,  },
     
    ],
  },
  {
    page: 'Projects',
    links: [
      { label: 'React.js', icon: <FaReact />,  },
      { label: 'Plain Javascript.js', icon: <SiJavascript />,  },
       { label: 'Jquery', icon: <SiJquery/>,  },
        { label: 'Css3', icon: <FaCss3/>,  },
    ],
    
  },
  {
    page: 'Contact',
    links: [
      { label: 'github', icon: <FaGithub />, url: 'https://github.com/jutivia' },
      { label: 'linkedin', icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/olajumoke-boladale-lawal-b650a09b/' },
      { label: 'email', icon: <SiGmail />, url: 'https://mail.google.com/mail/u/0/?tab=km#inbox' },
      { label: 'twitter', icon: <FaTwitter />, url: 'https://twitter.com/JujuTheBlessed' },
    ],
    
  }
];

export default sublinks;
