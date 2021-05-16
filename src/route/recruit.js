import React, { useState, useEffect } from 'react';
import '../css/Recruit.css';
import '../css/main.css';
import {dbService} from '../fbase'
import Down from './down.png';
import Right from './right.png';
import { useMediaQuery } from 'react-responsive';
import moment from 'react-moment';
import Moment from 'react-moment';


function Recruit() {

    // 반응형을 위한 미디어 쿼리
    const Mobile = useMediaQuery ({
        query : "(max-width : 1000px)"
        })
      const Web = useMediaQuery ({
        query : "(min-width : 1000px)"
        })
    
    // 기수, 년도 등등 파이어베이스로부터 받아오는 기본적 정보 세팅
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
        
    // FAQ데이터 받아오기
    let [FAQ, setFAQ] = useState([]);
    const getFAQ = async () =>{
        const dbFAQ = await dbService.collection("FAQ").get();
        dbFAQ.forEach((document) => {
            const newFAQ = {
                ...document.data(),
                id: document.id
            };
            setFAQ((prev) => [newFAQ, ...prev]);
        });
    };
    // recruit 데이터 받아오기
    let [recruit, setRecruit] = useState([]);
    const getRecruit = async () =>{
        const dbrecruit = await dbService.collection("recruit").get();
        dbrecruit.forEach((document) => {
            const newRecruit = {
                ...document.data(),
                id: document.id
            };
            setRecruit((prev) => [newRecruit, ...prev]);
        });
    };
    // 비동기 처리를 위해 info, FAQ 활성화
    useEffect(()=>{
        getInfo();         
        getFAQ();
        getRecruit();
    }, [])
    return(
        <body>
            <div className='dDay'>
                {/* 마감날 - 현재 시간으로 d-day count만들자 */}
                <h1 id='whiteText'>지금 지원하세요!</h1>
                <p id='whiteText'>
                    스타트업 생태계를 함께 만들어갈<br/>
                    {info?.th}기 여러분의 지원
                    {info?.Finish-32400 > new Date() 
                    ?(' 감사합니다!')
                    :(' 기다리고 있습니다!')}
                </p>

                <div className='countBox'>
                    <div className='whiteBox'><p>5</p></div>
                    <div className='dot'>.</div>
                    <div className='whiteBox'><p>7</p></div>
                    <div className='dash'>-</div>
                    <div className='whiteBox'><p>5</p></div>
                    <div className='dot'>.</div>
                    <div className='whiteBox'><p>21</p></div>
                </div>
                <br/><br/>
                {info?.Finish-32400 > new Date() 
                    ?null
                    :<button className='button3'><a href={info?.Link} target='blank'>지원하기</a></button>}
                

                </div>

                <div className='recruitInfo equalize'>
                    <div className='recruitInfoItem'>
                        <h1>{info?.th}기 모집</h1>
                        <div>
                            <h6>대학생벤처기사단 {info?.th}기로 여러분을 초대합니다!</h6>
                            <p>
                                스타트업 인재로 성장하고자 하는 대학생들을 위한 모임,{Web && <br/>}
                                대학생벤처기사단이 {info?.th}기 단원을 모집합니다<br/><br/>
                                한국 스타트업 생태계에 필요한 인재를 길러내기 위해 2009년에 창설된 UKOV는{Web && <br/>}
                                소프트뱅크벤처스의 공식 후원을 받고 있는 유일한 학생단체로서{Web && <br/>}
                                지난 {info?.year}년 간 {info?.alumni}여 명의 업계 인재들을 배출해왔습니다.<br/><br/>
                                스타트업에서의 인턴십 외에도 미니 스타트업 프로젝트, 전문가 강연 등 프로그램을{Web && <br/>}
                                원하는 대로 계획하고 도전할 수 있는 UKOV에 지금 바로 지원하세요.
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
    <div><p>스타트업 생태계에 관심과 열정이 있는 누구나</p></div>
</div>
<hr />
<div className='recruitInfoItem'>
    <h1>선발 부분</h1>
    <div className='recruitPartnerInfo'>
        {recruit.map((recruit)=>(
                <a href={recruit.recruitLink}>
                    <div className='imgbox'><img src={recruit.recruitURL} alt={recruit.title}/></div>
                    <h5>{recruit.title}</h5>
                    <p>{recruit.text1}</p>
                    <p>{recruit.text2}</p>
                    <p>{recruit.text3}</p>
                    <p>{recruit.text4}</p>
                    <p>{recruit.text5}</p>
                </a>
        ))}
    </div>
</div>
<hr />
<div className='recruitInfoItem'>
    <h1>지원 방법</h1>
    <div>하단의 지원서 작성 후, typeform 제출<br/>
    디자인 직군의 경우 포트폴리오 첨부하여 제출<br/>

    <a href={info?.file} className='button2'>지원서 다운로드</a>
    </div>
</div>
<hr />
<div className='recruitInfoItem'>
    <h1>진행 절차</h1>
    <div>
        <div className='recruitRule'>
            <span className='circle'>서류 접수</span>
            {Web &&<img src={Right} alt=''/>}
            {Mobile &&<img src={Down} alt=''/>}

            <span className='circle'>UKOV 과정</span>
            {Web &&<img src={Right} alt=''/>}
            {Mobile &&<img src={Down} alt=''/>}
            <span className='circle'>참여사 과정</span>
            {Web &&<img src={Right} alt=''/>}
            {Mobile &&<img src={Down} alt=''/>}
            <span className='circle'>최종 합격</span>
        </div>
        <h6>UKOV 과정</h6>
        <p className='recruitRuleText'><b>서류전형</b> : {info?.end_date}까지 서류 접수를 받습니다. {info?.resumePass}에 서류 합격자가 발표됩니다.<br/>
            <b>면접전형</b> : 합격자를 대상으로 {info?.meeting1},{info?.meeting2} 양일에 거쳐 면접을 진행합니다.</p>
        <h6>참여사 과정</h6>
        <p className='recruitRuleText'>UKOV 과정을 합격한 지원자에 한해<br/>
            참여사 중 지원자와 핏이 맞는 회사에 지원자의 정보가 전달 됩니다.<br/>
            추후 과정은 참여사와 지원자 사이에 진행되며,<br/>
            참여사의 사정에 따라 참여사 과정의 기간이 조정될 수 있습니다.</p>
        <h6>최종 합격</h6>
        <p className='recruitRuleText'>참여사 과정까지 합격한 지원자로 UKOV {info?.th}기 구성원이 꾸려집니다.<br/>
            UKOV {info?.th}기는 UKOV {info?.th - 1}기와 함께 발대식을 갖고 {info?.th}기 활동을 시작합니다.</p>
    </div>
</div>
<hr />
<div class='recruitInfoItem'>
    <h1>FAQ</h1>
    <div>
        {FAQ.map((FAQ)=>(
            <>
                <h6>Q. {FAQ.Q}</h6>
                <p>{FAQ.A}<br/>{FAQ.A2}<br/>{FAQ.A3}<br/>{FAQ.A4}<br/>{FAQ.A5}</p>
            </>
        ))}
    </div>
</div>
<hr />
</div>
</body>
    )
}
export default Recruit;