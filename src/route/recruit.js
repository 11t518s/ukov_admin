import React, { useState, useEffect } from 'react';
import '../css/Recruit.css';
import {dbService} from '../fbase'



function Recruit() {
    
    const [info, setInfo] = useState();

    const getInfo = async () =>{
        const dbinfo = await dbService.collection("UKOV").get();
        dbinfo.forEach((document) => {
            const newInfo = {
                ...document.data(),
                id: document.id
            };
            setInfo(newInfo)
        });
        };        


    useEffect(()=>{
        getInfo();
    }, [])


    
    return(
        <body>
            <div className='dDay'>
                {/* 마감날 - 현재 시간으로 d-day count만들자 */}
                <h1 id='whiteText'>지금 지원하세요!</h1>
                <p id='whiteText'>
                    스타트업 생태계를 함께 만들어갈<br/>
                    %%%%%기 여러분의 지원 
                    {info?.end_date < new Date() 
                    ?('기다리고 있습니다!')
                    :('감사합니다!')}
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

                <div className='recruitInfo equalize'>
                    <div className='recruitInfoItem'>
                        <h1>23기 모집</h1>
                        <div>
                            <h6>대학생벤처기사단 $$$$$기로 여러분을 초대합니다!</h6>
                            <p>
                                스타트업 인재로 성장하고자 하는 대학생들을 위한 모임,<br/>
                                대학생벤처기사단이 이번 겨울을 함께 보낼 23기 단원을 모집합니다<br/><br/>
                                한국 스타트업 생태계에 필요한 인재를 길러내기 위해 2009년에 창설된 UKOV는<br/>
                                소프트뱅크벤처스의 공식 후원을 받고 있는 유일한 학생단체로서<br/>
                                지난 11년 간 190 여 명의 업계 인재들을 배출해왔습니다.<br/><br/>
                                스타트업에서의 인턴십 외에도 미니 스타트업 프로젝트, 전문가 강연 등 프로그램을 원하는 대로 계획하고<br/>
                                도전할 수 있는 UKOV에 지금 바로 지원하세요.
                            </p>
                        </div>
                    </div>
                    <hr />

                    <div className='recruitInfoItem'>
                        <h1>프로그램 구성</h1>
                        <div>
                            <p>
                                1) Start-up Internship :<br/>
                                엄선된 유망 스타트업에서의 인턴십을 수행합니다.<br/><br/>

                                2) Mini Project :<br/>
                                다양한 분야의 멤버들과 함께 미니 프로젝트에 도전합니다.<br/><br/>

                                3) Community :<br/>
                                정기 모임에 스타트업 선배님이나 현직님들과 함께합니다.
                            </p>
                        </div>
                    </div>
                    <hr />

<div className='recruitInfoItem'>
    <h1>지원자격</h1>
    <div>스타트업 생태계에 관심과 열정이 있는 누구나</div>
</div>
<hr />
<div className='recruitInfoItem'>
    <h1>선발 부분</h1>
    <div className='recruitPartnerInfo'>
        {}
    </div>
</div>

<hr />

<div className='recruitInfoItem'>
    <h1>지원 방법</h1>
    <div>하단의 지원서 작성 후, typeform 제출<br/>
    디자인 직군의 경우 포트폴리오 첨부하여 제출<br/>

    <button onClick>지원서 다운로드</button>
    </div>
</div>



<hr />


<div className='recruitInfoItem'>
    <h1>진행 절차</h1>
    <div>
        %%%%% 여기에 넣을거 넣기
    </div>
</div>

<hr />

<div className='recruitInfoItem'>
    <h1>FAQ</h1>
    <div>여기에 데이터 받아 오기</div>
</div>

<hr />

</div>
</body>
    )
}



export default Recruit;