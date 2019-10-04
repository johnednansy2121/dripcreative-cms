import React from 'react'

const Footer = class extends React.Component {
  constructor (props) {
    super(props);
    this.footer = props.footer;
  }

  render() {
    return (
      <footer>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-lg-3">
                        <img className="footer-logo" src="https://dc19.dripdev.com/wp-content/themes/dc/assets/images/square-logo-dc-2.png" alt="" />
                        <p>{ this.footer.about }</p>
                    </div>
                    <div className="col-sm-12 col-lg-3 offset-lg-3">
                        <h2 className="block-title">Get In Touch</h2>
                        <p><a href="mailto:hello@dripcreative.com">hello@dripcreative.com</a></p> <br />
                        <p>Level 3, 1 Buckingham Street<br />
                            Surry Hills<br />
                            New South Wales, Australia
                        </p>
                    </div>
                    <div className="col-sm-12 col-lg-3">
                        <h2 className="block-title">Follow Us</h2>
                        <p>Connect with us on Facebook and Instagram.</p>
                        <p>&nbsp;</p>
                        <div className="social">
                            <a href="https://www.facebook.com/dripcreative/" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-facebook-f"></i>
                            </a>
                            <a href="https://instagram.com/dripcreative/" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-instagram"></i>
                            </a>
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
