import React from "react"
import { Link } from 'gatsby'

const Sidenav = (props) => {
    console.log('Sidenav@props');
   
    const menuItems = props.menu.map((item, key) =>
        <li className="menu-item" key={key}><Link to={item.url}>{item.name}</Link></li>
    );

    return <nav className={ `sidenav ${props.isToggle ? 'open' : ''}` }>
        <div className="side-container">
            <ul className="menu">
                <li className="menu-item">
                    <Link to="/" aria-current="page">Home</Link>
                </li>
                <li className={ `menu-item menu-sub ${props.isServices ? 'active' : ''}` }>
                    <Link to="/services/website-design-development/">Services</Link>
                    <ul className="sub-menu">
                        <li className="menu-item"><Link to="/services/website-design-development">Website Design & Development</Link></li>
                        <li className="menu-item"><Link to="/services/app-design-development">App Design & Development</Link></li>
                        <li className="menu-item"><Link to="/services/support-solutions">Support Solutions</Link></li>
                        <li className="menu-item"><Link to="/services/automation">Automation</Link></li>
                        <li className="menu-item"><Link to="/services/integrations">Integrations</Link></li>
                        <li className="menu-item"><Link to="/services/onboarding-strategy">Onboarding Strategy</Link></li>
                        <li className="menu-item"><Link to="/services/outsourcing">Outsourcing</Link></li>
                    </ul>
                    <span className="menu-toggle-sub" onClick={ props.servicesToggle }>{ props.isServices ? '-' : '+' }</span>
                </li>
               {menuItems}
            </ul>
        </div>
        <div className="menu-toggle toggle-close" onClick={ props.closeToggle }><span></span></div>
    </nav>
}

export default Sidenav