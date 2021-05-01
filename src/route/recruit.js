import React from 'react';
import '../css/Recruit.css';



function Recruit() {
    return(
        <body>
            <div className='dDay'>
                {/* 마감날 - 현재 시간으로 d-day count만들자 */}
                <h1 id='whiteText'>지원 마감</h1>
                <p id='whiteText'>
                    스타트업 생태계를 함께 만들어갈<br/>
                    23기 여러분의 지원 감사합니다
                </p>
                <div className='countBox'>
                    <div className='whiteBox'>5</div>
                    .
                    <div className='whiteBox'>7</div>
                    -
                    <div className='whiteBox'>5</div>
                    .
                    <div className='whiteBox'>21</div>
                </div>
            </div>
        </body>
    )
}



export default Recruit;