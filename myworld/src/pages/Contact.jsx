import React from "react";
import Button from 'react-bootstrap/Button';
import "./css/contactForm.css";



function Contact(){
    return(
      <div>
        <div className="global-form-siri">
          <section className="ftco-section">
            <div className="container container-siri">
              <div className="row justify-content-center">
                <div className="col-md-12">
                  <div className="wrapper">
                    <div className="row no-gutters mb-1">
                      <div className="col-md-7">
                        <div className="contact-wrap w-100 p-md-5 p-4 contact-form-siri">
                          <h3 className="mb-4">Contact Us</h3>
                          <form method="POST" id="contactForm" name="contactForm" className="contactForm">
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label className="label label-siri" htmlFor="name">Full Name</label>
                                  <input type="text" className="form-control input-style-siri" name="name" id="name" placeholder="Name" />
                                </div>
                              </div>
                              <div className="col-md-6"> 
                                <div className="form-group">
                                  <label className="label label-siri" htmlFor="email">Email Address</label>
                                  <input type="email" className="form-control input-style-siri" name="email" id="email" placeholder="Email" />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-group">
                                  <label className="label label-siri" htmlFor="subject">Subject</label>
                                  <input type="text" className="form-control input-style-siri" name="subject" id="subject" placeholder="Subject" />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-group">
                                  <label className="label label-siri" htmlFor="#">Message</label>
                                  <textarea name="message" className="form-control input-style-siri" id="message" cols="30" rows="4" placeholder="Message"></textarea>
                                </div>
                              </div>
                              <div className="col-md-12 send-msg-siri">
                                <div className="form-group">
                                  <Button variant="primary">Send Message</Button>
                                  {/* <input type="submit" value="Send Message" className="btn btn-primary" />
                                  <div className="submitting"></div> */}
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div className="col-md-5 d-flex align-items-stretch map-holder-siri">
                        <div className="map">
                          <iframe title="office-location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3437.1751349614747!2d76.65758911500572!3d30.516086481713202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fc32344a6e2d7%3A0x81b346dee91799ca!2sChitkara%20University!5e0!3m2!1sen!2sin!4v1665320976987!5m2!1sen!2sin" width="600" height="450" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3">
                        <div className="dbox w-100 text-center">
                          <div className="icon d-flex align-items-center justify-content-center">
                            <span className="fa fa-map-marker"><img className="contact-icons-siri" src="https://img.icons8.com/ios/50/FF00FF/address--v1.png" alt="location icon" /></span>
                          </div>
                          <div className="text">
                            <p><span>Address:</span> Chitkara University, Rajpura, Punjab, PIN: 160069</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="dbox w-100 text-center">
                          <div className="icon d-flex align-items-center justify-content-center">
                            <span className="fa fa-phone"><img className="contact-icons-siri" src="https://img.icons8.com/ios-filled/50/FF00FF/ringer-volume.png" alt="phone icon" /></span>
                          </div>
                          <div className="text">
                            <p><span>Phone:</span>+ 1235 2355 98</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="dbox w-100 text-center">
                          <div className="icon d-flex align-items-center justify-content-center">
                            <span className="fa fa-paper-plane"><img className="contact-icons-siri" src="https://img.icons8.com/ios/50/FF00FF/circled-envelope.png" alt="email icon" /></span>
                          </div>
                          <div className="text">
                            <p><span>Email:</span> <a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="dbox w-100 text-center">
                          <div className="icon d-flex align-items-center justify-content-center">
                            <span className="fa fa-globe"><img className="contact-icons-siri" src="https://img.icons8.com/ios/50/FF00FF/domain.png" alt="globe icon" /></span>
                          </div>
                          <div className="text">
                            <p><span>Website</span> <a href="chitaka.edu.in">yoursite.com</a></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
}

export default Contact;