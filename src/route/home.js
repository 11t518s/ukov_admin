import React from 'react';
import Carousel from '../components/Carousel'
import Partner from '../components/Partner';
import partner from '../components/Partner';
import '../css/home.css';
import '../css/main.css';
import First from './first.jpg';
import Second from './second.jpg';
import Third from './third.jpg';


function Home(props) {
    

    return(
        <div className='body'>
            <div className='info equalize'>
                <div className='info_top'>
                    <h1>
                        우리는 대학생<br/>
                        벤처기사단입니다.
                    </h1>
                    <p>
                        UKOV는 Undergraduated Knights of Venture의 약자로,<br/>
                        소프트뱅크벤처스의 후원 아래 엄선된 스타트업의 일을 돕고 함께 성장해 나가는 대외활동입니다.
                    </p>
                    </div>
                <div className='info_bottom'>
                    <div className='info_bottom_left'>
                        <h2>
                            UKOV 미션 
                        </h2>
                        <p>
                            <b>많은 사람들이 스타트업 생태계로 soft-landing하는 것</b><br/>
                            스타트업 인턴십을 통해 스타트업의 현장을 피부로 느끼고<br/>
                            개인에게 맞는 일을 탐색합니다.<br/>
                            또한 동기들과의 협업 프로젝트를 통해 업무 협력성을 기르고<br/>
                            세상을 보는 시야를 확장합니다.
                        </p>
                    </div>
                    <div className='info_bottom_right'>
                        <h2>
                            UKOV 비전
                        </h2>
                        <p>
                            <b>스타트업을 통해 세상에 많은 긍정적 영향을 미치는 것</b><br/>
                            성공적인 스타트업 생태계 구성원이 되는 성장의 경험을<br/>
                            제공해주는 것을 목표로 합니다.<br/>
                            그 성장 싸이클을 통해 양질의 인재로 거듭나<br/>
                            세상을 바꾸는 사람들이 되는 것을 꿈꿉니다.
                        </p>
                    </div>
                </div>
            </div>
            <div className='history' id='whiteText'>
                <h1>년의 여정</h1>
                <p>
                    우리는 주체적으로 배우고 변화에 도전하면서<br/>
                    스타트업 생태계를 위한 인재를 배출합니다.
                </p>
                <ul className='historyInfo'>
                    <li>
                    <h2>년</h2>
                    <p>역사</p>
                    </li>
                    <li className='focus'>/</li>
                    <li>
                    <h2>명</h2>
                    <p>누적 멤버</p>
                    </li>
                    <li className='focus'>/</li>
                    <li>
                    <h2>건</h2>
                    <p>미니프로젝트</p>
                    </li>
                </ul>
            </div>
            <div className='program equalize'>
                <h1>
                    프로그램
                </h1>
                <p>
                    UKOV 단원은 다음과 같은 활동을 함께합니다.
                </p>
                <div className='prgoramBottom'>
                    <div className='programBox' id='whiteText'>
                        <img src={ First } alt='' />
                        <h4>스타트업 인턴십</h4>
                        <div className='programBoxHidden' >
                            <h5>스타트업 인턴십</h5>
                            <h6>
                                소프트뱅크벤처스가 투자한<br/>
                                엄선된 스타트업에서<br/>
                                다양한 분야로 나누어져<br/>
                                인턴을 수행합니다.
                            </h6>
                        </div>
                    </div>
                    <div className='programBox' id='whiteText'>
                        <img src={ Second } alt='' />
                        <h4>미니 프로젝트</h4>
                        <div className='programBoxHidden' >
                            <h5>미니 프로젝트</h5>
                            <h6>
                                팀원들과 모여<br/>
                                사이드 프로젝트를 진행합니다.<br/>
                                소프트뱅크벤처스 심사역들에게<br/>
                                직접 IR을 해볼 수 있는 기회까지!
                            </h6>
                        </div>
                    </div>
                    <div className='programBox' id='whiteText'>
                        <img src={ Third } alt='' />   
                        <h4>네트워킹</h4>
                        <div className='programBoxHidden' >
                            <h5>네트워킹</h5>
                            <h6>
                                이미 스타트업 전반에 퍼져있는<br/>
                                유코브 선배들과<br/>
                                네트워킹 할 수 있습니다.<br/>
                                UKOV라는 이름의<br/>
                                스타트업 생태계를 만듭니다.
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className='review equalize'>
            <h1>UKOV 후기</h1>
            <a href='https://ukov.tistory.com/'><p>더 많은 후기러가기</p></a>

            <Carousel />
            </div>

            <div className='partner equalize'>
                <h1>다양한 파트너사</h1>
                <p>
                    세상에 큰 영향을 미치고 있는<br/>
                    다양한 스타트업들과 함께 해왔습니다.
                </p>
                <div className='partnerGrid'>
                    <Partner />
                </div>


            </div>
        </div>

    )
}



export default Home;