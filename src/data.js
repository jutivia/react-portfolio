import { FaCreditCard, FaBook, FaBriefcase, FaTwitter, FaGitHub, FaLinkedin, FaReact, FaCss3,  } from 'react-icons/fa';
import { SiGmail , SiJavascript, SiJquery} from 'react-icons/si';
import React from 'react';
const sublinks = [
  {
    page: 'About',
    links: [
      { label: 'payment', icon: <FaCreditCard />, url: '/products' },
      { label: 'terminal', icon: <FaCreditCard />, url: '/products' },
      { label: 'connect', icon: <FaCreditCard />, url: '/products' },
    ],
  },
  {
    page: 'Projects',
    links: [
      { label: 'React.js', icon: <FaReact />, url: '/products' },
      { label: 'Plain Javascript.js', icon: <SiJavascript />, url: '/products' },
       { label: 'Jquery', icon: <SiJquery/>, url: '/products' },
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
