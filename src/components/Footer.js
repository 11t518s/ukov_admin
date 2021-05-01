import React from 'react';
import SBVA from './SBVA.png';
import '../css/Footer.css';



function Footer () {
  return(
    <footer>
      <div className="contactInfo">
        <div className="right">
          <h1>contact info</h1>
          <h2>공식 메일 : danjang@ukov.kr<br />
          카카오톡 플러스 친구 : UKOV 대학생벤처기사단</h2>
          <p>copyright&#169;{new Date().getFullYear()} ukov. All right reserved </p>
        </div>
        <a href='http://www.softbank.co.kr/ko2/' target='blank'><img src={ SBVA } alt='SoftBank' /></a>
      </div>
    </footer>
  )
}

export default Footer;
