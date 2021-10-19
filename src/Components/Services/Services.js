import React from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import "./services.css";
import Footer from "../Footer/Footer";
import ClassImage1 from "../../class-img1.jpg";
import ClassImage2 from "../../class-img2.jpg";
import ClassImage3 from "../../class-img3.jpg";
const Services = () => {
    return (
        <div>
            {/* start classes container */}
            <Container fluid className="classes-container">
                <p className="lead">Explore Our Session</p>
                <h1 className="classes-title">Fitness GYM Classes</h1>
            </Container>
            {/* end classes container */}

            {/* start classes second container */}

            <Container fluid className="classes-card-container">
                <Row>
                    <Col>
                        <div className="card mt-5" style={{ width: "18rem" }}>
                            <img
                                src={ClassImage1}
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title">Cardio Support</h5>

                                <a href="#" className="btn btn-primary">
                                    Know More
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="card mt-5" style={{ width: "18rem" }}>
                            <img
                                src={ClassImage2}
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title">
                                    Fit & Hit Support
                                </h5>

                                <a href="#" className="btn btn-primary">
                                    Know More
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="card mt-5" style={{ width: "18rem" }}>
                            <img
                                src={ClassImage3}
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title">
                                    Mind & Body Refreshment Support
                                </h5>

                                <a href="#" className="btn btn-primary">
                                    Know More
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            {/*  */}

            {/* end classes second container */}
            <Footer></Footer>
        </div>
    );
};

export default Services;
