import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import '../../css/Carousel.css';
import {dbService} from '../../fbase.js'


// 프로젝트 정보 firebase로 부터 받아오기
function ProjectCarousel(){

    let [project, setProject] = useState([])
    const getProject = async () =>{
        const dbproject = await dbService.collection("project").get();
        dbproject.forEach((document) => {
            const newproject = {
                ...document.data(),
                id: document.id
            };
            setProject((prev) => [newproject, ...prev]);
        });
    };
    useEffect(()=>{
        getProject();
    }, [])


class Slide extends React.Component {
    render() {
        const settings = {
          className: "center",
          dots: true,
          infinite: true,
          centerPadding: "60px",
          slidesToShow: 3,
          responsive: [ 
            { breakpoint: 1000, settings: { slidesToShow: 2 }}, 
            { breakpoint: 600, settings: { slidesToShow: 1 }}],
          speed: 500,
        };
        return (
          <div>
            <Slider {...settings}>
              {project.map((project)=>(
                  <div className='listBox'>
                      <a href={project.projectLink}>
                          <div className='smallBox'>
                            <img src={project.projectURL} alt='project'/>
                          </div>
                          <h1>{project.title}</h1>
                          <h2>{project.subtitle}</h2>
                      </a>
                  </div>
              ))}

            </Slider>
          </div>
        );
      }
    }
    return (
        <>
        <Slide/>
        </>
    )
}

export default ProjectCarousel;