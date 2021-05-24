import React from "react";

function Contact() {
    function ContactDOM(){
        return(
            <section className="page-section" id="contact">
                <div className="container">
                    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>
                    <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-xl-7">
                            <form>
                                <div className="form-floating">
                                    <input className="form-control" id="inputName" type="text"
                                           placeholder="Enter your name..."/>
                                    <label htmlFor="inputName">Name</label>
                                </div>
                                <div className="form-floating">
                                    <input className="form-control" id="inputEmail" type="email"
                                           placeholder="Enter your email..."/>
                                    <label htmlFor="inputEmail">Email address</label>
                                </div>
                                <div className="form-floating">
                                    <input className="form-control" id="inputPhone" type="tel"
                                           placeholder="Enter your phone number..."/>
                                    <label htmlFor="inputPhone">Phone Number</label>
                                </div>
                                <div className="form-floating">
                                    <textarea className="form-control" id="inputMessage"
                                              placeholder="Enter your message here..." /*style="height: 12rem"*/></textarea>
                                    <label htmlFor="inputMessage">Message</label>
                                </div>
                                <br/>
                                <button className="btn btn-primary btn-xl" type="submit">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
    return(
        <>
            { ContactDOM() }
        </>
    );
}

export default Contact;