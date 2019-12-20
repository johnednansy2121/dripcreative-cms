import React from "react"
import { Link } from 'gatsby'

const Services = (props) => {
    const serviceDetails = props.services;
    const services = serviceDetails.service;

    const featuredService = services.reduce((featuredService, item, index) => {
      if (index == 0) { // Whatever range condition you want
        featuredService.push(<Link to={ item.url } key={ index }>
            <div className="item large">
                <h3 className="title">{ item.name }</h3>
                <img src={ (!item.image.childImageSharp && item.image.extension === 'svg') ? item.image.publicURL : item.image.childImageSharp.fluid.src } alt=""/>
                <p>{ item.description }</p>
            </div>
        </Link>);
      }
      return featuredService;
    }, []);

    const sideServices = services.reduce((sideServices, item, index) => {
      if (index !== 0 && index < 3) { // Whatever range condition you want
        sideServices.push(<div className="col-sm-6 col-md-12" key={ index }>
            <Link to={ item.url }>
                <div className="item small">
                    <h3 className="title">{item.name}</h3>
                    <img src={ (!item.image.childImageSharp && item.image.extension === 'svg') ? item.image.publicURL : item.image.childImageSharp.fluid.src } alt=""/>
                    <p>{item.description}</p>
                </div>
            </Link>
        </div>);
      }
      return sideServices;
    }, []);

    const bottomServices = services.reduce((bottomServices, item, index) => {
      if (index > 2) { // Whatever range condition you want
        bottomServices.push(<div className="col-sm-12 col-md-6 col-lg-3" key={ index }>
            <Link to={ item.url }>
                <div className="item small">
                    <h3 className="title">{item.name}</h3>
                    <img src={ (!item.image.childImageSharp && item.image.extension === 'svg') ? item.image.publicURL : item.image.childImageSharp.fluid.src } alt=""/>
                    <p>{item.description}</p>
                </div>
            </Link>
        </div>);
      }
      return bottomServices;
    }, []);

    return <section className="business-needs">
        <div className="container">
            <div className="row">
                <div className="col-12 text-center section-header">
                    <h2 className="title" dangerouslySetInnerHTML={{__html:serviceDetails.headline}}></h2>
                    <div className="desc">{ serviceDetails.description }</div>
                </div>

                <div className="row w-100 m-auto">

                    <div className="col-sm-12 col-md-8">
                        
                        { featuredService }

                    </div>

                    <div className="col-sm-12 col-md-4">
                        <div className="row medium">

                            { sideServices }

                        </div>
                    </div>

                </div>

                <div className="row w-100 m-auto">
                    
                    { bottomServices }

                </div>
            </div>
        </div>
    </section>
}

export default Services