import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Menu from './menu.png';
import Logo from './logo.png';
import '../css/Navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar(props) {
  //반응형 네비게이션 바를 위한 세팅
  const Mobile = useMediaQuery ({
    query : "(max-width : 1000px)"
    })
  const Web = useMediaQuery ({
    query : "(min-width : 1000px)"
    })


  // 모바일 더보기를 위한 햄버거바 토글
  const [toggle, setToggle] = useState(false)


      // 페이지 이동 시 스크롤을 최상단으로~

  const Scroll = require('react-scroll');
  const scroll = Scroll.animateScroll;
  
  return (  
    <>
      {Mobile && 
      <>
        <div className='navbar'>
        <header>
          <NavLink exact to='/home' onClick={()=>{scroll.scrollToTop();}}><img className='logo' src={ Logo } alt='logo' /></NavLink>
          <img className='menu' src={ Menu } alt='menu' onClick={ () =>setToggle(!toggle)} />
        </header>
        </div>
        {toggle ?(       
          <div className='moblieNav'>   
          <ul className='mobile'>
            <li onClick={()=>{scroll.scrollToTop();}}><NavLink onClick={()=>setToggle(!toggle)} exact to='/home'>홈</NavLink></li>
            <li onClick={()=>{scroll.scrollToTop();}}><NavLink onClick={()=>setToggle(!toggle)} exact to='/program'>프로그램</NavLink></li>
            <li onClick={()=>{scroll.scrollToTop();}}><NavLink onClick={()=>setToggle(!toggle)} exact to='/recruit'>리크루팅</NavLink></li>
          </ul>
          </div>
        ) : null
        }
      </>
      }
      {Web &&     
            <div className='navbar'>
      <header>
        <NavLink  exact to='/home'><img className='logo' src={ Logo } alt='logo' /></NavLink>
        <ul className='web'>
          <li onClick={()=>{scroll.scrollToTop();}}><NavLink exact to='/home'>홈</NavLink></li>
          <li onClick={()=>{scroll.scrollToTop();}}><NavLink exact to='/program'>프로그램</NavLink></li>
          <li onClick={()=>{scroll.scrollToTop();}}><NavLink exact to='/recruit'>리크루팅</NavLink></li>
        </ul>
      </header>
      </div>
      }
    </>
  )
}



export default Navbar;
