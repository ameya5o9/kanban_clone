import React from 'react'
import './Navbar.css'
import {Search, Calender, Bell, Notification, Profile, Arrow} from '../assets/index'
const Navbar = () => {
  return (
    <div className='container'>
      
        <div className='box1'>
            <img src={Search} alt="" className='search'/>
            <input type="text" className='input' placeholder='Search for anything...'/>
        </div>
      
      <div></div>

      <div className='box3'>
      <img src={Calender} alt="" />
      <img src={Notification} alt="" />
      <img src={Bell} alt="" />
      </div>

      <div className='box4'>
        <div className='sub4'>
            <h3 className='name'>Anima Agrawal</h3>
            <h4 className='location'>U.P, India</h4>
        </div>
        <img src={Profile} alt="" className='Profile'/>
        <img src={Arrow} alt="" className='Arrow' />
      </div>
    </div>
  )
}

export default Navbar
