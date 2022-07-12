import React from 'react'
import { useState } from 'react';
import "./navbar.scss"
import Search from '@material-ui/icons/Search';
import Notifications from '@material-ui/icons/Notifications';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () =>{
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };

  return (
    <div className= {isScrolled ? "navbar scrolled" : "navbar"}>
     <div className='container'>
        <div className='left'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png' alt="logo" />
           

        </div>
        <div className='right'>
            <Search className='icon' />
           
            <Notifications className='icon' />
            
        </div>
        
     </div>
        </div>
  )
}

export default Navbar