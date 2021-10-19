import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { Col, Container, Row } from "react-bootstrap";
import "./footer.css";
class Footer extends Component {
    render() {
        return (
            <div className="footer-section">
                <Container>
                    <Row>
                        <Col className="mt-5">
                            <h1 className="footer-title text-center">
                                Fitness GYM Center.
                            </h1>
                            <div className="footer-icons">
                                <i class="fab fa-facebook-square"></i>
                                <i class="fab fa-youtube"></i>
                                <i class="fab fa-twitter"></i>
                            </div>
                        </Col>
                        <Col className="mt-2 mb-5">
                            <h3 className="quick-links text-center ">
                                Quick Links
                                <hr />
                            </h3>
                            <div className="all-links text-center">
                                <p className="lead">Pricing</p>
                                <p className="lead">About Us</p>
                                <p className="lead">Classes</p>
                                <p className="lead">Contact Us</p>
                                <p className="lead">Timetable</p>
                                <p className="lead">Terms & Conditions</p>
                            </div>
                        </Col>

                        <Col className="mt-5">
                            <h3 className="address-title">
                                1810 KINGS WAY KING STREET, 5TH AVENUE, NEW
                                YORK.
                            </h3>
                            <div className="address-icons">
                                <i class="fas fa-phone-alt">
                                    <span className="span-icons lead">
                                        1800-2355-2356
                                    </span>
                                </i>
                                <br />
                                <i class="far fa-envelope">
                                    <span className="span-address lead">
                                        contact@zythgym.com
                                    </span>
                                </i>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Footer;
