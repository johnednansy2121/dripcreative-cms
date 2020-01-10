import React from "react"
import ClientSlider from './Sliders/ClientSlider';

const Clients = (props) => {
    const clients = props.clients;
    
    return <section className="trusted-by curve">
        <div className="container">
            <div className="section-header">
                <h3 className="title">{clients.description}</h3>
            </div>

            <div className="section-content">
                <h2>{clients.headline}</h2>

                <ClientSlider
                    clients = { clients }
                />
            </div>
        </div>
    </section>
}

export default Clients