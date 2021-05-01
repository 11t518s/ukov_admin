import React, { Component } from "react";
import Slider from "react-slick";
import SBVA from './SBVA.png';
import '../css/Carousel.css';



class Carousel extends React.Component {
    render() {
        const settings = {
            arrows: true,
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1
        };
        return (
        <Slider {...settings}>
            <div>
                <img src={SBVA}></img>
            </div>
            <div>
            <h3>2</h3>
            </div>
            <div>
            <h3>3</h3>
            </div>
            <div>
            <h3>4</h3>
            </div>
            <div>
            <h3>5</h3>
            </div>
            <div>
            <h3>6</h3>
            </div>
        </Slider>
        );
    }
}

export default Carousel;