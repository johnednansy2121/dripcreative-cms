import { Link } from 'gatsby'
import React from "react"
import Sidenav from "./Sidenav"

const Navbar = class extends React.Component {
  constructor (props) {
    console.log('Navbar@constructor', props)
    super(props);

    this.logo = props.logo;
    this.menu = props.menu;

    this.state = {
      scroll: false,
      toggle: false,
      dropdowns: {
        services: false,
        case_study: false,
      }
    }

    this.openToggle = this.openToggle.bind(this);
    this.closeToggle = this.closeToggle.bind(this);
    this.servicesToggle = this.servicesToggle.bind(this);
    this.caseToggle = this.caseToggle.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
  }

  openToggle = () => {
    this.setState({ toggle: !this.state.toggle })
  }

  closeToggle = () => {
    this.setState({ toggle: false })
  }

  servicesToggle = () => {
    this.setState(prevState => ({
      dropdowns: {
        services: !prevState.dropdowns.services
      }
    }))
  }

  caseToggle = () => {
    this.setState(prevState => ({
      dropdowns: {
        case_study: !prevState.dropdowns.case_study
      }
    }))
  }

  handleScroll = () => {
    this.setState({ scroll: (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) });
  }

  render() {
    return (
      <>
        <div className={ `overlay ${this.state.toggle ? 'active' : ''}` }></div>
        <header className={ `header ${ this.state.scroll ? 'p-0 shadow' : '' }` }>
          <div className="container">
            <nav className="navbar navbar-light bg-transparent">
                <div className="menu-toggle" onClick={ this.openToggle }>
                  <span></span>
                </div>
                <div className="logo">
                  <Link to="/" className="navbar-item" title="Logo">
                    <img src={ (!this.logo.image.childImageSharp && this.logo.image.extension === 'svg') ? this.logo.image.publicURL : this.logo.image.childImageSharp.fluid.src } alt={ this.logo.alt } />
                  </Link>
                </div>
                <Link to="/contact" className="btn btn-black btn-glass">get in touch</Link>
            </nav>
          </div>
          <Sidenav
            isToggle = {this.state.toggle}
            closeToggle = { this.closeToggle }
            servicesToggle = { this.servicesToggle }
            caseToggle = { this.caseToggle }
            isServices = { this.state.dropdowns.services }
            isCase = { this.state.dropdowns.case_study }
            menu = { this.menu }
          />
        </header>
      </>
    )
  }
}

export default Navbar
