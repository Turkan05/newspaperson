import React from 'react'
import { Link } from 'react-router-dom'
import './Novbar.css'

const Novbar = () => {
  return (
    <div>    
        <ul>
    <li className='li'>
        <Link className='link' to="/">Home</Link></li>
    <li className='li'>
        <Link className='link' to="/rooms">Our Rooms</Link></li>
        <li className='li'>
            <Link className='link' to="/shop">Shop</Link></li>
        <li className='li'>
            <Link className='link'to="/about">About us</Link></li>
       <li className='li'> <Link className='link'to="/news">News</Link></li>
       <li className='li'>
            <Link className='link'to="/contact">Contact</Link></li>
            <li className='li'>
            <Link className='link'to="/book">Book now</Link></li>
</ul>
</div>
  )
}

export default Novbar