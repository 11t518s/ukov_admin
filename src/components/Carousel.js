import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import '../css/Carousel.css';
import {dbService} from '../fbase.js'

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#D3D3D3", borderRadius:"100px" }}
        onClick={onClick}
      />
    );
  }
  
  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#D3D3D3", borderRadius:"100px" }}
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
          //이것도 반응형으로 해야겠다 위에있는거!
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

                            <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
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