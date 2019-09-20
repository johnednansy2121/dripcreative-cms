import { Link } from 'gatsby'
import PropTypes from "prop-types"
import React from "react"
import logo from "../img/logo.svg"
import Sidenav from "./Sidenav"

const Navbar = class extends React.Component {
  constructor (props) {
    super(props);

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
                    <img src={logo} alt="DripCreative" />
                  </Link>
                </div>
                <a href="/" className="btn btn-black btn-glass">get in touch</a>
            </nav>
          </div>
          <Sidenav isToggle={this.state.toggle} closeToggle={ this.closeToggle } servicesToggle={ this.servicesToggle } caseToggle={ this.caseToggle } isServices={ this.state.dropdowns.services } isCase={ this.state.dropdowns.case_study } />
        </header>
      </>
    )
  }
}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
