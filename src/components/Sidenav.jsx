import React from 'react';
import './Sidenav.css'
import {Logo, Doublearrow, Home, Messages, Tasks, Members,Settings} from '../assets/index'


//defined everything in an [] as {}
const Sidenav = () => {
    const Icons = [
        {src: Home, title:'Home' },
        {src: Messages, title: 'Messages'},
        {src: Tasks, title: 'Tasks'},
        {src: Members, title: 'Members'},
        {src: Settings, title: 'Settings'}
    ]
  return (
    <div>
    <div className='container2'>
      <img src={Logo} alt="" className='logo'/>
      <div className='Name'>Project M.</div>
      <img src={Doublearrow} alt="" className='doublearrow' />
    </div>

    <div className='container3'>
        <ul>
            {Icons.map((item, index)=>(           //maped Icons -> index: unique id to each item. (Noun). item-> attibute (adjective)
            <li key={index}>
                <img src={item.src} alt="" />
                <span>{item.title}</span>
            </li>
            ))}
            
        </ul>
    </div>

    </div>
  )
}

export default Sidenav
