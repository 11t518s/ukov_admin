import React, {useState} from 'react';
import SBVA from './SBVA.png';


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
        <img src={ SBVA } alt='SoftBank' />
      </div>
    </footer>
  )
}

export default Footer;
