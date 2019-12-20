import React, { Component } from 'react';
import Slider from "react-slick";
import { Link } from 'gatsby';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function PrevArrow(props) {
    const { onClick } = props;
    return (
        <div 
            className="projects-arrow slide-prev"
            onClick={onClick}
        >
            <i className="fa fa-angle-left"></i>
        </div>
    );
}

function NextArrow(props) {
    const { onClick } = props;
    return (
        <div 
            className="projects-arrow slide-next"
            onClick={onClick}
        >
            <i className="fa fa-angle-right"></i>
        </div>
    );
}

class ProjectSlider extends Component {
    render () {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 3000,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />
        };

        const sliderItems = props.menu.map((item, key) => <div className="slide-item">
                <div className="slide">
                    <div className="thumb">
                        <img src={ (!item.image.childImageSharp && item.image.extension === 'svg') ? item.image.publicURL : item.image.childImageSharp.fluid.src } alt=""/>
                    </div>
                    <div className="info">
                        <img src={ (!item.logo.childImageSharp && item.logo.extension === 'svg') ? item.logo.publicURL : item.logo.childImageSharp.fluid.src } className="logo" alt=""/>
                        <p className="desc">{ item.description }</p>
                        <Link to="/case-study/wedbooker/" className="icon-arrow arrow-white btn btn-white btn-glass">
                            { item.button } <img className="btn-more" src="https://dc19.dripdev.com/wp-content/themes/dc/assets/images/arrow-white.svg" alt="" />
                        </Link>
                    </div>
                </div>
            </div>
        );

        return (
            <Slider {...settings} className="projectSlider">

                { sliderItems }
                
            </Slider>
        );
    }
} 

export default ProjectSlider;