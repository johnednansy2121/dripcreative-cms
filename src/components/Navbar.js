import { Link } from 'gatsby'
import React from "react"
import Sidenav from "./Sidenav"

const Navbar = class extends React.Component {
  constructor (props) {
    super(props);

    this.logo = props.logo;
    this.menu = props.menu;

    this.state = {
      scroll: false,
      toggle: false,
      activeSubMenu: 0
    }

    this.openToggle = this.openToggle.bind(this);
    this.closeToggle = this.closeToggle.bind(this);
    this.subMenuToggle = this.subMenuToggle.bind(this);
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

  subMenuToggle(index, e) {
    let key = (index == this.state.activeSubMenu) ? 0 : index;
    this.setState({ activeSubMenu: key })
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
            activeSubMenu = {this.state.activeSubMenu}
            subMenuToggle = { this.subMenuToggle }
            menu = { this.menu }
          />
        </header>
      </>
    )
  }
}

export default Navbar
