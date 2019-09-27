import React from "react"

const Sidenav = (props) => {
    return <nav className={ `sidenav ${props.isToggle ? 'open' : ''}` }>
                <div className="side-container">
                    <ul className="menu">
                        <li className="menu-item">
                            <a href="/" aria-current="page">Home</a>
                        </li>
                        <li className={ `menu-item menu-sub ${props.isServices ? 'active' : ''}` }>
                            <a href="/services/website-design-development/">Services</a>
                            <ul className="sub-menu">
                                <li className="menu-item"><a href="/services/website-design-development">Website Design & Development</a></li>
                                <li className="menu-item"><a href="/services/app-design-development">App Design & Development</a></li>
                                <li className="menu-item"><a href="/services/support-solutions">Support Solutions</a></li>
                                <li className="menu-item"><a href="/services/automation">Automation</a></li>
                                <li className="menu-item"><a href="/services/integrations">Integrations</a></li>
                                <li className="menu-item"><a href="/services/onboarding-strategy">Onboarding Strategy</a></li>
                                <li className="menu-item"><a href="/services/outsourcing">Outsourcing</a></li>
                            </ul>
                            <span className="menu-toggle-sub" onClick={ props.servicesToggle }>{ props.isServices ? '-' : '+' }</span>
                        </li>
                        {/* <li className="menu-item"><a href="/">Services</a></li> */}
                        <li className={ `menu-item menu-sub ${props.isCase ? 'active' : ''}` }>
                            <a href="/">Case Study</a>
                            <ul className="sub-menu">
                                <li className="menu-item"><a href="/case-study/attender">Attender</a></li>
                                <li className="menu-item"><a href="/case-study/wedbooker">Wedbooker</a></li>
                            </ul>
                            <span className="menu-toggle-sub" onClick={ props.caseToggle }>{ props.isCase ? '-' : '+' }</span>
                        </li>
                        <li className="menu-item"><a href="/contact">contact us</a></li>
                    </ul>
                </div>
                <div className="menu-toggle toggle-close" onClick={ props.closeToggle }><span></span></div>
            </nav>
}

export default Sidenav