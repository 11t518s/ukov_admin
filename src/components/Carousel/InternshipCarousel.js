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


  

function InternshipCarousel(){

    let [internship, setInternship] = useState([])
    const getInternship = async () =>{
        const dbinternship = await dbService.collection("internship").get();
        dbinternship.forEach((document) => {
            const newinternship = {
                ...document.data(),
                id: document.id
            };
            setInternship((prev) => [newinternship, ...prev]);
        });
    };
    useEffect(()=>{
        getInternship();
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
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />
        };
        return (
          <div>
            <Slider {...settings}>
              {internship.map((internship)=>(
                  <div className='listBox'>
                      <a href={internship.internshipLink}>
                          <div className='smallBox'>
                            <img src={internship.internshipURL} alt='internship'/>
                          </div>
                          <h1>{internship.title}</h1>
                          <h2>{internship.subtitle}</h2>
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

export default InternshipCarousel;