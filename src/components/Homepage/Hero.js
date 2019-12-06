import React from "react"
import { Link } from 'gatsby'

const Hero = (props) => {
    const hero = props.hero;

    return <section className="hero curve">
        <div className="container">
            <div className="section-content d-flex align-items-center">
                <div className="hero-content">
                    <h2 className="hero-title" dangerouslySetInnerHTML={{__html:hero.headline}}></h2>
                    <p className="desc">{ hero.description }</p>
                    <Link to={ hero.buttonLink } className="hide-992 btn btn-small btn-black btn-glass icon-arrow">{ hero.button } <img src="https://dc19.dripdev.com/wp-content/themes/dc/assets/images/arrow-blue.svg" alt="" /></Link>
                </div>
                <div className="hero-image">
                    <img src={ (!hero.image.childImageSharp && hero.image.extension === 'svg') ? hero.image.publicURL : hero.image.childImageSharp.fluid.src } alt="" />
                </div>
            </div>
        </div>
    </section>
}

export default Hero
