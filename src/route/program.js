import InternshipCarousel from '../components/Carousel/InternshipCarousel';
import ProjectCarousel from '../components/Carousel/ProjectCarousel'
import React, {useState, useEffect} from 'react';
import {dbService} from '../fbase.js'
import Fade from 'react-reveal/Fade'
import '../css/Program.css';
import '../css/main.css';

    // Program을 파이어베이로부터 받아오기
function Program() {
    let [networking, setNetworking] = useState([])
    const getNetworking = async () =>{
        const dbnetworking = await dbService.collection("networking").orderBy("createdAt").get();
        dbnetworking.forEach((document) => {
            const newnetworking = {
                ...document.data(),
                id: document.id
            };
            setNetworking((prev) => [newnetworking, ...prev]);
        });
    };
    useEffect(()=>{
        getNetworking();
    }, [])
    return (
        <div>
            <div className='internship equalize'>
                <h1>스타트업 인턴십</h1>
                <p>
                    유코브는 스타트업에서 인턴을 하며<br/>
                    단원들과 함께 프로젝트를 진행하는 프로그램입니다.
                </p>
                <InternshipCarousel/>
            </div>
            <div className='project equalize'>
                <h1>미니 프로젝트</h1>
                <p>A - Z까지 만들어가는 다양한 미니 프로젝트</p>
                <ProjectCarousel/>

            </div>
            <div className='networking equalize'>
                <h1>네트워킹</h1>
                <p>세션, 강연 등 네트워킹 프로그램.</p>

        <div className='networkingBox'>
            {/* 네트워킹 자료들 파이어베이스로부터 받아오기 */}
            {networking.map((networking, idx)=>(
                <a href={networking.networkingLink} key={idx}>
                    <Fade bottom>
                        <div>
                            <div className='networkingImg'>
                            <img src={networking.networkingURL} alt={networking.networkingLink}/>
                            </div>  
                            <h1>{networking.title}</h1>
                          <p>{networking.subtitle}</p>
                        </div>
                    </Fade>
                </a>
            ))}
        </div>
    
            </div>
        </div>

    )


}

export default Program;

