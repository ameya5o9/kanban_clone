import React from 'react';
import './Sidenav.css'
import {Logo, Doublearrow, Home, Messages, Tasks, Members,Settings, Add, Green, Orange, Purple, Blue, Bulb} from '../assets/index'


//defined everything in an [] as {}
const Sidenav = () => {
    const Icons = [
        {src: Home, title:'Home' },
        {src: Messages, title: 'Messages'},
        {src: Tasks, title: 'Tasks'},
        {src: Members, title: 'Members'},
        {src: Settings, title: 'Settings'}
    ]

    const Projects = [
        {src: Green, title:'Mobile App' },
        {src: Orange, title: 'Website Redesign'},
        {src: Purple, title: 'Design System'},
        {src: Blue, title: 'Wireframes'}
    ]
  return (
    <div className='Main'>
    <div className='container2'>
      <img src={Logo} alt="" className='logo'/>
      <div className='Name'>Project M.</div>
      <img src={Doublearrow} alt="" className='doublearrow' />
    </div>

    <div className='container3'>
        <ul className='ul'>
            {Icons.map((item, index)=>(           //maped Icons -> index: unique id to each item. (Noun). item-> attibute (adjective)
            <li key={index} className='li'>
                <img src={item.src} alt="" />
                <span className='span'>{item.title}</span>
            </li>
            ))}
            
        </ul>
    </div>

    <div className="container4">
        <div className='pro-heading'>
            <span>MY PROJECTS</span>
            <img src={Add} alt="" />
        </div>

        <div>
            <ul>
                {Projects.map((item, index)=>(
                    <li key={index} className='project-list'>
                        <img src={item.src} alt="" className='item-img'/>
                        <span>{item.title}</span>
                    </li>
                ))}
            </ul>
        </div>
    </div>

    <div className="container5">

        <div className='frame1'>
            <img src={Bulb} alt="" className='bulb' />
        </div>
        <div className="frame2">
            <div className='frame-box1'>Thoughts Time</div>
            <div className='frame-box2'>We don’t have any notice for you, till then you can share your thoughts with your peers.</div>
            <div className='frame-box3'>Write a message</div>
        </div>
    </div>

    </div>
  )
}

export default Sidenav
