import React from 'react'

const Footer = class extends React.Component {
  constructor (props) {
    super(props);
    this.footer = props.footer;
  }

  render() {
    const socialLinks = this.footer.socialLinks.map((item, key) =>
        <a href={ item.linkURL } target="_blank" rel="noopener noreferrer" key={ key } >
            <i className={ item.icon }></i>
        </a>
    );

    return (
      <footer>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-lg-3">
                        <img className="footer-logo" src={ (!this.footer.logo.image.childImageSharp && this.footer.logo.image.extension === 'svg') ? this.footer.logo.image.publicURL : this.footer.logo.image.childImageSharp.fluid.src } alt={ this.footer.logo.alt } />
                        <p>{ this.footer.about }</p>
                    </div>
                    <div className="col-sm-12 col-lg-3 offset-lg-3">
                        <h2 className="block-title">Get In Touch</h2>
                        <p dangerouslySetInnerHTML={{__html: this.footer.getInTouch}}/>
                    </div>
                    <div className="col-sm-12 col-lg-3">
                        <h2 className="block-title">Follow Us</h2>
                        <p>Connect with us on Facebook and Instagram.</p>
                        <p>&nbsp;</p>
                        <div className="social">
                            { socialLinks }
                        </div>
                    </div>
                </div>
                <div className="site-year-info">
                    { this.footer.copyright }
                </div>
            </div>
        </footer>
    )
  }
}

export default Footer
