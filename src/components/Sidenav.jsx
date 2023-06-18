import React from 'react';
import './Sidenav.css'
import {Logo, Doublearrow, Home, Messages, Tasks, Members,Settings, Add, Green, Orange, Purple, Blue} from '../assets/index'


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
        <div>
            <span>MY PROJECTS</span>
            <img src={Add} alt="" />
        </div>

        <div>
            <ul>
                {Projects.map((item, index)=>(
                    <li key={index}>
                        <img src={item.src} alt="" />
                        <span>{item.title}</span>
                    </li>
                ))}
            </ul>
        </div>




    </div>

    </div>
  )
}

export default Sidenav
