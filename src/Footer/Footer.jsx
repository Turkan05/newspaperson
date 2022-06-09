import React from 'react'
import { FaYoutube , FaFacebookF, FaTwitter ,FaGithub ,FaInstagram } from 'react-icons/fa';
// import Icon from 'react-icons/fa'
import "./Footer.css"

const Footer = () => {
  return (
    <div> <ul className="wrapper">
    <li className="icon facebook">
      <span className="tooltip">Facebook</span>
      <span ><FaFacebookF/></span>
    </li>
    <li className="icon twitter">
      <span className="tooltip">Twitter</span>
      <span><FaTwitter/></span>
    </li>
    <li className="icon instagram">
      <span className="tooltip">Instagram</span>
      <span><FaInstagram/></span>
    </li>
    <li className="icon github">
      <span className="tooltip">Github</span>
      <span><FaGithub/></span>
    </li>
    <li className="icon youtube">
      <span className="tooltip">Youtube</span>
      <span><FaYoutube/></span>
    </li>
  </ul></div>
  )
}

export default Footer