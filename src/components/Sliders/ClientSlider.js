import React from 'react';
import Slider from "react-slick";
import { Link } from 'gatsby';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ClientSlider = (props) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const sliderItems = props.clients.client.map((item, key) => <div className="trusted-brand">
            <img src={ (!item.logo.childImageSharp && item.logo.extension === 'svg') ? item.logo.publicURL : item.logo.childImageSharp.fluid.src } alt=""/>
        </div>
    );
    return (
        <Slider {...settings} className="trusted-brand-container">

            { sliderItems }

        </Slider>
    );
} 

export default ClientSlider;