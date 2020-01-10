import React, { Component } from "react"

class Insights extends Component {
    constructor (props) {
        super();
        this.state = {
            focus: false
        }

        this.onFocus = this.onFocus.bind(this);
    }

    onFocus = () => {
        this.setState({focus: true})
    }

    getClass = () => {
        if(this.state.focus === true)
            return "active";
        else
            return "";
    }
    
    render () {
        var inputClass = this.getClass();
        return <section className="section-contact section-padding">
                    <div className="container">
                        <div className="section-content">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="section-header">
                                        <h2 className="title"><span className="highlight">Receive Discounts &amp;</span> Get insights</h2>
                                        <p className="desc">Sign up for our newsletter to receive discounts on future spend with us and stay informed with industry news.</p>
                                    </div>
                                    <form action="" method="post" className="form" noValidate="novalidate">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="group">
                                                    <span className={ `form-control-wrap ${inputClass}` }>
                                                        <input type="text" name="name" value="" size="40" className="form-control" onFocus={this.onFocus} />
                                                    </span>
                                                    <label>Your name</label>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="group">
                                                    <span className={ `form-control-wrap ${inputClass}` }>
                                                        <input type="email" name="email" value="" size="40" className="form-control" onFocus={this.onFocus} />
                                                    </span>
                                                    <label>Your email address</label>
                                                </div>
                                            </div>
                                        </div>
                                        <p>
                                            <button type="submit" className="btn btn-gray btn-glass">Submit</button>
                                        </p>
                                    </form>
                                </div>

                                <div className="col-md-5 offset-1">
                                    <br/>
                                    <br/>
                                    <br/>
                                    <img src="https://dc19.dripdev.com/wp-content/themes/dc/assets/images/contact.svg" alt="contact-us" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
    }
}

export default Insights