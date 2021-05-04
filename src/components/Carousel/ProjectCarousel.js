import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import '../../css/Carousel.css';
import {dbService} from '../../fbase.js'



function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, background: "#D3D3D3", borderRadius:"100px" }}
        onClick={onClick}
      />
    );
  }
  
  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, ackground: "#D3D3D3", borderRadius:"100px" }}
        onClick={onClick}
      />
    );
  }


  

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
          // nextArrow: <NextArrow />,
          // prevArrow: <PrevArrow />
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