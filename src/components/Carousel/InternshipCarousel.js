import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import '../../css/Carousel.css';
import {dbService} from '../../fbase.js'


// 인턴쉽 정보 파이어베이스로 가져오기
function InternshipCarousel(){
    let [internship, setInternship] = useState([])
    const getInternship = async () =>{
        const dbinternship = await dbService.collection("internship").orderBy("createdAt").get();
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

 // 이건 react-slick
class Slide extends React.Component {
    render() {
        const settings = {
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