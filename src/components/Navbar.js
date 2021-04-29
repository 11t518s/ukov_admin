import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Menu from './menu.png';
import Logo from './logo.png';

import '../css/Navbar.css';


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
        <img className='logo' src={ Logo } alt='logo' onClick={props.Home} />
        <img className='menu' src={ Menu } alt='menu' onClick={ () =>setToggle(!toggle)} />
      </header>
        {toggle ?(          
          <ul className='mobile'>
            <li onClick={props.Home}>home</li>
            <li onClick={props.Program}>program</li>
            <li onClick={props.Recruit}>recruit</li>
          </ul>
        ) : null
        }
      </>
      }
      {Web &&     
      <header>
        <img className="logo" src={ Logo } alt='logo' onClick={props.Home}></img>
        <ul className='web'>
          <li onClick={props.Home}>home</li>
          <li onClick={props.Program}>program</li>
          <li onClick={props.Recruit}>recruit</li>
        </ul>
      </header>
      }
    </>
  )
}



export default Navbar;
