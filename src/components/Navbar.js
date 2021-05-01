import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Menu from './menu.png';
import Logo from './logo.png';

import '../css/Navbar.css';
import { NavLink } from 'react-router-dom';
import Program from '../route/program';


function Navbar(props) {

  const Mobile = useMediaQuery ({
    query : "(max-width : 1000px)"
    })
  const Web = useMediaQuery ({
    query : "(min-width : 1000px)"
    })

  const [toggle, setToggle] = useState(false)

  return (  
    <>
      {Mobile && 
      <>
      <header>
        <NavLink exact to='/home'><img   className='logo' src={ Logo } alt='logo' /></NavLink>
        <img className='menu' src={ Menu } alt='menu' onClick={ () =>setToggle(!toggle)} />
      </header>
        {toggle ?(          
          <ul className='mobile'>
          <li><NavLink exact to='/home'>home</NavLink></li>
          <li><NavLink exact to='/program'> program </NavLink></li>
          <li><NavLink exact to='/recruit'>recruit</NavLink></li>
          </ul>
        ) : null
        }
      </>
      }
      {Web &&     
      <header>
        <NavLink exact to='/home'><img className='logo' src={ Logo } alt='logo' /></NavLink>
        <ul className='web'>
          <li><NavLink exact to='/home'>home</NavLink></li>
          <li><NavLink exact to='/program'>program</NavLink></li>
          <li><NavLink exact to='/recruit'>recruit</NavLink></li>
        </ul>
      </header>
      }
    </>
  )
}



export default Navbar;
