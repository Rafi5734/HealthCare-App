import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import "./about.css";
import Footer from "../Footer/Footer";
const About = () => {
    return (
        <Container fluid>
            <div>
                <Container fluid className="about mb-5">
                    <h1 className="about-title">ABOUT US</h1>
                    <p className="about-para lead">The Story About Us</p>
                </Container>
            </div>

            <Container fluid className="about-2 mt-5 mb-5">
                <Container>
                    <Row>
                        <Col className="order-0">
                            <h1 className="about-title-2">
                                WE HELP ENHANCE YOUR WORKOUT
                            </h1>
                        </Col>
                        <Col className="order-1">
                            <p className="text-center lead">
                                As a multi-faceted fitness and health company
                                which is encompassed by the talents of many
                                diversely skilled professionals, we have sought
                                to establish a set of mutually agreed core
                                values to help underpin the success of our
                                overall mission and ensuing philosophy. It is
                                these values which every new client will see
                                come to life when their training journey begins,
                                as they drive us as trainers each day to achieve
                                the positive results that everyone we work with
                                desires.
                            </p>
                        </Col>
                    </Row>
                </Container>

                <Container fluid className="mt-5 mb-5">
                    <Container>
                        <Row>
                            <Col>
                                <h1 className="philosophy-title">
                                    Our Philosophy
                                </h1>
                                <p className="lead">
                                    as a multi-faceted fitness and health
                                    company which is encompassed by the talents
                                    of many diversely skilled professionals, we
                                    have sought to. it is these values which
                                    every new client will see come to life when
                                    their training journey begins, as they drive
                                    us as trainers each day to achieve the
                                    positive results that everyone.
                                </p>
                                <Button
                                    variant="outline-secondary"
                                    className="mb-4"
                                >
                                    Join Now
                                </Button>{" "}
                            </Col>
                            <Col>
                                <video width="320" height="240" controls>
                                    <source
                                        src="https://www.youtube.com/watch?v=TPYVkZg4pFk"
                                        type="video/mp4"
                                    />
                                </video>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </Container>
            <Footer></Footer>
        </Container>
    );
};

export default About;
