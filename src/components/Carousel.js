import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import '../css/Carousel.css';
import {dbService} from '../fbase.js'



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


  

function Carousel (){

    let [review, setReview] = useState([])
    const getReview = async () =>{
        const dbreview = await dbService.collection("review").get();
        dbreview.forEach((document) => {
            const newReview = {
                ...document.data(),
                id: document.id
            };
            setReview((prev) => [newReview, ...prev]);
        });
    };
    useEffect(()=>{
        getReview();
    }, [])


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
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />
        };
        return (
          <div>
            <Slider {...settings}>
              {review.map((review)=>(
                  <div className='listBox'>
                      <a href={review.reviewLink}>
                          <div className='smallBox'>
                            <img src={review.reviewURL}/>
                          </div>
                          <h1>{review.title}</h1>
                          <h2>{review.subtitle}</h2>
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

export default Carousel;